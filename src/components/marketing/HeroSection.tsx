"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navigationConfig } from "@/config/navigation";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-screen flex flex-col justify-center overflow-hidden bg-[#050B14]">
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 8, -5, 0],
            scale: [1, 1.1, 1],
            borderRadius: [
              "30% 70% 70% 30% / 30% 30% 70% 70%",
              "50% 50% 20% 80% / 25% 80% 20% 75%",
              "30% 70% 70% 30% / 30% 30% 70% 70%",
            ],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] right-[-5%] w-[85%] h-[120%] bg-linear-to-bl from-[#28868c]/90 via-[#28868c]/40 to-transparent blur-[110px] mix-blend-screen origin-top-right"
        />

        <motion.div
          animate={{
            y: [0, 50, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-[10%] right-0 w-[70%] h-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-[#28868c]/50 via-[#263b4d]/40 to-transparent blur-[120px] rounded-full mix-blend-screen"
        />

        <div className="absolute top-[15%] right-[5%] w-125 h-125 sm:w-175 sm:h-175 lg:right-[-5%] lg:top-[10%] opacity-80">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-[#28868c]/30 border-dashed"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute inset-16 rounded-full border border-[#dcae4e]/20"
          />

          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[25%] right-[20%] w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_0_40px_rgba(40,134,140,0.4)]"
          />

          <motion.div
            animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-[20%] left-[15%] w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-tr from-[#28868c]/60 to-transparent backdrop-blur-md border border-white/20"
          />

          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, -20, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-[45%] right-[70%] w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-[#dcae4e]/25 backdrop-blur-md border border-[#dcae4e]/30"
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-r from-[#050B14] via-[#050B14]/90 to-transparent w-[65%] lg:w-[50%]" />

        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-start text-left max-w-2xl lg:ml-0 lg:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-8 mt-16"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#dcae4e]" />
            NDPR Compliant Institution
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.15] mb-6"
          >
            Structured <br />
            Contributions. <br />
            <span className="text-white/70">
              Smart Financial <br /> Support.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-400 font-medium leading-relaxed mb-10 max-w-lg"
          >
            Bridget Resources digitizes traditional group finance. Built on
            trust, strengthened by transparency, and designed to unlock
            low-interest capital for your business after 6 months.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href={navigationConfig.actions.primaryCta.href}
              className="group w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white text-[#050B14] px-6 py-3 text-sm font-bold transition-all hover:bg-slate-100 hover:scale-[1.02] shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)]"
            >
              Start Saving Today
              <div className="ml-2 w-6 h-6 rounded-full bg-[#050B14] flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-transparent border border-white/20 text-white px-6 py-3 text-sm font-bold transition-all hover:bg-white/5"
            >
              See how it works
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
