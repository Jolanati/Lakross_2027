'use client'

import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'

export default function Donate() {
  const { t } = useSite()
  const { donate } = siteConfig
  const percent = Math.round((donate.raisedEur / donate.goalEur) * 100)

  return (
    <div id="donate" className="py-24 px-4 bg-gradient-to-b from-carmine to-carmine-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

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
        <div className="bg-white/10 rounded-2xl p-6 mb-10">
          <div className="flex justify-between text-sm text-white/80 mb-2">
            <span>{t.progress.raised}: <strong>{donate.raisedEur}€</strong></span>
            <span>{t.progress.goal}: <strong>{donate.goalEur.toLocaleString()}€</strong></span>
          </div>
          <div className="h-4 bg-white/10 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-1000"
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
                className={`group text-center p-4 rounded-xl border-2 transition-all hover:scale-105
                  ${isHighlighted
                    ? 'bg-white text-carmine border-white shadow-lg'
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
            className="inline-block px-10 py-4 bg-white text-carmine font-display font-bold text-lg rounded-lg
                       hover:bg-cream transition-all hover:scale-105 shadow-xl"
          >
            {t.donate.ctaDonate}
          </a>
          <p className="text-white/50 text-xs">{t.donate.trust}</p>
        </div>
      </div>
    </div>
  )
}
