"use client";

import { Send, Briefcase } from "lucide-react";
import { serviceCategories } from "@/config/services";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface EnquiryModalProps {
  serviceName: string;
  triggerElement: React.ReactNode;
}

export function EnquiryModal({
  serviceName,
  triggerElement,
}: EnquiryModalProps) {
  const allServices = serviceCategories.flatMap((c) =>
    c.services.map((s) => s.title),
  );

  return (
    <Dialog>
      <DialogTrigger>{triggerElement}</DialogTrigger>

      <DialogContent className="sm:max-w-112.5 p-0 overflow-hidden bg-white border-slate-200">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-[#263b4d]/5 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-[#263b4d]" />
            </div>
            <DialogTitle className="text-xl font-bold text-[#263b4d]">
              Service Enquiry
            </DialogTitle>
          </div>
          <DialogDescription className="text-sm font-medium text-slate-500 text-left">
            Provide your details below. A dedicated Client Liaison will contact
            you shortly regarding your corporate service requirements[cite: 1].
          </DialogDescription>
        </DialogHeader>

        <div className="p-6">
          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-xs font-bold text-[#263b4d] uppercase tracking-wider mb-2">
                Service of Interest
              </label>
              <select
                defaultValue={serviceName}
                className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-[#263b4d] focus:outline-none focus:border-[#28868c] focus:ring-1 focus:ring-[#28868c] appearance-none"
              >
                <option value="" disabled>
                  Select a service...
                </option>
                {allServices.map((service, idx) => (
                  <option key={idx} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#263b4d] uppercase tracking-wider mb-2">
                Full Name / Company Name
              </label>
              <input
                type="text"
                placeholder="Enter your name or business name"
                className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-sm font-medium text-[#263b4d] focus:outline-none focus:border-[#28868c] focus:ring-1 focus:ring-[#28868c]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-[#263b4d] uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-sm font-medium text-[#263b4d] focus:outline-none focus:border-[#28868c] focus:ring-1 focus:ring-[#28868c]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#263b4d] uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+234..."
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-sm font-medium text-[#263b4d] focus:outline-none focus:border-[#28868c] focus:ring-1 focus:ring-[#28868c]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#263b4d] uppercase tracking-wider mb-2">
                Brief Requirement
              </label>
              <textarea
                placeholder="How can we assist your business?"
                rows={3}
                className="w-full p-4 rounded-xl border border-slate-200 bg-white text-sm font-medium text-[#263b4d] focus:outline-none focus:border-[#28868c] focus:ring-1 focus:ring-[#28868c] resize-none"
              ></textarea>
            </div>

            <button
              type="button"
              className="mt-2 w-full inline-flex items-center justify-center rounded-xl bg-[#263b4d] text-white h-14 text-sm font-bold transition-all hover:bg-[#1a2936] shadow-md"
            >
              Submit Enquiry
              <Send className="ml-2 w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-2 font-medium">
              By submitting, you agree to our NDPR-compliant data policies.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
