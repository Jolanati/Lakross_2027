'use client'

import { siteConfig } from '@/content/config'

export default function VideoHook() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="videohook" className="relative h-screen flex items-end overflow-hidden" style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
      {/* LVToday video — game footage */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/lvtoday.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay — lets video breathe at top, readable text at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/10" />

      {/* Content — anchored bottom-left, Nike style */}
      <div className="relative z-10 px-6 pb-10 md:pb-14 w-full max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-cream/60 mb-4">
          Latvijas Sieviešu Lakrosa Izlase
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-cream leading-[1.0] tracking-tight mb-5 max-w-3xl">
          14 gadus pašu spēkiem — <span className="mark">tagad kopā!</span>
        </h1>
        <p className="text-xl md:text-2xl text-cream/80 max-w-2xl mb-8 leading-relaxed">
          Novembrī, ar atlasi Spānijā sākas Latvijas ceļš uz Olimpiādi. Palīdzi mums tur nokļūt.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo('story')}
            className="px-8 py-3 border border-cream/50 text-cream font-body text-base font-medium hover:bg-cream/10 transition-colors"
          >
            Mūsu stāsts ↓
          </button>
          <a
            href={siteConfig.donate.zeffy}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-carmine text-cream font-body text-base font-semibold hover:bg-carmine-dark transition-colors"
          >
            Atbalsti komandu →
          </a>
        </div>
      </div>
    </section>
  )
}
