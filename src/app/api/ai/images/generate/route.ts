import OpenAI from "openai";
import { buildImagePrompt } from "@/api/ai";
import { generateImageSchema } from "@/api/schemas";
import {
  badRequestResponse,
  errorResponse,
  notFoundResponse,
  successResponse,
} from "@/api/utils";
import { GenerationStatus, type Tone } from "@/generated/prisma/enums";
import prisma from "@/lib/prisma";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = generateImageSchema.parse(body);

    // Fetch campaign if context is not provided
    let name: string;
    let industry: string;
    let targetAudience: string;
    let tone: Tone;
    let description: string | null | undefined;

    if (data.context) {
      name = data.context.name;
      industry = data.context.industry;
      targetAudience = data.context.audience;
      tone = data.context.tone;
      description = data.context.description;
    } else {
      const campaign = await prisma.campaign.findUnique({
        where: { id: data.campaignId },
      });

      if (!campaign) {
        return notFoundResponse("Campaign not found");
      }

      name = campaign.name;
      industry = campaign.industry;
      targetAudience = campaign.targetAudience;
      tone = campaign.tone;
      description = campaign.description;
    }

    // Create image records with PENDING status before generation
    const savedImages = await Promise.all(
      Array.from({ length: data.count }, () =>
        prisma.image.create({
          data: {
            campaignId: data.campaignId,
            status: GenerationStatus.PENDING,
          },
        }),
      ),
    );

    const imageIds = savedImages.map((img: { id: number }) => img.id);

    try {
      // Build prompt for image generation
      const prompt = buildImagePrompt({
        context: {
          name,
          industry,
          audience: targetAudience,
          tone,
          description,
        },
      });

      // Generate images using OpenAI gpt-image-1
      // Note: gpt-image-1 only supports n=1, so we make multiple requests
      const imagePromises = Array.from({ length: data.count }, () =>
        openai.images.generate({
          model: "gpt-image-1",
          prompt,
        }),
      );

      const imageResults = await Promise.all(imagePromises);

      // Update images with COMPLETED status and URLs
      const updatePromises = savedImages.map(
        async (image: { id: number }, index: number) => {
          const result = imageResults[index];
          const imageUrl = result?.data?.[0]?.url;

          if (!imageUrl) {
            return prisma.image.update({
              where: { id: image.id },
              data: {
                status: GenerationStatus.FAILED,
              },
            });
          }

          return prisma.image.update({
            where: { id: image.id },
            data: {
              url: imageUrl,
              prompt,
              status: GenerationStatus.COMPLETED,
            },
          });
        },
      );

      await Promise.all(updatePromises);

      // Return the updated images
      const updatedImages = await prisma.image.findMany({
        where: { id: { in: imageIds } },
        orderBy: { id: "asc" },
      });

      return successResponse(
        updatedImages
          .filter((img) => img.status === GenerationStatus.COMPLETED && img.url)
          .map((img) => ({
            id: String(img.id),
            imageUrl: img.url,
            prompt: img.prompt || prompt,
          })),
      );
    } catch (generationError) {
      // Mark all PENDING images as FAILED
      await prisma.image.updateMany({
        where: {
          id: { in: imageIds },
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
    console.error("Error generating images:", error);

    if (error instanceof Error && error.message.includes("parse")) {
      return badRequestResponse("Invalid request data");
    }

    if (
      error instanceof Error &&
      error.message.includes("Campaign not found")
    ) {
      return notFoundResponse("Campaign not found");
    }

    const message =
      error instanceof Error ? error.message : "Unexpected exception";

    return errorResponse(message);
  }
}
