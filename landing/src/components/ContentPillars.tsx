'use client'

import { useSite } from '@/context/SiteContext'

const icons = ['📚', '🦸', '📍', '🎬']

export default function ContentPillars() {
  const { t } = useSite()
  const { contentPillars } = t

  return (
    <div className="py-20 px-4 bg-charcoal" style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-carmine mb-3 text-center">
          {contentPillars.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-cream text-center mb-3">
          {contentPillars.title}
        </h2>
        <p className="text-cream/50 text-center text-sm max-w-2xl mx-auto mb-12 italic">
          "{contentPillars.mainMessage}"
        </p>

        <div className="grid sm:grid-cols-2 gap-px bg-white/10 mb-8">
          {contentPillars.pillars.map((pillar, i) => (
            <div key={i} className="bg-charcoal p-7 relative overflow-hidden">
              <span className="absolute top-5 right-6 text-4xl opacity-20">{icons[i]}</span>
              <span className="text-xs font-body font-semibold text-carmine tracking-[0.2em] uppercase block mb-3">
                Pīlārs {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display font-bold text-cream text-lg mb-3 leading-snug">
                {pillar.name}
              </h3>
              <p className="text-sm text-cream/60 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="border border-carmine/40 p-6 text-center">
          <p className="text-xs font-body text-carmine tracking-[0.2em] uppercase mb-2">Zelta likums</p>
          <p className="text-cream/80 text-sm leading-relaxed max-w-2xl mx-auto">
            {contentPillars.rule}
          </p>
        </div>
      </div>
    </div>
  )
}
