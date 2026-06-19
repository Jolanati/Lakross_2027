'use client'

import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const [opened, setOpened] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.currentTime = 5
      video.play()
    }
  }, [])

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
        {/* Background video — starts at 5s */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Olympic Rings — white, larger */}
          <div className="mb-12">
            <svg
              width="280"
              height="130"
              viewBox="0 0 500 230"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Top row: 3 rings */}
              <circle cx="100" cy="90" r="72" stroke="white" strokeWidth="8" fill="none" />
              <circle cx="250" cy="90" r="72" stroke="white" strokeWidth="8" fill="none" />
              <circle cx="400" cy="90" r="72" stroke="white" strokeWidth="8" fill="none" />
              {/* Bottom row: 2 rings */}
              <circle cx="175" cy="140" r="72" stroke="white" strokeWidth="8" fill="none" />
              <circle cx="325" cy="140" r="72" stroke="white" strokeWidth="8" fill="none" />
            </svg>
          </div>

          {/* CTA Button — minimal, no fill */}
          <button
            onClick={handleOpen}
            className="px-12 py-4 border-2 border-white text-white font-display text-2xl md:text-3xl tracking-wide hover:bg-white hover:text-black transition-all duration-300"
          >
            Ceļš uz Olimpiādi
          </button>
        </div>
      </section>

      {/* Spacer */}
      <div className={`transition-all duration-1000 ${opened ? 'h-0' : 'h-screen'}`} />
      <div id="content-start" />
    </>
  )
}
