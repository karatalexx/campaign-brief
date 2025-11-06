import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import { ApiResponse, CreateCreativeData } from "@/api/types";
import { Creative } from "@/generated/prisma";

export type UseCreativesData = {
  campaignId?: number;
};

export type UseCreativesReturnValue = {
  createCreative: UseMutationResult<
    ApiResponse<Creative>,
    Error,
    CreateCreativeData
  >;
  deleteCreative: UseMutationResult<
    ApiResponse<Creative>,
    Error,
    number,
    unknown
  >;
  creativesQuery: UseQueryResult<Creative[], Error>;
};
