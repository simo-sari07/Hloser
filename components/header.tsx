"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("button") && target.closest("button")?.children[0]?.classList.contains("w-6")) return
      if (!target.closest("nav") && !target.closest("button")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "Process", href: "/#process" },
    { label: "Pricing", href: "/#plans" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Questions", href: "/#faq" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 md:left-1/2 md:-translate-x-1/2 z-50 transition-all duration-300 md:w-4/5 md:rounded-b-2xl ${isScrolled ? "bg-white/40 backdrop-blur-xl shadow-xl border border-white/20" : "bg-transparent"
        }`}
    >
      {isScrolled && (
        <div className="absolute inset-0 md:rounded-b-2xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-30">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
        </div>
      )}

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="/"
            onClick={handleNavClick}
            className="animate-fade-in flex items-center gap-2 flex-shrink-0 z-10 relative"
          >
            <Image
              src="https://res.cloudinary.com/da63nggkh/image/upload/v1764700856/IMG_8820_de3ibx.png"
              alt="Moroccan Trading Community Logo"
              width={40}
              height={40}
              className="rounded-md object-cover md:w-12 md:h-12"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center z-10 relative">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          {/* CTA Button */}
          <div className="hidden md:block flex-shrink-0 z-10 relative">
            <a href="/#plans">
              <button
                className="
                  px-6 py-2 
                  bg-gradient-to-r from-accent to-primary 
                  text-white rounded-lg font-medium 
                  transition-all duration-500 ease-out
                  hover:from-primary hover:to-accent 
                  hover:shadow-lg 
                  hover:scale-105
                  cursor-pointer 
                  active:scale-95
                  flex items-center gap-2
                "
              >
                Join
                <ChevronRight className="w-4 h-4" />
              </button>
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 flex-shrink-0 z-10 relative" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-down bg-white/95 backdrop-blur-md rounded-b-lg z-10 relative">
            <nav className="flex flex-col gap-3 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors px-2 py-2"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              ))}
              <a href="/#plans">
              <button
                onClick={handleNavClick}
                className="px-4 py-2 bg-gradient-to-r from-accent to-primary text-white rounded-lg font-medium mt-2 w-full hover:bg-blue-600 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Join <ChevronRight className="w-4 h-4" />
              </button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
