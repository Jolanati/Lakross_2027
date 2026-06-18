'use client'

import { useSite } from '@/context/SiteContext'

export default function Campaigns() {
  const { t } = useSite()

  return (
    <div id="campaigns" className="py-24 px-4 bg-charcoal-deep">
      <div className="max-w-6xl mx-auto">
        <p className="text-carmine-light font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-center">
          {t.campaigns.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white text-center mb-4">
          {t.campaigns.title}
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          {t.campaigns.subtitle}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.campaigns.items.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10
                         transition-all hover:-translate-y-1"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-display font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{item.description}</p>
              <div className="flex items-end justify-between mt-auto">
                <span className="text-2xl font-display font-black text-carmine-light">{item.amount}</span>
                <span className="text-sm text-gold font-semibold">{item.percent}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
