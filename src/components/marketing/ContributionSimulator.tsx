"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Calculator, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ContributionSimulator() {
  const [tier, setTier] = useState<"daily" | "monthly">("daily");
  const [amount, setAmount] = useState<number>(5000);

  const totalSaved = tier === "daily" ? amount * 180 : amount * 6;

  const unlockedProducts =
    tier === "daily"
      ? [
          "Low-Interest Business Loans",
          "LPO Funding Support",
          "Business Advisory",
        ]
      : ["Loan Funding", "Salary Advance", "Investment Advisory"];

  return (
    <section className="relative w-full bg-white py-24 z-10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="bg-[#263b4d] rounded-[2.5rem] p-8 md:p-16 shadow-2xl overflow-hidden relative flex flex-col lg:flex-row gap-12 items-center"
        >
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#28868c]/30 rounded-full blur-[100px]" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#dcae4e]/20 rounded-full blur-[100px]" />

          <div className="w-full lg:w-1/2 relative z-10 flex flex-col">
            <div className="inline-flex items-center rounded-full bg-[#28868c]/20 px-3 py-1 text-sm font-semibold text-[#6EC1E4] w-fit mb-6">
              <Calculator className="mr-2 h-4 w-4" />
              6-Month Eligibility Simulator
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Calculate your <br /> borrowing power.
            </h2>
            <p className="text-slate-300 font-medium mb-10 max-w-md">
              See exactly what you unlock when you maintain a consistent 6-month
              contribution streak.
            </p>

            <div className="flex bg-[#1a2936] p-1.5 rounded-xl mb-8 w-fit border border-white/10">
              <button
                onClick={() => {
                  setTier("daily");
                  setAmount(5000);
                }}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  tier === "daily"
                    ? "bg-[#28868c] text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Daily Contributor
              </button>
              <button
                onClick={() => {
                  setTier("monthly");
                  setAmount(100000);
                }}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  tier === "monthly"
                    ? "bg-[#28868c] text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Monthly Contributor
              </button>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-end mb-4">
                <label className="text-slate-300 font-semibold text-sm">
                  {tier === "daily"
                    ? "Daily Savings Target"
                    : "Monthly Savings Target"}
                </label>
                <span className="text-2xl font-extrabold text-[#dcae4e]">
                  ₦{amount.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={tier === "daily" ? 1000 : 20000}
                max={tier === "daily" ? 50000 : 1000000}
                step={tier === "daily" ? 1000 : 10000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-[#1a2936] rounded-lg appearance-none cursor-pointer accent-[#28868c]"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative z-10">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100 flex flex-col">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                After 6 Months
              </span>
              <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-slate-100">
                <span className="text-5xl font-extrabold text-[#263b4d] tracking-tight">
                  ₦{totalSaved.toLocaleString()}
                </span>
                <span className="text-lg font-semibold text-slate-400">
                  saved
                </span>
              </div>

              <span className="text-sm font-bold text-[#263b4d] mb-4">
                Products Unlocked:
              </span>
              <ul className="flex flex-col gap-4 mb-10">
                {unlockedProducts.map((product, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-slate-600 font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#28868c] mr-3 shrink-0" />
                    {product}
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="w-full rounded-xl bg-[#263b4d] hover:bg-[#1a2936] text-white h-14 text-base font-bold shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Start Saving ₦{amount.toLocaleString()} /{" "}
                {tier === "daily" ? "Day" : "Month"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
