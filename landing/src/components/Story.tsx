'use client'

import { useSite } from '@/context/SiteContext'

export default function Story() {
  const { t } = useSite()

  return (
    <div id="story" className="relative py-32 px-4 bg-cream overflow-hidden">
      {/* Oversized background text */}
      <div className="bg-text top-1/2 -translate-y-1/2 right-[-5%] text-charcoal/[0.03]">LATVIA</div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Overtitle */}
        <p className="text-carmine text-[10px] font-bold tracking-[0.3em] uppercase mb-3">
          {t.story.overtitle}
        </p>

        {/* Title — large, impactful */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-charcoal leading-[0.9] tracking-tight mb-12 max-w-4xl">
          {t.story.title}
        </h2>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-5">
            {t.story.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-gray-600 leading-relaxed">{p}</p>
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
            <div key={i} className="bg-cream p-8 text-center">
              <div className="text-4xl md:text-5xl font-display font-black text-charcoal leading-none mb-2">{stat.value}</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Red accent line */}
      <div className="absolute bottom-0 left-0 w-1/3 h-[3px] bg-carmine" />
    </div>
  )
}
