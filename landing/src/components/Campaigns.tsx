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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {t.campaigns.items.map((item, i) => (
            <div key={i} className="bg-charcoal-deep p-8 hover:bg-white/5 transition-colors">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-6 block">{item.icon} &mdash; {item.percent}</span>
              <h3 className="text-lg font-display font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">{item.description}</p>
              <span className="text-2xl font-display font-black text-white">{item.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
