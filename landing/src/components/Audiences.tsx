'use client'

import { useSite } from '@/context/SiteContext'

export default function Audiences() {
  const { t } = useSite()
  const { audiences } = t

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-carmine mb-3 text-center">
          {audiences.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-charcoal text-center mb-3">
          {audiences.title}
        </h2>
        <p className="text-charcoal/50 text-center text-sm max-w-2xl mx-auto mb-12 leading-relaxed">
          {audiences.subtitle}
        </p>

        <div className="space-y-3">
          {audiences.items.map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-[1.2fr_1fr_1.4fr]">
                <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100">
                  <p className="text-xs font-body text-carmine tracking-[0.12em] uppercase mb-2">
                    Segments {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display font-bold text-charcoal text-lg leading-snug">
                    {item.segment}
                  </h3>
                </div>
                <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100">
                  <p className="text-xs font-body text-carmine tracking-[0.12em] uppercase mb-2">Kanāls</p>
                  <p className="text-sm text-charcoal/80 leading-relaxed">{item.channel}</p>
                </div>
                <div className="p-6">
                  <p className="text-xs font-body text-carmine tracking-[0.12em] uppercase mb-2">Vēstījums</p>
                  <p className="text-sm text-charcoal/80 leading-relaxed italic">"{item.message}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
