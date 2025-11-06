"use client";

import clsx from "clsx";
import { type JSX, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import { GenerationStatus } from "@/generated/prisma";
import { useHeadlines } from "@/hooks/useHeadlines";
import type { HeadlinesSectionProps } from "./type";

export default function HeadlinesSection(
  props: HeadlinesSectionProps,
): JSX.Element {
  const { campaign } = props;
  const [count, setCount] = useState(5);
  const { generateHeadlines, deleteHeadline, headlinesQuery } = useHeadlines({
    campaignId: campaign.id,
  });
  const { data: headlines = [], isLoading: isLoadingHeadlines } =
    headlinesQuery;
  const isGenerating = generateHeadlines.isPending;
  const isDeleting = deleteHeadline.isPending;

  const handleGenerate = async (): Promise<void> => {
    const response = await generateHeadlines.mutateAsync({
      campaignId: campaign.id,
      count,
      context: {
        name: campaign.name,
        industry: campaign.industry,
        audience: campaign.targetAudience,
        tone: campaign.tone,
        description: campaign.description,
      },
    });

    if (response.success) {
      toast.success("Headlines generated successfully");
    } else {
      toast.error("Failed to generate headlines");
    }
  };

  const handleDelete = async (headlineId: number): Promise<void> => {
    const response = await deleteHeadline.mutateAsync(headlineId);
    if (response.success) {
      toast.success("Headline deleted successfully");
    } else {
      toast.error("Failed to delete headline");
    }
  };

  const completedHeadlines = headlines.filter(
    (h) => h.text && h.status === GenerationStatus.COMPLETED,
  );
  const pendingHeadlines = headlines.filter(
    (h) => h.status === GenerationStatus.PENDING,
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-black/80 dark:text-white/80">
          Headlines
        </h3>
      </div>

      {pendingHeadlines.length > 0 && (
        <div className="mb-3 text-xs text-black/60 dark:text-white/60 italic">
          {pendingHeadlines.length} headline(s) being generated...
        </div>
      )}

      {isLoadingHeadlines ? (
        <div className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60 py-4">
          <Spinner />
          <span>Loading headlines...</span>
        </div>
      ) : completedHeadlines.length > 0 ? (
        <ul className="space-y-2">
          {completedHeadlines.map((headline) => (
            <li
              key={headline.id}
              className="flex items-start gap-2 text-sm text-black/70 dark:text-white/70 bg-black/5 dark:bg-white/5 rounded px-3 py-2"
            >
              <span className="flex-1">{headline.text}</span>
              <Button
                onClick={() => handleDelete(headline.id)}
                disabled={isDeleting}
                className={clsx(
                  "ml-2",
                  "text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300",
                )}
                variant="text"
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      ) : completedHeadlines.length === 0 && pendingHeadlines.length === 0 ? (
        <p className="text-sm text-black/50 dark:text-white/50 italic">
          No headlines generated yet.
        </p>
      ) : null}

      {/* Bottom actions: count + generate (hidden while rendering/loading) */}
      {!(isLoadingHeadlines || pendingHeadlines.length > 0) && (
        <div className="flex items-center justify-start gap-3 mt-4">
          <label className="flex items-center gap-2">
            <span className="text-black/70 dark:text-white/70">
              Number of headlines to generate
            </span>
            <input
              type="number"
              min={3}
              max={10}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              disabled={isGenerating}
              className="w-24 rounded border border-black/8 dark:border-white/[.145] px-2 py-1 bg-transparent outline-none disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </label>
          <Button
            onClick={handleGenerate}
            disabled={isGenerating || count < 3 || count > 10}
            variant="contained"
          >
            {isGenerating ? "Generating..." : "Generate"}
          </Button>
        </div>
      )}
    </div>
  );
}
