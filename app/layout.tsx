import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import SiteNav from "@/components/shared/site-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Terminal Portfolio",
  description: "A terminal-style portfolio for software engineers",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-gray-200 min-h-screen`}>
        <SiteNav />
        {children}
      </body>
    </html>
  )
}



import './globals.css'