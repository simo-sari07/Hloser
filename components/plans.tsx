"use client"

import { Check, Zap, Target, Rocket } from "lucide-react"
import { useEffect, useState } from "react"

const plans = [
  {
    name: "1 Month",
    price: "23.99",
    period: "/month",
    badge: "Starter",
    description: "Begin your journey",
    icon: Target,
    features: [
      "Daily trade ideas to guide your entries",
      "How-to videos for better understanding",
      "Weekly market outlook every weekend",
      "24/7 chat access for instant support",
      "Perfect for testing the full experience",
    ],
    cta: "Start Learning",
    link: "https://whop.com/checkout/1JdBLyH2uYDknIfRKx-ytom-1oWE-9p3Z-RnkPinPjuGdG/",
    popular: false,
  },
  {
    name: "2 Months",
    price: "40.99",
    period: "/2 months",
    badge: "Popular",
    description: "Accelerate growth",
    icon: Zap,
    features: [
      "Consistent daily trade ideas",
      "Step-by-step educational videos",
      "Weekly forecast to stay prepared",
      "24/7 chat access for all your questions",
      "Great value for ongoing progress",
    ],
    cta: "Get Started",
    link: "https://whop.com/checkout/6lrV6wVi0c7caMFtPX-Szut-0ex1-g7ES-TjjaI5saP6m4/",
    popular: false,
    elite: true,
    saving: "Save 15%",
  },
  {
    name: "3 Months",
    price: "60.99",
    period: "/3 months",
    badge: "Value",
    description: "Master the market",
    icon: Zap,
    features: [
      "High-quality daily trade ideas",
      "Detailed how-to videos to level up",
      "In-depth weekly market breakdown",
      "Full 24/7 access to the trading chat",
      "Best option for long-term improvement",
    ],
    cta: "Go Pro",
    link: "https://whop.com/checkout/ml9lCJBGzCUWos6Dn-5eRH-Jg0K-q3pM-xHedSiL1qPW0/",
    popular: true,
    saving: "Save 18%",
  },
  {
    name: "Free Community",
    price: "Free",
    period: "",
    badge: "Community",
    description: "Join for free",
    icon: Rocket,
    features: [
      "Basic market insights",
      "Supportive community chat",
      "Occasional market updates",
      "Access to general discussions",
      "A simple start before upgrading",
    ],
    cta: "Join Free Telegram",
    link: "https://t.me/+x7DoEIeaBEw1NzVk",
    popular: false,
  },
]

export default function PlansSection() {
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

    const element = document.getElementById("plans-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div id="plans-section" className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4" id="plans">
          <div className="inline-block">
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-accent/10 text-accent border border-accent/30">
              Simple, Transparent Pricing
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-balance text-foreground">
            Choose your <span className="text-accent">trading path</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start where you are. Grow at your pace. Unlock unlimited potential with our private trading community.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`relative group ${isVisible ? `animate-slide-up` : "opacity-0"}`}
                style={{
                  animationDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white transition-all ${
                      plan.popular
                        ? "bg-accent shadow-lg shadow-accent/50"
                        : plan.elite
                          ? "bg-gradient-to-r from-accent to-primary shadow-lg shadow-accent/50"
                          : "bg-muted"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <div
                  className={`rounded-2xl border transition-all duration-300 h-full flex flex-col p-8 group-hover:shadow-2xl ${
                    plan.elite
                      ? "border-accent/50 bg-gradient-to-br from-card to-card/50 shadow-xl shadow-accent/20 hover:shadow-accent/40"
                      : plan.popular
                        ? "border-accent/40 bg-card shadow-lg shadow-accent/10 hover:border-accent/60"
                        : "border-border bg-card/50 hover:border-accent hover:bg-card"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      plan.elite || plan.popular ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Plan Info */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                      {plan.saving && (
                        <span className="px-2 py-1 rounded text-xs font-bold text-green-400 bg-green-500/10 border border-green-500/30">
                          {plan.saving}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-2">
                      {plan.name === "Free Community" ? (
                        <span className="text-4xl font-bold text-blue-500">Free</span>
                      ) : (
                        <>
                          <span
                            className={`text-4xl font-bold ${plan.elite || plan.popular ? "text-accent" : "text-foreground"}`}
                          >
                            £{plan.price}
                          </span>
                          <span className="text-muted-foreground text-sm">{plan.period}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a href={plan.link} className="w-full block">
                    <button
                      className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-300 hover:scale-105 active:scale-95 text-sm ${
                        plan.elite
                          ? "bg-gradient-to-r from-accent to-primary text-white hover:shadow-lg hover:shadow-accent/30"
                          : plan.popular
                            ? "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20"
                            : "border-2 border-accent/30 text-accent hover:border-accent hover:bg-accent/10"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </a>

                  {/* Features */}
                  <div className="space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            plan.elite || plan.popular ? "bg-accent/20" : "bg-muted"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${plan.elite || plan.popular ? "text-accent" : "text-muted-foreground"}`}
                          />
                        </div>
                        <span className="text-foreground/90 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-20 pt-20 border-t border-border text-center ">
          <div className="mb-16">
            <div className="inline-block">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-accent/10 text-accent border border-accent/30">
                Included in all plans
              </span>
            </div>
            <h3 className="text-5xl md:text-4xl font-bold text-foreground mt-4 mb-2">
              Everything you need to <span className="text-accent">succeed</span>
            </h3>
            <p className="text-muted-foreground text-lg">Professional tools and resources for every level of trader</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Private Community", desc: "24/7 access to expert traders and professionals" },
              { title: "Daily Analysis", desc: "Real-time market insights and technical analysis" },
              { title: "Livestream Sessions", desc: "Live trading and interactive Q&A with mentors" },
              { title: "Video Library", desc: "100+ hours of comprehensive training content" },
              { title: "Risk Management", desc: "Professional portfolio tools and strategies" },
              { title: "Priority Support", desc: "Direct access to mentors and community leaders" },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group p-6 bg-gradient-to-br from-card to-card/50 border border-border rounded-xl hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Professional numbered badge */}
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 font-semibold text-sm group-hover:bg-accent/20 transition-colors">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-semibold text-sm mb-2">{item.title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
