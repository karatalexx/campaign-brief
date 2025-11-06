"use client";

import clsx from "clsx";
import { type JSX, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import { GenerationStatus } from "@/generated/prisma/enums";
import { useImages } from "@/hooks/useImages";
import type { ImagesSectionProps } from "./types";

export default function ImagesSection(props: ImagesSectionProps): JSX.Element {
  const { campaign } = props;
  const [count, setCount] = useState(3);
  const { generateImages, deleteImage, imagesQuery } = useImages({
    campaignId: campaign.id,
  });
  const { data: images = [], isLoading: isLoadingImages } = imagesQuery;
  const isGenerating = generateImages.isPending;
  const isDeleting = deleteImage.isPending;

  const handleGenerate = async (): Promise<void> => {
    const response = await generateImages.mutateAsync({
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
      toast.success("Images generated successfully");
    } else {
      toast.error("Failed to generate images");
    }
  };

  const handleDelete = async (imageId: number): Promise<void> => {
    const response = await deleteImage.mutateAsync(imageId);
    if (response.success) {
      toast.success("Image deleted successfully");
    } else {
      toast.error("Failed to delete image");
    }
  };

  const completedImages = images.filter(
    (img) => img.url && img.status === GenerationStatus.COMPLETED,
  );
  const pendingImages = images.filter(
    (img) => img.status === GenerationStatus.PENDING,
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-black/80 dark:text-white/80">
          Images
        </h3>
      </div>

      {pendingImages.length > 0 && (
        <div className="mb-3 text-xs text-black/60 dark:text-white/60 italic">
          {pendingImages.length} image(s) being generated...
        </div>
      )}

      {isLoadingImages ? (
        <div className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60 py-4">
          <Spinner />
          <span>Loading images...</span>
        </div>
      ) : completedImages.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {completedImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-video rounded overflow-hidden bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/[.145]"
            >
              <img
                src={image.url!}
                alt={`Campaign ${image.id}`}
                className="w-full h-full object-cover"
              />
              <Button
                onClick={() => handleDelete(image.id)}
                disabled={isDeleting}
                className={clsx("absolute top-2 right-2 text-white")}
                variant="text"
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      ) : completedImages.length === 0 && pendingImages.length === 0 ? (
        <p className="text-sm text-black/50 dark:text-white/50 italic">
          No images generated yet.
        </p>
      ) : null}

      {!(isLoadingImages || pendingImages.length > 0) && (
        <div className="flex items-center justify-start gap-3 mt-4">
          <label className="flex items-center gap-2">
            <span className="text-black/70 dark:text-white/70">
              Number of images to generate
            </span>
            <input
              type="number"
              min={1}
              max={5}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              disabled={isGenerating}
              className="w-24 rounded border border-black/8 dark:border-white/[.145] px-2 py-1 bg-transparent outline-none disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </label>
          <Button
            onClick={handleGenerate}
            disabled={isGenerating || count < 1 || count > 5}
            variant="contained"
          >
            {isGenerating ? "Generating..." : "Generate"}
          </Button>
        </div>
      )}
    </div>
  );
}
