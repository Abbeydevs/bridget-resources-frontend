"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Wallet, BriefcaseBusiness } from "lucide-react";

export function QuickSelector() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center overflow-hidden bg-[#050B14] py-24">
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, -5, 8, 0],
            scale: [1, 1.05, 1],
            borderRadius: [
              "50% 50% 20% 80% / 25% 80% 20% 75%",
              "30% 70% 70% 30% / 30% 30% 70% 70%",
              "50% 50% 20% 80% / 25% 80% 20% 75%",
            ],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[80%] h-[120%] bg-linear-to-tr from-[#dcae4e]/30 via-[#28868c]/20 to-transparent blur-[120px] mix-blend-screen origin-center"
        />

        <motion.div
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[10%] right-[5%] w-[60%] h-[80%] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-[#28868c]/30 via-[#263b4d]/40 to-transparent blur-[130px] rounded-full mix-blend-screen"
        />

        <div className="absolute inset-0 bg-linear-to-r from-[#050B14] via-[#050B14]/95 to-transparent w-[80%] lg:w-[60%]" />

        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Choose your <span className="text-white/60">financial path.</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Whether you are building a personal safety net or funding enterprise
            growth, we have a structured plan for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl">
          <Link href="/contribution-plans" className="group block h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="h-full bg-white/5 backdrop-blur-md rounded-4xl p-8 sm:p-10 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-[#28868c]/30 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#28868c] opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700 translate-x-10 -translate-y-10 rounded-full" />

              <div className="w-12 h-12 rounded-xl bg-[#28868c]/20 border border-[#28868c]/20 flex items-center justify-center mb-8 relative z-10">
                <Wallet className="w-6 h-6 text-[#28868c]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                Save consistently & unlock loans.
              </h3>

              <p className="text-slate-400 font-medium mb-10 leading-relaxed grow relative z-10">
                Join the Daily or Monthly Contribution Plan. Save toward your
                goals and automatically unlock low-interest loans after 6 months
                of active contribution[cite: 6].
              </p>

              <div className="flex items-center text-[#28868c] font-bold text-sm relative z-10">
                Explore Contribution Plans
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.div>
          </Link>

          <Link href="/services" className="group block h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="h-full bg-white/5 backdrop-blur-md rounded-4xl p-8 sm:p-10 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-[#dcae4e]/30 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#dcae4e] opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-700 translate-x-10 -translate-y-10 rounded-full" />

              <div className="w-12 h-12 rounded-xl bg-[#dcae4e]/15 border border-[#dcae4e]/20 flex items-center justify-center mb-8 relative z-10">
                <BriefcaseBusiness className="w-6 h-6 text-[#dcae4e]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                Fund and grow your business.
              </h3>

              <p className="text-slate-400 font-medium mb-10 leading-relaxed grow relative z-10">
                Access tailored corporate capital including LPO funding, SME
                working capital, asset finance, project finance, and
                professional debt recovery[cite: 6].
              </p>

              <div className="flex items-center text-[#dcae4e] font-bold text-sm relative z-10">
                View Business Services
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
