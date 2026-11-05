"use client";

import { motion } from "framer-motion";
import { Wallet } from "lucide-react";

export function PlansHero() {
  return (
    <section className="w-full py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#28868c]/10 text-[10px] font-bold text-[#28868c] uppercase tracking-widest mb-6"
        >
          <Wallet className="w-3.5 h-3.5" />
          The Core Program
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#263b4d] tracking-tight mb-6"
        >
          Build Financial Discipline. <br className="hidden sm:block" />
          Unlock Guaranteed Credit.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed"
        >
          Choose a savings rhythm that matches your cash flow. After 6 months of
          active contribution, you automatically gain access to our low-interest
          lending facilities.
        </motion.p>
      </div>
    </section>
  );
}
