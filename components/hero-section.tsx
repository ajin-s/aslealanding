"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useDevToast } from "@/components/dev-toast-provider"

export function HeroSection() {
  const { showDevToast } = useDevToast()

  return (
    <section className="bg-gradient-to-b from-[#f8fafc] to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3b82f6] px-4 py-2 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
              </span>
              Now Hiring Digital Talent
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-tight text-balance">
              Don't Hire Software. <span className="text-[#3b82f6]">Hire Aslea.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              The first Digital Staffing Agency for Indian Business. Get 24/7 Receptionists, Sales Reps, and Assistants
              who speak your language (Malayalam, Tamil, Hindi).
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold text-lg px-8"
                onClick={showDevToast}
              >
                View Digital Resumes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-[#0f172a] hover:bg-slate-50 font-semibold text-lg px-8 bg-transparent"
                onClick={showDevToast}
              >
                Book a Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>No contracts</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>24/7 availability</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Instant onboarding</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[#0f172a]">Team Dashboard</h3>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                  All Active
                </span>
              </div>

              {/* Employee Cards */}
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 bg-[#f8fafc] rounded-xl">
                  <div className="h-10 w-10 bg-[#3b82f6] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">M</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#0f172a]">Meera</p>
                    <p className="text-sm text-slate-500">Front Desk</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-green-600 font-medium">On Call</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#f8fafc] rounded-xl">
                  <div className="h-10 w-10 bg-[#0f172a] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">V</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#0f172a]">Varun</p>
                    <p className="text-sm text-slate-500">Sales Rep</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-green-600 font-medium">47 calls today</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#f8fafc] rounded-xl">
                  <div className="h-10 w-10 bg-slate-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">A</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#0f172a]">Aadhi</p>
                    <p className="text-sm text-slate-500">Executive Assistant</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-green-600 font-medium">12 tasks done</span>
                  </div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-sm text-slate-500">Monthly savings</span>
                <span className="text-lg font-bold text-green-600">₹45,000</span>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-[#0f172a] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              ✓ Job Accepted
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
