'use client'

import { useSite } from '@/context/SiteContext'

export default function Merch() {
  const { t } = useSite()

  return (
    <div className="py-24 px-4 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-3 text-center">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-white/10 mb-12">
          {t.merch.products.map((product, i) => (
            <div key={i} className="bg-charcoal group">
              <div className="aspect-[4/5] bg-gradient-to-b from-carmine/10 to-charcoal-deep flex items-center justify-center border-b border-white/5">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 border border-white/10 flex items-center justify-center">
                    <span className="text-[10px] text-gray-600 uppercase tracking-widest">AI Visual</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-white text-sm mb-1">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{product.description}</p>
                <span className="text-lg font-display font-black text-white">{product.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#donate"
             className="inline-flex items-center px-8 py-4 bg-carmine text-white font-display font-bold text-sm tracking-wide uppercase hover:bg-carmine-light transition-colors">
            {t.merch.cta}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </div>
  )
}
