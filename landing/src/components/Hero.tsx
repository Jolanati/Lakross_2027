'use client'

import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'

export default function Hero() {
  const { t } = useSite()

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-charcoal-deep overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep via-charcoal-deep/90 to-carmine-dark/30" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-carmine/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-gold/40 bg-gold/10">
          <span className="text-gold font-display font-bold text-sm tracking-widest">{t.hero.badge}</span>
        </div>

        {/* Overtitle */}
        <p className="text-carmine-light font-display font-semibold text-sm tracking-[0.2em] uppercase mb-4">
          {t.hero.overtitle}
        </p>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white leading-[1.1] mb-6">
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#donate"
            className="px-8 py-4 bg-carmine hover:bg-carmine-light text-white font-display font-bold text-lg rounded-lg
                       transition-all hover:scale-105 hover:shadow-lg hover:shadow-carmine/30"
          >
            {t.hero.cta}
          </a>
          <a
            href="#story"
            className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 font-display font-semibold rounded-lg transition-all"
          >
            {t.hero.scrollHint} ↓
          </a>
        </div>

        {/* Mini progress indicator */}
        <div className="mt-16 max-w-md mx-auto">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>{t.progress.raised}: {siteConfig.donate.raisedEur}€</span>
            <span>{t.progress.goal}: {siteConfig.donate.goalEur.toLocaleString()}€</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-carmine to-gold rounded-full transition-all duration-1000"
              style={{ width: `${(siteConfig.donate.raisedEur / siteConfig.donate.goalEur) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">{t.progress.deadline}</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
