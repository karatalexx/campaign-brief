import type { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import type { ApiResponse, GenerateImageData } from "@/api/types";
import type { ImageModel } from "@/generated/prisma/models";

export type UseImagesData = {
  campaignId?: number;
};

export type UseImagesReturnValue = {
  generateImages: UseMutationResult<
    ApiResponse<ImageModel>,
    Error,
    GenerateImageData
  >;
  deleteImage: UseMutationResult<
    ApiResponse<ImageModel>,
    Error,
    number,
    unknown
  >;
  imagesQuery: UseQueryResult<ImageModel[], Error>;
};
