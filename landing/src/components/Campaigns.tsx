'use client'

import Link from 'next/link'

const cards = [
  {
    num: '01',
    title: '100 Klubs',
    description: 'Meklējam tieši 100 cilvēkus — katrs ziedo 50 €. Kluba dalībnieki nonāk komandas Goda sienā un pirms čempionāta saņem personalizētu video sveicienu.',
    price: '50 €',
    cta: 'Kļūsti par biedru →',
    href: '/club100',
  },
  {
    num: '02',
    title: 'Sievietes',
    description: 'Sieviešu vadīti uzņēmumi iegūst CSR stāstu, LinkedIn redzamību un iespēju ierunāt 10 sekunžu video savam tīklam. Stipras sievietes biznesā atbalsta stipras sievietes sportā.',
    price: '100–500 €',
    cta: 'Uzņēmumiem →',
    href: '/sievietes',
  },
  {
    num: '03',
    title: 'Sponsori',
    description: 'Centrālā logo pozīcija uz Eiropas čempionāta formām Spānijā un "galvenā varoņa" loma visos mediju materiālos. Dalība vēsturiskā brīdī.',
    price: '4 000–6 000 €',
    cta: 'Korporatīvais atbalsts →',
    href: '/sponsors',
  },
  {
    num: '04',
    title: 'Merch',
    description: 'Iesūti savu fotogrāfiju — mūsu AI dažu minūšu laikā iestrādā tavu seju episkā Marvel stila supervaroņa tēlā ar lakrosa nūju rokās. Unikāls krekls, tiešs atbalsts.',
    price: 'No 10 €',
    cta: 'Kļūsti par varoni →',
    href: '/merch',
  },
  {
    num: '05',
    title: 'Diaspora',
    description: 'Latvija pirmo reizi vēsturē startē Olimpiskās kvalifikācijas turnīrā. Latvieši ārzemēs un starptautiskā lakrosa kopiena — atbalsti nacionālo lepnumu no jebkuras pasaules vietas.',
    price: 'No 20 €',
    cta: 'Atbalsti no ārzemēm →',
    href: '/diaspora',
  },
  {
    num: '06',
    title: 'Pass the Stick',
    description: 'Nofilmē triku ar jebko mājās atrodamu. Izaicini 2 draugus — viņiem ir 24h. Noziedo 20 € vai dalies Storijā. Virālais izaicinājums, kas nes gan smaidu, gan reālus līdzekļus.',
    price: 'No 0 €',
    cta: 'Piedalīties →',
    href: '/pass-the-stick',
  },
]

export default function Campaigns() {
  return (
    <section id="campaigns" className="min-h-screen py-24 md:py-32 px-6 bg-cream-light flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-14">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal/50 mb-4">
            Kā tu vari palīdzēt
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-semibold text-charcoal leading-[1.0] mb-4">
            Vēl seši ceļi uz mērķi.
          </h2>
          <p className="text-xl text-charcoal/60 max-w-xl leading-relaxed">
            Katrs no sešiem ceļiem ir tiešs ieguldījums mūsu startā Spānijā. Izvēlies sev tuvāko.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-charcoal/10">
          {cards.map((card) => (
            <Link
              key={card.num}
              href={card.href}
              className="bg-cream p-8 md:p-10 flex flex-col group hover:bg-white transition-colors"
            >
              <span className="font-body text-xs font-bold tracking-[0.2em] text-carmine mb-4">{card.num}</span>
              <h3 className="text-xl md:text-2xl font-display font-semibold text-charcoal mb-3 group-hover:text-carmine transition-colors leading-tight">
                {card.title}
              </h3>
              <p className="text-sm text-charcoal/60 leading-relaxed mb-6 flex-grow">
                {card.description}
              </p>
              <div className="mt-auto pt-4 border-t border-charcoal/10">
                <div className="text-lg font-display font-semibold text-charcoal mb-1">{card.price}</div>
                <span className="text-xs font-body font-medium text-carmine">{card.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
