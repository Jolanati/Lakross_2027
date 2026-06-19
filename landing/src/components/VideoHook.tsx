'use client'

import { siteConfig } from '@/content/config'

export default function VideoHook() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="videohook" className="relative h-[60vh] min-h-[440px] flex items-end overflow-hidden">
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
      <div className="relative z-10 px-6 pb-20 md:pb-24 w-full max-w-5xl mx-auto">
        <p className="font-body text-[10px] font-bold tracking-[0.3em] uppercase text-cream/60 mb-5">
          Latvijas Sieviešu Lakrosa Izlase
        </p>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-display font-black text-cream leading-[0.88] tracking-tight mb-5 max-w-xs sm:max-w-sm">
          14 gadus vienas.
        </h1>
        <p className="text-lg text-cream/80 max-w-sm mb-10 leading-relaxed font-body">
          Novembrī, ar atlasi Spānijā sākas Latvijas
          ceļš uz Olimpiādi. Palīdzi mums tur nokļūt.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo('story')}
            className="px-8 py-3 border border-cream/50 text-cream font-body text-sm font-medium hover:bg-cream/10 transition-colors"
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
