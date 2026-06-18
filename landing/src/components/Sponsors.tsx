'use client'

import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'

export default function Sponsors() {
  const { t } = useSite()
  const tiers = ['carmine', 'gold', 'gray'] as const
  const tierBorders = {
    carmine: 'border-carmine/30 hover:border-carmine',
    gold: 'border-gold/30 hover:border-gold',
    gray: 'border-gray-200 hover:border-gray-400',
  }
  const tierAccents = {
    carmine: 'text-carmine',
    gold: 'text-gold',
    gray: 'text-gray-500',
  }

  return (
    <div id="sponsors" className="py-24 px-4 bg-cream">
      <div className="max-w-5xl mx-auto">
        <p className="text-carmine font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-center">
          {t.sponsors.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-charcoal text-center mb-4">
          {t.sponsors.title}
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          {t.sponsors.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {t.sponsors.packages.map((pkg, i) => {
            const tier = tiers[i] || 'gray'
            return (
              <div key={i} className={`bg-white rounded-2xl border-2 ${tierBorders[tier]} p-6 transition-colors`}>
                <h3 className={`font-display font-bold text-lg mb-1 ${tierAccents[tier]}`}>{pkg.name}</h3>
                <p className="text-2xl font-display font-black text-charcoal mb-4">{pkg.price}</p>
                <ul className="space-y-2">
                  {pkg.perks.map((perk, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className={tierAccents[tier]}>✓</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="text-center space-y-3">
          <a
            href={siteConfig.social.website}
            className="inline-block px-8 py-3 bg-charcoal hover:bg-charcoal-deep text-white font-display font-semibold
                       rounded-lg transition-colors"
          >
            {t.sponsors.cta}
          </a>
          <p>
            <a href={`mailto:info@lacrosse.lv`} className="text-sm text-carmine hover:underline">
              {t.sponsors.contactCta}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
