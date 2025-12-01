"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Copy, Zap } from "lucide-react"

export default function CouponBanner() {
  const [copied, setCopied] = useState(false)
  const couponCode = "Hl0ser"
  const discount = "20%"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(couponCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch (err) {
      console.log("[v0] Copy failed:", err)
    }
  }

  return (
    <div className="w-full px-4 mb-6 mt-6 ">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-full"
      >
        <div className="group">
          {/* Subtle glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

          {/* Main compact card */}
          <div className="relative bg-white/8 backdrop-blur-md border border-white/15 rounded-lg px-3 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

            <div className="flex items-center justify-center gap-3">
              {/* Discount badge */}
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="flex items-center gap-1.5"
              >
                <Zap className="w-4 h-4 text-cyan-300" />
                <span className="text-xs font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {discount} OFF
                </span>
              </motion.div>

              <div className="w-px h-5 bg-gradient-to-b from-blue-400/0 via-blue-400/40 to-cyan-400/0"></div>

              {/* Code and copy button */}
              <div className="flex items-center gap-1.5">
                <div className="bg-gray-900/40 border border-gray-700/40 rounded px-2 py-1 font-mono font-bold text-white text-xs tracking-wider hover:border-blue-400/50 transition-colors">
                  {couponCode}
                </div>

                <motion.button
                  onClick={handleCopy}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="relative px-2.5 py-1 rounded bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-xs transition-all duration-300 flex items-center gap-1 shadow-md hover:shadow-lg"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-1"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Done!</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-1"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
