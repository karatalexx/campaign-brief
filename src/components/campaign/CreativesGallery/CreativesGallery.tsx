"use client";

import clsx from "clsx";
import { type JSX, useMemo, useState } from "react";
import { toast } from "react-toastify";
import type { CreativesGalleryProps } from "@/components/campaign/CreativesGallery/types";
import { Button } from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import { GenerationStatus } from "@/generated/prisma/enums";
import { HeadlineModel, ImageModel } from "@/generated/prisma/models";
import { useCreatives } from "@/hooks/useCreatives";
import { useHeadlines } from "@/hooks/useHeadlines";
import { useImages } from "@/hooks/useImages";

type ViewMode = "side-by-side" | "stacked" | "tabbed";

export default function CreativesGallery(
  props: CreativesGalleryProps,
): JSX.Element {
  const { campaign } = props;

  const [view, setView] = useState<ViewMode>("side-by-side");
  const [selectedHeadlineId, setSelectedHeadlineId] = useState<number | null>(
    null,
  );
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);

  const { headlinesQuery } = useHeadlines({ campaignId: campaign.id });
  const { imagesQuery } = useImages({ campaignId: campaign.id });
  const { creativesQuery, createCreative, deleteCreative } = useCreatives({
    campaignId: campaign.id,
  });

  const headlines = headlinesQuery.data ?? [];
  const images = imagesQuery.data ?? [];
  const creatives = creativesQuery.data ?? [];

  const isCreating = createCreative.isPending;
  const isDeleting = deleteCreative.isPending;
  const isLoading =
    headlinesQuery.isLoading ||
    imagesQuery.isLoading ||
    creativesQuery.isLoading;

  const completedHeadlines = useMemo<HeadlineModel[]>(
    () =>
      headlines.filter(
        (h) => h.text && h.status === GenerationStatus.COMPLETED,
      ),
    [headlines],
  );

  const completedImages = useMemo<ImageModel[]>(
    () =>
      images.filter((i) => i.url && i.status === GenerationStatus.COMPLETED),
    [images],
  );

  // Build existing pair lookups and counts
  const pairExists = useMemo<(hId: number, iId: number) => boolean>(() => {
    const set = new Set<string>();
    (creatives as any[]).forEach((c) => {
      const hId = c.headline?.id ?? c.headlineId;
      const iId = c.image?.id ?? c.imageId;
      if (hId && iId) set.add(`${hId}:${iId}`);
    });
    return (hId: number, iId: number) => set.has(`${hId}:${iId}`);
  }, [creatives]);

  const headlinePairCount = useMemo<Map<number, number>>(() => {
    const map = new Map<number, number>();
    (creatives as any[]).forEach((c) => {
      const hId = c.headline?.id ?? c.headlineId;
      if (typeof hId === "number") map.set(hId, (map.get(hId) ?? 0) + 1);
    });
    return map;
  }, [creatives]);

  const imagePairCount = useMemo<Map<number, number>>(() => {
    const map = new Map<number, number>();
    (creatives as any[]).forEach((c) => {
      const iId = c.image?.id ?? c.imageId;
      if (typeof iId === "number") map.set(iId, (map.get(iId) ?? 0) + 1);
    });
    return map;
  }, [creatives]);

  const canPair =
    selectedHeadlineId !== null &&
    selectedImageId !== null &&
    !pairExists(selectedHeadlineId!, selectedImageId!) &&
    !isCreating;

  const handleCreatePair = async (): Promise<void> => {
    if (!canPair || selectedHeadlineId === null || selectedImageId === null) {
      return;
    }

    const response = await createCreative.mutateAsync({
      campaignId: campaign.id,
      headlineId: selectedHeadlineId,
      imageId: selectedImageId,
    });

    if (response.success) {
      toast.success("Creative created successfully");
    } else {
      toast.error("Failed to create creative");
    }
  };

  const handleDeletePair = async (creativeId: number): Promise<void> => {
    const response = await deleteCreative.mutateAsync(creativeId);
    if (response.success) {
      toast.success("Creative deleted successfully");
    } else {
      toast.error("Failed to delete creative");
    }
  };

  const PairingControls = (
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-sm font-semibold text-black/80 dark:text-white/80">
        Pair Headline + Image
      </h3>
      <div className="flex items-center gap-2">
        <Button onClick={() => setView("side-by-side")} variant="contained">
          Side-by-side
        </Button>
        <Button onClick={() => setView("stacked")} variant="contained">
          Stacked
        </Button>
        <Button
          onClick={handleCreatePair}
          disabled={!canPair}
          variant="contained"
        >
          {isCreating ? "Pairing..." : "Create Pair"}
        </Button>
      </div>
    </div>
  );

  const HeadlinesList = (
    <ul className="space-y-2">
      {completedHeadlines.map((h) => {
        const count = headlinePairCount.get(h.id) ?? 0;
        const isPaired = count > 0;
        const isSelected = selectedHeadlineId === h.id;
        const isDuplicateWithSelectedImage =
          selectedImageId !== null && pairExists(h.id, selectedImageId);
        return (
          <li
            key={h.id}
            className={clsx(
              "flex items-start gap-2 text-sm bg-black/5 dark:bg-white/5 rounded px-3 py-2",
              isDuplicateWithSelectedImage
                ? "text-black/40 dark:text-white/40 opacity-50 cursor-not-allowed"
                : "text-black/70 dark:text-white/70 cursor-pointer",
            )}
            onClick={() =>
              !isDuplicateWithSelectedImage && setSelectedHeadlineId(h.id)
            }
          >
            <input
              type="radio"
              name="headline"
              checked={isSelected}
              onChange={() => setSelectedHeadlineId(h.id)}
              disabled={isDuplicateWithSelectedImage}
              className="mt-1"
            />
            <span className="flex-1">{h.text}</span>
            {isPaired && <span className="italic">Paired x{count}</span>}
          </li>
        );
      })}
    </ul>
  );

  const ImagesList = (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {completedImages.map((img) => {
        const count = imagePairCount.get(img.id) ?? 0;
        const isPaired = count > 0;
        const isSelected = selectedImageId === img.id;
        const isDuplicateWithSelectedHeadline =
          selectedHeadlineId !== null && pairExists(selectedHeadlineId, img.id);
        return (
          <label
            key={img.id}
            className={clsx(
              "relative aspect-video rounded overflow-hidden border",
              "border-black/8 dark:border-white/[.145]",
              isSelected ? "ring-4 ring-blue-500" : "",
              isDuplicateWithSelectedHeadline
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer",
            )}
          >
            <input
              type="radio"
              name="image"
              checked={isSelected}
              onChange={() => setSelectedImageId(img.id)}
              disabled={isDuplicateWithSelectedHeadline}
              className="hidden"
            />
            <img
              src={img.url!}
              alt="candidate"
              className="w-full h-full object-cover"
            />
            {isPaired && (
              <span className="absolute top-2 left-2 bg-black/70 text-white px-1.5 py-0.5 rounded">
                Paired x{count}
              </span>
            )}
          </label>
        );
      })}
    </div>
  );

  const PairingView = (
    <div
      className={clsx(
        view === "side-by-side"
          ? "grid grid-cols-1 md:grid-cols-2 gap-4"
          : "space-y-4",
      )}
    >
      <div>
        <h4 className="text-xs font-semibold text-black/60 dark:text-white/60 mb-2">
          Select Headline
        </h4>
        {HeadlinesList}
      </div>
      <div>
        <h4 className="text-xs font-semibold text-black/60 dark:text-white/60 mb-2">
          Select Image
        </h4>
        {ImagesList}
      </div>
    </div>
  );

  const CreativesGrid =
    creatives.length > 0 ? (
      <div>
        <h2 className="my-4 font-semibold text-black/80 dark:text-white/80">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(creatives as any[]).map((c) => (
            <div
              key={c.id}
              className="h-full rounded border border-black/8 dark:border-white/[.145] overflow-hidden flex flex-col"
            >
              <div className="aspect-video bg-black/5 dark:bg-white/5 flex items-center justify-center">
                {c.image?.url ? (
                  <img
                    src={c.image.url}
                    alt="creative"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-black/50 dark:text-white/50 italic">
                    No image available
                  </span>
                )}
              </div>
              <div className="p-3 flex flex-col flex-1">
                {c.headline?.text ? (
                  <p className="text-sm text-black/70 dark:text-white/70 min-h-10">
                    {c.headline.text}
                  </p>
                ) : (
                  <p className="text-sm text-black/50 dark:text-white/50 italic min-h-10">
                    No headline provided
                  </p>
                )}
                <div className="flex justify-end mt-auto">
                  <Button
                    onClick={() => handleDeletePair(c.id)}
                    disabled={isDeleting}
                    className={clsx(
                      "text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300",
                    )}
                    variant="text"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <p className="text-sm text-black/50 dark:text-white/50 italic">
        No creatives have been paired yet.
      </p>
    );

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-black/80 dark:text-white/80">
          Creatives
        </h3>
      </div>

      {isLoading ? (
        <div className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60 py-4">
          <Spinner />
          <span>Loading creatives...</span>
        </div>
      ) : (
        <div className="space-y-6">
          {PairingControls}
          {view === "tabbed" ? (
            <div className="space-y-6">
              {PairingView}
              {CreativesGrid}
            </div>
          ) : (
            <>
              {PairingView}
              {CreativesGrid}
            </>
          )}
        </div>
      )}
    </div>
  );
}
