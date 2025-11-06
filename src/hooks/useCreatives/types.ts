import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import { ApiResponse, CreateCreativeData } from "@/api/types";
import { CreativeModel } from "@/generated/prisma/models";

export type UseCreativesData = {
  campaignId?: number;
};

export type UseCreativesReturnValue = {
  createCreative: UseMutationResult<
    ApiResponse<CreativeModel>,
    Error,
    CreateCreativeData
  >;
  deleteCreative: UseMutationResult<
    ApiResponse<CreativeModel>,
    Error,
    number,
    unknown
  >;
  creativesQuery: UseQueryResult<CreativeModel[], Error>;
};
