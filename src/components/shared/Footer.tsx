"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { MapPin, Mail, Phone, ShieldCheck } from "lucide-react";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa6";
import { useEffect, useState } from "react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2024);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#263b4d] pt-20 pb-10 border-t border-[#263b4d] mt-auto">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="mb-6">
              <Image
                src="/images/logo.jpg"
                alt="Bridget Resources Logo"
                width={180}
                height={50}
                className="object-contain h-12 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              Connecting individuals, entrepreneurs, and SMEs with practical
              savings plans and tailored working capital in Naira and USD.
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#28868c] hover:text-white transition-all"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#28868c] hover:text-white transition-all"
              >
                <FaTiktok className="w-4.5 h-4.5" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#28868c] hover:text-white transition-all"
              >
                <FaFacebookF className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="flex flex-col gap-4">
              {siteConfig.links.quick.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#dcae4e] transition-colors font-medium"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide">Legal</h4>
            <ul className="flex flex-col gap-4">
              {siteConfig.links.legal.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#dcae4e] transition-colors font-medium"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 tracking-wide">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 text-sm text-slate-400 font-medium">
                <MapPin className="w-5 h-5 text-[#28868c] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {siteConfig.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400 font-medium">
                <Mail className="w-5 h-5 text-[#28868c] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400 font-medium">
                <Phone className="w-5 h-5 text-[#28868c] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs font-medium">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-xs font-medium bg-white/5 px-3 py-1.5 rounded-full">
            <ShieldCheck className="w-4 h-4 text-[#dcae4e]" />
            NDPR Compliant Institution
          </div>
        </div>
      </div>
    </footer>
  );
}
