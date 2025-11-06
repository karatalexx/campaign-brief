import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { QueryKeys } from "@/api/constants";
import { ApiResponse, CreateCreativeData } from "@/api/types";
import { CreativeModel } from "@/generated/prisma/models";
import {
  UseCreativesData,
  UseCreativesReturnValue,
} from "@/hooks/useCreatives/types";

export default function useCreatives(
  data: UseCreativesData,
): UseCreativesReturnValue {
  const { campaignId } = data;
  const queryClient = useQueryClient();

  const createCreative = useMutation({
    mutationFn: (data: CreateCreativeData) => {
      return axios
        .post<ApiResponse<CreativeModel>>("/api/creatives", data)
        .then((res) => res.data);
    },
    onSuccess: () => {
      // Invalidate campaign queries to refetch creatives
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.CAMPAIGN_CREATIVES, campaignId],
      });
    },
  });

  const deleteCreative = useMutation({
    mutationFn: (creativeId: number) => {
      return axios
        .delete<ApiResponse<CreativeModel>>(`/api/creatives/${creativeId}`)
        .then((res) => res.data);
    },
    onSuccess: () => {
      // Invalidate campaign queries to refetch creatives
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.CAMPAIGN_CREATIVES, campaignId],
      });
    },
  });

  const creativesQuery = useQuery({
    queryKey: [QueryKeys.CAMPAIGN_CREATIVES, campaignId],
    queryFn: () =>
      axios
        .get<ApiResponse<CreativeModel[]>>(
          `/api/campaign/${campaignId}/creatives`,
        )
        .then((res) => res.data.data),
    enabled: !!campaignId,
  });

  return {
    createCreative,
    deleteCreative,
    creativesQuery,
  };
}
