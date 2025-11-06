import Link from "next/link";
import { Button } from "@/components/ui/Button";
import prisma from "@/lib/prisma";

export default async function Home() {
  const campaigns = await prisma.campaign.findMany();

  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans">
      <main className="max-w-4xl mx-auto flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Welcome</h1>
        <p className="text-sm text-black/60 dark:text-white/60">
          Start by creating a new campaign brief.
        </p>
        <div>
          <Button as="a" href="/campaign" variant="contained">
            Create New Campaign
          </Button>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Existing Campaigns</h2>
          {campaigns.length === 0 ? (
            <p className="text-sm text-black/50 dark:text-white/50 italic mt-2">
              No campaigns yet. Create one to get started.
            </p>
          ) : (
            <div className="mt-3 grid grid-cols-1 gap-3">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="rounded border border-black/8 dark:border-white/[.145] bg-black/5 dark:bg-white/5 px-4 py-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <Link
                        href={`/campaign/${campaign.id}`}
                        className="block text-sm font-semibold text-black/80 dark:text-white/80 hover:underline truncate"
                      >
                        {campaign.name}
                      </Link>
                      {campaign.description && (
                        <p className="text-xs text-black/50 dark:text-white/50 mt-0.5 line-clamp-2">
                          {campaign.description}
                        </p>
                      )}
                    </div>
                    <Button
                      as="a"
                      href={`/campaign/${campaign.id}`}
                      variant="contained"
                    >
                      View details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
