"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <footer className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-[#dce1e8]">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7a9898]/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <img
              src="https://res.cloudinary.com/da63nggkh/image/upload/v1764125097/logo_fbezdg.jpg"
              alt="University of Trading MA Logo"
              className="h-12 w-auto hover:opacity-80 transition-opacity"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering traders with premium education and daily market insights.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Courses", href: "#courses" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Cookie Policy", href: "/cookies" },
                { label: "Support", href: "/support" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#7a9898]/20 to-transparent mb-8" />

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} University of Trading MA. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: "𝕏", href: "https://twitter.com" },
              { icon: "📧", href: "mailto:info@example.com" },
              { icon: "💬", href: "https://discord.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                className="text-lg hover:text-accent transition-colors duration-200"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
