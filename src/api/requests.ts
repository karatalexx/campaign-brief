import axios from "axios";
import type { ApiResponse } from "@/api/types";
import type { CampaignModel } from "@/generated/prisma/models";

export async function getCampaign(id: string): Promise<CampaignModel | null> {
  const response = await axios
    .get<
      ApiResponse<CampaignModel>
    >(`${process.env.NEXT_PUBLIC_BASE_URL}/api/campaign/${id}`)
    .catch((err) => err.response);

  return response.data.data ?? null;
}
