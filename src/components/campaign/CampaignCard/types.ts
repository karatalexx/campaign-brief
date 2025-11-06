import type { Campaign } from "@/generated/prisma";

export type CampaignCardProps = {
  campaign: Campaign;
  className?: string;
};
