"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCounter } from "@/components/motion"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const accuracyData = [
  { month: "Jan", accuracy: 91.2 },
  { month: "Feb", accuracy: 92.8 },
  { month: "Mar", accuracy: 94.1 },
  { month: "Apr", accuracy: 95.3 },
  { month: "May", accuracy: 96.0 },
  { month: "Jun", accuracy: 96.8 },
  { month: "Jul", accuracy: 97.2 },
  { month: "Aug", accuracy: 97.8 },
]

const metrics = [
  { label: "Recognition Accuracy", value: 97.8, suffix: "%" },
  { label: "Processing Speed", value: 47, suffix: "ms" },
  { label: "Active Users", value: 12450, suffix: "+" },
  { label: "Signs Recognized Today", value: 284930, suffix: "" },
]

export function MetricsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">Metrics</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground font-serif text-balance md:text-4xl">
            Performance at Scale
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our neural network processes millions of translations daily with
            industry-leading accuracy and speed.
          </p>
        </FadeIn>

        {/* Metrics grid */}
        <StaggerContainer className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <StaggerItem key={metric.label}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm text-center">
                <CardContent className="pt-6 pb-6">
                  <div className="text-3xl font-bold text-primary font-serif">
                    <AnimatedCounter
                      target={metric.value}
                      suffix={metric.suffix}
                      duration={2}
                    />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {metric.label}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Accuracy chart */}
        <FadeIn delay={0.3} className="mt-12">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="mb-6 text-lg font-semibold text-foreground">
                Recognition Accuracy Over Time
              </h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={accuracyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.90 0.02 285)" />
                    <XAxis
                      dataKey="month"
                      stroke="oklch(0.50 0.03 285)"
                      fontSize={12}
                    />
                    <YAxis
                      domain={[90, 100]}
                      stroke="oklch(0.50 0.03 285)"
                      fontSize={12}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "oklch(0.995 0.001 300)",
                        border: "1px solid oklch(0.90 0.02 285)",
                        borderRadius: "0.75rem",
                        fontSize: "0.875rem",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="accuracy"
                      stroke="oklch(0.44 0.2 285)"
                      strokeWidth={2.5}
                      dot={{ fill: "oklch(0.44 0.2 285)", strokeWidth: 0, r: 4 }}
                      activeDot={{ r: 6, fill: "oklch(0.44 0.2 285)" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  )
}
