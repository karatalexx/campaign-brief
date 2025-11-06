import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import { ApiResponse, GenerateHeadlineData } from "@/api/types";
import { HeadlineModel } from "@/generated/prisma/models";

export type UseHeadlinesData = {
  campaignId?: number;
};

export type UseHeadlinesReturnValue = {
  generateHeadlines: UseMutationResult<
    ApiResponse<HeadlineModel>,
    Error,
    GenerateHeadlineData
  >;
  deleteHeadline: UseMutationResult<
    ApiResponse<HeadlineModel>,
    Error,
    number,
    unknown
  >;
  headlinesQuery: UseQueryResult<HeadlineModel[], Error>;
};
