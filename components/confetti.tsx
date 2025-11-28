"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Confetti() {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    const pieces = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.2,
    }))
    setConfetti(pieces)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{ opacity: 1, y: 0, rotate: 0 }}
          animate={{
            opacity: 0,
            y: window.innerHeight + 100,
            rotate: 360 * 2,
          }}
          transition={{
            duration: 2.5,
            delay: piece.delay,
            ease: "easeIn",
          }}
          className="absolute w-2 h-2 bg-accent rounded-full"
          style={{ left: `${piece.left}%`, top: "50%" }}
        />
      ))}
    </div>
  )
}
