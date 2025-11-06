import { createCreativeSchema } from "@/api/schemas";
import {
  badRequestResponse,
  errorResponse,
  notFoundResponse,
  successResponse,
} from "@/api/utils";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { campaignId, headlineId, imageId } = createCreativeSchema.parse({
      campaignId: Number(body.campaignId),
      headlineId: Number(body.headlineId),
      imageId: Number(body.imageId),
    });

    // Ensure referenced records exist and belong to the same campaign
    const [campaign, headline, image] = await Promise.all([
      prisma.campaign.findUnique({ where: { id: campaignId } }),
      prisma.headline.findUnique({ where: { id: headlineId } }),
      prisma.image.findUnique({ where: { id: imageId } }),
    ]);

    if (!campaign) {
      return notFoundResponse("Campaign not found");
    }

    if (!headline) {
      return notFoundResponse("Headline not found");
    }

    if (!image) {
      return notFoundResponse("Image not found");
    }

    if (
      headline.campaignId !== campaign.id ||
      image.campaignId !== campaign.id
    ) {
      return badRequestResponse(
        "Headline and Image must belong to the Campaign",
      );
    }

    // Validate if pair already exists
    const existing = await prisma.creative.findFirst({
      where: {
        campaignId: campaignId,
        headlineId: headlineId,
        imageId: imageId,
      },
    });

    if (existing) {
      return badRequestResponse("Creative already exists");
    }

    const creative = await prisma.creative.create({
      data: {
        campaignId: campaignId,
        headlineId: headlineId,
        imageId: imageId,
      },
    });

    return successResponse(creative, 201);
  } catch (error) {
    console.error("Error creating creative:", error);
    const message =
      error instanceof Error ? error.message : "Unexpected exception";
    return errorResponse(message);
  }
}
