import Link from "next/link";
import { notFound } from "next/navigation";
import { CampaignCard } from "@/components/campaign/CampaignCard";
import { CreativesGallery } from "@/components/campaign/CreativesGallery";
import { HeadlinesSection } from "@/components/campaign/HeadlinesSection";
import { ImagesSection } from "@/components/campaign/ImagesSection";
import prisma from "@/lib/prisma";

type PageProps = { params: Promise<{ id: string }> };

export default async function CampaignPage({ params }: PageProps) {
  const { id } = await params;

  const campaign = await prisma.campaign.findUnique({
    where: { id: Number(id) },
  });

  if (!campaign) {
    return notFound();
  }

  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans max-w-6xl mx-auto">
      <main className="max-w-4xl mx-auto flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Campaign Details</h1>
          <Link
            href="/"
            className="text-sm text-black/70 dark:text-white/70 hover:underline font-normal px-0 py-0 bg-transparent border-none shadow-none h-auto min-w-0"
          >
            Back to Campaigns
          </Link>
        </div>
        <CampaignCard campaign={campaign} />

        <HeadlinesSection campaign={campaign} />
        <ImagesSection campaign={campaign} />
        <CreativesGallery campaign={campaign} />
      </main>
    </div>
  );
}
