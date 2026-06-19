'use client'

import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const [opened, setOpened] = useState(false)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    if (scriptLoaded.current) return
    scriptLoaded.current = true
    const s = document.createElement('script')
    s.src = '//www.instagram.com/embed.js'
    s.async = true
    document.body.appendChild(s)
    s.onload = () => {
      if (window.instgrm) window.instgrm.Embeds.process()
    }
  }, [])

  const handleOpen = () => {
    setOpened(true)
    // Scroll to content after animation
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
        {/* Instagram Reel embed */}
        <div className="w-full max-w-[380px] mx-auto mb-8 rounded-lg overflow-hidden opacity-90">
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/reel/DYsHoQLtBQc/?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: '#000',
              border: 0,
              borderRadius: '8px',
              margin: '0 auto',
              maxWidth: '380px',
              width: '100%',
              padding: 0,
            }}
          >
            <div style={{ padding: '16px' }}>
              <a
                href="https://www.instagram.com/reel/DYsHoQLtBQc/?utm_source=ig_embed&utm_campaign=loading"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                View this post on Instagram
              </a>
            </div>
          </blockquote>
        </div>

        {/* Olympic Rings — white, 5 rings (3 top, 2 bottom) */}
        <div className="mb-8">
          <svg
            width="180"
            height="80"
            viewBox="0 0 500 230"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-80"
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
          className="group relative px-10 py-5 bg-white text-black font-display text-xl md:text-2xl font-semibold tracking-wide hover:bg-cream transition-colors duration-300"
        >
          Ceļš uz Olimpiādi
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-carmine scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </button>
      </section>

      {/* Spacer — prevents content jump when hero is fixed */}
      <div className={`transition-all duration-1000 ${opened ? 'h-0' : 'h-screen'}`} />

      {/* Anchor for scroll */}
      <div id="content-start" />
    </>
  )
}
