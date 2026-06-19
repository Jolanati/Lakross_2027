'use client'

import { useSite } from '@/context/SiteContext'

export default function KPIs() {
  const { t } = useSite()

  return (
    <div className="py-20 px-4 bg-charcoal-deep" style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
      <div className="max-w-4xl mx-auto">
        <p className="text-gold font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-center">
          {t.kpis.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-white text-center mb-4">
          {t.kpis.title}
        </h2>
        <p className="text-gray-400 text-center text-sm mb-12">{t.kpis.weeklyRate}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.kpis.metrics.map((kpi, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-sm text-gray-400 mb-1">{kpi.metric}</p>
              <p className="text-xl font-display font-bold text-white mb-2">{kpi.target}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Šobrīd:</span>
                <span className="text-xs font-semibold text-gold">{kpi.current}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
