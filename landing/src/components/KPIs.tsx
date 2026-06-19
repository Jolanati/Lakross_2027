'use client'

import { useSite } from '@/context/SiteContext'

export default function KPIs() {
  const { t } = useSite()
  const { kpis } = t

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-carmine mb-3 text-center">
          {kpis.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-charcoal text-center mb-3">
          {kpis.title}
        </h2>
        <p className="text-charcoal/50 text-center text-sm max-w-xl mx-auto mb-10 leading-relaxed">
          {kpis.explanation}
        </p>

        {/* Column legend */}
        <div className="hidden md:grid md:grid-cols-[1fr_1.6fr_1.6fr] gap-px mb-2 px-1">
          <div />
          <div className="flex items-center gap-2 px-4">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0" />
            <span className="text-xs font-body font-semibold text-charcoal/50 uppercase tracking-[0.12em]">
              {kpis.colLagging}
            </span>
          </div>
          <div className="flex items-center gap-2 px-4">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 flex-shrink-0" />
            <span className="text-xs font-body font-semibold text-charcoal/50 uppercase tracking-[0.12em]">
              {kpis.colLeading}
            </span>
          </div>
        </div>

        {/* Rows */}
        <div className="space-y-3">
          {kpis.rows.map((row, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-[1fr_1.6fr_1.6fr]">

                {/* Area */}
                <div className="p-5 border-b md:border-b-0 md:border-r border-gray-100 flex items-center">
                  <div>
                    <span className="text-xs font-body text-carmine tracking-[0.12em] uppercase block mb-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display font-bold text-charcoal text-base leading-snug">
                      {row.area}
                    </h3>
                  </div>
                </div>

                {/* Lagging — outcome */}
                <div className="p-5 border-b md:border-b-0 md:border-r border-gray-100">
                  <div className="flex items-center gap-1.5 mb-2 md:hidden">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-xs font-body text-charcoal/40 uppercase tracking-[0.1em]">Mērķis</span>
                  </div>
                  <p className="text-sm font-semibold text-charcoal leading-snug">{row.lagging}</p>
                </div>

                {/* Leading — activity */}
                <div className="p-5">
                  <div className="flex items-center gap-1.5 mb-2 md:hidden">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-body text-charcoal/40 uppercase tracking-[0.1em]">Aktivitāte</span>
                  </div>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{row.leading}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Weekly rate callout */}
        <div className="mt-6 bg-white border border-gray-100 rounded-xl shadow-sm p-5 flex items-center gap-4">
          <div className="flex-shrink-0 w-1 self-stretch bg-carmine rounded-full" />
          <p className="text-sm text-charcoal/70 leading-relaxed">{kpis.weeklyRate}</p>
        </div>
      </div>
    </div>
  )
}
