"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  const footerLinks = [
    { title: "Product", links: ["Features", "Pricing", "Security"] },
    { title: "Company", links: ["About", "Blog", "Careers"] },
    { title: "Legal", links: ["Privacy", "Terms", "Contact"] },
  ]

  return (
    <footer className="bg-muted/50 border-t border-border relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">UTM</h3>
            <p className="text-muted-foreground">University of Trading MA - Premium trading education</p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 text-center text-muted-foreground"
        >
          <p>&copy; 2025 University of Trading MA. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
