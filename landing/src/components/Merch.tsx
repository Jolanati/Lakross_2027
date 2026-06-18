'use client'

import { useSite } from '@/context/SiteContext'

export default function Merch() {
  const { t } = useSite()

  return (
    <div className="py-24 px-4 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-center">
          {t.merch.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white text-center mb-4">
          {t.merch.title}
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-4">
          {t.merch.subtitle}
        </p>
        <p className="text-gold/80 text-center text-sm font-semibold mb-16">
          {t.merch.preorderNote}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.merch.products.map((product, i) => (
            <div key={i} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-carmine/40 transition-all">
              {/* Image placeholder */}
              <div className="aspect-square bg-gradient-to-br from-carmine/20 to-charcoal-deep flex items-center justify-center">
                <div className="text-center">
                  <span className="text-5xl block mb-2">🦸</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">AI Visual</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-white mb-1">{product.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{product.description}</p>
                <span className="text-xl font-display font-black text-carmine-light">{product.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#donate"
            className="inline-block px-8 py-4 bg-carmine hover:bg-carmine-light text-white font-display font-bold rounded-lg
                       transition-all hover:scale-105 hover:shadow-lg hover:shadow-carmine/30"
          >
            {t.merch.cta}
          </a>
        </div>
      </div>
    </div>
  )
}
