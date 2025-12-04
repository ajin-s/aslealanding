"use client"

import { Button } from "@/components/ui/button"
import { useDevToast } from "@/components/dev-toast-provider"

export function Footer() {
  const { showDevToast } = useDevToast()

  return (
    <footer className="bg-[#0f172a] text-white">
      {/* CTA Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build Your Digital Team?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Join 50+ businesses already saving time and money with Aslea's digital employees.
            </p>
            <Button
              size="lg"
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-8"
              onClick={showDevToast}
            >
              Start Hiring Today
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-2xl font-bold">Aslea</span>
            <p className="text-slate-400 mt-4 max-w-sm">
              The Asli AI Workforce. India's first digital staffing agency, built for modern businesses.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Login (Client Portal)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">© 2025 Aslea. All rights reserved.</p>
          <p className="text-slate-500 text-sm italic">"The Asli AI Workforce."</p>
        </div>
      </div>
    </footer>
  )
}
