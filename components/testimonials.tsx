import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    title: "Loubna",
    content: "صراحة الخدمة زوينة بزاف ⭐⭐⭐⭐⭐، كل نهار كنوصلني فرص واضحة والشرح ساهل",
    rating: 5,
  },
  {
    id: 2,
    title: "Ayoub",
    content: "I love the weekly forecast, it gives me confidence to plan my trades ahead.",
    rating: 5,
  },
  {
    id: 3,
    title: "Ilyass Fatih",
    content: "محتوى يومي، دعم فالتفكير، وخدمة محترمة بزاف. شكراً على الالتزام والاحترافية!",
    rating: 5,
  },
  {
    id: 4,
    title: "Hamza",
    content: "طريقة عرض التحليل بسيطة ولكن عميقة. ما كتحتاجش تكون خبير باش تفهم، ولكن مع الوقت كتولّي خبير!",
    rating: 5,
  },
  {
    id: 5,
    title: "Moussa Lqasimi",
    content: "أحسن استثمار درتو هو الاشتراك كل يوم كنحس براسي كنكبر كمتداول.",
    rating: 5,
  },
  {
    id: 6,
    title: "Karim",
    content: "خدمة مميزة جدًا، التحليلات اليومية تمنحني وضوحًا كبيرًا قبل دخول السوق",
    rating: 5,
  },
]

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

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

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div id="testimonials-section" className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 space-y-4 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            What our <span className="text-blue-600">members</span> say
            <span className="text-blue-600">.</span>
          </h2>
        </div>

        {isMobile ? (
          <div className="relative flex items-center justify-center gap-4">
            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 z-10 p-2 bg-gray-300 hover:bg-gray-100 rounded-3xl transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white hover:text-black" />
            </button>

            {/* Testimonial Card */}
            <div
              key={currentIndex}
              className="w-[90%] transition-all duration-300"
            >
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 min-h-[280px] flex flex-col">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="text-teal-600 text-lg"
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-800 text-sm leading-relaxed mb-4 flex-1">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author with Verified Badge */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold shrink-0">
                    {testimonials[currentIndex].title.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{testimonials[currentIndex].title}</p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center">
                        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-xs text-gray-600">Verified Member</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-0 z-10 p-2 bg-gray-300 hover:bg-gray-100 rounded-3xl transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white hover:text-black" />
            </button>
          </div>
        ) : (
          <div
            className={`grid md:grid-cols-3 gap-6 transition-all duration-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="transition-transform duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-600 transition-all h-full flex flex-col group">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-teal-600 text-lg"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-800 text-sm leading-relaxed flex-1 mb-4">"{testimonial.content}"</p>

                  {/* Author with Verified Badge */}
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shrink-0">
                      {testimonial.title.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{testimonial.title}</p>
                      <div className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center">
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-600">Verified Member</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
