"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const certificates = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/da63nggkh/image/upload/v1764179206/WhatsApp_Image_2025-11-26_at_4.00.12_AM_ku5vhz.jpg",
    alt: "Student Certificate 1",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/da63nggkh/image/upload/v1764179202/WhatsApp_Image_2025-11-26_at_4.00.12_AM_1_zz2iib.jpg",
    alt: "Student Certificate 2",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/da63nggkh/image/upload/v1764179201/WhatsApp_Image_2025-11-26_at_4.00.12_AM_3_cs5rhp.jpg",
    alt: "Student Certificate 3",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/da63nggkh/image/upload/v1764180026/1_a1sup4.webp",
    alt: "Student Certificate 4",
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/da63nggkh/image/upload/v1764180023/3_mkuc4g.webp",
    alt: "Student Certificate 5",
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/da63nggkh/image/upload/v1764180023/2_ugjt0x.webp",
    alt: "Student Certificate 6",
  },
]

const extendedCertificates = [...certificates, ...certificates]

export default function CertificatesCarousel() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="relative w-full bg-gradient-to-b from-background via-background to-background/50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Members Certificates</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating the achievements of our amazing members
          </p>
        </div>

        {/* Gradient overlays for seamless scrolling */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-transparent to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-transparent to-transparent"></div>
        </div>

        <div className="relative overflow-hidden py-8">
          <motion.div
            className="flex gap-6 lg:gap-8"
            animate={{ x: [0, -1440] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            {extendedCertificates.map((cert, index) => (
              <motion.div
                key={`${cert.id}-${index}`}
                className="relative flex-shrink-0 group cursor-pointer"
                onHoverStart={() => setHoveredId(cert.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <div className="relative w-64 h-44 rounded-2xl overflow-hidden border-2 border-accent/30 transition-all duration-300 group-hover:border-accent/80 group-hover:shadow-xl">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.alt}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={hoveredId === cert.id ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  {hoveredId === cert.id && (
                    <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full shadow-md flex items-center justify-center text-white text-sm font-bold border-2 border-white">
                      ✓
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
