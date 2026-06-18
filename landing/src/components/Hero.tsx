'use client'

import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'

export default function Hero() {
  const { t } = useSite()
  const percent = Math.round((siteConfig.donate.raisedEur / siteConfig.donate.goalEur) * 100)

  return (
    <section id="hero" className="relative min-h-screen flex items-end pb-24 pt-32 bg-charcoal-deep overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(155,27,48,0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,168,76,0.08)_0%,_transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-carmine/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          {/* Left — copy */}
          <div>
            <div className="inline-block px-3 py-1 border border-gold/30 mb-8">
              <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">{t.hero.badge}</span>
            </div>

            <p className="text-carmine-light text-[11px] font-bold tracking-[0.25em] uppercase mb-5">
              {t.hero.overtitle}
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-white leading-[0.95] mb-8 tracking-tight">
              {t.hero.title}
            </h1>

            <p className="text-lg text-gray-400 max-w-lg leading-relaxed mb-10">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#donate"
                 className="inline-flex items-center justify-center px-8 py-4 bg-carmine text-white font-display font-bold text-sm tracking-wide uppercase hover:bg-carmine-light transition-colors">
                {t.hero.cta}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#story"
                 className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white/80 font-display font-semibold text-sm tracking-wide uppercase hover:bg-white/5 transition-colors">
                {t.hero.scrollHint}
              </a>
            </div>
          </div>

          {/* Right — fundraising data */}
          <div className="lg:border-l lg:border-white/10 lg:pl-16">
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-2">{t.progress.deadline}</p>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-display font-black text-white">{siteConfig.donate.raisedEur.toLocaleString()}&euro;</span>
                <span className="text-lg text-gray-500">/ {siteConfig.donate.goalEur.toLocaleString()}&euro;</span>
              </div>
              <div className="h-1 bg-white/10 w-full">
                <div className="h-full bg-gradient-to-r from-carmine to-carmine-light transition-all duration-1000"
                     style={{ width: `${percent}%` }} />
              </div>
              <div className="flex justify-between text-[11px] text-gray-500 uppercase tracking-wider">
                <span>{percent}% {t.progress.raised.toLowerCase()}</span>
                <span>{(siteConfig.donate.goalEur - siteConfig.donate.raisedEur).toLocaleString()}&euro; {t.progress.remaining.toLowerCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
