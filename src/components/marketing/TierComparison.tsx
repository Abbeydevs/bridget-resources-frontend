"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { navigationConfig } from "@/config/navigation";

export function TierComparison() {
  return (
    <section className="w-full py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-4xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col"
          >
            <div className="mb-8">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">
                For Traders & Businesses
              </span>
              <h3 className="text-3xl font-extrabold text-[#263b4d]">
                Daily Contributor
              </h3>
            </div>

            <p className="text-slate-500 font-medium mb-8">
              Designed for daily cash-flow businesses requiring rapid access to
              working capital and trade finance.
            </p>

            <div className="mb-10 grow">
              <h4 className="text-sm font-bold text-[#263b4d] mb-4">
                Unlocks after 6 months:
              </h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start text-slate-600 font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#28868c] mr-3 shrink-0" />
                  Low-Interest Business Loans
                </li>
                <li className="flex items-start text-slate-600 font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#28868c] mr-3 shrink-0" />
                  LPO Funding Support
                </li>
                <li className="flex items-start text-slate-600 font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#28868c] mr-3 shrink-0" />
                  Business Advisory Services
                </li>
              </ul>
            </div>

            <Link
              href={navigationConfig.actions.primaryCta.href}
              className="w-full inline-flex items-center justify-center rounded-xl bg-white border-2 border-[#28868c] text-[#28868c] h-12 text-sm font-bold transition-all hover:bg-[#28868c] hover:text-white"
            >
              Start Daily Plan
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-4xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col"
          >
            <div className="mb-8">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">
                For Professionals
              </span>
              <h3 className="text-3xl font-extrabold text-[#263b4d]">
                Monthly Contributor
              </h3>
            </div>

            <p className="text-slate-500 font-medium mb-8">
              Built for salary earners focused on structured long-term savings
              and personal liquidity.
            </p>

            <div className="mb-10 grow">
              <h4 className="text-sm font-bold text-[#263b4d] mb-4">
                Unlocks after 6 months:
              </h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start text-slate-600 font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#dcae4e] mr-3 shrink-0" />
                  Loan Funding
                </li>
                <li className="flex items-start text-slate-600 font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#dcae4e] mr-3 shrink-0" />
                  Salary Advance (Low Interest)
                </li>
                <li className="flex items-start text-slate-600 font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#dcae4e] mr-3 shrink-0" />
                  Investment Advisory
                </li>
              </ul>
            </div>

            <Link
              href={navigationConfig.actions.primaryCta.href}
              className="w-full inline-flex items-center justify-center rounded-xl bg-white border-2 border-[#dcae4e] text-[#dcae4e] h-12 text-sm font-bold transition-all hover:bg-[#dcae4e] hover:text-white"
            >
              Start Monthly Plan
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
