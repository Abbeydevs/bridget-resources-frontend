"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[85vh] bg-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#28868c]/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl"
      >
        <div className="w-16 h-16 rounded-2xl bg-[#dcae4e]/10 flex items-center justify-center mb-6">
          <Compass className="w-8 h-8 text-[#dcae4e]" />
        </div>

        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
          Error 404
        </h2>

        <h1 className="text-7xl md:text-9xl font-extralight text-[#263b4d] tracking-tight mb-6">
          Page Not <span className="font-bold">Found.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-10">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable. Let&apos;s get you back on
          track.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#263b4d] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#1a2936] shadow-lg hover:-translate-y-0.5"
          >
            <Home className="mr-2 w-4 h-4" />
            Back to Homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white border border-slate-200 px-8 py-4 text-sm font-bold text-[#263b4d] transition-all hover:bg-slate-50 hover:-translate-y-0.5"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Go Back Previous
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-x-8 gap-y-4">
          <Link
            href="/contribution-plans"
            className="text-sm font-bold text-[#28868c] hover:text-[#1f666b] transition-colors"
          >
            Contribution Plans
          </Link>
          <Link
            href="/services"
            className="text-sm font-bold text-[#28868c] hover:text-[#1f666b] transition-colors"
          >
            Corporate Services
          </Link>
          <Link
            href="/contact"
            className="text-sm font-bold text-[#28868c] hover:text-[#1f666b] transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
