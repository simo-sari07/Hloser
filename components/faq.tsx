"use client"
import { useState, useEffect } from "react"
import { Plus, Minus, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What is the Private Room?",
    answer:
      "The Private Room gives you daily market breakdowns, trade ideas, and a clear weekly outlook — helping you make confident and informed decisions whether you're a beginner or already experienced.",
  },
  {
    question: "Do I need experience before joining?",
    answer:
      "No. You can join regardless of your trading background — the content is structured to support both beginners and advanced traders.",
  },
  {
    question: "Can I try it before paying?",
    answer:
      "At the moment, trials aren't available. However, the value and quality of the content make every subscription worth it.",
  },
  {
    question: "How do I access the content?",
    answer:
      "Once you join, you'll receive a private access link to all daily content, videos, and market insights — plus the ability to contact us directly if you ever need support.",
  },
  {
    question: "Is the content suitable for beginners?",
    answer:
      "Absolutely. Everything is explained clearly and in a simple way, so even if you're new to trading, you'll understand the concepts and learn fast.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes — you have full flexibility. You can cancel your membership at any time, with no restrictions or complications.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div
                className={`border rounded-xl overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "border-accent/60 bg-accent/5"
                    : "border-border/60 bg-white hover:border-border hover:bg-gray-50/50"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full px-6 py-5 flex items-center cursor-pointer justify-between transition-all duration-500 ease-in-out`}
                >
                  <span
                    className={`font-semibold text-left text-base transition-colors duration-500 ${
                      openIndex === index ? "text-foreground" : "text-foreground"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ease-in-out font-semibold text-white ${
                      openIndex === index
                        ? "bg-accent shadow-md shadow-accent/40"
                        : "bg-accent hover:shadow-md hover:shadow-accent/30"
                    }`}
                  >
                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 py-5 border-t border-accent/30 bg-accent/3">
                    <p className="text-muted-foreground leading-relaxed text-base">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* CTA Section */}
        <div className="mt-16 p-10 bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 border-2 border-accent/30 rounded-2xl text-center group hover:border-accent/50 transition-all duration-300">
          <h3 className="text-3xl font-bold text-foreground mb-3">Ready to start your journey?</h3>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto">
            Join our elite trading community. Learn from experts, access daily analysis, and grow your portfolio with
            confidence.
          </p>
          <a href="#plans" rel="noopener noreferrer">
            <button className="px-8 py-3 bg-gradient-to-r from-accent to-primary cursor-pointer text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/30 active:scale-95">
              Join the Community
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
