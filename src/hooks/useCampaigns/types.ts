import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import { ApiResponse, CreateCampaignData } from "@/api/types";
import { CampaignModel } from "@/generated/prisma/models";

export type UseCampaignsReturnValue = {
  createCampaign: UseMutationResult<
    ApiResponse<CampaignModel>,
    Error,
    CreateCampaignData
  >;
  campaignsQuery: UseQueryResult<CampaignModel[], Error>;
};
