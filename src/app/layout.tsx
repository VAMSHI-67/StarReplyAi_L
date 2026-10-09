import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StarReply AI — Automated Google Review Replies for Indian Businesses",
  description: "StarReply AI helps local businesses save time and build customer trust with AI-generated Google review replies in Hindi, Telugu, Tamil, and English — all via WhatsApp.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="antialiased font-sans text-slate-900 bg-[#fafaf9]">
        {children}
      </body>
    </html>
  );
}
