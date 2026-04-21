"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Hand } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/translator", label: "Translator" },
  { href: "/tutorial", label: "Tutorial" },
  { href: "/dashboard", label: "Dashboard" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <nav
          className="flex items-center justify-between rounded-2xl border border-border/50 bg-background/70 px-6 py-3 shadow-lg backdrop-blur-xl"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="SilentEcho home">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary">
              <Hand className="size-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground font-serif">
              SilentEcho
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {pathname === link.href && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-lg bg-primary/10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link href="/translator">Try Translator</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="flex size-9 items-center justify-center rounded-lg text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-4 overflow-hidden md:hidden"
          >
            <div className="rounded-2xl border border-border/50 bg-background/95 px-6 py-4 shadow-lg backdrop-blur-xl">
              <ul className="flex flex-col gap-1" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-border pt-4">
                <Button asChild className="w-full" size="sm">
                  <Link href="/translator" onClick={() => setMobileOpen(false)}>
                    Try Translator
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
