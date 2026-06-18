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

        <div className="grid md:grid-cols-2 gap-8">
          {t.events.items.map((event, i) => (
            <div key={i} className="bg-cream rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-carmine/10 to-gold/10 flex items-center justify-center">
                <span className="text-6xl">{i === 0 ? '👧🏼🥍' : '🏃‍♀️🥍'}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-carmine bg-carmine/10 px-2.5 py-1 rounded-full">
                    {event.date}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-charcoal mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-3">{event.description}</p>
                <p className="text-sm text-gray-400 mb-5">{event.details}</p>
                <button className="px-6 py-2.5 bg-charcoal hover:bg-charcoal-deep text-white font-display font-semibold
                                   rounded-lg transition-colors text-sm">
                  {event.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
