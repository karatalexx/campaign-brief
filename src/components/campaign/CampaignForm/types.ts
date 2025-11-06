import type z from "zod";
import type { campaignSchema } from "@/components/campaign/CampaignForm/schemas";

export type CampaignFormValues = z.infer<typeof campaignSchema>;
