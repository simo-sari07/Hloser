"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Refund Policy",
      content: `All sales are final. Due to the nature of our digital services and the instant access to premium content, we do not offer refunds under any circumstances. By completing a purchase on our website, you acknowledge and agree that all payments are non-refundable.`,
    },
    {
      title: "Recurring Payments",
      content: `By subscribing to any of our plans, you agree to automatic monthly billing. Your subscription will renew each month unless you cancel it. You have the right to cancel your subscription at any time through your account dashboard.`,
    },
    {
      title: "Cancellation Policy",
      content: `If you wish to cancel your subscription, you must do so at least 3 days before the renewal date. Cancellations made after this period will still result in the next month's payment being processed. No refund after renewal: Once a renewal payment is charged, it cannot be refunded, regardless of whether you forgot to cancel on time or did not use the service.`,
    },
    {
      title: "Terms Acknowledgment",
      content: `By continuing your subscription, you fully accept and agree to these terms. If you have any questions about our refund or cancellation policies, please contact our support team through your account.`,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-6"
            >
              ← Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
              Privacy & <span className="text-accent">Refund Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground">Transparency and fairness in all our dealings</p>
          </motion.div>

          {/* Content Sections */}
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-colors duration-300"
              >
                <div className="flex gap-4 items-start">
                  {/* Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center"
                  >
                    <span className="font-bold text-accent text-sm">{index + 1}</span>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-wrap">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 bg-accent/10 border-2 border-accent/30 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-accent mb-3">Important Notice</h3>
            <p className="text-muted-foreground">
              This policy was last updated on November 29, 2025. We reserve the right to modify these terms at any time.
              Changes will be effective immediately upon posting to the website. Your continued use of our services
              following the posting of changes constitutes your acceptance of such changes.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
