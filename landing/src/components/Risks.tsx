'use client'

import { useSite } from '@/context/SiteContext'

const impactColor: Record<string, string> = {
  'Augsta': 'text-red-500 bg-red-50 border-red-200',
  'Vidēja': 'text-amber-600 bg-amber-50 border-amber-200',
  'Zema': 'text-green-600 bg-green-50 border-green-200',
}

export default function Risks() {
  const { t } = useSite()
  const { risks } = t

  return (
    <div className="py-20 px-4 bg-gray-50" style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
      <div className="max-w-4xl mx-auto">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-carmine mb-3 text-center">
          {risks.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-charcoal text-center mb-12">
          {risks.title}
        </h2>

        <div className="space-y-4">
          {risks.items.map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
              <div className="grid md:grid-cols-[1fr_auto_2fr]">
                <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100">
                  <p className="text-xs font-body text-carmine tracking-[0.12em] uppercase mb-2">Risks</p>
                  <p className="font-display font-bold text-charcoal text-base leading-snug">
                    {item.risk}
                  </p>
                </div>
                <div className="p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
                  <span className={`text-xs font-body font-bold px-3 py-1.5 border rounded-full ${impactColor[item.impact] ?? 'text-gray-600 bg-gray-50 border-gray-200'}`}>
                    {item.impact}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-body text-charcoal/40 tracking-[0.12em] uppercase mb-2">Risinājums</p>
                  <p className="text-sm text-charcoal/80 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
