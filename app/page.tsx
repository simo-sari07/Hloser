"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Process from "@/components/process"
import Plans from "@/components/plans"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import PageLoader from "@/components/page-loader"
import CertificatesCarousel from "@/components/certificates-carousel"
export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <PageLoader isComplete={isLoaded} />
      {isLoaded && (
        <main className="min-h-screen bg-background">
          <Header />
          <Hero isLoaded={isLoaded} />
          <Process />
          <CertificatesCarousel />
          <Plans />
          <Testimonials />
          <FAQ />
          <Footer />
        </main>
      )}
    </>
  )
}
