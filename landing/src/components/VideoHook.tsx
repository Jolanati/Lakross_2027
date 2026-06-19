'use client'

import { siteConfig } from '@/content/config'

export default function VideoHook() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="videohook" className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
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

      <div className="absolute inset-0 bg-charcoal/55" />

      {/* Content — narrow column, anchored bottom-left */}
      <div className="relative z-10 px-6 pb-16 md:pb-20 w-full max-w-5xl mx-auto">
        <p className="font-body text-[10px] font-bold tracking-[0.3em] uppercase text-cream/50 mb-6">
          Latvijas Sieviešu Lakrosa Izlase
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-cream leading-[0.88] tracking-tight mb-6 max-w-xs sm:max-w-sm">
          14 gadus vienas.
        </h1>
        <p className="text-base text-cream/70 max-w-xs mb-10 leading-relaxed">
          Novembrī, ar atlasi Spānijā sākas Latvijas ceļš uz Olimpiādi.
          Palīdzi mums tur nokļūt.
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
