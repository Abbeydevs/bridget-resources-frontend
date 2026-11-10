"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight, Zap } from "lucide-react";

export function TargetSavingsBanner() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-linear-to-r from-[#28868c] to-[#1f666b] shadow-xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#dcae4e] opacity-20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-[10px] font-bold text-white uppercase tracking-widest mb-4">
                <Zap className="w-3 h-3 text-[#dcae4e]" />
                Detty December Promo
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                90-Day Target Savings
              </h2>
              <p className="text-white/80 font-medium text-lg max-w-md mx-auto md:mx-0">
                Small daily contributions make a meaningful difference. Hit your
                end-of-year goals effortlessly.
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex flex-col items-center text-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-bold text-slate-400 uppercase">
                      Save Daily
                    </span>
                    <span className="text-xl font-bold text-[#263b4d]">
                      ₦5,600
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#28868c]/10 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-[#28868c]" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-bold text-slate-400 uppercase">
                      Get Payout
                    </span>
                    <span className="text-xl font-bold text-[#28868c]">
                      ₦500,000
                    </span>
                  </div>
                </div>

                <Link
                  href="/contact?service=Target%20Savings%20(90-Day)"
                  className="w-full inline-flex items-center justify-center rounded-xl bg-[#263b4d] text-white px-6 py-3.5 text-sm font-bold transition-all hover:bg-[#1a2936] shadow-md"
                >
                  Start 90-Day Challenge
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
