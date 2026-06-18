'use client'

import { useSite } from '@/context/SiteContext'

export default function Story() {
  const { t } = useSite()

  return (
    <div id="story" className="py-24 px-4 bg-cream">
      <div className="max-w-4xl mx-auto">
        {/* Overtitle */}
        <p className="text-carmine font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.story.stats.map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl md:text-4xl font-display font-black text-carmine mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
