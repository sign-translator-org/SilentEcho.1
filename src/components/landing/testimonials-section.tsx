"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Chen",
    role: "ASL Interpreter",
    quote:
      "SilentEcho has transformed how I work. The accuracy is remarkable and it keeps getting better with each update.",
    rating: 5,
  },
  {
    name: "David Okafor",
    role: "Accessibility Advocate",
    quote:
      "Finally, a tool that treats sign language translation with the seriousness it deserves. The real-time processing is game-changing.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Deaf Community Leader",
    quote:
      "This platform has opened up conversations I never thought possible. It bridges the gap beautifully and respectfully.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">Testimonials</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground font-serif text-balance md:text-4xl">
            Trusted by the Community
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Hear from the people who use SilentEcho every day to communicate
            and connect.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="flex h-full flex-col pt-6">
                  <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
