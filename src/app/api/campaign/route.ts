import { createCampaignSchema } from "@/api/schemas";
import { errorResponse, successResponse } from "@/api/utils";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const data = createCampaignSchema.parse(body);

    const campaign = await prisma.campaign.create({
      data: {
        name: data.name,
        industry: data.industry,
        targetAudience: data.targetAudience,
        tone: data.tone,
        description: data.description,
      },
    });

    return successResponse(campaign, 201);
  } catch (error) {
    console.error("Error creating campaign:", error);
    const message =
      error instanceof Error ? error.message : "Unexpected exception";

    return errorResponse(message);
  }
}

export async function GET() {
  try {
    const campaigns = await prisma.campaign.findMany();
    return successResponse(campaigns);
  } catch (error) {
    console.error("Error getting campaigns:", error);
    const message =
      error instanceof Error ? error.message : "Unexpected exception";
    return errorResponse(message);
  }
}
