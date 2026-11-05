import { AboutHero } from "@/components/marketing/AboutHero";
import { AboutStory } from "@/components/marketing/AboutStory";
import { ContactSection } from "@/components/marketing/ContactSection";

export const metadata = {
  title: "About Us | Bridget Resources",
  description:
    "Learn about our client-focused approach to structured contributions and practical financial solutions.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full bg-white pt-24">
      <AboutHero />
      <AboutStory />
      <ContactSection />
    </main>
  );
}
