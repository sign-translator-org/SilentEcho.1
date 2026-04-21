import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { MetricsSection } from "@/components/landing/metrics-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <MetricsSection />
      <TestimonialsSection />
    </>
  )
}
