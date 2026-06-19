'use client'

import { useSite } from '@/context/SiteContext'

const quadrantStyle = [
  { border: 'border-l-emerald-400', badge: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  { border: 'border-l-red-400',     badge: 'text-red-700 bg-red-50 border-red-200' },
  { border: 'border-l-blue-400',    badge: 'text-blue-700 bg-blue-50 border-blue-200' },
  { border: 'border-l-amber-400',   badge: 'text-amber-700 bg-amber-50 border-amber-200' },
]

export default function SWOT() {
  const { t } = useSite()
  const { swot } = t

  const quadrants = [swot.strengths, swot.weaknesses, swot.opportunities, swot.threats]

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-carmine mb-3 text-center">
          {swot.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-charcoal text-center mb-12">
          {swot.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {quadrants.map((data, i) => (
            <div key={i} className={`bg-white border border-gray-100 border-l-4 ${quadrantStyle[i].border} rounded-xl shadow-sm overflow-hidden`}>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-body font-bold px-3 py-1.5 border rounded-full ${quadrantStyle[i].badge}`}>
                    {data.title}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {data.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-charcoal/80 leading-relaxed">
                      <span className="text-carmine mt-0.5 flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
