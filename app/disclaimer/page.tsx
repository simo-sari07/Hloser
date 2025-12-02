"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { AlertTriangle, ShieldAlert } from "lucide-react"

export default function DisclaimerRefund() {
  const disclaimerItems = [
    {
      title: "Risk of Loss",
      content: "Trading stocks, options, futures, forex, or crypto carries substantial risk and may result in partial or total loss of your investment. You should only trade with money you can afford to lose. All trading decisions are your responsibility, and past performance is not indicative of future results.",
    },
    {
      title: "Educational Purposes Only",
      content: "Content shared within U.T.M, including discussions, analyses, and livestreams, is for educational purposes only and does not constitute financial, investment, or trading advice. Conduct your own research before making decisions.",
    },
    {
      title: "No Guarantees",
      content: "U.T.M does not guarantee accuracy, completeness, or any specific trading outcomes. All trading decisions are made at your own risk, and U.T.M, its owners, moderators, and members are not liable for any losses.",
    },
    {
      title: "Independent Evaluation",
      content: "You are responsible for evaluating the suitability of any strategies or recommendations based on your individual circumstances.",
    },
    {
      title: "Testimonials",
      content: "User experiences shared in U.T.M or on associated channels are individual and may not reflect typical results. They are not guarantees of future performance.",
    },
    {
      title: "Not an Endorsement",
      content: "Mentions of financial products, services, or platforms do not constitute endorsements. Perform your own due diligence before using any mentioned services.",
    },
    {
      title: "Accepted Risk",
      content: "By participating in U.T.M, you accept that trading involves inherent risks, and U.T.M is not responsible for any trading outcomes, losses, or damages.",
    },
  ]

  const refundItems = [
    {
      title: "All Sales Are Final",
      content: "Due to the digital nature of our services and instant access to premium content, all payments are non-refundable.",
    },
    {
      title: "Recurring Payments",
      content: "Subscriptions are billed automatically each month. They will renew unless canceled at least 3 days before the next billing date.",
    },
    {
      title: "Cancellation Policy",
      content: "To avoid being charged for the next month, cancel your subscription at least 3 days before renewal. Late cancellations do not prevent the next payment.",
    },
    {
      title: "No Refund After Renewal",
      content: "Once a renewal payment is processed, it cannot be refunded under any circumstances, even if the service was unused.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-20 px-4 sm:px-6 lg:px-8" id="disclaimer">
        <div className="max-w-5xl mx-auto">
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
              Disclaimer & <span className="text-accent">Refund Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Important information about trading risks and our refund terms
            </p>
          </motion.div>

          {/* Disclaimer Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Disclaimer</h2>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/30 rounded-2xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                University of Trading MA (U.T.M) is a community for traders to share knowledge, insights, and experiences related to financial markets. By participating in U.T.M, you acknowledge and agree to the following:
              </p>
            </div>

            <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
              {disclaimerItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-xl p-6 hover:border-red-500/50 transition-colors duration-300"
                >
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                      <span className="font-bold text-red-500 text-xs">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Refund Policy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <ShieldAlert className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Refund Policy</h2>
            </div>

            <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
              {refundItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors duration-300"
                >
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                      <span className="font-bold text-accent text-xs">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 bg-accent/10 border-2 border-accent/30 rounded-xl p-6"
            >
              <p className="text-muted-foreground font-semibold text-center">
                By continuing your subscription, you fully accept and agree to these terms.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-accent mb-3">Contact Us</h3>
            <p className="text-muted-foreground mb-4">
              For any questions or concerns regarding these policies, please contact:
            </p>
            <a
              href="mailto:support@universityoftradingma.com"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold"
            >
              support@universityoftradingma.com
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}