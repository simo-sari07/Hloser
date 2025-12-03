import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "University of Trading-MA",
    template: "%s | TradeMorocco",
  },
  description:
    "TradeMorocco est la plus grande communauté ICT Trading au Maroc. Rejoignez notre groupe Telegram exclusif, apprenez le vrai trading, partagez vos analyses et accédez à une communauté active 24/7.",
  keywords: [
    "ICT",
    "ICT Trading",
    "Trading Maroc",
    "Trader Maroc",
    "Community Trading",
    "Communauté Trading Maroc",
    "TradeMorocco",
    "Telegram Trading Maroc",
    "Groupe Telegram Trading",
    "Forex Maroc",
    "Crypto Maroc",
    "Smart Money Concepts",
    "SMC Maroc",
  ],
  openGraph: {
    title: "TradeMorocco – ICT Trading Community Maroc",
    description:
      "Rejoignez la première communauté ICT Trading au Maroc. Groupe Telegram exclusif, analyses, éducation et communauté active.",
    url: "https://your-domain.com", // change to your real domain
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TradeMorocco ICT Trading Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TradeMorocco – ICT Trading Community Maroc",
    description:
      "Accédez à la communauté leader du trading ICT au Maroc. Groupe Telegram actif 24/7 + analyses & sessions live.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://your-domain.com", // change to your domain
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Favicon */}
        <link
          rel="icon"
          href="https://res.cloudinary.com/da63nggkh/image/upload/v1764725979/loogo_jkv9t3.png"
        />

        {/* JSON-LD Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TradeMorocco",
              url: "https://your-domain.com",
              logo:
                "https://res.cloudinary.com/da63nggkh/image/upload/v1764725979/loogo_jkv9t3.png",
              description:
                "Communauté ICT Trading au Maroc. Groupe Telegram trading, analyses, Smart Money Concepts et éducation.",
              sameAs: [
                "https://t.me/yourTelegramGroup",
                "https://instagram.com/yourInstagram",
              ],
            }),
          }}
        />
      </head>

      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
