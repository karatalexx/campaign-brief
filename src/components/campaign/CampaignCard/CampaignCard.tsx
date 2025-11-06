"use client";

import clsx from "clsx";
import type { JSX } from "react";
import type { CampaignCardProps } from "@/components/campaign/CampaignCard/types";

function formatTone(tone: string): string {
  return tone.charAt(0) + tone.slice(1).toLowerCase().replace(/_/g, " ");
}

export default function CampaignCard(props: CampaignCardProps): JSX.Element {
  const { campaign, className } = props;

  return (
    <div
      className={clsx(
        "rounded-lg border border-black/8 dark:border-white/[.145] bg-white dark:bg-black overflow-hidden",
        className,
      )}
    >
      <div className="px-6 py-5 border-b border-black/8 dark:border-white/[.145]">
        <h2 className="text-2xl font-semibold mb-2">{campaign.name}</h2>
        <div className="flex flex-wrap gap-3 text-sm text-black/60 dark:text-white/60">
          <span className="inline-flex items-center gap-1.5">
            <span className="font-medium">Industry:</span>
            <span>{campaign.industry}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="font-medium">Tone:</span>
            <span className="capitalize">{formatTone(campaign.tone)}</span>
          </span>
        </div>
      </div>

      <div className="px-6 py-5 space-y-6">
        <div>
          <h3 className="text-sm font-semibold mb-2 text-black/80 dark:text-white/80">
            Target Audience
          </h3>
          <p className="text-sm text-black/70 dark:text-white/70">
            {campaign.targetAudience}
          </p>
        </div>

        {campaign.description ? (
          <div>
            <h3 className="text-sm font-semibold mb-2 text-black/80 dark:text-white/80">
              Description
            </h3>
            <p className="text-sm text-black/70 dark:text-white/70 whitespace-pre-wrap">
              {campaign.description}
            </p>
          </div>
        ) : null}
      </div>

      <div className="px-6 py-3 border-t border-black/8 dark:border-white/[.145] bg-black/5 dark:bg-white/5">
        <div className="flex justify-between items-center text-xs text-black/50 dark:text-white/50">
          <span>
            Created {new Date(campaign.createdAt).toLocaleDateString()}
          </span>
          {new Date(campaign.updatedAt).getTime() !==
          new Date(campaign.createdAt).getTime() ? (
            <span>
              Updated {new Date(campaign.updatedAt).toLocaleDateString()}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
