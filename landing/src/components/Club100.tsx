'use client'

import { useState } from 'react'
import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'

const TOTAL_SLOTS = 100
const FILLED_SLOTS = 12 // UPDATE as supporters join

export default function Club100() {
  const { t } = useSite()

  return (
    <section id="klubs" className="pt-8 pb-12 md:pt-10 md:pb-16 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-carmine mb-4">
            01 · Atbalstītāju klubs
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-charcoal leading-[1.1]">
            Esi viens no 100.
          </h2>
        </div>

        <p className="text-lg text-charcoal/80 max-w-2xl mb-8 leading-relaxed">
          Mēs meklējam tieši 100 cilvēkus, no kuriem katrs ziedo 50 €. Tā tiek nosegta trešdaļa no izlases budžeta. Kluba dalībnieki nonāk komandas Goda sienā un pirms čempionāta saņem personalizētu video sveicienu.
        </p>

        {/* Counter */}
        <div className="flex items-baseline gap-3 mb-8">
          <span className="text-5xl font-display font-semibold text-carmine">{FILLED_SLOTS}</span>
          <span className="text-charcoal/50">/ 100 vietas aizņemtas</span>
        </div>

        {/* Visual grid — 100 squares */}
        <div className="grid grid-cols-10 gap-0.5 mb-10 max-w-xs">
          {Array.from({ length: TOTAL_SLOTS }).map((_, i) => (
            <div
              key={i}
              className={`aspect-square transition-colors ${
                i < FILLED_SLOTS
                  ? 'bg-carmine'
                  : 'bg-charcoal/5 hover:bg-charcoal/10'
              }`}
            />
          ))}
        </div>

        <p className="text-sm text-charcoal/70 mb-8">
          {TOTAL_SLOTS - FILLED_SLOTS} vietas vēl brīvas - esi viens no pirmajiem.
        </p>

        {/* CTA */}
        <a
          href={siteConfig.donate.zeffy}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-carmine text-cream font-body font-semibold text-sm hover:bg-carmine-dark transition-colors"
        >
          Ziedo 50 € · kļūsti par biedru
        </a>
      </div>
    </section>
  )
}
