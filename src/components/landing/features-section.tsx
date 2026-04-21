"use client"

import { Brain, Zap, Accessibility, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem, GlowCard } from "@/components/motion"

const features = [
  {
    icon: Brain,
    title: "AI Neural Translation",
    description:
      "State-of-the-art deep learning models trained on millions of sign language gestures for accurate, nuanced translations.",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description:
      "Sub-200ms latency ensures natural, fluid conversations without awkward pauses or delays.",
  },
  {
    icon: Accessibility,
    title: "Accessibility First",
    description:
      "Built from the ground up with accessibility in mind. WCAG 2.1 AA compliant with comprehensive screen reader support.",
  },
  {
    icon: MessageSquare,
    title: "Voice & Text Conversion",
    description:
      "Seamlessly convert between sign language, voice, and text. Multi-modal communication for every situation.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">Features</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground font-serif text-balance md:text-4xl">
            Powerful AI, Built for Everyone
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our neural translation platform combines cutting-edge AI with
            thoughtful design to create seamless communication experiences.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <GlowCard className="h-full">
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                      <feature.icon className="size-6 text-primary" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
