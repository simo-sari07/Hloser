"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const steps = [
  {
    number: "1",
    title: "Onboarding",
    description:
      "Immediately after checkout you will be redirected to a complete onboarding process to get you started in the right direction",
    step: "Step 1",
  },
  {
    number: "2",
    title: "Learn",
    description:
      "Begin studying the models and watching all videos as soon as you join with all content available to members from the start",
    step: "Step 2",
  },
  {
    number: "3",
    title: "Guidance",
    description:
      "Experience learning in real time by receiving constant mentor insights through livestreams and new market lessons",
    step: "Step 3",
  },
  {
    number: "4",
    title: "Growth",
    description:
      "Continue to improve and see results with ongoing guidance, live sessions, and a community that grows with you",
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div id="process-section" className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
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
            style={{ zIndex: 0 }}
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Steps Grid */}
          <motion.div
            className="grid md:grid-cols-4 gap-8 relative"
            style={{ zIndex: 1 }}
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {steps.map((step) => (
              <motion.div key={step.number} variants={itemVariants}  className="group">
                <motion.div
                  className="bg-background rounded-xl p-8 border border-border hover:border-accent transition-all-smooth h-full"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step Badge */}
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full font-bold text-lg mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Step Label */}
                  <p className="text-xs font-semibold text-accent mb-3">{step.step}</p>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
