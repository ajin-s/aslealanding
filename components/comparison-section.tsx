import { Check, X } from "lucide-react"

const comparisonData = [
  {
    feature: "Monthly Cost",
    human: "₹15,000+",
    digital: "₹5,000",
    humanBetter: false,
  },
  {
    feature: "Availability",
    human: "9 AM - 5 PM",
    digital: "24/7/365",
    humanBetter: false,
  },
  {
    feature: "Training Time",
    human: "2-4 Weeks",
    digital: "Instant",
    humanBetter: false,
  },
  {
    feature: "Sick Days",
    human: "12+ per year",
    digital: "Zero",
    humanBetter: false,
  },
  {
    feature: "Scalability",
    human: "Hire more staff",
    digital: "One-click",
    humanBetter: false,
  },
]

export function ComparisonSection() {
  return (
    <section id="pricing" className="py-20 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">Why Businesses Choose Aslea</h2>
          <p className="text-lg text-slate-600">See how digital staff compares to traditional hiring</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#0f172a] text-white">
            <div className="p-6 font-semibold">Feature</div>
            <div className="p-6 text-center font-semibold border-l border-slate-700">Human Staff</div>
            <div className="p-6 text-center font-semibold border-l border-slate-700 bg-[#3b82f6]">
              Aslea Digital Staff
            </div>
          </div>

          {/* Rows */}
          {comparisonData.map((row, index) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 ${index !== comparisonData.length - 1 ? "border-b border-slate-100" : ""}`}
            >
              <div className="p-5 font-medium text-[#0f172a]">{row.feature}</div>
              <div className="p-5 text-center text-slate-600 border-l border-slate-100 flex items-center justify-center gap-2">
                <X className="h-4 w-4 text-red-400" />
                {row.human}
              </div>
              <div className="p-5 text-center font-medium text-[#0f172a] bg-blue-50 border-l border-slate-100 flex items-center justify-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                {row.digital}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-slate-600 mb-4">
            Save over <span className="font-bold text-[#0f172a]">₹1,20,000/year</span> per employee
          </p>
        </div>
      </div>
    </section>
  )
}
