"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { serviceCategories } from "@/config/services";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const allServices = serviceCategories.flatMap((cat) =>
    cat.services.map((s) => s.title),
  );

  return (
    <section className="relative w-full bg-white py-24 z-10 border-t border-slate-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#263b4d] tracking-tight leading-tight mb-6"
            >
              Ready to structure your financial future?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-500 mb-12 max-w-md font-medium leading-relaxed"
            >
              Whether you want to join our contribution scheme or secure
              tailored capital for your business, our team is ready to help.
            </motion.p>

            <motion.div variants={stagger} className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#28868c]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#28868c]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#263b4d] mb-1">
                    Head Office
                  </h4>
                  <p className="text-slate-500 font-medium leading-relaxed max-w-xs">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#28868c]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#28868c]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#263b4d] mb-1">
                    Email Us
                  </h4>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-slate-500 font-medium hover:text-[#28868c] transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#28868c]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#28868c]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#263b4d] mb-1">
                    Call Support
                  </h4>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-slate-500 font-medium hover:text-[#28868c] transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#FAFAFA] rounded-4xl p-8 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/50">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center h-full py-16">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#263b4d] mb-2">
                    Message Sent
                  </h3>
                  <p className="text-slate-500 font-medium">
                    Our Client Liaison team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-bold text-[#263b4d]"
                      >
                        First Name
                      </label>
                      <input
                        required
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#28868c]/50 focus:border-[#28868c] transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="lastName"
                        className="text-sm font-bold text-[#263b4d]"
                      >
                        Last Name
                      </label>
                      <input
                        required
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#28868c]/50 focus:border-[#28868c] transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-bold text-[#263b4d]"
                    >
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#28868c]/50 focus:border-[#28868c] transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="service"
                      className="text-sm font-bold text-[#263b4d]"
                    >
                      Topic of Interest
                    </label>
                    <select
                      required
                      id="service"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#28868c]/50 focus:border-[#28868c] transition-all text-slate-600 appearance-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="Daily Contribution Plan">
                        Daily Contribution Plan
                      </option>
                      <option value="Monthly Contribution Plan">
                        Monthly Contribution Plan
                      </option>
                      <optgroup label="Business Services">
                        {allServices.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-bold text-[#263b4d]"
                    >
                      Message
                    </label>
                    <textarea
                      required
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#28868c]/50 focus:border-[#28868c] transition-all resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl bg-[#263b4d] hover:bg-[#1a2936] text-white h-14 text-base font-bold shadow-lg mt-2 transition-transform hover:-translate-y-0.5"
                  >
                    Submit Enquiry <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <p className="text-xs text-slate-400 text-center font-medium mt-2">
                    By submitting, you agree to our NDPR Notice and Privacy
                    Policy[cite: 4].
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
