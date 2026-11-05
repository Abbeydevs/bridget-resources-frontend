import { ContactPageContent } from "@/components/marketing/ContactPageContent";

export const metadata = {
  title: "Contact & Support | Bridget Resources",
  description:
    "Get in touch with our team for general enquiries, business financing, or dedicated member support.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full bg-white pt-24 min-h-screen">
      <ContactPageContent />
    </main>
  );
}
