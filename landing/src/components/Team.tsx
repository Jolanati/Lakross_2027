'use client'

import { useState } from 'react'
import { useSite } from '@/context/SiteContext'
import Image from 'next/image'

export default function Team() {
  const { t } = useSite()
  const [flipped, setFlipped] = useState(false)

  return (
    <section id="team" className="py-24 md:py-32 px-6 bg-charcoal">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-cream/50 mb-4">
            Iepazīsti komandu
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-cream leading-[1.1] mb-4">
            Aiz katra kilometra ir stāsts.
          </h2>
          <p className="text-sm text-cream/40">
            Uzklikšķini uz attēla, lai uzzinātu vairāk.
          </p>
        </div>

        {/* Flip card container */}
        <div
          className="relative cursor-pointer perspective-[1200px]"
          onClick={() => setFlipped(!flipped)}
        >
          <div className={`relative transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
            {/* Front — team photo */}
            <div className="[backface-visibility:hidden]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/team/94422ef3-721d-4a9c-b37f-c8d97da499c2.jpg"
                  alt="Latvijas sieviešu lakrosa izlase"
                  fill
                  className="object-cover object-top"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-cream">
                  <span className="font-display text-2xl font-semibold">Latvijas sieviešu lakrosa izlase</span>
                  <span className="block text-sm text-cream/70 mt-1">Mūsu stāsts ↻</span>
                </div>
              </div>
            </div>

            {/* Back — story */}
            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-charcoal p-8 md:p-12 overflow-y-auto">
              <h3 className="text-3xl font-display font-semibold text-cream mb-6">Mūsu stāsts</h3>
              <p className="text-cream/70 text-lg italic font-display mb-6 leading-relaxed">
                &ldquo;Mēs ceļamies piecos no rīta pirms darba un pašas apmaksājam treniņus, ekipējumu un ceļu. Tagad esam viena kampaņa attālumā no olimpiskās atlases.&rdquo;
              </p>
              <p className="text-cream/60 text-sm leading-relaxed mb-8">
                {t.story.paragraphs[0]} {t.story.paragraphs[1]}
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div>
                  <span className="block text-2xl font-display font-semibold text-cream">14 gadi</span>
                  <span className="text-xs text-cream/50">Vēsture</span>
                </div>
                <div>
                  <span className="block text-2xl font-display font-semibold text-cream">Pašu spēkiem</span>
                  <span className="text-xs text-cream/50">Finansējums līdz šim</span>
                </div>
                <div>
                  <span className="block text-2xl font-display font-semibold text-cream">6 v 6</span>
                  <span className="text-xs text-cream/50">Olimpiskais formāts</span>
                </div>
              </div>
              <span className="text-xs text-cream/40">↩ Uzklikšķini, lai atgrieztos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
