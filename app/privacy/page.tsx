"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: `When you join U.T.M, we may collect personal information such as your name, email address, username, and any other information you voluntarily provide.

We may also automatically collect certain data related to your use of the platform, including account details, payment information, device information, and operating system.

Additionally, we may collect information when you communicate with us through emails, messages, or any other forms of interaction.`,
    },
    {
      title: "How We Use Your Information",
      content: `We may use the information we collect for various purposes, including but not limited to:

• Operating and maintaining U.T.M and its features.
• Communicating with you regarding your account or membership.
• Personalizing your user experience.
• Improving the content, structure, and offerings available within U.T.M.
• Analyzing trends, managing the platform, and gathering demographic insights.
• Complying with legal requirements and protecting our rights.`,
    },
    {
      title: "How We Share Your Information",
      content: `We may share your personal information with third parties under specific circumstances, such as:

• Service providers who assist in operating U.T.M and delivering our services.
• With your consent or at your direction, for example when you choose to share information publicly within the community.
• To comply with legal obligations or to enforce our policies.`,
    },
    {
      title: "Your Choices",
      content: `You have certain options regarding the personal information we collect, including:

• Choosing not to provide some types of information, understanding that this may limit access to certain features of U.T.M.
• Requesting updates or corrections to your personal information by contacting us.
• Opting out of promotional communications by following the instructions included in such messages.`,
    },
    {
      title: "Data Security",
      content: `We take the security of your personal information seriously and implement reasonable measures to protect it from unauthorized access, disclosure, alteration, or destruction.

These measures may include encryption, firewalls, access controls, and periodic security assessments.

However, please be aware that no method of data transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute protection. While we strive to safeguard your information, any transmission of data to us is done at your own risk.`,
    },
    {
      title: "Children's Privacy",
      content: `U.T.M is not intended for individuals under the age of 18, and we do not knowingly collect personal information from minors.

If you are under 18, please do not provide any personal information on the platform.`,
    },
    {
      title: "Changes to This Privacy Policy",
      content: `We may update or modify this Privacy Policy from time to time, and any changes will be posted on this page.

By continuing to use U.T.M after such changes are applied, you acknowledge and accept the updated Privacy Policy.`,
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
              Privacy <span className="text-accent">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              This Privacy Policy explains how University of Trading MA ("U.T.M", "we", "us", or "our") collects, uses, and shares personal information from users ("you", "your") of our educational trading community.
            </p>
          </motion.div>

          {/* Important Notice at Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 bg-accent/10 border-2 border-accent/30 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-accent mb-3">Agreement</h3>
            <p className="text-muted-foreground">
              By accessing or using U.T.M, you acknowledge and agree to the terms outlined in this Privacy Policy.
            </p>
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
                    <p className="text-muted-foreground leading-relaxed text-base whitespace-pre-wrap">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-accent mb-3">Contact Us</h3>
            <p className="text-muted-foreground mb-4">
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
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