"use client"

import { useEffect, useRef } from "react"

export default function ScrollAnimationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<
    Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      size: number
      color: string
    }>
  >([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to viewport size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    const particles = particlesRef.current

    // Create particles on scroll with enhanced effects
    const handleScroll = () => {
      const scrollY = window.scrollY
      const particleCount = 6
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width
        const y = scrollY + Math.random() * window.innerHeight
        const angle = Math.random() * Math.PI * 2
        const speed = 1.5 + Math.random() * 3

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          size: 1.5 + Math.random() * 3,
          color: `hsl(${180 + Math.random() * 80}, 100%, ${50 + Math.random() * 40}%)`,
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.015)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.008
        p.vy += 0.12

        if (p.life <= 0) {
          particles.splice(i, 1)
          continue
        }

        ctx.globalAlpha = p.life * 0.7
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw connection lines to nearby particles for network effect
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p2.x - p.x
          const dy = p2.y - p.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.strokeStyle = `rgba(100, 200, 255, ${(1 - distance / 150) * p.life * 0.4})`
            ctx.lineWidth = 0.7
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", setCanvasSize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />
}
