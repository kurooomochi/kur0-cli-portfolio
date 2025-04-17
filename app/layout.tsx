import type React from "react";
import "../styles/globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import SiteNav from "@/components/shared/site-nav";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Terminal Portfolio",
  description: "A terminal-style portfolio for software engineers",
};

const DepartureMonoNerdFontMono = localFont({
  src: "../public/fonts/DepartureMonoNerdFontMono-Regular.otf",
  variable: "--font-departure-mono",
  display: "swap",
  fallback: ['monospace']
});

const DepartureMonoNerdFontMonoPropo = localFont({
  src: "../public/fonts/DepartureMonoNerdFontPropo-Regular.otf",
  variable: "--font-departure-propo",
  display: "swap",
  fallback: ['monospace']
});

const DepartureMonoNerdFont = localFont({
  src: "../public/fonts/DepartureMonoNerdFont-Regular.otf",
  variable: "--font-departure-regular",
  display: "swap",
  fallback: ['sans-serif']
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ['system-ui', 'Arial', 'sans-serif']
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/DepartureMonoNerdFontMono-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        {/* Add similar preload links for other fonts if needed */}
      </head>
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