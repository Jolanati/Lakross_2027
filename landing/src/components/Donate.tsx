'use client'

import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'

export default function Donate() {
  const { t } = useSite()
  const { donate } = siteConfig
  const percent = Math.round((donate.raisedEur / donate.goalEur) * 100)

  return (
    <div id="donate" className="relative py-32 px-4 bg-carmine overflow-hidden">
      {/* Background drama */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(0,0,0,0.3)_0%,_transparent_60%)]" />
      <div className="bg-text top-1/2 -translate-y-1/2 right-[-5%] text-white/[0.05]">NOW</div>
      <div className="absolute top-0 left-0 w-full h-[3px] bg-white/20" />

      <div className="max-w-4xl mx-auto relative z-10">
        <p className="text-white/60 text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
          {t.donate.overtitle}
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white leading-[0.85] tracking-tight mb-6">
          {t.donate.title}
        </h2>
        <p className="text-white/70 text-lg max-w-xl mb-12">
          {t.donate.subtitle}
        </p>

        {/* Progress */}
        <div className="bg-black/20 p-6 mb-10">
          <div className="flex justify-between text-sm text-white/70 mb-3">
            <span>{t.progress.raised}: <strong className="text-white">{donate.raisedEur.toLocaleString()}&euro;</strong></span>
            <span>{t.progress.goal}: <strong className="text-white">{donate.goalEur.toLocaleString()}&euro;</strong></span>
          </div>
          <div className="h-[2px] bg-white/20 overflow-hidden mb-2">
            <div className="h-full bg-white transition-all duration-1000" style={{ width: `${Math.max(percent, 2)}%` }} />
          </div>
          <p className="text-[10px] text-white/40 uppercase tracking-widest text-center mt-2">{percent}% &mdash; {t.progress.kmMetaphor}</p>
        </div>

        {/* Amount buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {donate.suggestedAmounts.map((amount) => {
            const label = t.donate.amountLabels[amount as keyof typeof t.donate.amountLabels]
            const isHighlighted = amount === donate.highlightedAmount
            return (
              <a key={amount} href={donate.zeffy} target="_blank" rel="noopener noreferrer"
                 className={`group text-center p-5 border transition-all hover:scale-[1.02]
                   ${isHighlighted ? 'bg-white text-carmine border-white' : 'bg-white/10 text-white border-white/20 hover:bg-white/20'}`}>
                <span className="text-3xl font-display font-black block mb-1">{amount}&euro;</span>
                {label && <span className={`text-[10px] uppercase tracking-wider ${isHighlighted ? 'text-carmine/70' : 'text-white/50'}`}>{label.split(' — ')[1]}</span>}
              </a>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <a href={donate.zeffy} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center px-12 py-5 bg-white text-carmine font-display font-black text-sm tracking-wide uppercase hover:bg-cream transition-all group">
            {t.donate.ctaDonate}
            <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-white/40 text-xs">{t.donate.trust}</p>
        </div>
      </div>
    </div>
  )
}
