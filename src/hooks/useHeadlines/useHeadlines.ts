import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { QueryKeys } from "@/api/constants";
import type { ApiResponse, GenerateHeadlineData } from "@/api/types";
import type { Headline } from "@/generated/prisma";
import type {
  UseHeadlinesData,
  UseHeadlinesReturnValue,
} from "@/hooks/useHeadlines/types";

export default function useHeadlines(
  data: UseHeadlinesData,
): UseHeadlinesReturnValue {
  const { campaignId } = data;
  const queryClient = useQueryClient();

  const generateHeadlines = useMutation({
    mutationFn: (data: GenerateHeadlineData) => {
      return axios
        .post<ApiResponse<Headline>>("/api/ai/headlines/generate", data)
        .then((res) => res.data);
    },
    onSuccess: () => {
      // Invalidate campaign queries to refetch headlines
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.CAMPAIGN_HEADLINES, campaignId],
      });
    },
  });

  const deleteHeadline = useMutation({
    mutationFn: (headlineId: number) => {
      return axios
        .delete<ApiResponse<Headline>>(`/api/headlines/${headlineId}`)
        .then((res) => res.data);
    },
    onSuccess: () => {
      // Invalidate campaign queries to refetch headlines
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.CAMPAIGN_HEADLINES, campaignId],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.CAMPAIGN_CREATIVES, campaignId],
      });
    },
  });

  const headlinesQuery = useQuery({
    queryKey: [QueryKeys.CAMPAIGN_HEADLINES, campaignId],
    queryFn: () =>
      axios
        .get<ApiResponse<Headline[]>>(
          `/api/campaign/${campaignId}/headlines`,
        )
        .then((res) => res.data.data),
    enabled: !!campaignId,
  });

  return {
    generateHeadlines,
    deleteHeadline,
    headlinesQuery,
  };
}
