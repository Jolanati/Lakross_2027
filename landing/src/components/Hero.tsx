'use client'

import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'

export default function Hero() {
  const { t } = useSite()

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-carmine overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 w-full py-24 md:py-32">
        {/* Top bar */}
        <div className="hero-fade-in mb-12">
          <p className="font-body text-sm text-white/70 tracking-wide">
            {t.progress.deadline}
          </p>
        </div>

        {/* Main headline — emotional, editorial */}
        <h1 className="hero-fade-in text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium text-cream leading-[1.1] mb-10 max-w-4xl">
          Četrpadsmit gadus mēs to darījām pašas.{' '}
          <em className="italic text-cream/80">Tagad ir laiks darīt to kopā.</em>
        </h1>

        {/* Subtitle */}
        <div className="hero-fade-in-late max-w-2xl mb-12">
          <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>

        {/* CTA buttons */}
        <div className="hero-fade-in-late flex flex-wrap gap-4 mb-20">
          <a href="#kilometri"
             className="inline-flex items-center px-8 py-4 bg-cream text-carmine font-body font-semibold text-sm tracking-wide hover:bg-white transition-colors">
            {t.hero.cta}
            <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#story"
             className="inline-flex items-center px-8 py-4 border border-cream/30 text-cream font-body font-medium text-sm tracking-wide hover:border-cream/60 transition-colors">
            {t.hero.scrollHint}
          </a>
        </div>

        {/* Stats row */}
        <div className="hero-fade-in-late grid grid-cols-3 gap-8 max-w-xl">
          <div>
            <span className="block text-3xl md:text-4xl font-display font-semibold text-cream">14</span>
            <span className="text-xs text-cream/60 font-body">Gadi pašu spēkiem</span>
          </div>
          <div>
            <span className="block text-3xl md:text-4xl font-display font-semibold text-cream">
              0 → 15 000 €
            </span>
            <span className="text-xs text-cream/60 font-body">Kampaņas mērķis</span>
          </div>
          <div>
            <span className="block text-3xl md:text-4xl font-display font-semibold text-cream">Top 5</span>
            <span className="text-xs text-cream/60 font-body">Olimpiskā atlase · Spānija &apos;26</span>
          </div>
        </div>
      </div>
    </section>
  )
}
