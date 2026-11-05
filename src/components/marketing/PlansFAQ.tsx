"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function PlansFAQ() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-[#263b4d] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 font-medium">
            Everything you need to know about Bridget Resources contribution
            plans.
          </p>
        </motion.div>

        <Accordion className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-bold text-[#263b4d] hover:text-[#28868c]">
              Can I withdraw my funds before 6 months?
            </AccordionTrigger>
            <AccordionContent className="text-slate-500 font-medium leading-relaxed">
              Yes. Partial or full withdrawals are supported at any time.
              However, please note that partial withdrawals reduce your balance,
              and closing your plan entirely will reset your 6-month eligibility
              clock.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-bold text-[#263b4d] hover:text-[#28868c]">
              How exactly does the 6-month loan eligibility work?
            </AccordionTrigger>
            <AccordionContent className="text-slate-500 font-medium leading-relaxed">
              To qualify for our low-interest lending facilities, you must
              maintain 6 consecutive months of active contribution. This
              demonstrates financial discipline and acts as the primary
              eligibility requirement, replacing complex external underwriting.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-bold text-[#263b4d] hover:text-[#28868c]">
              How do I make my daily or monthly deposits?
            </AccordionTrigger>
            <AccordionContent className="text-slate-500 font-medium leading-relaxed">
              You can fund your contribution plan effortlessly using a debit
              card, direct bank transfer, or by depositing into the dedicated
              virtual account provided upon registration. Your balance updates
              instantly.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
