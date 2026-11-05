"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export function AboutHero() {
  return (
    <section className="w-full py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#263b4d]/10 text-[10px] font-bold text-[#263b4d] uppercase tracking-widest mb-6"
        >
          <Building2 className="w-3.5 h-3.5" />
          Who We Are
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#263b4d] tracking-tight mb-6"
        >
          Practical Financial Solutions.
          <br className="hidden sm:block" />
          Tangible Results.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
        >
          Bridget Resources Limited is a dynamic financial and business
          solutions company committed to connecting individuals, entrepreneurs,
          and SMEs with the capital they need to achieve their goals.
        </motion.p>
      </div>
    </section>
  );
}
