import type React from "react";
import "../styles/globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import SiteNav from "@/components/shared/site-nav";
import localFont from "next/font/local";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Terminal Portfolio",
  description: "A terminal-style portfolio for software engineers",
};

const DepartureMonoNerdFontMono = localFont({
  src: "../public/fonts/DepartureMonoNerdFontMono-Regular.otf",
  variable: "--font-departure-mono",
  display: "swap",
});
const DepartureMonoNerdFontMonoPropo = localFont({
  src: "../public/fonts/DepartureMonoNerdFontPropo-Regular.otf",
  variable: "--font-departure-propo",
  display: "swap",
});
const DepartureMonoNerdFont = localFont({
  src: "../public/fonts/DepartureMonoNerdFont-Regular.otf",
  variable: "--font-departure-regular",
  display: "swap",
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-gray-200 min-h-screen 
          ${DepartureMonoNerdFontMono.variable} 
          ${DepartureMonoNerdFontMonoPropo.variable} 
          ${DepartureMonoNerdFont.variable}`}
        suppressHydrationWarning
      >
        <SiteNav />
        {children}
      </body>
    </html>
  );
}