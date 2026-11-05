import { ContactSection } from "@/components/marketing/ContactSection";
import { EnquiryModal } from "@/components/marketing/EnquiryModal";
import { ServicesCatalog } from "@/components/marketing/ServiceCatalog";
import { ServicesPageHero } from "@/components/marketing/ServicesPageHero";

export const metadata = {
  title: "Financial & Business Services | Bridget Resources",
  description:
    "Practical, reliable capital and advisory solutions including LPO funding, asset finance, and debt recovery.",
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col w-full bg-white pt-24">
      <ServicesPageHero />
      <ServicesCatalog ModalComponent={EnquiryModal} />
      <ContactSection />
    </main>
  );
}
