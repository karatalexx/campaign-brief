import axios from "axios";
import type { ApiResponse } from "@/api/types";
import type { Campaign } from "@/generated/prisma";

export async function getCampaign(id: string): Promise<Campaign | null> {
  const response = await axios
    .get<
      ApiResponse<Campaign>
    >(`${process.env.NEXT_PUBLIC_BASE_URL}/api/campaign/${id}`)
    .catch((err) => err.response);

  return response.data.data ?? null;
}

export async function getCampaigns(): Promise<Campaign[]> {
  const response = await axios
    .get<
      ApiResponse<Campaign[]>
    >(`${process.env.NEXT_PUBLIC_BASE_URL}/api/campaign`)
    .catch((err) => err.response);

  return response.data.data ?? [];
}
