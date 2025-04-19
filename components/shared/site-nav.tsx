"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Terminal, User, Briefcase, Code, Mail, FileText, Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import logo from "../../public/kur0.png"

export default function SiteNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { path: "/", label: "Terminal", icon: <Terminal size={16} /> },
    { path: "/about", label: "About", icon: <User size={16} /> },
    { path: "/projects", label: "Projects", icon: <Briefcase size={16} /> },
    { path: "/skills", label: "Skills", icon: <Code size={16} /> },
    { path: "/contact", label: "Contact", icon: <Mail size={16} /> },
    { path: "https://substack.com/@kuromochi", label: "Blog", icon: <FileText size={16} /> },
  ]

  return (
    <div className="bg-black border-b border-green-500/30 p-3 sticky top-0 z-10 font-mono font-bold">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
          <Image
            src={logo}
            alt="kur0"
            width={45}
            height={45}
          />
          <div className="flex flex-col">
          <span className="font-extrabold text-green-400 font-mono">kur0</span>
          <span className=" text-green-400 font-mono text-xs">Software Engineer</span>
          </div>

        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-green-400 hover:text-green-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-1 px-3 py-1 text-sm rounded transition-colors ${
                pathname === item.path
                  ? "bg-green-500/20 text-green-300 border border-green-500/30"
                  : "text-gray-300 hover:text-green-300 hover:bg-green-500/10"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 bg-black border-b border-green-500/30 mt-3">
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded transition-colors ${
                  pathname === item.path
                    ? "bg-green-500/20 text-green-300 border border-green-500/30"
                    : "text-gray-300 hover:text-green-300 hover:bg-green-500/10"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

