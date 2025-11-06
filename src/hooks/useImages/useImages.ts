import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { QueryKeys } from "@/api/constants";
import type { ApiResponse, GenerateImageData } from "@/api/types";
import type { ImageModel } from "@/generated/prisma/models";
import type {
  UseImagesData,
  UseImagesReturnValue,
} from "@/hooks/useImages/types";

export default function useImages(data: UseImagesData): UseImagesReturnValue {
  const { campaignId } = data;
  const queryClient = useQueryClient();

  const generateImages = useMutation({
    mutationFn: (data: GenerateImageData) => {
      return axios
        .post<ApiResponse<ImageModel>>("/api/ai/images/generate", data)
        .then((res) => res.data)
        .catch((err) => err.response);
    },
    onSuccess: () => {
      // Invalidate campaign queries to refetch images
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.CAMPAIGN_IMAGES, campaignId],
      });
    },
  });

  const deleteImage = useMutation({
    mutationFn: (imageId: number) => {
      return axios
        .delete<ApiResponse<ImageModel>>(`/api/images/${imageId}`)
        .then((res) => res.data);
    },
    onSuccess: () => {
      // Invalidate campaign queries to refetch images
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.CAMPAIGN_IMAGES, campaignId],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.CAMPAIGN_CREATIVES, campaignId],
      });
    },
  });

  const imagesQuery = useQuery({
    queryKey: [QueryKeys.CAMPAIGN_IMAGES, campaignId],
    queryFn: () =>
      axios
        .get<ApiResponse<ImageModel[]>>(`/api/campaign/${campaignId}/images`)
        .then((res) => res.data.data),
    enabled: !!campaignId,
  });

  return {
    generateImages,
    deleteImage,
    imagesQuery,
  };
}
