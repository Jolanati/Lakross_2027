'use client'

import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const { t } = useSite()
  const percent = Math.round((siteConfig.donate.raisedEur / siteConfig.donate.goalEur) * 100)
  const embedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-charcoal-deep overflow-hidden">
      {/* Oversized background text */}
      <div className="bg-text top-1/2 -translate-y-1/2 -left-[5%]">ROAD</div>
      <div className="bg-text top-[15%] right-[-10%] text-white/[0.02]">TOP5</div>

      {/* Red geometric accent — large circle */}
      <div className="accent-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[700px] md:h-[700px] rounded-full border-[3px] border-carmine/20" />
      <div className="accent-circle absolute top-1/2 left-1/2 -translate-x-[45%] -translate-y-[55%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-carmine/10" />

      {/* Diagonal red slash accents */}
      <div className="accent-slash h-[200px] top-[10%] right-[15%] opacity-60" />
      <div className="accent-slash h-[300px] bottom-[5%] left-[8%] opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left — headline */}
          <div className="lg:col-span-7">
            <div className="hero-fade-in mb-6">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-carmine-light">
                {t.hero.overtitle}
              </span>
            </div>

            <h1 className="mb-8">
              <span className="hero-title-line block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black text-white leading-[0.85] tracking-tighter">
                ROAD
              </span>
              <span className="hero-title-line block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black text-white leading-[0.85] tracking-tighter">
                TO <span className="text-carmine">TOP</span>
              </span>
              <span className="hero-title-line block text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-display font-black text-white leading-[0.75] tracking-tighter">
                5
              </span>
            </h1>

            <div className="hero-fade-in max-w-md">
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#donate"
                   className="group inline-flex items-center px-8 py-4 bg-carmine text-white font-display font-bold text-sm tracking-wide uppercase hover:bg-carmine-light transition-all">
                  {t.hero.cta}
                  <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#story"
                   className="inline-flex items-center px-8 py-4 border border-white/20 text-white/70 font-display font-semibold text-sm tracking-wide uppercase hover:border-white/40 hover:text-white transition-all">
                  {t.hero.scrollHint}
                </a>
              </div>
            </div>
          </div>

          {/* Right — Instagram reel + fundraising */}
          <div className="lg:col-span-5 hero-fade-in-late">
            {/* Instagram embed */}
            <div ref={embedRef} className="relative mb-8 overflow-hidden">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink="https://www.instagram.com/reel/DYsHoQLtBQc/?utm_source=ig_embed&utm_campaign=loading"
                data-instgrm-version="14"
                style={{
                  background: 'transparent',
                  border: 0,
                  margin: 0,
                  padding: 0,
                  width: '100%',
                  maxWidth: '540px',
                }}
              >
                <a
                  href="https://www.instagram.com/reel/DYsHoQLtBQc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#c9c8cd', textDecoration: 'none' }}
                >
                  View this post on Instagram
                </a>
              </blockquote>
            </div>

            {/* Progress */}
            <div className="number-reveal">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-4xl font-display font-black text-white">{siteConfig.donate.raisedEur.toLocaleString()}&euro;</span>
                <span className="text-sm text-gray-600">/ {siteConfig.donate.goalEur.toLocaleString()}&euro;</span>
              </div>
              <div className="h-[2px] bg-white/10 w-full line-reveal origin-left">
                <div className="h-full bg-carmine transition-all duration-[2s] ease-out" style={{ width: `${percent}%` }} />
              </div>
              <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] mt-3">{t.progress.deadline}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-carmine/50 to-transparent" />
    </section>
  )
}
