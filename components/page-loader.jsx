"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function PageLoader({ isComplete }) {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        setShowLoader(false)
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [isComplete])

  if (!showLoader) return null

  const letters = ["U", "T", "M"]

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="relative w-32 h-32"
        >
          {/* Animated gradient border circle */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "conic-gradient(from 0deg, #4a90e2 0%, #6ba3e5 25%, #dce1e8 50%, #4a90e2 100%)",
              boxShadow: "0 16px 48px rgba(74, 144, 226, 0.25), inset 0 0 20px rgba(74, 144, 226, 0.1)",
            }}
          />

          {/* Inner white circle with founder image */}
          <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="https://res.cloudinary.com/da63nggkh/image/upload/v1764178236/loser_frq82d.jpg"
                alt="Founder"
                width={120}
                height={120}
                className="rounded-full object-cover"
              />
            </motion.div>
          </div>

          {/* Pulsing outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-blue-400/30"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <div className="flex items-center justify-center gap-2">
          {letters.map((letter, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: [0, -8, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="text-3xl font-bold text-black"
            >
              {letter}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
