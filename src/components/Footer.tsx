import React from "react";
import { Logo } from "./Logo";
import { Mail } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/80 bg-white/50 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <Logo size="sm" />
          <span className="hidden sm:inline text-slate-300">|</span>
          <p className="text-xs text-slate-500">
            StarReply AI © 2026
          </p>
        </div>

        <div className="text-center sm:text-right space-y-1">
          <p className="text-xs font-medium text-slate-700">
            Made for Indian businesses.
          </p>
          <p className="text-xs text-slate-500 flex items-center justify-center sm:justify-end gap-1">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>Contact:</span>
            <a
              href="mailto:vamshi@starreply.tech"
              className="text-brand-600 hover:text-brand-700 underline font-medium"
            >
              vamshi@starreply.tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
