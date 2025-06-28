// FILE: components/InteractiveHero.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/Button" // Assuming this path is correct
import { useEffect, useState } from "react"

export default function InteractiveHero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    // CHANGE: Using solid brand-green background
    <section className="relative bg-brand-green text-white overflow-hidden min-h-screen flex items-center">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {/* CHANGE: Using brand-gold for the animated blob */}
        <div className="absolute w-96 h-96 bg-brand-gold rounded-full blur-3xl animate-pulse" style={{ left: "10%", top: "20%" }}/>
        {/* REMOVED the off-brand blue blob */}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            // CHANGE: Using brand-gold for particles
            className="absolute w-2 h-2 bg-brand-gold rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className={`space-y-6 transition-all duration-1000 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            A Familiar Way Forward
          </h1>

          <p className="text-xl text-gray-200 font-body">
            Sustainable Agriculture and Education in Ghana.
          </p>

          <div>
            <Button
              size="lg"
              // CHANGE: Using brand-gold and brand-green for the button
              className="bg-brand-gold text-brand-green font-bold hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/about">Discover Our Story</Link>
            </Button>
          </div>
        </div>

        {/* Interactive Image Section */}
        <div className={`relative transition-all duration-1000 delay-300 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="relative group cursor-pointer">
            {/* Main Image Container */}
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1">
              {/* CHANGE: Gradient Overlay using brand colors */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/50 via-transparent to-brand-gold/20 z-10" />

              {/* Hope Boy Image */}
              <Image
                src="/hopeboy.png" // IMPORTANT: Make sure this file exists in your /public folder
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                alt="Young boy representing hope - a student from Ghana who embodies the future we're building"
                priority
              />

              {/* Floating Label */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-brand-green px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                ✨ Hope for Tomorrow
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-4 left-4 w-full h-full border-2 border-brand-gold/30 rounded-2xl transform rotate-3" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* CHANGE: Fill color changed to brand-cream to match the next section */}
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-brand-cream"
          ></path>
        </svg>
      </div>
    </section>
  )
}