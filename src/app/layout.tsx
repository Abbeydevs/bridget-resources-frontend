import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bridgetresources.com"),
  title: {
    default: "Bridget Resources | Financial & Business Solutions",
    template: "%s | Bridget Resources",
  },
  description:
    "Connecting individuals, entrepreneurs, and SMEs with practical financial solutions. Access daily/monthly contribution plans, SME loans, LPO funding, and asset finance.",
  keywords: [
    "Contribution Plans Nigeria",
    "SME Loans Lagos",
    "LPO Funding",
    "Asset Finance",
    "Daily Savings Plan",
    "Monthly Contribution",
    "Bridget Resources Limited",
  ],
  authors: [{ name: "Bridget Resources" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.bridgetresources.com",
    siteName: "Bridget Resources",
    title: "Bridget Resources | Structured Contributions & Smart Support",
    description:
      "Join our structured daily and monthly contribution plans, or access tailored working capital and growth financing in Naira and USD.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bridget Resources - Trusted Financial & Business Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridget Resources | Financial & Business Solutions",
    description:
      "Practical, reliable, and flexible financial services for individuals and SMEs.",
    images: ["/og-image.jpg"],
  },
  themeColor: "#6EC1E4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-background text-foreground font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
