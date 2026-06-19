'use client'

import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'

export default function Sponsors() {
  const { t } = useSite()

  const tiers = [
    {
      name: 'Atbalstītājs',
      price: '100 €',
      perks: 'Pateicības grafika publicēšanai LinkedIn un sociālajos tīklos, uzņēmuma logo atbalstītāju sarakstā.',
      cta: 'Kļūt par atbalstītāju',
    },
    {
      name: 'Partneris',
      price: '250 €',
      perks: 'Iepriekšējais + ielūgums uz Atklāto treniņu dienu uzņēmuma komandai un izcelta atrašanās uz atbalstītāju sienas.',
      cta: 'Kļūt par partneri',
      highlighted: true,
    },
    {
      name: 'Mecenāts',
      price: '500 €',
      perks: 'Iepriekšējais + logo redzamība kampaņas materiālos un personīga komandas pateicība pirms čempionāta Spānijā.',
      cta: 'Kļūt par mecenātu',
    },
  ]

  return (
    <section id="sponsors" className="py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal/50 mb-4">
            02 · Sievietes atbalsta sievietes
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-charcoal leading-[1.1] mb-4">
            Korporatīvais atbalsts.
          </h2>
          <p className="text-lg text-charcoal/60 max-w-2xl leading-relaxed">
            Spēcīgas sievietes biznesā iedvesmo spēcīgas sievietes sportā. Standartizēti, uzņēmumiem viegli norakstāmi atbalsta līmeņi.
          </p>
        </div>

        {/* 3-tier cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-8 flex flex-col ${
                tier.highlighted
                  ? 'bg-charcoal text-cream'
                  : 'bg-white border border-charcoal/10'
              }`}
            >
              <span className={`text-xs font-body font-medium tracking-[0.15em] uppercase mb-3 ${
                tier.highlighted ? 'text-cream/60' : 'text-charcoal/40'
              }`}>
                {tier.name}
              </span>
              <span className={`text-4xl font-display font-semibold mb-6 ${
                tier.highlighted ? 'text-cream' : 'text-charcoal'
              }`}>
                {tier.price}
              </span>
              <p className={`text-sm leading-relaxed mb-8 flex-grow ${
                tier.highlighted ? 'text-cream/70' : 'text-charcoal/60'
              }`}>
                {tier.perks}
              </p>
              <a
                href={siteConfig.donate.zeffy}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block text-center px-6 py-3 font-body text-sm font-medium transition-colors ${
                  tier.highlighted
                    ? 'bg-cream text-charcoal hover:bg-white'
                    : 'bg-charcoal text-cream hover:bg-charcoal/90'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-sm text-charcoal/50">
          Meklē ģenerālsponsora paketi (4 000–6 000 €)?{' '}
          <a href="mailto:info@llf.lv" className="text-carmine hover:underline">
            Sazinies ar mums →
          </a>
        </p>
      </div>
    </section>
  )
}
