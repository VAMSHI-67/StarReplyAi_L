import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroVisual } from "@/components/HeroVisual";
import { StripSection } from "@/components/StripSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";
import { ArrowRight, Mail, Sparkles, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fafaf9] text-slate-900 relative overflow-hidden bg-dot-pattern selection:bg-brand-500 selection:text-white">
      {/* Top ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-brand-500/10 via-brand-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto text-center">

          {/* Small badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-brand-500/20 shadow-subtle text-xs font-semibold text-brand-700 mb-6 backdrop-blur-xs animate-float">
            <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-brand-500" />
            <span>AI-Powered Reputation Management</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            Automated Google Review Replies <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-700">
              for Indian Businesses.
            </span>
          </h1>

          {/* Supporting headline */}
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 max-w-3xl mx-auto mb-5 leading-snug">
            Reply to every Google Maps review in Hindi, Telugu, Tamil, and English —{" "}
            <span className="text-slate-900 font-semibold underline decoration-brand-400 decoration-2 underline-offset-4">
              right from WhatsApp.
            </span>
          </p>

          {/* Short description */}
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            StarReply AI helps local businesses save time and build customer trust with personalized, AI-generated review replies. Smart responses, regional languages, and simple WhatsApp approval — all in one place.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
            <a
              href="#waitlist"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-md hover:shadow-glow transition-all duration-200"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:vamshi@starreply.tech"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200/80 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-xs transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Regional Languages Pill Bar */}
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500 mb-10">
            <span className="flex items-center gap-1 text-slate-700 font-semibold">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> Supports:
            </span>
            <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200/70 text-slate-700">English</span>
            <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200/70 text-slate-700">हिन्दी (Hindi)</span>
            <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200/70 text-slate-700">తెలుగు (Telugu)</span>
            <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200/70 text-slate-700">தமிழ் (Tamil)</span>
          </div>

          {/* Hero Illustration / Concept Flow */}
          <div className="mt-4">
            <HeroVisual />
          </div>

        </div>
      </section>

      {/* STRIP SECTION */}
      <StripSection />

      {/* WAITLIST SECTION */}
      <WaitlistSection />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
