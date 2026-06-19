'use client'

import { useSite } from '@/context/SiteContext'

export default function Story() {
  const { t } = useSite()

  return (
    <div id="story" className="relative h-screen py-16 md:py-20 px-4 bg-cream overflow-hidden flex flex-col justify-center" style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
      {/* Oversized background text */}
      <div className="bg-text top-1/2 -translate-y-1/2 right-[-5%] text-charcoal/[0.03]">LATVIA</div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Overtitle */}
        <p className="font-display italic text-carmine text-sm tracking-wide mb-3">
          {t.story.overtitle.toLowerCase().replace('mūsu stāsts', 'Mūsu stāsts')}
        </p>

        {/* Title — large, impactful */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-charcoal leading-[0.9] tracking-tight mb-8 max-w-4xl">
          14 gadu ceļš. <span className="mark">Nulle eiro budžets.</span> Viens mērķis.
        </h2>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-10">
          <div className="space-y-4">
            {t.story.paragraphs.map((p, i) => (
              <p key={i} className="text-xl text-charcoal/70 leading-relaxed">{p}</p>
            ))}
          </div>
          {/* Visual accent column */}
          <div className="relative hidden md:block">
            <div className="absolute top-0 right-0 w-64 h-64 border-2 border-carmine/20" />
            <div className="absolute top-8 right-8 w-64 h-64 bg-carmine/5" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-charcoal-deep" />
          </div>
        </div>

        {/* Stats — horizontal, bold */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-charcoal-deep">
          {t.story.stats.map((stat, i) => (
            <div key={i} className="bg-cream p-5 text-center">
              <div className="text-3xl md:text-4xl font-display font-black text-charcoal leading-none mb-1">{stat.value}</div>
              <div className="text-xs font-body font-bold uppercase tracking-[0.2em] text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Red accent line */}
      <div className="absolute bottom-0 left-0 w-1/3 h-[3px] bg-carmine" />
    </div>
  )
}
