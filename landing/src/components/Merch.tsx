'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'

const heroImages = [
  '/team/cb8a302c-707d-48f6-96ab-33c31fe00726.jpg',
  '/team/8859a73b-52d2-409c-8934-b87471b0422c.jpg',
  '/team/5c4e3660-24c4-4bd0-9cad-d320f7ea570e.jpg',
  '/team/b3c02227-a881-4110-98ee-dbdedbe4a7fa.jpg',
  '/team/952c882c-5e36-4a8c-bb8f-11dba752b72b.jpg',
  '/team/1d62b558-65e2-4602-b703-6a2b0ea41f8f.jpg',
  '/team/0b0e3c56-98b5-458c-89a5-d68a2fa1b46b.jpg',
  '/team/fe40fc49-b8ca-4ba2-9295-a998bb1ab0eb.jpg',
  '/team/b853019c-b759-477c-b46f-ff5187a6fe16.jpg',
  '/team/6713e2f9-2951-477c-ad46-3818bc237144.jpg',
  '/team/398383e9-0ae1-46c8-96dd-9bb62d6b0f72.jpg',
  '/team/08a3a247-8548-4eae-8d48-ba9a00eee53c.jpg',
  '/team/c157b1d2-65c8-413f-9cc9-022b598111a7.jpg',
  '/team/0d443acc-4be3-4114-8dba-5ead93ca5c12.jpg',
  '/team/9cb8c3ae-3464-42ac-b234-5b0c940d8322.jpg',
]

const productImages: Record<number, string> = {
  0: '/merch/vienota-komanda.png',
}

export default function Merch() {
  const { t } = useSite()
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent(i => (i + 1) % heroImages.length), [])
  const prev = useCallback(() => setCurrent(i => (i - 1 + heroImages.length) % heroImages.length), [])

  useEffect(() => {
    const timer = setInterval(next, 3500)
    return () => clearInterval(timer)
  }, [next])

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
          {/* Carousel */}
          <div className="relative bg-charcoal overflow-hidden">
            <div className="aspect-[3/4] relative">
              {heroImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`AI supervaronis ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
                    i === current ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Counter */}
            <span className="absolute bottom-3 right-3 text-xs font-body text-white/70 bg-black/40 px-2 py-0.5">
              {current + 1} / {heroImages.length}
            </span>
          </div>

          {/* Product info */}
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
              <div className="aspect-square bg-charcoal/5 mb-3 flex items-center justify-center overflow-hidden">
                {productImages[i] ? (
                  <img src={productImages[i]} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-[10px] text-charcoal/30 font-body text-center px-2">
                    {product.name.toLowerCase().includes('plakāt') ? 'plakāts A2/A3' :
                     product.name.toLowerCase().includes('uzlīm') ? 'uzlīmes' :
                     product.name.toLowerCase().includes('grāmat') ? 'grāmata' : 'krekls'}
                  </span>
                )}
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
