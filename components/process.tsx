"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const steps = [
  {
    number: "1",
    title: "Get Access",
    description: "Right after joining, you’ll go through a smooth onboarding flow so you know exactly where to start and how to navigate the program.",
    step: "Step 1",
  },
  {
    number: "2",
    title: "Receive Insights",
    description:
      "Access all lessons and start building a strong foundation. You’ll study the framework, watch step-by-step videos, and understand how the strategy works in real market environments.",
    step: "Step 2",
  },
  {
    number: "3",
    title: "Stay Connected",
    description:
      "Learn in real-time through daily trade ideas, livestreams, and constant mentor feedback. You’ll never trade alone — support is available 24/7.",
    step: "Step 3",
  },
  {
    number: "4",
    title: " Grow Consistently",
    description:
      "Apply what you’ve learned, track progress, and keep improving with weekly forecasts, ongoing updates, and a community evolving alongside you",
    step: "Step 4",
  },
]

export default function Process() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("process-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
      <div id="process-section" className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Our <span className="text-accent">process.</span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-balance">And how it works.</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Enter into our simple 4-step trader journey</p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          {/* Progress Line */}
          <motion.div
            className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent to-accent/20 hidden md:block"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{ originX: 0 }}
          />

          {/* Steps Grid */}
          <motion.div
            className="grid md:grid-cols-4 gap-8 relative"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="bg-background rounded-xl p-8 border border-border hover:border-accent transition-all-smooth h-full hover:shadow-xl">
                  {/* Step Badge */}
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full font-bold text-lg mb-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Step Label */}
                  <p className="text-xs font-semibold text-accent mb-3">{step.step}</p>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
