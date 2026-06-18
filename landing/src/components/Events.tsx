'use client'

import { useSite } from '@/context/SiteContext'

export default function Events() {
  const { t } = useSite()

  return (
    <div className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-carmine font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-center">
          {t.events.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-charcoal text-center mb-16">
          {t.events.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-gray-200">
          {t.events.items.map((event, i) => (
            <div key={i} className="bg-white p-8 sm:p-10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-carmine mb-4 block">{event.date}</span>
              <h3 className="text-2xl font-display font-black text-charcoal mb-3">{event.title}</h3>
              <p className="text-gray-600 mb-3 leading-relaxed">{event.description}</p>
              <p className="text-sm text-gray-400 mb-6">{event.details}</p>
              <button className="px-6 py-3 bg-charcoal-deep text-white font-display font-bold text-[11px] tracking-wide uppercase hover:bg-charcoal transition-colors">
                {event.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
