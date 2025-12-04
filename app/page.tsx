import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TalentGrid } from "@/components/talent-grid"
import { ComparisonSection } from "@/components/comparison-section"
import { TrustSection } from "@/components/trust-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TalentGrid />
      <ComparisonSection />
      <TrustSection />
      <Footer />
    </main>
  )
}
