import { Building2, Stethoscope, Home, Shield, Briefcase, Car } from "lucide-react"

const logos = [
  { icon: Stethoscope, name: "Kerala Dental Clinics" },
  { icon: Shield, name: "SafeGuard Insurance" },
  { icon: Home, name: "HomeFinder Realty" },
  { icon: Building2, name: "CoWork Spaces" },
  { icon: Briefcase, name: "LegalEase Firm" },
  { icon: Car, name: "DriveRight Motors" },
]

export function TrustSection() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-lg font-medium text-[#0f172a]">
            Trusted by <span className="text-[#3b82f6]">50+ Clinics & Agencies</span> in Kerala
          </p>
        </div>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-12">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex items-center gap-3 px-6 py-4 bg-[#f8fafc] rounded-lg min-w-fit">
                <logo.icon className="h-6 w-6 text-slate-400" />
                <span className="text-slate-500 font-medium whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#0f172a]">50+</p>
            <p className="text-slate-500 mt-1">Active Clients</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#0f172a]">24/7</p>
            <p className="text-slate-500 mt-1">Availability</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#0f172a]">10K+</p>
            <p className="text-slate-500 mt-1">Calls Handled/Day</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#0f172a]">₹50L+</p>
            <p className="text-slate-500 mt-1">Client Savings</p>
          </div>
        </div>
      </div>
    </section>
  )
}
