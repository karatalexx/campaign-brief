import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import { ApiResponse, CreateCampaignData } from "@/api/types";
import { Campaign } from "@/generated/prisma";

export type UseCampaignsReturnValue = {
  createCampaign: UseMutationResult<
    ApiResponse<Campaign>,
    Error,
    CreateCampaignData
  >;
  campaignsQuery: UseQueryResult<Campaign[], Error>;
};
