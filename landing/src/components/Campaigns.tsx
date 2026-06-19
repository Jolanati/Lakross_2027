'use client'

import Link from 'next/link'

const cards = [
  {
    num: '01',
    title: 'Esi viens no 100',
    description: '100 cilvēki × 50 € nosedz trešdaļu izlases budžeta. Biedri nonāk komandas Goda sienā.',
    price: '50 €',
    cta: 'Kļūsti par biedru →',
    href: '/club100',
  },
  {
    num: '02',
    title: 'Korporatīvais atbalsts',
    description: '"Sievietes atbalsta sievietes." Zīmoli, kas vēlas asociēties ar spēcīgām sievietēm sportā — ar CSR vērtību un redzamību.',
    price: '100–500 €',
    cta: 'Uzņēmumiem →',
    href: '/sponsors',
  },
  {
    num: '03',
    title: 'Esi mūsu supervaronis',
    description: 'Iesūti savu foto, un mūsu AI iestrādā tavu seju episkā supervaroņa kreklā ar lakrosa nūju rokās.',
    price: '50 €',
    cta: 'Kļūsti par varoni →',
    href: '/merch',
  },
  {
    num: '04',
    title: 'Diaspora',
    description: 'Latvieši ārzemēs — atbalsti nacionālo lepnumu no jebkuras pasaules vietas. ASV, Eiropa, visa pasaule.',
    price: 'No 20 €',
    cta: 'Atbalsti no ārzemēm →',
    href: '/diaspora',
  },
  {
    num: '05',
    title: 'Pass the Stick',
    description: 'Nofilmē triku, izaicini draugu, nodod tālāk. Virālais izaicinājums, kas nes gan smaidu, gan atbalstu.',
    price: 'Bezmaksas',
    cta: 'Piedalīties →',
    href: '/pass-the-stick',
  },
]

export default function Campaigns() {
  return (
    <section id="campaigns" className="py-24 md:py-32 px-6 bg-cream-light">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal/50 mb-4">
            Kā tu vari palīdzēt
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-charcoal leading-[1.1] mb-4">
            Pieci ceļi uz mērķi
          </h2>
          <p className="text-lg text-charcoal/60 max-w-xl">
            Katrs no pieciem ceļiem ir tiešs ieguldījums mūsu startā Spānijā.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-charcoal/10">
          {cards.map((card) => (
            <Link
              key={card.num}
              href={card.href}
              className="bg-cream p-6 md:p-8 flex flex-col group hover:bg-white transition-colors min-h-[280px]"
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
