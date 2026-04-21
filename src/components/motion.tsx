"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView, type Variant } from "framer-motion"

/** Fade-in-up animation triggered when element enters viewport */
export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  direction = "up",
}: {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right"
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const directions: Record<string, Variant> = {
    up: { y: 40, opacity: 0 },
    down: { y: -40, opacity: 0 },
    left: { x: 40, opacity: 0 },
    right: { x: -40, opacity: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={directions[direction]}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : directions[direction]}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Stagger children animations */
export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Individual stagger item — must be child of StaggerContainer */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Animated counter for metrics */
export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      {isInView ? (
        <CountUp target={target} duration={duration} prefix={prefix} suffix={suffix} />
      ) : (
        `${prefix}0${suffix}`
      )}
    </motion.span>
  )
}

function CountUp({
  target,
  duration,
  prefix,
  suffix,
}: {
  target: number
  duration: number
  prefix: string
  suffix: string
}) {
  const ref = useRef<HTMLSpanElement>(null)

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      onAnimationStart={() => {
        const start = performance.now()
        const animate = (now: number) => {
          const elapsed = (now - start) / 1000
          const progress = Math.min(elapsed / duration, 1)
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = Math.round(eased * target)
          if (ref.current) {
            ref.current.textContent = `${prefix}${current.toLocaleString()}${suffix}`
          }
          if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      }}
    >
      {`${prefix}0${suffix}`}
    </motion.span>
  )
}

/** Glow effect wrapper */
export function GlowCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative group ${className}`}
    >
      <div className="absolute -inset-0.5 rounded-2xl bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
      <div className="relative">{children}</div>
    </motion.div>
  )
}
