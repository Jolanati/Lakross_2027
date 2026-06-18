'use client'

import { useSite } from '@/context/SiteContext'

export default function Story() {
  const { t } = useSite()

  return (
    <div id="story" className="py-24 px-4 bg-cream">
      <div className="max-w-4xl mx-auto">
        {/* Overtitle */}
        <p className="text-carmine text-[10px] font-bold tracking-[0.3em] uppercase mb-3">
          {t.story.overtitle}
        </p>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-charcoal leading-tight mb-8">
          {t.story.title}
        </h2>

        {/* Paragraphs */}
        <div className="space-y-4 mb-12">
          {t.story.paragraphs.map((p, i) => (
            <p key={i} className="text-lg text-gray-700 leading-relaxed">{p}</p>
          ))}
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200">
          {t.story.stats.map((stat, i) => (
            <div key={i} className="text-center p-8 bg-cream">
              <div className="text-4xl md:text-5xl font-display font-black text-charcoal mb-1">{stat.value}</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
