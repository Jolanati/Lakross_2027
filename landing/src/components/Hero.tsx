'use client'

import { useEffect, useRef, useState } from 'react'

// Resets on full page reload → hero always plays on fresh visits.
// Survives client-side navigation → back button from sub-pages skips the gateway.
let gatewayPassed = false

export default function Hero() {
  const [opened, setOpened] = useState(gatewayPassed)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
    if (gatewayPassed) {
      document.documentElement.classList.add('snap-ready')
    }
  }, [])

  function handleOpen() {
    gatewayPassed = true
    setOpened(true)
    setTimeout(() => {
      document.documentElement.classList.add('snap-ready')
    }, 1100)
  }

  return (
    <>
      {/* Full-screen gateway — fixed overlay z-50 */}
      <div
        id="hero"
        style={{
          clipPath: opened
            ? 'polygon(0 0, 100% 0, 100% 0%, 0 0%)'
            : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          transition: 'clip-path 1s cubic-bezier(0.76, 0, 0.24, 1)',
          pointerEvents: opened ? 'none' : 'auto',
        }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/practice-days.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <div className="mb-10">
            <svg width="240" height="110" viewBox="0 0 500 230" fill="none">
              <circle cx="100" cy="90" r="72" stroke="white" strokeWidth="8" fill="none" />
              <circle cx="250" cy="90" r="72" stroke="white" strokeWidth="8" fill="none" />
              <circle cx="400" cy="90" r="72" stroke="white" strokeWidth="8" fill="none" />
              <circle cx="175" cy="140" r="72" stroke="white" strokeWidth="8" fill="none" />
              <circle cx="325" cy="140" r="72" stroke="white" strokeWidth="8" fill="none" />
            </svg>
          </div>

          <button
            type="button"
            onClick={handleOpen}
            className="px-12 py-4 border-2 border-white text-white font-body text-lg md:text-xl font-semibold tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
          >
            Ceļš uz Olimpiādi
          </button>
        </div>
      </div>

      {/* Spacer collapses when gateway closes */}
      <div
        style={{ transition: 'height 1s cubic-bezier(0.76, 0, 0.24, 1)' }}
        className={opened ? 'h-0' : 'h-screen'}
      />
    </>
  )
}
