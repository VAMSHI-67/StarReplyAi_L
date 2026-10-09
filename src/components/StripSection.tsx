import React from "react";
import { Star, Sparkles, MessageCircle, ArrowRight } from "lucide-react";

export const StripSection: React.FC = () => {
  return (
    <section className="py-12 border-y border-slate-200/80 bg-white/60 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-brand-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* The 3-part Pipeline Tag */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs mb-4 text-xs sm:text-sm font-semibold text-slate-800">
          <span className="flex items-center gap-1.5 text-slate-900">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Google Reviews</span>
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-brand-500 hidden sm:inline" />
          <span className="text-slate-300 sm:hidden">→</span>
          <span className="flex items-center gap-1.5 text-brand-700">
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span>AI-Powered Replies</span>
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-brand-500 hidden sm:inline" />
          <span className="text-slate-300 sm:hidden">→</span>
          <span className="flex items-center gap-1.5 text-emerald-800">
            <MessageCircle className="w-4 h-4 text-whatsapp fill-whatsapp" />
            <span>WhatsApp Approval</span>
          </span>
        </div>

        {/* Short Line */}
        <p className="text-sm sm:text-base text-slate-600 font-medium">
          Built for India&apos;s local businesses. <span className="text-brand-600 font-semibold">Coming soon.</span>
        </p>
      </div>
    </section>
  );
};
