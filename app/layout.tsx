import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TradeMorocco - Premium Trading Community",
  description:
    "Join our exclusive Moroccan trading community. Learn from experts, grow your portfolio, and trade with confidence.",
  // <CHANGE> Updated metadata for trading community
  keywords: "trading, Morocco, community, investment, forex, crypto",
  openGraph: {
    title: "TradeMorocco - Premium Trading Community",
    description: "Join our exclusive Moroccan trading community",
    images: [{ url: "/og-image.png" }],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
