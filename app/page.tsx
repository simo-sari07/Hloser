"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Process from "@/components/process"
import Plans from "@/components/plans"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import CertificatesCarousel from "@/components/certificates-carousel"

export default function Home() {

  

  return (
    <>
        <main className="min-h-screen bg-background">
          <Header />
          <Hero  />
          {/* <MentorsSection /> */}
          <Process />
          <CertificatesCarousel />
          <Plans />
          <Testimonials />
          <FAQ />
          <Footer />
        </main>
    </>
  )
}
