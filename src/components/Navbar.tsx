"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("waitlist");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/60 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group transition-transform active:scale-95"
          aria-label="StarReply AI Home"
        >
          <Logo size="md" />
        </a>

        {/* Center Pill - Desktop */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200/60 text-xs font-medium text-slate-600">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
          <span>Automated Google Review Replies</span>
          <span className="text-slate-300">•</span>
          <span className="text-brand-600 font-semibold">WhatsApp Native</span>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="mailto:vamshi@starreply.tech"
            className="text-xs sm:text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-slate-100/70"
          >
            <Mail className="w-4 h-4 text-slate-400 group-hover:text-brand-500" />
            <span>Contact Us</span>
          </a>

          <a
            href="#waitlist"
            onClick={scrollToWaitlist}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 active:bg-brand-700 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-sm hover:shadow-glow transition-all duration-200"
          >
            <span>Join Waitlist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
