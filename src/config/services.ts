import {
  Briefcase,
  FileText,
  Truck,
  Landmark,
  Building2,
  ShieldCheck,
  Scale,
  Home,
  CircleDollarSign,
  ArrowLeftRight,
} from "lucide-react";

export const serviceCategories = [
  {
    id: "trade-finance",
    label: "Corporate & Trade Finance",
    services: [
      {
        title: "Working Capital / SME Loans",
        icon: Briefcase,
        desc: "Flexible liquidity to bridge operational gaps and scale your growing enterprise.",
      },
      {
        title: "Invoice Discounting",
        icon: FileText,
        desc: "Unlock tied-up cash flow immediately by advancing capital against your unpaid corporate invoices.",
      },
      {
        title: "Commodities Funding",
        icon: ArrowLeftRight,
        desc: "LPO-backed funding structures designed specifically for trade and commodity execution.",
      },
      {
        title: "Asset Finance",
        icon: Truck,
        desc: "Procure operational vehicles, heavy machinery, and critical business assets with structured repayment.",
      },
    ],
  },
  {
    id: "institutional",
    label: "Institutional Capital",
    services: [
      {
        title: "Funds for MFIs",
        icon: Landmark,
        desc: "Wholesale liquidity and on-lending capital for Microfinance Institutions and localized lenders.",
      },
      {
        title: "Project Finance",
        icon: Building2,
        desc: "Long-term, structured capital for large-scale infrastructure and development projects.",
      },
      {
        title: "Proof of Funds",
        icon: CircleDollarSign,
        desc: "Verifiable financial backing to secure major contracts, bids, and cross-border trade agreements.",
      },
    ],
  },
  {
    id: "protection",
    label: "Advisory & Protection",
    services: [
      {
        title: "Debt Recovery",
        icon: Scale,
        desc: "Professional, compliant recovery services to retrieve stalled corporate capital and bad debts.",
      },
      {
        title: "Real Estate",
        icon: Home,
        desc: "Strategic advisory and financing solutions for commercial and premium residential property portfolios.",
      },
      {
        title: "Insurance",
        icon: ShieldCheck,
        desc: "Comprehensive risk management and corporate protection policies for business continuity.",
      },
    ],
  },
];
