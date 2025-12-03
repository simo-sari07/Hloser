"use client"

import { useState, useEffect } from "react"
import { Plus, Minus, HelpCircle } from "lucide-react"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "What is the Private Room?",
    answer:
      "The Private Room provides daily market analysis, trading opportunities, and simple insights to help you make better trading decisions, whether you're a beginner or experienced trader.",
  },
  {
    question: "Can I try the service before paying?",
    answer:
      "Yes! You get a free trial period where you can test the premium content with no payment required. Join our free community group first.",
  },
  {
    question: "How can I get the most out of the service?",
    answer:
      "Once you subscribe, you'll gain access to daily content, market breakdowns, live sessions, and you can contact support anytime if you have questions.",
  },
  {
    question: "Is the content beginner-friendly?",
    answer:
      "Absolutely. All explanations are simple, clear, and free of complex trading terminology so beginners can learn quickly and build confidence.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. You can cancel your subscription at any moment without problems and with complete freedom. No hidden fees or long-term contracts.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide 24/7 community support, direct mentor access, email support, and live Q&A sessions. Our team is dedicated to your success.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("faq-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="faq"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-card/20 to-background relative overflow-hidden z-10"
    >
      {/* Background accent */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/2 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2"></div>
      </div>

      <div id="faq-section" className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/30 flex items-center gap-2 w-fit mx-auto">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked
            </span>
          </div>
          <h2 className="text-5xl md:text-5xl font-bold text-balance text-foreground">
            Got questions<span className="text-accent">?</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Get clarity on everything you need to know about our trading community
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} >
              <div
                className={`border border-border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index
                    ? "border-accent/50 bg-card shadow-lg shadow-accent/10"
                    : "bg-card/30 hover:bg-card/50 hover:border-border/80"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full px-6 py-5 flex items-center cursor-pointer justify-between hover:bg-opacity-50 transition-all duration-200 ${openIndex === index ? "bg-accent/5" : ""
                    }`}
                >
                  <span
                    className={`font-semibold  text-left text-base transition-colors duration-200 ${openIndex === index ? "text-accent" : "text-foreground"
                      }`}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 font-semibold text-white ${openIndex === index
                        ? "bg-accent shadow-lg shadow-accent/50"
                        : "bg-muted text-muted-foreground group-hover:bg-accent/30"
                      }`}
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </motion.div>
                </button>

                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-5 bg-accent/5 border-t border-accent/20"
                  >
                    <p className="text-muted-foreground leading-relaxed text-base">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-10 bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 border-2 border-accent/30 rounded-2xl text-center group hover:border-accent/50 transition-all duration-300"
        >
          <h3 className="text-3xl font-bold text-foreground mb-3">Ready to start your journey?</h3>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto">
            Join our elite trading community. Learn from experts, access daily analysis, and grow your portfolio with
            confidence.
          </p>
          <a
            href="#plans"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-accent to-primary cursor-pointer text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/30 active:scale-95">
              Join the Community
            </button>
          </a>

        </motion.div>
      </div>
    </section>
  )
}
