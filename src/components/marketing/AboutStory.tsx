"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Users } from "lucide-react";

export function AboutStory() {
  return (
    <section className="w-full py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          <div className="lg:col-span-7 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold text-[#263b4d] mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                We provide practical, reliable, and flexible financial services
                designed to address the diverse needs of individuals and
                businesses. From daily and monthly contribution savings plans,
                business funding, and working capital to commodity financing,
                project finance, insurance, real estate, and debt recovery, we
                help our clients access solutions that support growth, financial
                stability, and long-term success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-3xl font-extrabold text-[#263b4d] mb-6">
                A Culture of Discipline
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                Our daily, weekly, and monthly contribution plans are designed
                to encourage consistent saving and financial discipline, helping
                individuals and businesses build towards their personal, family,
                or business goals. Whether you are saving gradually for a
                specific need or looking to develop a stronger savings culture,
                our structured contribution plans provide a convenient and
                flexible way to save consistently.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col gap-8 sticky top-32"
            >
              <div>
                <h3 className="text-xl font-bold text-[#263b4d] mb-2">
                  Our Client-Focused Approach
                </h3>
                <p className="text-sm font-medium text-slate-500">
                  At Bridget Resources, we understand that every individual and
                  business is different.
                </p>
              </div>

              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#28868c]/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-[#28868c]" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-[#263b4d] mb-1">
                      Tailored Understanding
                    </strong>
                    <span className="text-sm font-medium text-slate-500">
                      We don&apos;t use rigid templates. We take the time to
                      understand each client&apos;s unique financial reality.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#dcae4e]/10 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-[#dcae4e]" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-[#263b4d] mb-1">
                      Tangible Results
                    </strong>
                    <span className="text-sm font-medium text-slate-500">
                      We provide suitable solutions that help turn
                      opportunities, contracts, assets, savings, and business
                      plans into actual results.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-[#263b4d] mb-1">
                      NDPR Compliant
                    </strong>
                    <span className="text-sm font-medium text-slate-500">
                      Your data and financial records are protected by
                      enterprise-grade security and Nigerian data protection
                      regulations.
                    </span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
