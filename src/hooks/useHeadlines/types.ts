import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import { ApiResponse, GenerateHeadlineData } from "@/api/types";
import { Headline } from "@/generated/prisma";

export type UseHeadlinesData = {
  campaignId?: number;
};

export type UseHeadlinesReturnValue = {
  generateHeadlines: UseMutationResult<
    ApiResponse<Headline>,
    Error,
    GenerateHeadlineData
  >;
  deleteHeadline: UseMutationResult<
    ApiResponse<Headline>,
    Error,
    number,
    unknown
  >;
  headlinesQuery: UseQueryResult<Headline[], Error>;
};
