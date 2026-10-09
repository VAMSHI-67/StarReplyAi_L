import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  useImage?: boolean;
}

export const LogoStarIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1D9E75" />
          <stop offset="100%" stopColor="#158461" />
        </linearGradient>
      </defs>
      {/* 5-pointed Star with circular return arrow stylized like StarReply logo */}
      <path
        d="M50 4L63.5 32.5L95 36.5L71.5 58L78 89L50 73.5L22 89L28.5 58L5 36.5L36.5 32.5L50 4Z"
        fill="url(#starGradient)"
      />
      {/* Cutout / overlay reply arrow curving inside the star */}
      <path
        d="M34 56C34 46 42 38 52 38L62 38M62 38L54 30M62 38L54 46"
        stroke="#ffffff"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 54C34 62 40 68 49 68C55 68 60 64 63 60"
        stroke="#ffffff"
        strokeWidth="6.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({ className = "", size = "md", useImage = true }) => {
  const sizeClasses = {
    sm: "h-7",
    md: "h-9",
    lg: "h-11",
    xl: "h-14",
  };

  if (useImage) {
    return (
      <div className={`flex items-center gap-2.5 select-none ${className}`}>
        {/* Render the exact provided brand asset with high fidelity */}
        <div className="relative flex items-center">
          <Image
            src="/logo.jpg"
            alt="StarReply AI"
            width={180}
            height={44}
            priority
            className={`${sizeClasses[size]} w-auto object-contain mix-blend-multiply`}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 font-display font-bold tracking-tight select-none ${className}`}>
      <LogoStarIcon className="w-8 h-8 text-brand-500" />
      <span className="text-xl md:text-2xl text-slate-900 tracking-tight flex items-center">
        StarReply
        <span className="text-brand-500 ml-1 font-semibold">AI</span>
      </span>
    </div>
  );
};
