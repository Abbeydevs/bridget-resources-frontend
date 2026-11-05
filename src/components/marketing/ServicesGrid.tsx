"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "@/config/services";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const tabContentVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, staggerChildren: 0.1 },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export function ServicesGrid() {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].id);

  return (
    <section className="relative w-full bg-[#FAFAFA] py-24 z-10 border-t border-slate-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#263b4d] tracking-tight mb-4">
            Comprehensive Financial Solutions.
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            Beyond our flagship contribution schemes, we provide tailored
            capital structures and advisory services for businesses, MFIs, and
            institutions[cite: 4].
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === category.id
                    ? "bg-[#263b4d] text-white shadow-md"
                    : "text-slate-500 hover:text-[#263b4d] hover:bg-slate-50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-100">
          <AnimatePresence mode="wait">
            {serviceCategories.map(
              (category) =>
                category.id === activeTab && (
                  <motion.div
                    key={category.id}
                    variants={tabContentVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {category.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#28868c]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                      >
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-[#28868c]/10 transition-colors duration-300">
                          <service.icon className="w-6 h-6 text-[#263b4d] group-hover:text-[#28868c] transition-colors" />
                        </div>
                        <h4 className="text-xl font-bold text-[#263b4d] mb-3">
                          {service.title}
                        </h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed grow mb-8">
                          {service.desc}
                        </p>

                        <Link
                          href="/contact"
                          className="inline-flex items-center text-[#28868c] font-bold text-sm mt-auto w-fit"
                        >
                          Enquire Now
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    ))}
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
