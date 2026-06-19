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
        <p className="font-body text-[10px] font-bold tracking-[0.3em] uppercase text-cream/60 mb-3">
          Latvijas Sieviešu Lakrosa Izlase
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-cream leading-[1.0] tracking-tight mb-3 max-w-2xl">
          14 gadus pašu spēkiem — tagad kopā!
        </h1>
        <p className="text-sm text-cream/80 max-w-md mb-6 leading-relaxed font-body">
          Novembrī, ar atlasi Spānijā sākas Latvijas ceļš uz Olimpiādi. Palīdzi mums tur nokļūt.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => scrollTo('story')}
            className="px-6 py-2.5 border border-cream/50 text-cream font-body text-sm font-medium hover:bg-cream/10 transition-colors"
          >
            Mūsu stāsts ↓
          </button>
          <a
            href={siteConfig.donate.zeffy}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-carmine text-cream font-body text-sm font-semibold hover:bg-carmine-dark transition-colors"
          >
            Atbalsti komandu →
          </a>
        </div>
      </div>
    </section>
  )
}
