import OpenAI from "openai";
import { buildHeadlinesPrompt } from "@/api/ai";
import { generateHeadlineSchema } from "@/api/schemas";
import {
  badRequestResponse,
  errorResponse,
  notFoundResponse,
  successResponse,
} from "@/api/utils";
import { GenerationStatus } from "@/generated/prisma/enums";
import prisma from "@/lib/prisma";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = generateHeadlineSchema.parse(body);

    const campaign = await prisma.campaign.findUnique({
      where: { id: data.campaignId },
    });

    if (!campaign) {
      return notFoundResponse("Campaign not found");
    }

    // Build exclusion list from request and existing headlines to avoid duplicates
    const existingCompleted = await prisma.headline.findMany({
      where: { campaignId: campaign.id, status: GenerationStatus.COMPLETED },
      select: { text: true },
      orderBy: { id: "asc" },
    });
    const excludeList = existingCompleted
      .map((h) => h.text)
      .filter((t): t is string => Boolean(t));

    // Create headline records with PENDING status before generation
    const savedHeadlines = await Promise.all(
      Array.from({ length: data.count }, () =>
        prisma.headline.create({
          data: {
            campaignId: campaign.id,
            status: GenerationStatus.PENDING,
          },
        }),
      ),
    );

    const headlineIds = savedHeadlines.map((h) => h.id);

    try {
      const prompt = buildHeadlinesPrompt(data, excludeList);

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a professional copywriter specializing in the German market. You create concise, action-oriented, and benefit-focused headlines in German language. Always respond with valid JSON only.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0,
        max_tokens: 500,
        response_format: { type: "json_object" },
      });

      const content = completion.choices[0]?.message?.content;
      if (!content) {
        throw new Error("No response from OpenAI");
      }

      let parsedResponse: { headlines: Array<{ id: number; text: string }> };
      try {
        parsedResponse = JSON.parse(content);
      } catch {
        throw new Error("Invalid JSON response from OpenAI");
      }

      if (
        !parsedResponse.headlines ||
        !Array.isArray(parsedResponse.headlines)
      ) {
        throw new Error("Invalid response structure from OpenAI");
      }

      // Normalize the text to remove accents and special characters
      function normalize(s: string): string {
        return s
          .toLowerCase()
          .normalize("NFKD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9\s]/g, " ")
          .replace(/\s+/g, " ")
          .trim();
      }

      const excludeNormalized = new Set(excludeList.map((t) => normalize(t)));
      const seen = new Set<string>();

      const generatedHeadlines = parsedResponse.headlines
        .filter(
          (h: { id?: number; text?: string }) =>
            h.text && typeof h.text === "string",
        )
        .map((h: { id?: number; text: string }) => h.text.trim())
        .filter((text: string) => {
          const n = normalize(text);
          if (excludeNormalized.has(n) || seen.has(n)) return false;
          seen.add(n);
          return true;
        })
        .slice(0, data.count)
        .map((text: string) => ({ text }));

      if (generatedHeadlines.length === 0) {
        throw new Error("No headlines generated");
      }

      // Update headlines with COMPLETED status and text
      await Promise.all(
        savedHeadlines.map((headline, index) => {
          const generatedText = generatedHeadlines[index]?.text;
          return prisma.headline.update({
            where: { id: headline.id },
            data: {
              text: generatedText || null,
              status: generatedText
                ? GenerationStatus.COMPLETED
                : GenerationStatus.FAILED,
            },
          });
        }),
      );

      // Return the updated headlines
      const updatedHeadlines = await prisma.headline.findMany({
        where: { id: { in: headlineIds } },
        orderBy: { id: "asc" },
      });

      return successResponse({
        headlines: updatedHeadlines.map((h) => ({
          id: h.id,
          text: h.text,
        })),
      });
    } catch (generationError) {
      // Mark all PENDING headlines as FAILED
      await prisma.headline.updateMany({
        where: {
          id: { in: headlineIds },
          status: GenerationStatus.PENDING,
        },
        data: {
          status: GenerationStatus.FAILED,
        },
      });

      // Re-throw to be handled by outer catch
      throw generationError;
    }
  } catch (error) {
    console.error("Error generating headlines:", error);

    if (error instanceof Error && error.message.includes("parse")) {
      return badRequestResponse("Invalid request data");
    }

    if (
      error instanceof Error &&
      error.message.includes("Campaign not found")
    ) {
      return notFoundResponse("Campaign not found");
    }

    if (error instanceof Error && error.message.includes("JSON")) {
      return errorResponse("Failed to parse AI response");
    }

    const message =
      error instanceof Error ? error.message : "Unexpected exception";

    return Response.json({ success: false, error: message }, { status: 500 });
  }
}
