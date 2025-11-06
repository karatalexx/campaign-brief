import type { GenerateHeadlineData, GenerateImageData } from "@/api/types";
import { Tone } from "@/generated/prisma/enums";

export function formatToneForPrompt(tone: Tone): string {
  const toneMap: Record<Tone, string> = {
    [Tone.PROFESSIONAL]: "professional",
    [Tone.CASUAL]: "casual and relaxed",
    [Tone.EXCITING]: "exciting and energetic",
    [Tone.TRUSTWORTHY]: "trustworthy and credible",
  };
  return toneMap[tone] || "professional";
}

export function buildHeadlinesPrompt(
  data: GenerateHeadlineData,
  excludeList: string[],
): string {
  const { industry, audience, tone, description } = data.context;
  const toneEnglish = formatToneForPrompt(tone);
  const descriptionPart = description
    ? ` Additional context: ${description}`
    : "";

  return `You are an experienced copywriter specializing in the German market. Create ${data.count} compelling marketing headlines for a campaign.
  
      Requirements:
      - Industry: ${industry}
      - Target audience: ${audience}
      - Tone: ${toneEnglish}${descriptionPart}
      - Each headline must be between 8 and 15 words long
      - Headlines must be action-oriented (include a clear call-to-action)
      - Headlines must be benefit-focused (highlight benefits for the target audience)
      - Headlines must be written in German language
      - Headlines must be optimized for the German market
  
      Avoid any duplication or close paraphrases of the following existing headlines. Do not return anything too similar to them:
      ${excludeList.length > 0 ? excludeList.map((h) => `- ${h}`).join("\n    ") : "- (none)"}
  
      Return the headlines as a JSON object with the following structure:
      {
          "headlines": [
              { "id": 1, "text": "First German headline here" },
              { "id": 2, "text": "Second German headline here" }
          ]
      }
  
      Return only valid JSON, no additional text or explanations.`;
}

export function buildImagePrompt(
  data: Required<Pick<GenerateImageData, "context">>,
): string {
  const { industry, audience, tone, description } = data.context;
  const toneEnglish = formatToneForPrompt(tone);
  const descriptionPart = description
    ? ` Additional context: ${description}`
    : "";

  return `Create a professional, brand-safe marketing image for a campaign.
  
      Campaign details:
      - Industry: ${industry}
      - Target audience: ${audience}
      - Tone: ${toneEnglish}${descriptionPart}
  
      Requirements:
      - 16:9 aspect ratio
      - Professional and brand-safe imagery
      - Suitable for marketing and advertising use
      - Visually appealing and on-brand
      - No text overlays or watermarks
      - High quality, modern design aesthetic
      - Appropriate for the ${industry} industry targeting ${audience}
      `;
}
