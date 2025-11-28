"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    title: "Loubna",
    content:"صراحة الخدمة زوينة بزاف ⭐⭐⭐⭐⭐، كل نهار كنوصلني فرص واضحة والشرح ساهل",
    rating: 5
  },
  {
    title: "Ayoub",
    content:"I love the weekly forecast 🗓️, it gives me confidence to plan my trades ahead 💡.",
    rating: 5,
  },
  {
    title: "Ilyass Fatih",
    content:"محتوى يومي، دعم فالتفكير، وخدمة محترمة بزاف. شكراً على الالتزام والاحترافية! 👏❤️",
    rating: 5,
  },
  {
    title: "Hamza",
    content:"طريقة عرض التحليل بسيطة ولكن عميقة. ما كتحتاجش تكون خبير باش تفهم، ولكن مع الوقت كتولّي خبير!",
    rating: 5,
  },
  {
    title: "Moussa Lqasimi",
    content:"أحسن استثمار درتو هو الاشتراك كل يوم كنحس براسي كنكبر كمتداول. 🔥📈💪",
    rating: 5,
  },
  {
    title: "Karim",
    content:"خدمة مميزة جدًا 🌟، التحليلات اليومية تمنحني وضوحًا كبيرًا قبل دخول السوق 📈",
    rating: 5,
  },
]


export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState(new Set())

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

  useEffect(() => {
    if (!isVisible) return

    testimonials.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => new Set([...prev, index]))
      }, index * 150)
    })
  }, [isVisible])

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div id="testimonials-section" className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            What our <span className="text-accent">students</span> say<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.title} className={`${visibleItems.has(index) ? "animate-fade-in" : "opacity-0"}`}>
              <div className="bg-background rounded-xl p-8 border border-border hover:border-accent transition-all-smooth h-full flex flex-col">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
