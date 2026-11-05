"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Building2,
  UserCircle2,
  MessageSquare,
} from "lucide-react";
import { serviceCategories } from "@/config/services";

export function ContactPageContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const allServices = serviceCategories.flatMap((cat) =>
    cat.services.map((s) => s.title),
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-[#263b4d] tracking-tight mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 font-medium"
          >
            Whether you need structured corporate capital or support with your
            contribution plan, our dedicated teams are ready to assist.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#FAFAFA] rounded-3xl p-8 border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#263b4d]/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#263b4d]" />
                </div>
                <h3 className="text-xl font-bold text-[#263b4d]">
                  Corporate & General
                </h3>
              </div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <Phone className="w-5 h-5 text-slate-400" />
                  <a
                    href="tel:09091333198"
                    className="hover:text-[#28868c] transition-colors"
                  >
                    09091333198
                  </a>
                </li>
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <Mail className="w-5 h-5 text-slate-400" />
                  <a
                    href="mailto:bridgetresources24@gmail.com"
                    className="hover:text-[#28868c] transition-colors"
                  >
                    bridgetresources24@gmail.com
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#FAFAFA] rounded-3xl p-8 border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#28868c]/10 flex items-center justify-center">
                  <UserCircle2 className="w-5 h-5 text-[#28868c]" />
                </div>
                <h3 className="text-xl font-bold text-[#263b4d]">
                  Member Support
                </h3>
              </div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <MessageSquare className="w-5 h-5 text-slate-400" />
                  <a
                    href="https://wa.me/2348165918211"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#28868c] transition-colors"
                  >
                    08165918211 (WhatsApp)
                  </a>
                </li>
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <Mail className="w-5 h-5 text-slate-400" />
                  <a
                    href="mailto:bridgetresourcescustomercare@gmail.com"
                    className="hover:text-[#28868c] transition-colors overflow-hidden text-ellipsis whitespace-nowrap"
                    title="bridgetresourcescustomercare@gmail.com"
                  >
                    bridgetresourcescustomercare@gmail.com
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#FAFAFA] rounded-3xl p-8 border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#dcae4e]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#dcae4e]" />
                </div>
                <h3 className="text-xl font-bold text-[#263b4d]">
                  Head Office
                </h3>
              </div>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                6 Chilloville St, Royal View Estate,
                <br />
                Ikota, Lekki, Lagos, Nigeria
              </p>
              <div className="w-full h-32 bg-slate-200 rounded-xl flex items-center justify-center border border-slate-300">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Interactive Map Placeholder
                </span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/50"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#263b4d] mb-2">
                  Send a Message
                </h3>
                <p className="text-sm font-medium text-slate-500">
                  Fill out the form below. Your enquiry will be routed directly
                  to our Client Liaison team.
                </p>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center h-64 py-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#263b4d] mb-2">
                    Enquiry Submitted
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">
                    We have received your message and will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-[#263b4d] uppercase tracking-wider">
                      Enquiry Category
                    </label>
                    <select
                      required
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-[#263b4d] focus:outline-none focus:border-[#28868c] focus:ring-1 focus:ring-[#28868c] appearance-none"
                    >
                      <option value="" disabled>
                        Select a category...
                      </option>
                      <option value="Daily Contribution Plan">
                        Daily Contribution Plan
                      </option>
                      <option value="Monthly Contribution Plan">
                        Monthly Contribution Plan
                      </option>
                      <optgroup label="Corporate & Financial Services">
                        {allServices.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </optgroup>
                      <option value="General Support">
                        General Support / Other
                      </option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-[#263b4d] uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-sm font-medium text-[#263b4d] focus:outline-none focus:border-[#28868c] focus:ring-1 focus:ring-[#28868c]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-[#263b4d] uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="jane@example.com"
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-sm font-medium text-[#263b4d] focus:outline-none focus:border-[#28868c] focus:ring-1 focus:ring-[#28868c]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-[#263b4d] uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="080..."
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-sm font-medium text-[#263b4d] focus:outline-none focus:border-[#28868c] focus:ring-1 focus:ring-[#28868c]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-[#263b4d] uppercase tracking-wider">
                      Estimated Amount (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="₦ Amount (if related to funding or loans)"
                      className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-sm font-medium text-[#263b4d] focus:outline-none focus:border-[#28868c] focus:ring-1 focus:ring-[#28868c]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-[#263b4d] uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      required
                      placeholder="How can we help you?"
                      rows={5}
                      className="w-full p-4 rounded-xl border border-slate-200 bg-white text-sm font-medium text-[#263b4d] focus:outline-none focus:border-[#28868c] focus:ring-1 focus:ring-[#28868c] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="mt-4 w-full inline-flex items-center justify-center rounded-xl bg-[#263b4d] text-white h-14 text-sm font-bold transition-all hover:bg-[#1a2936] shadow-md"
                  >
                    Submit Enquiry
                    <Send className="ml-2 w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2 font-medium">
                    By submitting, you agree to our NDPR Notice and Terms of
                    Use.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
