'use client'

import { useSite } from '@/context/SiteContext'

export default function KPIs() {
  const { t } = useSite()

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-carmine mb-3 text-center">
          {t.kpis.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-charcoal text-center mb-3">
          {t.kpis.title}
        </h2>
        <p className="text-charcoal/50 text-center text-sm mb-12">{t.kpis.weeklyRate}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.kpis.metrics.map((kpi, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
              <p className="text-xs font-body text-carmine tracking-[0.12em] uppercase mb-2">{kpi.metric}</p>
              <p className="text-xl font-display font-bold text-charcoal mb-3 leading-snug">{kpi.target}</p>
              <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                <span className="text-xs text-charcoal/40 font-body">Šobrīd:</span>
                <span className="text-xs font-semibold text-charcoal/70">{kpi.current}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
