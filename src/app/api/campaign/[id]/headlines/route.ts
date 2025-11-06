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
  const { id } = await context.params;

  if (!id || typeof id !== "string") {
    return badRequestResponse("Invalid id");
  }

  try {
    const numericId = Number(id);
    if (!Number.isFinite(numericId)) {
      return badRequestResponse("Invalid id");
    }

    const campaign = await prisma.campaign.findUnique({
      where: { id: numericId },
      include: {
        headlines: true,
      },
    });

    if (!campaign) {
      return notFoundResponse("Campaign not found");
    }

    return successResponse(campaign.headlines);
  } catch (error) {
    console.error("Error getting headlines:", error);
    const message =
      error instanceof Error ? error.message : "Unexpected exception";
    return errorResponse(message);
  }
}
