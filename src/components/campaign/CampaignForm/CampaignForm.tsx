"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import type { JSX } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { campaignSchema } from "@/components/campaign/CampaignForm/schemas";
import type { CampaignFormValues } from "@/components/campaign/CampaignForm/types";
import { Button } from "@/components/ui/Button";
import { SelectField } from "@/components/ui/SelectField";
import { TextareaField } from "@/components/ui/TextareaField";
import { TextField } from "@/components/ui/TextField";
import { Tone } from "@/generated/prisma";
import { useCampaigns } from "@/hooks/useCampaigns";

export default function CampaignForm(): JSX.Element {
  const { createCampaign } = useCampaigns();
  const campaignForm = useForm<CampaignFormValues>({
    resolver: zodResolver(campaignSchema),
    defaultValues: {
      name: "",
      industry: "",
      targetAudience: "",
      tone: Tone.PROFESSIONAL,
      description: "",
    },
    mode: "all",
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = campaignForm;
  const isDisabled = isSubmitting || createCampaign.isPending;

  const onSubmit = async (values: CampaignFormValues): Promise<void> => {
    const response = await createCampaign.mutateAsync({
      name: values.name.trim(),
      industry: values.industry.trim(),
      targetAudience: values.targetAudience.trim(),
      tone: values.tone,
      description: values.description?.trim() || undefined,
    });

    if (response.success) {
      toast.success("Campaign created successfully");
      redirect(`/campaign/${response.data.id}`);
    } else {
      toast.error("Failed to create campaign");
    }
  };

  return (
    <FormProvider {...campaignForm}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-col gap-4">
          <TextField
            id="campaign-name"
            name="name"
            label="Name"
            required
            placeholder="e.g., Spring Promo 2026"
            disabled={isDisabled}
          />

          <TextField
            id="campaign-industry"
            name="industry"
            label="Industry"
            required
            placeholder='e.g., "Insurance", "SaaS", "Real Estate"'
            disabled={isDisabled}
          />

          <TextField
            id="campaign-target"
            name="targetAudience"
            label="Target Audience"
            required
            placeholder="e.g., Small business owners in the US"
            disabled={isDisabled}
          />

          <SelectField
            id="campaign-tone"
            name="tone"
            label="Tone"
            required
            disabled={isDisabled}
            options={[
              { value: Tone.PROFESSIONAL, label: "Professional" },
              { value: Tone.CASUAL, label: "Casual" },
              { value: Tone.EXCITING, label: "Exciting" },
              { value: Tone.TRUSTWORTHY, label: "Trustworthy" },
            ]}
          />

          <TextareaField
            id="campaign-description"
            name="description"
            label="Description"
            placeholder="Optional: add context, goals, or constraints"
            disabled={isDisabled}
          />

          <div className="flex items-center justify-end gap-3 pt-2">
            <Button as="a" href="/" variant="text" disabled={isDisabled}>
              Cancel
            </Button>
            <Button variant="contained" disabled={isDisabled} type="submit">
              Create
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
