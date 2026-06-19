'use client'

import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'

export default function Merch() {
  const { t } = useSite()

  return (
    <section id="merch" className="pt-8 pb-12 md:pt-10 md:pb-16 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="mb-4">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-carmine mb-3">
            03 · AI supervaroņi
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-charcoal leading-[1.05]">
            Esi mūsu supervaronis.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-charcoal/10 mb-4">
          <div className="bg-charcoal/5 p-6 flex items-center justify-center min-h-[200px]">
            <span className="text-sm text-charcoal/30 font-body">AI krekls — tava seja supervaroņa tēlā</span>
          </div>
          <div className="bg-cream-light p-6 md:p-8 flex flex-col justify-center">
            <span className="text-xs font-body text-carmine font-medium tracking-[0.15em] uppercase mb-2">Premium · personalizēts</span>
            <h3 className="text-2xl font-display font-semibold text-charcoal mb-3">Kļūsti par Varoni</h3>
            <p className="text-charcoal/80 text-sm leading-relaxed mb-4">
              Iesūti savu fotogrāfiju, un mūsu AI dažu minūšu laikā iestrādā tavu seju episkā supervaroņa tēlā ar lakrosa nūju rokās. Unikāls, neatkārtojams krekls - un tiešs atbalsts izlasei.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-display font-semibold text-charcoal">50 €</span>
              <a href={siteConfig.donate.zeffy} target="_blank" rel="noopener noreferrer"
                 className="px-5 py-2.5 bg-charcoal text-cream font-body text-sm font-medium hover:bg-charcoal/90 transition-colors">
                Pasūtīt priekšpārdošanā
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-charcoal/10">
          {t.merch.products.slice(1).map((product, i) => (
            <div key={i} className="bg-cream-light p-4 flex flex-col">
              <div className="aspect-square bg-charcoal/5 mb-3 flex items-center justify-center">
                <span className="text-[10px] text-charcoal/30 font-body text-center px-2">
                  {product.name.toLowerCase().includes('plakāt') ? 'plakāts A2/A3' :
                   product.name.toLowerCase().includes('uzlīm') ? 'uzlīmes' :
                   product.name.toLowerCase().includes('grāmat') ? 'grāmata' : 'krekls'}
                </span>
              </div>
              <h4 className="font-body font-medium text-sm text-charcoal mb-1">{product.name}</h4>
              <span className="text-base font-display font-semibold text-charcoal mb-3">{product.price}</span>
              <a href={siteConfig.donate.zeffy} target="_blank" rel="noopener noreferrer"
                 className="mt-auto inline-block text-center px-3 py-2 border border-charcoal text-charcoal font-body text-xs font-semibold hover:bg-charcoal hover:text-cream transition-colors">
                Pasūtīt
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
