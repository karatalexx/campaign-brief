import {
  badRequestResponse,
  errorResponse,
  notFoundResponse,
  successResponse,
} from "@/api/utils";
import prisma from "@/lib/prisma";

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const numericId = Number(id);

    if (!Number.isFinite(numericId)) {
      return badRequestResponse("Invalid id");
    }

    const headline = await prisma.headline.findUnique({
      where: { id: numericId },
    });

    if (!headline) {
      return notFoundResponse("Headline not found");
    }

    await prisma.headline.delete({
      where: { id: numericId },
    });

    return successResponse(headline);
  } catch (error) {
    console.error("Error deleting headline:", error);
    const message =
      error instanceof Error ? error.message : "Unexpected exception";

    return errorResponse(message);
  }
}
