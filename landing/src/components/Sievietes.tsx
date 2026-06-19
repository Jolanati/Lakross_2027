'use client'

import { siteConfig } from '@/content/config'

const tiers = [
  {
    name: 'Atbalstītāja',
    price: '100 €',
    perks: [
      'Pateicības grafiks publicēšanai jūsu LinkedIn profilā',
      'Uzņēmuma nosaukums atbalstītāju sarakstā mājaslapā',
      'CSR stāsta materiāls jūsu komunikācijai',
    ],
    cta: 'Kļūt par atbalstītāju',
  },
  {
    name: 'Partnere',
    price: '250 €',
    perks: [
      'Viss no iepriekšējā līmeņa',
      'Ielūgums uz Atklāto treniņu dienu jūsu komandai',
      'Izcelta pozīcija atbalstītāju sienā',
      'Komandas dalīšanās par jūsu uzņēmumu sociālajos tīklos',
    ],
    cta: 'Kļūt par partneri',
    highlighted: true,
  },
  {
    name: 'Mecenāte',
    price: '500 €',
    perks: [
      'Viss no iepriekšējā līmeņa',
      'Logo redzamība kampaņas materiālos',
      'Iespēja ierunāt 10 sekunžu video savam tīklam',
      'Personīga komandas pateicība pirms čempionāta Spānijā',
    ],
    cta: 'Kļūt par mecenāti',
  },
]

export default function Sievietes() {
  return (
    <section id="sievietes" className="min-h-screen py-24 md:py-32 px-6 bg-cream flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-16">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-carmine mb-4">
            02 · Sievietes atbalsta sievietes
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-charcoal leading-[1.05] mb-6">
            Stipras sievietes biznesā atbalsta stipras sievietes sportā.
          </h2>
          <p className="text-xl text-charcoal/80 max-w-2xl leading-relaxed">
            Sieviešu vadīti uzņēmumi, mentoringa organizācijas un zīmoli iegūst CSR stāstu, LinkedIn redzamību un reālu dalību vēsturiskā brīdī — Latvijas pirmajā olimpiskajā kvalifikācijā lakrosā.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-10 flex flex-col ${
                tier.highlighted
                  ? 'bg-charcoal text-cream'
                  : 'bg-cream-light border border-charcoal/10'
              }`}
            >
              <span className={`text-xs font-body font-medium tracking-[0.15em] uppercase mb-3 ${
                tier.highlighted ? 'text-cream/60' : 'text-charcoal/40'
              }`}>
                {tier.name}
              </span>
              <span className={`text-5xl font-display font-semibold mb-8 ${
                tier.highlighted ? 'text-cream' : 'text-charcoal'
              }`}>
                {tier.price}
              </span>
              <ul className={`space-y-3 mb-10 flex-grow ${
                tier.highlighted ? 'text-cream/80' : 'text-charcoal/80'
              }`}>
                {tier.perks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                    <span className="text-carmine mt-0.5 flex-shrink-0">→</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <a
                href={siteConfig.donate.zeffy}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block text-center px-6 py-4 font-body text-sm font-semibold transition-colors ${
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
          <a href="/sponsors" className="text-carmine hover:underline">
            Ģenerālsponsora iespējas →
          </a>
        </p>
      </div>
    </section>
  )
}
