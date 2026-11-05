"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { serviceCategories } from "@/config/services";

interface ServicesCatalogProps {
  ModalComponent: React.ComponentType<{
    serviceName: string;
    triggerElement: React.ReactNode;
  }>;
}

export function ServicesCatalog({ ModalComponent }: ServicesCatalogProps) {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);

  const selectedCategory = serviceCategories.find(
    (c) => c.id === activeCategory,
  );

  return (
    <section className="w-full py-16 md:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="w-full lg:w-1/4 shrink-0">
            <div className="sticky top-32 flex flex-col gap-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 ml-4">
                Service Categories
              </h3>
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`text-left px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                    activeCategory === category.id
                      ? "bg-[#263b4d] text-white shadow-md"
                      : "text-slate-500 hover:bg-white hover:text-[#263b4d] border border-transparent hover:border-slate-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-3/4">
            <AnimatePresence mode="wait">
              {selectedCategory && (
                <motion.div
                  key={selectedCategory.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-8"
                >
                  <div className="mb-6">
                    <h2 className="text-3xl font-extrabold text-[#263b4d] tracking-tight mb-3">
                      {selectedCategory.label}
                    </h2>
                    <div className="w-12 h-1 bg-[#dcae4e] rounded-full"></div>
                  </div>

                  {selectedCategory.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-start"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                        <service.icon className="w-8 h-8 text-[#28868c]" />
                      </div>

                      <div className="grow">
                        <h3 className="text-2xl font-bold text-[#263b4d] mb-4">
                          {service.title}
                        </h3>
                        <p className="text-slate-500 font-medium leading-relaxed mb-6">
                          {service.desc}
                        </p>

                        <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 mb-8">
                          <h4 className="text-xs font-bold text-[#263b4d] uppercase tracking-wider mb-3">
                            Ideal For
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <li className="flex items-center text-sm font-medium text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-[#dcae4e] mr-2 shrink-0" />
                              Registered Enterprises
                            </li>
                            <li className="flex items-center text-sm font-medium text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-[#dcae4e] mr-2 shrink-0" />
                              Corporate Entities
                            </li>
                          </ul>
                        </div>

                        <ModalComponent
                          serviceName={service.title}
                          triggerElement={
                            <button className="inline-flex items-center justify-center rounded-xl bg-white border-2 border-[#263b4d] text-[#263b4d] px-6 py-3 text-sm font-bold transition-all hover:bg-[#263b4d] hover:text-white">
                              Enquire About This Service
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                          }
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
