"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-white to-[#f8f9fa] border-t border-[#7a9898]/10">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #7a9898 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-12 gap-8">
          {/* Brand Section - Takes more space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-4 group"
            >
              <div className="relative">
                <Image
                  src="https://res.cloudinary.com/da63nggkh/image/upload/v1764125097/logo_fbezdg.jpg"
                  alt="University of Trading MA"
                  width={48}
                  height={48}
                  className="rounded-lg object-cover shadow-sm group-hover:shadow-md transition-shadow duration-300"
                />
              </div>
          
            </Link>
            <p className="text-[#666] leading-relaxed text-sm mb-6 max-w-md">
              Professional trading education platform providing premium courses, daily market analysis, 
              and expert mentorship for serious traders committed to excellence.
            </p>
          </motion.div>



          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h4 className="font-semibold text-sm text-[#1a1a1a] mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#666] hover:text-[#7a9898] transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-[#7a9898]/10 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#888]">
              © {currentYear} University of Trading MA. All rights reserved.
            </p>
            
            
          </div>
        </motion.div>
      </div>
    </footer>
  )
}