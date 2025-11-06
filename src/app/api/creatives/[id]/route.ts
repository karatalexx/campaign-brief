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

    const creative = await prisma.creative.findUnique({
      where: { id: numericId },
    });

    if (!creative) {
      return notFoundResponse("Creative not found");
    }

    await prisma.creative.delete({
      where: { id: numericId },
    });

    return successResponse(creative);
  } catch (error) {
    console.error("Error deleting creative:", error);
    const message =
      error instanceof Error ? error.message : "Unexpected exception";
    return errorResponse(message);
  }
}
