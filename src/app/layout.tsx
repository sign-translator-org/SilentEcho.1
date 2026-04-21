import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: {
    default: "SilentEcho - AI Sign Language Translator",
    template: "%s | SilentEcho",
  },
  description:
    "Breaking the silence with AI. Real-time sign language to voice and voice to text translation powered by neural networks.",
  keywords: [
    "sign language",
    "AI translator",
    "accessibility",
    "neural network",
    "real-time translation",
  ],
  openGraph: {
    title: "SilentEcho - AI Sign Language Translator",
    description:
      "Real-time sign language to voice and voice to text translation powered by neural networks.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#6D28D9",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
