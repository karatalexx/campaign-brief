import {
  badRequestResponse,
  errorResponse,
  notFoundResponse,
  successResponse,
} from "@/api/utils";
import prisma from "@/lib/prisma";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const numericId = Number(id);

    if (!Number.isFinite(numericId)) {
      return badRequestResponse("Invalid id");
    }

    const campaign = await prisma.campaign.findUnique({
      where: { id: numericId },
    });

    if (!campaign) {
      return notFoundResponse("Campaign not found");
    }

    const creatives = await prisma.creative.findMany({
      where: { campaignId: numericId },
      include: {
        headline: true,
        image: true,
      },
    });

    return successResponse(
      creatives.map((creative) => ({
        id: creative.id,
        headline: creative.headline,
        image: creative.image,
      })),
    );
  } catch (error) {
    console.error("Error getting creatives:", error);
    const message =
      error instanceof Error ? error.message : "Unexpected exception";
    return errorResponse(message);
  }
}
