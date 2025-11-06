import { z } from "zod";
import { Tone } from "@/generated/prisma/enums";

export const createCampaignSchema = z.object({
  name: z.string(),
  industry: z.string(),
  targetAudience: z.string(),
  tone: z.nativeEnum(Tone),
  description: z.string().nullable().optional(),
});

export const generateImageSchema = z.object({
  campaignId: z.number().int().positive(),
  count: z.number().int(),
  context: z
    .object({
      name: z.string(),
      industry: z.string(),
      audience: z.string(),
      tone: z.nativeEnum(Tone),
      description: z.string().nullable().optional(),
    })
    .optional(),
});

export const generateHeadlineSchema = z.object({
  campaignId: z.number().int().positive(),
  count: z.number().int(),
  context: z.object({
    name: z.string(),
    industry: z.string(),
    audience: z.string(),
    tone: z.nativeEnum(Tone),
    description: z.string().nullable().optional(),
  }),
});

export const createCreativeSchema = z.object({
  campaignId: z.number().int().positive(),
  headlineId: z.number().int().positive(),
  imageId: z.number().int().positive(),
});
