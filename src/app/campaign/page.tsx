import CampaignForm from "@/components/campaign/CampaignForm/CampaignForm";

export default function CampaignPage() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans">
      <main className="max-w-2xl mx-auto flex flex-col gap-6">
        <h1 className="text-2xl font-semibold">Campaign Brief</h1>
        <p className="text-sm text-black/60 dark:text-white/60">
          Fill out the form to generate your campaign brief.
        </p>
        <CampaignForm />
      </main>
    </div>
  );
}
