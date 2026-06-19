'use client'

import Link from 'next/link'

const cards = [
  {
    num: '01',
    title: '100 Klubs',
    description: 'Meklējam tieši 100 cilvēkus - katrs ziedo 50 €. Kluba dalībnieki nonāk komandas Goda sienā un pirms čempionāta saņem personalizētu video sveicienu.',
    price: '50 €',
    cta: 'Kļūsti par biedru',
    href: '/club100',
  },
  {
    num: '02',
    title: 'Sievietes Sievietēm',
    description: 'Sieviešu vadīti uzņēmumi iegūst publicitātes stāstu, LinkedIn redzamību un iespēju ierunāt 10 sekunžu video savam tīklam. Stipras sievietes biznesā atbalsta stipras sievietes sportā.',
    price: '100-500 €',
    cta: 'Uzņēmumiem',
    href: '/sievietes',
  },
  {
    num: '03',
    title: 'Titulsponsorēšana',
    description: 'Centrālā logo pozīcija uz Eiropas čempionāta formām Spānijā un galvenā varoņa loma visos mediju materiālos. Dalība vēsturiskā brīdī.',
    price: '4 000-6 000 €',
    cta: 'Korporatīvais atbalsts',
    href: '/sponsors',
  },
  {
    num: '04',
    title: 'Kļūsti par Varoni',
    description: 'Iesūti savu fotogrāfiju - mūsu AI dažu minūšu laikā iestrādā tavu seju episkā Marvel stila supervaroņa tēlā ar lakrosa nūju rokās. Unikāls krekls, tiešs atbalsts.',
    price: 'No 10 €',
    cta: 'Pasūtīt kreklu',
    href: '/merch',
  },
  {
    num: '05',
    title: 'Latvieši Pasaulē',
    description: 'Latvija pirmo reizi vēsturē startē Olimpiskās kvalifikācijas turnīrā. Latvieši ārzemēs un starptautiskā lakrosa kopiena - atbalsti nacionālo lepnumu no jebkuras pasaules vietas.',
    price: 'No 20 €',
    cta: 'Atbalsti no ārzemēm',
    href: '/diaspora',
  },
  {
    num: '06',
    title: 'Izaicini Draugus',
    description: 'Nofilmē triku ar jebko mājās atrodamu. Izaicini 2 draugus - viņiem ir 24h. Noziedo 20 € vai dalies Storijā. Virālais izaicinājums, kas nes gan smaidu, gan reālus līdzekļus.',
    price: 'No 0 €',
    cta: 'Piedalīties',
    href: '/pass-the-stick',
  },
]

export default function Campaigns() {
  return (
    <section id="campaigns" className="h-screen pt-14 pb-8 md:pt-16 md:pb-10 px-6 bg-cream-light flex flex-col justify-center overflow-hidden" style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-6">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-carmine mb-3">
            Kā tu vari palīdzēt
          </p>
          <h2 className="text-4xl sm:text-5xl font-display font-semibold text-charcoal leading-[1.0] mb-2">
            Vēl <span className="mark">seši ceļi</span> uz mērķi.
          </h2>
          <p className="text-lg text-charcoal/80 max-w-xl leading-relaxed">
            Katrs no sešiem ceļiem ir tiešs ieguldījums mūsu startā Spānijā. Izvēlies sev tuvāko.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-charcoal/10">
          {cards.map((card) => (
            <Link
              key={card.num}
              href={card.href}
              className="bg-cream p-5 md:p-7 flex flex-col group hover:bg-white transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-body text-[10px] font-bold tracking-[0.2em] text-carmine">{card.num}</span>
                <span className="font-display text-base font-semibold text-charcoal">{card.price}</span>
              </div>
              <h3 className="text-lg md:text-xl font-display font-semibold text-charcoal mb-3 group-hover:text-carmine transition-colors leading-tight">
                {card.title}
              </h3>
              <p className="text-base text-charcoal/80 leading-relaxed mb-5 flex-grow">
                {card.description}
              </p>
              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 text-sm font-body font-semibold text-carmine border border-carmine/40 px-4 py-2 group-hover:bg-carmine group-hover:text-cream group-hover:border-carmine transition-colors">
                  {card.cta} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
