import z from "zod";
import { Tone } from "@/generated/prisma/enums";

export const campaignSchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  industry: z.string().trim().min(1, "Industry is required."),
  targetAudience: z.string().trim().min(1, "Target audience is required."),
  tone: z.nativeEnum(Tone, {
    required_error: "Tone is required.",
  }),
  description: z.string().trim().optional().or(z.literal("")),
});
