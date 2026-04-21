"use client"

import { motion, useScroll, useTransform } from "framer-motion"

/** Animated 3D-inspired hand illustration that reacts to scroll */
export function HandsHero() {
  const { scrollY } = useScroll()

  const y = useTransform(scrollY, [0, 600], [0, 120])
  const rotate = useTransform(scrollY, [0, 600], [0, 8])
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])

  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        style={{ y, rotate, scale }}
        className="relative"
      >
        {/* Main hand SVG */}
        <svg
          width="320"
          height="320"
          viewBox="0 0 320 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-64 h-64 md:w-80 md:h-80"
          role="img"
          aria-label="Animated hands illustration representing sign language"
        >
          {/* Glow background */}
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.55 0.22 285)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="oklch(0.55 0.22 285)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="handGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.44 0.2 285)" />
              <stop offset="100%" stopColor="oklch(0.55 0.22 285)" />
            </linearGradient>
          </defs>
          <circle cx="160" cy="160" r="150" fill="url(#glow)" />

          {/* Left hand */}
          <motion.g
            animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              d="M90 200 C90 160 100 120 110 100 C115 90 125 85 130 90 C135 95 130 110 128 120 L125 140 C130 110 140 85 145 80 C150 75 160 75 162 82 C165 90 158 115 155 135 L152 150 C158 120 168 95 175 90 C180 85 188 88 190 95 C192 105 185 130 180 150 L175 165 C180 140 188 120 195 118 C200 116 206 120 207 128 C208 138 200 165 195 180"
              stroke="url(#handGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M90 200 C88 210 92 225 100 230 C115 240 140 235 160 225 C175 218 190 200 195 180"
              stroke="url(#handGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </motion.g>

          {/* Signal waves */}
          <motion.circle
            cx="160"
            cy="160"
            r="100"
            stroke="oklch(0.55 0.22 285)"
            strokeWidth="1"
            fill="none"
            strokeOpacity="0.2"
            animate={{ r: [100, 140], opacity: [0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.circle
            cx="160"
            cy="160"
            r="100"
            stroke="oklch(0.55 0.22 285)"
            strokeWidth="1"
            fill="none"
            animate={{ r: [100, 140], opacity: [0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
          />
          <motion.circle
            cx="160"
            cy="160"
            r="100"
            stroke="oklch(0.55 0.22 285)"
            strokeWidth="1"
            fill="none"
            animate={{ r: [100, 140], opacity: [0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1.4 }}
          />

          {/* Neural connection dots */}
          {[
            { cx: 70, cy: 80 },
            { cx: 250, cy: 90 },
            { cx: 60, cy: 240 },
            { cx: 260, cy: 230 },
            { cx: 160, cy: 50 },
            { cx: 160, cy: 270 },
          ].map((dot, i) => (
            <motion.circle
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              r="3"
              fill="oklch(0.55 0.22 285)"
              animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {/* Connection lines */}
          <motion.line
            x1="70" y1="80" x2="160" y2="50"
            stroke="oklch(0.55 0.22 285)"
            strokeWidth="0.5"
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.line
            x1="250" y1="90" x2="160" y2="50"
            stroke="oklch(0.55 0.22 285)"
            strokeWidth="0.5"
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
          <motion.line
            x1="60" y1="240" x2="160" y2="270"
            stroke="oklch(0.55 0.22 285)"
            strokeWidth="0.5"
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.line
            x1="260" y1="230" x2="160" y2="270"
            stroke="oklch(0.55 0.22 285)"
            strokeWidth="0.5"
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          />
        </svg>
      </motion.div>
    </div>
  )
}
