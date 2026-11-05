"use client";

import { motion, Variants } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/config/testimonials";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export function Testimonials() {
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
          <h2 className="text-4xl md:text-5xl font-extralight text-[#263b4d] tracking-tight mb-6">
            Trusted by individuals <br className="hidden sm:block" />
            <span className="font-bold text-[#28868c]">
              and growing enterprises.
            </span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            Real experiences from members who have used our structured savings
            and tailored capital to achieve their financial goals.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeUp}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-[#28868c]/5 transition-all duration-300 flex flex-col relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-[#28868c]/10" />

              <div className="grow mb-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[#dcae4e]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 font-medium leading-relaxed relative z-10">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-[#263b4d] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-[#263b4d] font-bold text-sm">
                    {testimonial.author}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 text-xs font-medium">
                      {testimonial.role}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="text-[#28868c] font-bold text-[10px] uppercase tracking-wider">
                      {testimonial.tier}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
