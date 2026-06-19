'use client'

import { useState } from 'react'

export default function Hero() {
  const [opened, setOpened] = useState(false)

  const handleOpen = () => {
    setOpened(true)
    setTimeout(() => {
      document.getElementById('content-start')?.scrollIntoView({ behavior: 'smooth' })
    }, 800)
  }

  return (
    <>
      {/* Full-screen hero overlay */}
      <section
        id="hero"
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          opened ? 'pointer-events-none' : ''
        }`}
        style={{
          clipPath: opened
            ? 'polygon(0 0, 100% 0, 100% 0%, 0 0%)'
            : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        }}
      >
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Olympic Rings — white, 5 rings (3 top, 2 bottom) */}
          <div className="mb-10">
            <svg
              width="180"
              height="80"
              viewBox="0 0 500 230"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-90"
            >
              {/* Top row: 3 rings */}
              <circle cx="100" cy="90" r="72" stroke="white" strokeWidth="10" fill="none" />
              <circle cx="250" cy="90" r="72" stroke="white" strokeWidth="10" fill="none" />
              <circle cx="400" cy="90" r="72" stroke="white" strokeWidth="10" fill="none" />
              {/* Bottom row: 2 rings */}
              <circle cx="175" cy="140" r="72" stroke="white" strokeWidth="10" fill="none" />
              <circle cx="325" cy="140" r="72" stroke="white" strokeWidth="10" fill="none" />
            </svg>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleOpen}
            className="group relative px-10 py-5 bg-white/95 text-black font-display text-xl md:text-2xl font-semibold tracking-wide hover:bg-white transition-colors duration-300 backdrop-blur-sm"
          >
            Ceļš uz Olimpiādi
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-carmine scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
        </div>
      </section>

      {/* Spacer — prevents content jump when hero is fixed */}
      <div className={`transition-all duration-1000 ${opened ? 'h-0' : 'h-screen'}`} />

      {/* Anchor for scroll */}
      <div id="content-start" />
    </>
  )
}
