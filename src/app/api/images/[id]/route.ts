import { errorResponse, notFoundResponse, successResponse } from "@/api/utils";
import prisma from "@/lib/prisma";

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const numericId = Number(id);

    const image = await prisma.image.findUnique({
      where: { id: numericId },
    });

    if (!image) {
      return notFoundResponse("Image not found");
    }

    await prisma.image.delete({
      where: { id: numericId },
    });

    return successResponse(image);
  } catch (error) {
    console.error("Error deleting image:", error);
    const message =
      error instanceof Error ? error.message : "Unexpected exception";

    return errorResponse(message);
  }
}
