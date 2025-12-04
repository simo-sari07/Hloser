"use client"

import { motion } from "framer-motion"

const statsData = [
  { number: "70", label: "course lessons" },
  { number: "24/7", label: "guidance" },
  { number: "1", label: "mentors" },
  { number: "1", label: "instructors" },
  { number: "300+", label: "hours of video" },
  { number: "8", label: "weekly livestreams" },
]

export default function StatsMarquee() {
  const duplicatedStats = [...statsData, ...statsData]

  return (
    <div className="relative w-full md:w-3/4 mx-auto bg-transparent py-12 overflow-hidden">
      {/* Gradient Fade Edges */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 "></div>
      </div>

      {/* Marquee */}
      <motion.div
        className="flex gap-10 md:gap-24 whitespace-nowrap"
        animate={{ x: [0, -1500] }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        {duplicatedStats.map((stat, index) => (
          <div key={index} className="flex-shrink-0 text-center">
            <p className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2">{stat.number}</p>
            <p className="text-xs md:text-base text-black whitespace-nowrap">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
