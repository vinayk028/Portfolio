"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Star class
    class Star {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
      twinkleSpeed: number
      twinklePhase: number
      brightness: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.size = Math.random() * 2.5 + 0.3
        this.speedX = (Math.random() - 0.5) * 0.15
        this.speedY = (Math.random() - 0.5) * 0.15
        this.opacity = Math.random() * 0.5 + 0.5
        this.brightness = Math.random() * 0.7 + 0.3
        
        const colors = [
          "#FFFFFF", "#FFFEF0", "#F0F8FF", "#FFFACD", 
          "#FFE4B5", "#E0F6FF", "#FFF5E1",
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.twinkleSpeed = Math.random() * 0.03 + 0.01
        this.twinklePhase = Math.random() * Math.PI * 2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x < -10) this.x = canvas!.width + 10
        if (this.x > canvas!.width + 10) this.x = -10
        if (this.y < -10) this.y = canvas!.height + 10
        if (this.y > canvas!.height + 10) this.y = -10

        this.twinklePhase += this.twinkleSpeed
      }

      draw() {
        if (!ctx) return
        
        const twinkle = Math.sin(this.twinklePhase) * 0.4 + 0.6
        const currentOpacity = this.opacity * twinkle * this.brightness
        
        ctx.globalAlpha = currentOpacity
        ctx.fillStyle = this.color
        ctx.shadowBlur = 8 + this.size * 2
        ctx.shadowColor = this.color
        
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        
        if (this.size > 1.5) {
          ctx.shadowBlur = 15
          ctx.globalAlpha = currentOpacity * 1.2
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2)
          ctx.fill()
        }
        
        ctx.shadowBlur = 0
        ctx.globalAlpha = 1
      }
    }

    // Shooting Star class
    class ShootingStar {
      x: number
      y: number
      length: number
      speed: number
      angle: number
      opacity: number
      life: number
      maxLife: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height * 0.5 // Top half of screen
        this.length = Math.random() * 80 + 40
        this.speed = Math.random() * 8 + 6
        this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.5 // Roughly 45 degrees
        this.opacity = 1
        this.life = 0
        this.maxLife = Math.random() * 60 + 60
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed
        this.life++
        
        // Fade out towards end of life
        if (this.life > this.maxLife * 0.7) {
          this.opacity = 1 - ((this.life - this.maxLife * 0.7) / (this.maxLife * 0.3))
        }
      }

      draw() {
        if (!ctx) return
        
        ctx.save()
        ctx.globalAlpha = this.opacity
        
        // Create gradient for the tail
        const gradient = ctx.createLinearGradient(
          this.x, this.y,
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        )
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)")
        gradient.addColorStop(0.5, "rgba(255, 255, 200, 0.5)")
        gradient.addColorStop(1, "rgba(255, 255, 200, 0)")
        
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.lineCap = "round"
        
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        )
        ctx.stroke()
        
        // Bright head
        ctx.fillStyle = "rgba(255, 255, 255, 1)"
        ctx.shadowBlur = 10
        ctx.shadowColor = "#ffffff"
        ctx.beginPath()
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
        ctx.fill()
        
        ctx.restore()
      }

      isDead() {
        return this.life >= this.maxLife || this.y > canvas!.height || this.x > canvas!.width
      }
    }

    // Nebula particle class
    class NebulaParticle {
      x: number
      y: number
      size: number
      color: string
      opacity: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.size = Math.random() * 100 + 60
        const colors = [
          "rgba(100, 50, 200, 0.12)", 
          "rgba(50, 150, 255, 0.10)",
          "rgba(180, 80, 255, 0.11)", 
          "rgba(80, 200, 255, 0.09)",
          "rgba(138, 43, 226, 0.10)"
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.opacity = Math.random() * 0.5 + 0.3
        this.speedX = (Math.random() - 0.5) * 0.08
        this.speedY = (Math.random() - 0.5) * 0.08
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < -100) this.x = canvas!.width + 100
        if (this.x > canvas!.width + 100) this.x = -100
        if (this.y < -100) this.y = canvas!.height + 100
        if (this.y > canvas!.height + 100) this.y = -100
      }

      draw() {
        if (!ctx) return
        ctx.globalAlpha = this.opacity
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size)
        gradient.addColorStop(0, this.color)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")
        ctx.fillStyle = gradient
        ctx.fillRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2)
        ctx.globalAlpha = 1
      }
    }

    const stars: Star[] = []
    const shootingStars: ShootingStar[] = []
    const nebulaParticles: NebulaParticle[] = []
    const numberOfStars = 400
    const numberOfNebula = 30

    for (let i = 0; i < numberOfStars; i++) {
      stars.push(new Star())
    }

    for (let i = 0; i < numberOfNebula; i++) {
      nebulaParticles.push(new NebulaParticle())
    }

    // Animation loop
    let animationFrameId: number
    const animate = () => {
      // Deep space background with gradient
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      )
      bgGradient.addColorStop(0, "#000000")
      bgGradient.addColorStop(0.5, "#000510")
      bgGradient.addColorStop(1, "#00000a")
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw nebula
      nebulaParticles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw stars
      stars.forEach((star) => {
        star.update()
        star.draw()
      })

      // Update and draw shooting stars
      shootingStars.forEach((star, index) => {
        star.update()
        star.draw()
        
        if (star.isDead()) {
          shootingStars.splice(index, 1)
        }
      })

      // Randomly create new shooting stars
      if (Math.random() < 0.02 && shootingStars.length < 3) {
        shootingStars.push(new ShootingStar())
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
    />
  )
}
