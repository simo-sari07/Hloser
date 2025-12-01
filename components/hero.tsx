"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import StatsMarquee from "./stats-marque"
import CouponBanner from "./coupon-banner"

export default function Hero({ isLoaded }: { isLoaded: boolean }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#dce1e8]/30 to-background">
      <CouponBanner />

      <div className="max-w-7xl mx-auto mt-16">
        {/* Main Content */}
        <motion.div
          className="text-center mb-16 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-accent/10 text-accent border border-accent/30 flex items-center gap-2 w-fit mx-auto">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Join 2,000+ Elite Traders
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            University of Trading{" "}
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">MA</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Premium trading education and daily market analysis for traders who demand excellence
          </motion.p>
        </motion.div>

        {/* Review Badge with Logo */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white border border-[#7a9898]/20 rounded-2xl px-6 py-4 inline-flex items-center gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-2">
              <Image
                src="https://res.cloudinary.com/da63nggkh/image/upload/v1764179321/r_vhcqp1.avif"
                alt="Badge"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <div className="text-left">
                <p className="text-xs font-semibold text-black">368 Reviews</p>
                <p className="text-sm font-bold text-[#7a9898] flex items-center gap-1">★★★★★ 5 Stars</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Founder Section with Professional Layout */}
        <motion.div
          className="my-20 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="group">
            <div className="relative bg-white rounded-3xl border border-[#7a9898]/15 p-8 shadow-md hover:shadow-lg transition-shadow duration-300 w-96">
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#7a9898]/40 shadow-md hover:scale-105 transition-transform duration-300">
                  <Image
                    src="https://res.cloudinary.com/da63nggkh/image/upload/v1764178236/loser_frq82d.jpg"
                    alt="Loser - Founder"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Founder Info */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-black mb-1">Loser</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7a9898]"></div>
                  <p className="text-sm font-semibold text-[#7a9898]">Founder & Lead Mentor</p>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7a9898]"></div>
                </div>
                <p className="text-sm text-gray-600">
                  Trading Education Expert with years of market experience and proven track record
                </p>
              </div>

              {/* Accent Line */}
              <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-[#7a9898]/30 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <StatsMarquee />
        </motion.div>
      </div>
    </section>
  )
}
