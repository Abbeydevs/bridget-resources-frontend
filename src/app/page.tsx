import { ContactSection } from "@/components/marketing/ContactSection";
import { ContributionSimulator } from "@/components/marketing/ContributionSimulator";
import { HeroSection } from "@/components/marketing/HeroSection";
import { KayAndLilyPromo } from "@/components/marketing/KayAndLilyPromo";
import { QuickSelector } from "@/components/marketing/QuickSelector";
import { ServicesGrid } from "@/components/marketing/ServicesGrid";
import { Testimonials } from "@/components/marketing/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <QuickSelector />
      <ContributionSimulator />
      <ServicesGrid />
      <KayAndLilyPromo />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
