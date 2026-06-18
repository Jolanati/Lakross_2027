'use client'

import { useSite } from '@/context/SiteContext'

export default function Campaigns() {
  const { t } = useSite()

  return (
    <div id="campaigns" className="relative py-32 px-4 bg-charcoal-deep overflow-hidden">
      {/* Background accent */}
      <div className="bg-text bottom-0 left-[-5%] text-white/[0.02]">GOAL</div>
      <div className="absolute top-0 right-0 w-1/2 h-[3px] bg-carmine/40" />

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="text-carmine-light text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
          {t.campaigns.overtitle}
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white leading-[0.85] tracking-tight mb-4">
          {t.campaigns.title}
        </h2>
        <p className="text-gray-500 max-w-xl mb-20 text-lg">
          {t.campaigns.subtitle}
        </p>

        {/* Campaign grid — asymmetric, editorial */}
        <div className="grid md:grid-cols-12 gap-px bg-white/5">
          {t.campaigns.items.map((item, i) => {
            // Varying column spans for broken grid feel
            const spans = ['md:col-span-7', 'md:col-span-5', 'md:col-span-5', 'md:col-span-7']
            return (
              <div key={i} className={`${spans[i]} bg-charcoal-deep p-8 md:p-10 border-b border-white/5 group hover:bg-white/[0.03] transition-colors`}>
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-display font-black text-white/10 leading-none">{item.icon}</span>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-carmine-light">{item.percent}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 group-hover:text-carmine-light transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed max-w-sm">{item.description}</p>
                <span className="text-3xl font-display font-black text-white">{item.amount}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
