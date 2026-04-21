"use client"

import { Camera, Cpu, Volume2 } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Camera Capture",
    description:
      "Our system captures your sign language gestures in real-time using your device camera with optimized frame processing.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Neural Network",
    description:
      "Advanced neural networks process each frame, identifying hand positions, facial expressions, and motion patterns.",
  },
  {
    icon: Volume2,
    step: "03",
    title: "Voice Output",
    description:
      "Translated text is converted to natural-sounding speech output in real-time, enabling fluid two-way communication.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">Process</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground font-serif text-balance md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Three simple steps to bridge the communication gap using
            state-of-the-art AI technology.
          </p>
        </FadeIn>

        <StaggerContainer className="relative mt-16">
          {/* Connection line */}
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Step number circle */}
                  <div className="relative z-10 flex size-20 items-center justify-center rounded-2xl border-2 border-primary/20 bg-background shadow-lg">
                    <step.icon className="size-8 text-primary" />
                  </div>
                  <span className="mt-4 text-xs font-bold uppercase tracking-widest text-primary">
                    Step {step.step}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div
                      className="absolute right-0 top-10 hidden -translate-y-1/2 translate-x-1/2 text-border lg:block"
                      aria-hidden="true"
                    >
                      <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
                        <path
                          d="M0 6H38M38 6L33 1M38 6L33 11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
