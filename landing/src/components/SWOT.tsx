'use client'

import { useSite } from '@/context/SiteContext'

export default function SWOT() {
  const { t } = useSite()
  const { swot } = t

  const quadrants = [
    { data: swot.strengths, color: 'bg-green-50 border-green-200', icon: '💪' },
    { data: swot.weaknesses, color: 'bg-red-50 border-red-200', icon: '⚠️' },
    { data: swot.opportunities, color: 'bg-blue-50 border-blue-200', icon: '🚀' },
    { data: swot.threats, color: 'bg-amber-50 border-amber-200', icon: '🛡️' },
  ]

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-carmine mb-3 text-center">
          {swot.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-charcoal text-center mb-12">
          {swot.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {quadrants.map(({ data, color, icon }, i) => (
            <div key={i} className={`${color} border rounded-xl p-6`}>
              <h3 className="text-lg font-display font-bold text-charcoal mb-4">
                {icon} {data.title}
              </h3>
              <ul className="space-y-2">
                {data.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
