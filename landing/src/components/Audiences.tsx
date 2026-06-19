'use client'

import { useSite } from '@/context/SiteContext'

export default function Audiences() {
  const { t } = useSite()
  const { audiences } = t

  return (
    <div className="py-20 px-4 bg-cream" style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-carmine mb-3 text-center">
          {audiences.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-charcoal text-center mb-3">
          {audiences.title}
        </h2>
        <p className="text-charcoal/60 text-center text-sm max-w-2xl mx-auto mb-12">
          {audiences.subtitle}
        </p>

        <div className="space-y-px bg-charcoal/10">
          {audiences.items.map((item, i) => (
            <div key={i} className="grid md:grid-cols-3 bg-cream gap-px">
              <div className="bg-cream-light p-6 md:p-7">
                <span className="text-xs font-body font-semibold text-carmine tracking-[0.15em] uppercase block mb-2">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display font-bold text-charcoal text-base leading-snug">
                  {item.segment}
                </h3>
              </div>
              <div className="bg-cream p-6 md:p-7 border-x border-charcoal/5">
                <p className="text-xs font-body text-carmine tracking-[0.12em] uppercase mb-2">Kanāls</p>
                <p className="text-sm text-charcoal/80 leading-relaxed">{item.channel}</p>
              </div>
              <div className="bg-cream p-6 md:p-7">
                <p className="text-xs font-body text-carmine tracking-[0.12em] uppercase mb-2">Vēstījums</p>
                <p className="text-sm text-charcoal/80 leading-relaxed italic">"{item.message}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
