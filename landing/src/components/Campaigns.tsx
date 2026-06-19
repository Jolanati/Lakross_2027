'use client'

import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'

export default function Campaigns() {
  const { t } = useSite()

  const cards = [
    {
      num: '01',
      title: 'Esi viens no 100',
      description: 'Pievienojies 100 atbalstītāju klubam. 100 cilvēki × 50 € nosedz trešdaļu izlases budžeta. Biedri nonāk komandas Goda sienā.',
      price: '50 €',
      cta: 'Kļūsti par biedru →',
      href: '#klubs',
    },
    {
      num: '02',
      title: 'Korporatīvais atbalsts',
      description: '"Sievietes atbalsta sievietes." Zīmoli, kas vēlas asociēties ar spēcīgām sievietēm sportā — ar CSR vērtību un redzamību.',
      price: '100–500 €',
      cta: 'Uzņēmumiem →',
      href: '#sponsors',
    },
    {
      num: '03',
      title: 'Esi mūsu supervaronis',
      description: 'Iesūti savu foto, un mūsu AI iestrādā tavu seju episkā supervaroņa kreklā ar lakrosa nūju rokās. Unikāls krekls — tiešs atbalsts.',
      price: '50 €',
      cta: 'Kļūsti par varoni →',
      href: '#merch',
    },
  ]

  return (
    <section id="campaigns" className="py-24 md:py-32 px-6 bg-cream-light">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal/50 mb-4">
            Citi veidi, kā mūs atbalstīt
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-charcoal leading-[1.1] mb-4">
            Ne tikai kilometri.
          </h2>
          <p className="text-lg text-charcoal/60 max-w-xl">
            Izvēlies sev tuvāko ceļu — katrs ir solis tuvāk Spānijai.
          </p>
        </div>

        {/* 3 campaign cards */}
        <div className="grid md:grid-cols-3 gap-px bg-charcoal/10">
          {cards.map((card) => (
            <a
              key={card.num}
              href={card.href}
              className="bg-cream p-8 md:p-10 flex flex-col group hover:bg-white transition-colors"
            >
              <span className="font-body text-xs font-bold tracking-[0.2em] text-carmine mb-4">{card.num}</span>
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-charcoal mb-4 group-hover:text-carmine transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-charcoal/60 leading-relaxed mb-8 flex-grow">
                {card.description}
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-charcoal/10">
                <span className="text-2xl font-display font-semibold text-charcoal">{card.price}</span>
                <span className="text-sm font-body font-medium text-carmine">{card.cta}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
