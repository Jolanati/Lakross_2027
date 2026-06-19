'use client'

import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'

export default function Merch() {
  const { t } = useSite()

  return (
    <section id="merch" className="py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-carmine mb-4">
            03 · AI supervaroņi
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-charcoal leading-[1.1]">
            Esi mūsu supervaronis.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-charcoal/10 mb-8">
          <div className="bg-charcoal/5 p-8 flex items-center justify-center min-h-[300px]">
            <span className="text-sm text-charcoal/30 font-body">AI krekls — tava seja supervaroņa tēlā</span>
          </div>
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
            <span className="text-xs font-body text-carmine font-medium tracking-[0.15em] uppercase mb-3">Premium · personalizēts</span>
            <h3 className="text-3xl font-display font-semibold text-charcoal mb-4">Kļūsti par Varoni</h3>
            <p className="text-charcoal/60 text-sm leading-relaxed mb-8">
              Iesūti savu fotogrāfiju, un mūsu AI dažu minūšu laikā iestrādā tavu seju episkā supervaroņa tēlā ar lakrosa nūju rokās. Unikāls, neatkārtojams krekls — un tiešs atbalsts izlasei.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-3xl font-display font-semibold text-charcoal">50 €</span>
              <a href={siteConfig.donate.zeffy} target="_blank" rel="noopener noreferrer"
                 className="px-6 py-3 bg-charcoal text-cream font-body text-sm font-medium hover:bg-charcoal/90 transition-colors">
                Pasūtīt priekšpārdošanā
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-charcoal/10">
          {t.merch.products.slice(1).map((product, i) => (
            <div key={i} className="bg-white p-6 flex flex-col">
              <div className="aspect-square bg-charcoal/5 mb-4 flex items-center justify-center">
                <span className="text-[10px] text-charcoal/30 font-body text-center px-2">
                  {product.name.toLowerCase().includes('plakāt') ? 'plakāts A2/A3' :
                   product.name.toLowerCase().includes('uzlīm') ? 'uzlīmes' :
                   product.name.toLowerCase().includes('grāmat') ? 'grāmata' : 'krekls'}
                </span>
              </div>
              <h4 className="font-body font-medium text-sm text-charcoal mb-1">{product.name}</h4>
              <span className="text-lg font-display font-semibold text-charcoal">{product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
