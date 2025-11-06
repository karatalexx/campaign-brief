import type { CampaignModel as Campaign } from "@/generated/prisma/models/Campaign";

export type CampaignCardProps = {
  campaign: Campaign;
  className?: string;
};
