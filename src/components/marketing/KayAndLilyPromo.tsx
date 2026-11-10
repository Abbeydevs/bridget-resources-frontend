"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  ShieldCheck,
  CalendarClock,
  ArrowRight,
  Home,
} from "lucide-react";

export function KayAndLilyPromo() {
  return (
    <section className="w-full py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#050B14] rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row items-center shadow-2xl relative">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[120%] bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-[#28868c]/20 via-transparent to-transparent blur-3xl" />
          </div>

          <div className="w-full lg:w-1/2 p-10 md:p-16 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold text-[#dcae4e] uppercase tracking-widest mb-6"
            >
              <Home className="w-3.5 h-3.5" />
              Powered by Bridget Resources
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
            >
              Kay & Lily Homes
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <div className="flex items-center text-slate-300 text-sm font-medium">
                <MapPin className="w-4 h-4 text-[#28868c] mr-2" />
                Ibeju Lekki & Epe
              </div>
              <div className="flex items-center text-slate-300 text-sm font-medium">
                <ShieldCheck className="w-4 h-4 text-[#28868c] mr-2" />
                Title: C of O
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                <div className="text-[#dcae4e] font-bold text-lg mb-1">
                  500 sqm
                </div>
                <div className="text-white text-2xl font-extrabold">
                  ₦15 Million
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                <div className="text-[#dcae4e] font-bold text-lg mb-1">
                  350 sqm
                </div>
                <div className="text-white text-2xl font-extrabold">
                  ₦10 Million
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 mb-10 p-4 rounded-xl bg-[#28868c]/10 border border-[#28868c]/20"
            >
              <CalendarClock className="w-6 h-6 text-[#28868c] shrink-0" />
              <p className="text-sm text-slate-300 font-medium">
                Flexible{" "}
                <strong className="text-white">
                  12, 24, 36, and 48 months
                </strong>{" "}
                payment plans available.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/contact?service=Real%20Estate%20(Kay%20and%20Lily)"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white text-[#050B14] px-8 py-4 text-sm font-bold transition-all hover:bg-slate-100"
              >
                Secure Your Plot
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 min-h-75 lg:min-h-full bg-[url('/images/real-estate-bg.jpg')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-l from-transparent to-[#050B14] opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="w-full max-w-sm aspect-4/3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center p-6 text-center transform rotate-2 hover:rotate-0 transition-all duration-500">
                <Home className="w-12 h-12 text-[#28868c] mb-4" />
                <h4 className="text-white font-bold text-xl mb-2">
                  Prime Real Estate
                </h4>
                <p className="text-slate-300 text-sm">
                  Build your future with Bridget Resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
