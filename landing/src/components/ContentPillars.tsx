'use client'

import { useSite } from '@/context/SiteContext'

export default function ContentPillars() {
  const { t } = useSite()
  const { contentPillars } = t

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-carmine mb-3 text-center">
          {contentPillars.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-charcoal text-center mb-3">
          {contentPillars.title}
        </h2>
        <p className="text-charcoal/50 text-center text-sm max-w-2xl mx-auto mb-12 italic leading-relaxed">
          "{contentPillars.mainMessage}"
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {contentPillars.pillars.map((pillar, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <p className="text-xs font-body text-carmine tracking-[0.12em] uppercase mb-3">
                  Pīlārs {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display font-bold text-charcoal text-lg mb-3 leading-snug">
                  {pillar.name}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-1 self-stretch bg-carmine rounded-full" />
            <div>
              <p className="text-xs font-body text-carmine tracking-[0.12em] uppercase mb-2">Zelta likums</p>
              <p className="text-base text-charcoal/80 leading-relaxed">{contentPillars.rule}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
