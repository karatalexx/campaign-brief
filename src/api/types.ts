import type z from "zod";
import type {
  createCampaignSchema,
  createCreativeSchema,
  generateHeadlineSchema,
  generateImageSchema,
} from "@/api/schemas";

export type CreateCampaignData = z.infer<typeof createCampaignSchema>;
export type GenerateHeadlineData = z.infer<typeof generateHeadlineSchema>;
export type GenerateImageData = z.infer<typeof generateImageSchema>;
export type CreateCreativeData = z.infer<typeof createCreativeSchema>;

export type ApiResponse<T> = {
  success: boolean;
  data: T;
  error?: string;
};
