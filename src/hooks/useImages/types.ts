import type { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import type { ApiResponse, GenerateImageData } from "@/api/types";
import type { Image } from "@/generated/prisma";

export type UseImagesData = {
  campaignId?: number;
};

export type UseImagesReturnValue = {
  generateImages: UseMutationResult<
    ApiResponse<Image>,
    Error,
    GenerateImageData
  >;
  deleteImage: UseMutationResult<
    ApiResponse<Image>,
    Error,
    number,
    unknown
  >;
  imagesQuery: UseQueryResult<Image[], Error>;
};
