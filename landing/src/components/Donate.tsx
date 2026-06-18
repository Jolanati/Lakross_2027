'use client'

import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'

export default function Donate() {
  const { t } = useSite()
  const { donate } = siteConfig
  const percent = Math.round((donate.raisedEur / donate.goalEur) * 100)

  return (
    <div id="donate" className="py-24 px-4 bg-carmine relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,0,0,0.2)_0%,_transparent_60%)]" />

      <div className="max-w-3xl mx-auto relative z-10">
        <p className="text-white/70 font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-center">
          {t.donate.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white text-center mb-4">
          {t.donate.title}
        </h2>
        <p className="text-white/80 text-center max-w-xl mx-auto mb-12">
          {t.donate.subtitle}
        </p>

        {/* Progress bar */}
        <div className="bg-white/10 p-6 mb-10">
          <div className="flex justify-between text-sm text-white/80 mb-2">
            <span>{t.progress.raised}: <strong>{donate.raisedEur}€</strong></span>
            <span>{t.progress.goal}: <strong>{donate.goalEur.toLocaleString()}€</strong></span>
          </div>
          <div className="h-1 bg-white/10 overflow-hidden mb-2">
            <div
              className="h-full bg-white transition-all duration-1000"
              style={{ width: `${Math.max(percent, 2)}%` }}
            />
          </div>
          <p className="text-xs text-white/50 text-center">{percent}% — {t.progress.kmMetaphor}</p>
        </div>

        {/* Amount buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {donate.suggestedAmounts.map((amount) => {
            const label = t.donate.amountLabels[amount as keyof typeof t.donate.amountLabels]
            const isHighlighted = amount === donate.highlightedAmount
            return (
              <a
                key={amount}
                href={donate.zeffy}
                target="_blank"
                rel="noopener noreferrer"
                className={`group text-center p-4 border transition-all hover:scale-[1.02]
                  ${isHighlighted
                    ? 'bg-white text-carmine border-white'
                    : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                  }`}
              >
                <span className="text-2xl font-display font-black block mb-1">{amount}€</span>
                {label && (
                  <span className={`text-xs ${isHighlighted ? 'text-carmine/70' : 'text-white/60'}`}>
                    {label.split(' — ')[1]}
                  </span>
                )}
              </a>
            )
          })}
        </div>

        {/* Main CTA */}
        <div className="text-center space-y-4">
          <a
            href={donate.zeffy}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-carmine font-display font-bold text-sm tracking-wide uppercase
                       hover:bg-cream transition-all"
          >
            {t.donate.ctaDonate}
          </a>
          <p className="text-white/50 text-xs">{t.donate.trust}</p>
        </div>
      </div>
    </div>
  )
}
