"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useIsMobile } from "./hooks/use-mobile"

const testimonials = [
  {
    title: "Loubna",
    content: "صراحة الخدمة زوينة بزاف ⭐⭐⭐⭐⭐، كل نهار كنوصلني فرص واضحة والشرح ساهل",
    rating: 5,
  },
  {
    title: "Ayoub",
    content: "I love the weekly forecast, it gives me confidence to plan my trades ahead.",
    rating: 5,
  },
  {
    title: "Ilyass Fatih",
    content: "محتوى يومي، دعم فالتفكير، وخدمة محترمة بزاف. شكراً على الالتزام والاحترافية!",
    rating: 5,
  },
  {
    title: "Hamza",
    content: "طريقة عرض التحليل بسيطة ولكن عميقة. ما كتحتاجش تكون خبير باش تفهم، ولكن مع الوقت كتولّي خبير!",
    rating: 5,
  },
  {
    title: "Moussa Lqasimi",
    content: "أحسن استثمار درتو هو الاشتراك كل يوم كنحس براسي كنكبر كمتداول.",
    rating: 5,
  },
  {
    title: "Karim",
    content: "خدمة مميزة جدًا، التحليلات اليومية تمنحني وضوحًا كبيرًا قبل دخول السوق",
    rating: 5,
  },
]

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useIsMobile()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("testimonials-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div id="testimonials-section" className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            What our <span className="text-accent">members</span> say
            <span className="text-accent">.</span>
          </h2>
        </motion.div>

        {isMobile ? (
          <div className="relative flex items-center justify-center gap-4">
            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 z-10 p-2 bg-[#dad8d8] hover:bg-gray-100 rounded-3xl transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white hover:text-black" />
            </button>

            {/* Testimonial Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-[90%] "
            >
              <div className="bg-background rounded-xl p-8 border border-border">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-bold text-foreground mb-3 text-lg">{testimonials[currentIndex].title}</h3>

                {/* Quote */}
                <p className="text-foreground text-sm leading-relaxed">"{testimonials[currentIndex].content}"</p>
              </div>
            </motion.div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-0 z-10 p-2 bg-[#dad8d8]  hover:bg-gray-100 rounded-3xl transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white hover:text-black" />
            </button>
          </div>
        ) : (
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-background rounded-xl p-8 border border-border hover:border-accent transition-all h-full flex flex-col group">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-foreground mb-3">{testimonial.title}</h3>

                  {/* Quote */}
                  <p className="text-foreground text-sm leading-relaxed flex-1">"{testimonial.content}"</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
