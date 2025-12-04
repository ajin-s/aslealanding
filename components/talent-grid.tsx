"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Target, Clock, MessageSquare, Calendar, BarChart3, Users, Zap } from "lucide-react"
import { useDevToast } from "@/components/dev-toast-provider"

const talents = [
  {
    name: "Meera",
    role: "Reception & Scheduling",
    title: "Front Desk",
    avatar: "M",
    avatarColor: "bg-[#3b82f6]",
    skills: [
      { icon: Clock, text: "Answers 24/7" },
      { icon: Calendar, text: "Books on Cal.com" },
      { icon: MessageSquare, text: "Speaks Manglish" },
    ],
    price: "₹4,999",
    popular: false,
  },
  {
    name: "Varun",
    role: "Outbound Sales Rep",
    title: "The Hunter",
    avatar: "V",
    avatarColor: "bg-[#0f172a]",
    skills: [
      { icon: Phone, text: "Calls 500 leads/day" },
      { icon: Target, text: "Filters Junk" },
      { icon: BarChart3, text: "Updates CRM" },
    ],
    price: "₹8,000",
    popular: true,
  },
  {
    name: "Aadhi",
    role: "Operations Manager",
    title: "The Executive Assistant",
    avatar: "A",
    avatarColor: "bg-slate-600",
    skills: [
      { icon: MessageSquare, text: "WhatsApp Task Mgmt" },
      { icon: Zap, text: "Reminders" },
      { icon: Users, text: "Client Memory" },
    ],
    price: "₹2,999",
    popular: false,
  },
]

export function TalentGrid() {
  const { showDevToast } = useDevToast()

  return (
    <section id="talent" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">Meet Your New Digital Team</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Browse our talent pool. Each digital employee comes pre-trained for Indian businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {talents.map((talent) => (
            <Card
              key={talent.name}
              className={`relative overflow-hidden transition-all hover:shadow-xl ${
                talent.popular ? "border-2 border-[#3b82f6]" : "border border-slate-200"
              }`}
            >
              {talent.popular && (
                <div className="absolute top-0 right-0 bg-[#3b82f6] text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <CardHeader className="text-center pb-2">
                <div
                  className={`h-20 w-20 ${talent.avatarColor} rounded-full mx-auto flex items-center justify-center mb-4`}
                >
                  <span className="text-white font-bold text-2xl">{talent.avatar}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0f172a]">{talent.name}</h3>
                <p className="text-sm text-slate-500">{talent.title}</p>
                <p className="text-[#3b82f6] font-medium">{talent.role}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {talent.skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 text-slate-600">
                      <skill.icon className="h-5 w-5 text-[#3b82f6]" />
                      <span>{skill.text}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-sm text-slate-500">Salary</span>
                    <div>
                      <span className="text-2xl font-bold text-[#0f172a]">{talent.price}</span>
                      <span className="text-slate-500">/mo</span>
                    </div>
                  </div>
                  <Button
                    className={`w-full font-semibold ${
                      talent.popular
                        ? "bg-[#3b82f6] hover:bg-[#2563eb] text-white"
                        : "bg-[#0f172a] hover:bg-slate-800 text-white"
                    }`}
                    onClick={showDevToast}
                  >
                    Hire {talent.name}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
