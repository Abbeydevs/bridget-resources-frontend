import { ContributionSimulator } from "@/components/marketing/ContributionSimulator"; // Reusing the clean white simulator
import { PlansFAQ } from "@/components/marketing/PlansFAQ";
import { PlansHero } from "@/components/marketing/PlansHero";
import { TierComparison } from "@/components/marketing/TierComparison";

export const metadata = {
  title: "Contribution Plans | Bridget Resources",
  description:
    "Join the Daily or Monthly Contribution Plan. Save consistently and unlock low-interest loans after 6 months.",
};

export default function ContributionPlansPage() {
  return (
    <main className="flex flex-col w-full bg-white pt-24">
      <PlansHero />
      <TierComparison />
      <ContributionSimulator />
      <PlansFAQ />
    </main>
  );
}
