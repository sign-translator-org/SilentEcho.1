"use client"

import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HandsHero } from "./hands-hero"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
                AI-Powered Neural Translation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground font-serif text-balance md:text-5xl lg:text-6xl"
            >
              Breaking the Silence{" "}
              <span className="text-primary">with AI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl"
            >
              Real-time sign language to voice and voice to text translation
              powered by advanced neural networks. Making communication
              accessible for everyone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button asChild size="lg" className="gap-2 rounded-xl px-8">
                <Link href="/translator">
                  Try the Translator
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 rounded-xl px-8"
              >
                <Link href="#how-it-works">
                  <Play className="size-4" />
                  See How It Works
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Animated illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1"
          >
            <HandsHero />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
