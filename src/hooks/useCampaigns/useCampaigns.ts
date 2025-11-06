import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QueryKeys } from "@/api/constants";
import { ApiResponse, CreateCampaignData } from "@/api/types";
import { Campaign } from "@/generated/prisma";
import { UseCampaignsReturnValue } from "@/hooks/useCampaigns/types";

export default function useCampaigns(): UseCampaignsReturnValue {
  const createCampaign = useMutation({
    mutationFn: (campaign: CreateCampaignData) => {
      return axios
        .post<ApiResponse<Campaign>>("/api/campaign", campaign)
        .then((res) => res.data);
    },
  });

  const campaignsQuery = useQuery({
    queryKey: [QueryKeys.CAMPAIGNS],
    queryFn: () =>
      axios
        .get<ApiResponse<Campaign[]>>("/api/campaign")
        .then((res) => res.data.data),
  });

  return {
    createCampaign,
    campaignsQuery,
  };
}
