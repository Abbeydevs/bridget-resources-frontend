"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function ServicesPageHero() {
  return (
    <section className="w-full py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#dcae4e]/10 text-[10px] font-bold text-[#dcae4e] uppercase tracking-widest mb-6"
        >
          <Briefcase className="w-3.5 h-3.5" />
          Corporate & Advisory
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#263b4d] tracking-tight mb-6"
        >
          Practical, Reliable Capital & Advisory Solutions{" "}
          <br className="hidden sm:block" />
          for Every Stage of Business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
        >
          Designed specifically for SME owners, contractors, and corporate
          decision-makers. From LPO backing to professional debt recovery, we
          provide the structured liquidity your enterprise needs to scale.
        </motion.p>
      </div>
    </section>
  );
}
