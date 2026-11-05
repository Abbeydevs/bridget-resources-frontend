"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigationConfig } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "pt-4" : "pt-6",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={cn(
            "relative flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300",
            "bg-white/90 shadow-lg backdrop-blur-lg border border-slate-200",
          )}
        >
          <Link href="/" className="flex items-center z-50">
            <Image
              src="/images/logo.jpg"
              alt="Bridget Resources Logo"
              width={160}
              height={45}
              className="object-contain h-5 md:h-8 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navigationConfig.mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group text-sm font-semibold text-[#263b4d]/70 hover:text-[#263b4d] transition-colors"
                >
                  {item.title}
                  {item.isPopular && (
                    <span className="absolute -top-3 -right-4 rounded-full bg-[#dcae4e]/15 px-2 py-0.5 text-[10px] font-bold text-[#9a7831]">
                      Hot
                    </span>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#28868c] rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <Link
              href={navigationConfig.actions.login.href}
              className="text-sm font-bold text-[#263b4d] hover:text-[#28868c] transition-colors"
            >
              {navigationConfig.actions.login.title}
            </Link>
            <Link
              href={navigationConfig.actions.primaryCta.href}
              className="rounded-xl bg-[#28868c] px-6 py-2.5 text-sm font-bold text-white shadow-md hover:bg-[#206a6f] hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              {navigationConfig.actions.primaryCta.title}
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 p-2 text-[#263b4d]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 mt-4 px-4 lg:hidden z-50"
          >
            <div className="flex flex-col rounded-2xl bg-white border border-slate-100 shadow-2xl p-6 gap-4">
              {navigationConfig.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-bold text-[#263b4d] py-3 border-b border-slate-50"
                >
                  {item.title}
                  {item.isPopular && (
                    <span className="rounded-full bg-[#dcae4e]/15 px-2.5 py-1 text-xs font-bold text-[#dcae4e]">
                      Hot
                    </span>
                  )}
                </Link>
              ))}

              <div className="flex flex-col gap-3 mt-4">
                <Link
                  href={navigationConfig.actions.login.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center rounded-xl border-2 border-slate-100 bg-transparent px-5 py-3 text-sm font-bold text-[#263b4d]"
                >
                  {navigationConfig.actions.login.title}
                </Link>
                <Link
                  href={navigationConfig.actions.primaryCta.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center rounded-xl bg-[#28868c] px-5 py-3 text-sm font-bold text-white shadow-md"
                >
                  {navigationConfig.actions.primaryCta.title}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
