'use client'

import { siteConfig } from '@/content/config'

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section id="hero" className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/lvtoday.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal/55" />

      {/* Content — anchored to bottom left, Nike style */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 md:pb-20 w-full">
        <p className="font-body text-[10px] font-bold tracking-[0.3em] uppercase text-cream/50 mb-6">
          Latvijas Sieviešu Lakrosa Izlase
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-cream leading-[0.88] tracking-tight mb-6">
          14 gadus vienas.
        </h1>
        <p className="text-base sm:text-lg text-cream/70 max-w-lg mb-10 leading-relaxed">
          Novembrī, Spānijā, sākas Latvijas ceļš uz Olimpiskajām spēlēm.
          Palīdzi mums nokļūt tur.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo('story')}
            className="px-8 py-3 border border-cream/40 text-cream font-body text-sm font-medium hover:bg-cream/10 transition-colors"
          >
            Mūsu stāsts ↓
          </button>
          <a
            href={siteConfig.donate.zeffy}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-carmine text-cream font-body text-sm font-semibold hover:bg-carmine-dark transition-colors"
          >
            Atbalsti komandu →
          </a>
        </div>
      </div>
    </section>
  )
}
