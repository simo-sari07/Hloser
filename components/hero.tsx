"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import StatsMarque from "./stats-marque"
import Image from "next/image"



export default function Hero({ isLoaded = true }) {
  const [scrollY, setScrollY] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      controls.start("visible")
    }
  }, [isLoaded, controls])

  // Animation variants - Fixed typing issues
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as any,
      },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
        duration: 0.8,
      },
    },
  }

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    }),
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 1.2,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  }

  const title = "University of Trading MA"

  return (
    <section id="home" className="relative min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#dce1e8]/30 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Coupon Banner - Moving gradient from transparent left to transparent right */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-8"
      >
        <div className="relative overflow-hidden border border-accent/20 rounded-xl p-4 text-center">
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
            animate={{
              x: ["100%", "-100%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <p className="text-sm font-semibold relative z-10">
            🎉 <span className="text-black">Use Code  <span className="text-blue-600">"HLoser"</span> – Get 20% OFF Your First Month</span>{" - "}
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto mt-16 relative z-10">
        {/* Main Content */}
        <motion.div
          className="text-center mb-16 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Badge with Pulse Effect */}
          <motion.div variants={badgeVariants} className="inline-block">
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-accent/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="relative px-6 py-3 rounded-full text-sm font-semibold bg-white/80 backdrop-blur-sm text-accent border-2 border-accent/30 flex items-center gap-2 w-fit mx-auto shadow-lg">
                <motion.span
                  className="w-2 h-2 rounded-full bg-accent"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                Join 2,000+ Elite Traders
              </span>
            </div>
          </motion.div>

          {/* Main Heading with Letter Animation */}
          <motion.div variants={headingVariants}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              {title.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${wordIndex}-${charIndex}`}
                      custom={wordIndex * 10 + charIndex}
                      variants={letterVariants}
                      initial="hidden"
                      animate={isLoaded ? "visible" : "hidden"}
                      className={
                        char === "M" || char === "A"
                          ? "bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent"
                          : ""
                      }
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wordIndex < title.split(" ").length - 1 && "\u00A0"}
                </span>
              ))}
            </h1>
          </motion.div>
          {/* Subheading with Slide Effect */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light"
          >
            Premium trading education and daily market analysis for traders who demand excellence
          </motion.p>
        </motion.div>

        {/* Review Badge with Entrance Animation */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={isLoaded ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
          transition={{
            duration: 0.8,
            delay: 1,
            type: "spring",
            stiffness: 150,
          }}
        >
          <motion.div
            className="bg-white border border-[#7a9898]/20 rounded-2xl px-6 py-4 inline-flex items-center gap-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                <img
                  src="https://res.cloudinary.com/da63nggkh/image/upload/v1764179321/r_vhcqp1.avif"
                  alt="U.T.M"
                  className="w-8 h-8 rounded-full object-contain"
                />
              </div>

              <div className="text-left">
                <p className="text-xs font-semibold text-black">86 Reviews</p>
                <p className="text-sm font-bold text-[#7a9898] flex items-center gap-1">
                  {"★★★★★".split("").map((star, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 1.2 + i * 0.1,
                        type: "spring",
                        stiffness: 500,
                      }}
                    >
                      {star}
                    </motion.span>
                  ))}
                  <span className="ml-1">5 Stars</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Founder Section with 3D Effect */}
        <motion.div
          className="my-20 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            duration: 1,
            delay: 1.3,
            ease: [0.22, 1, 0.36, 1] as any,
          }}
        >
          <motion.div
            className="group"
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="relative bg-white rounded-3xl border border-[#7a9898]/15 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 w-96"
              variants={floatingVariants}
              animate="animate"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 200%" }}
              />

              {/* Profile Image with Animation */}
              <motion.div
                className="flex justify-center mb-6"
                variants={imageVariants}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
              >
                <motion.div
                  className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-accent/40 shadow-lg"
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="https://res.cloudinary.com/da63nggkh/image/upload/v1764700855/IMG_5460_tsv2xz.jpg"
                    alt="University of Trading MA"
                    fill
                    className="object-cover"
                  />

                  {/* Animated Ring */}
                  <motion.div
                    className="absolute inset-0 border-4 border-accent/30 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </motion.div>


              {/* Founder Info */}
              <motion.div
                className="text-center relative z-10"
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <h3 className="text-2xl font-bold text-black mb-1">Loser</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-[#7a9898]"
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <p className="text-sm font-semibold text-accent">Founder & Lead Mentor</p>
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-[#7a9898]"
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.75,
                    }}
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Trading Education Expert with years of market experience and proven track record
                </p>
              </motion.div>

              {/* Animated Accent Line */}
              <motion.div
                className="mt-6 h-1 bg-gradient-to-r from-accent to-primary rounded relative overflow-hidden"
                initial={{ scaleX: 0 }}
                animate={isLoaded ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 1.8 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2,
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <StatsMarque />
        </motion.div>
      </div>
    </section>
  )
}