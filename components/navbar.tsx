"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useDevToast } from "@/components/dev-toast-provider"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { showDevToast } = useDevToast()

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-[#0f172a]">Aslea</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#solutions" className="text-slate-600 hover:text-[#0f172a] font-medium transition-colors">
              Solutions
            </a>
            <a href="#talent" className="text-slate-600 hover:text-[#0f172a] font-medium transition-colors">
              Our Talent
            </a>
            <a href="#pricing" className="text-slate-600 hover:text-[#0f172a] font-medium transition-colors">
              Pricing
            </a>
            <a href="#case-studies" className="text-slate-600 hover:text-[#0f172a] font-medium transition-colors">
              Case Studies
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold" onClick={showDevToast}>
              Hire Your Team
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600 hover:text-[#0f172a]">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100">
            <div className="flex flex-col gap-4">
              <a href="#solutions" className="text-slate-600 hover:text-[#0f172a] font-medium">
                Solutions
              </a>
              <a href="#talent" className="text-slate-600 hover:text-[#0f172a] font-medium">
                Our Talent
              </a>
              <a href="#pricing" className="text-slate-600 hover:text-[#0f172a] font-medium">
                Pricing
              </a>
              <a href="#case-studies" className="text-slate-600 hover:text-[#0f172a] font-medium">
                Case Studies
              </a>
              <Button
                className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold w-full"
                onClick={showDevToast}
              >
                Hire Your Team
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
