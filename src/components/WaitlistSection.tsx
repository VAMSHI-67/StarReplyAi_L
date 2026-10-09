"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Mail, Sparkles, ShieldCheck } from "lucide-react";

export const WaitlistSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Failed to join waitlist. Please try again.");
      } else {
        setStatus("success");
        setMessage(data.message || "Thank you for joining the waitlist! We will be in touch soon.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again or email vamshi@starreply.tech.");
    }
  };

  return (
    <section id="waitlist" className="py-20 px-4 sm:px-6 relative">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Priority Early Access</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
          Be the First to Transform Your Google Reviews
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto mb-8">
          Join our waitlist for early access. We&apos;ll notify you the moment StarReply AI is ready for your business.
        </p>

        {/* Waitlist Form Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-premium max-w-xl mx-auto">
          {status === "success" ? (
            <div className="py-4 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">You&apos;re on the list!</h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">{message}</p>
              <p className="text-xs text-slate-600 pt-2">
                Questions? Email us anytime at{" "}
                <a href="mailto:vamshi@starreply.tech" className="text-brand-600 font-semibold underline">
                  vamshi@starreply.tech
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work or business email"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 active:bg-brand-700 disabled:opacity-60 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-sm hover:shadow-glow transition-all duration-200 flex-shrink-0 cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <span>Join Waitlist</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {status === "error" && (
                <p className="text-xs text-rose-600 text-left pl-1">{message}</p>
              )}

              <div className="flex items-center justify-center gap-4 text-xs text-slate-600 pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-500" /> No spam ever
                </span>
                <span>•</span>
                <span>Direct WhatsApp Onboarding</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
