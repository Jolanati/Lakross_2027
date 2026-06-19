'use client'

import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'

const TOTAL_KM = 3000
const EUR_PER_KM = 5

export default function Kilometer() {
  const { t } = useSite()
  const raisedEur = siteConfig.donate.raisedEur
  const kmFunded = Math.round(raisedEur / EUR_PER_KM)
  const percent = Math.min((kmFunded / TOTAL_KM) * 100, 100)

  return (
    <section id="kilometri" className="py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal/50 mb-4">
            Ceļš uz Spāniju · Kopā
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-charcoal leading-[1.1]">
            Nopērc kilometru.
          </h2>
        </div>

        <p className="text-lg text-charcoal/70 max-w-2xl mb-12 leading-relaxed">
          No Rīgas līdz Eiropas čempionātam ir aptuveni 3 000 km. Katrs ziedotais kilometrs (5 €) ved komandu burtiski tuvāk startam. Padod nūju tālāk un nopērc nākamo posmu.
        </p>

        {/* Progress stats */}
        <div className="flex flex-wrap gap-6 mb-6">
          <div className="bg-charcoal/5 px-5 py-3">
            <span className="font-display text-2xl font-semibold text-charcoal">{kmFunded.toLocaleString()}</span>
            <span className="text-charcoal/50 text-sm ml-1">/ {TOTAL_KM.toLocaleString()} km nofinansēti</span>
          </div>
          <div className="bg-charcoal/5 px-5 py-3">
            <span className="text-charcoal/50 text-sm">= </span>
            <span className="font-display text-2xl font-semibold text-charcoal">{raisedEur.toLocaleString()} €</span>
            <span className="text-charcoal/50 text-sm ml-1">savākti</span>
          </div>
        </div>

        {/* Progress bar — Rīga to Spānija */}
        <div className="relative mb-4">
          <div className="h-2 bg-charcoal/10 w-full overflow-hidden">
            <div
              className="h-full bg-carmine transition-all duration-1000 ease-out"
              style={{ width: `${Math.max(percent, 1)}%` }}
            />
          </div>
          {/* Marker */}
          <div
            className="absolute top-[-6px] w-5 h-5 bg-carmine rounded-full border-2 border-cream transition-all duration-1000"
            style={{ left: `calc(${Math.max(percent, 1)}% - 10px)` }}
          />
        </div>

        {/* Route labels */}
        <div className="flex justify-between text-sm text-charcoal/50 mb-12">
          <div>
            <span className="font-display font-semibold text-charcoal">Rīga</span>
            <span className="ml-2">0 km</span>
          </div>
          <div className="text-right">
            <span className="font-display font-semibold text-charcoal">Spānija &apos;26</span>
            <span className="ml-2">{TOTAL_KM.toLocaleString()} km</span>
          </div>
        </div>

        {/* Donation buttons */}
        <div className="flex flex-wrap gap-3">
          <p className="w-full text-sm font-body font-medium text-charcoal/70 mb-1">Nopērc kilometru:</p>
          <a href={siteConfig.donate.zeffy} target="_blank" rel="noopener noreferrer"
             className="px-6 py-3 bg-charcoal text-cream font-body text-sm font-medium hover:bg-charcoal/90 transition-colors">
            5 € · 1 km
          </a>
          <a href={siteConfig.donate.zeffy} target="_blank" rel="noopener noreferrer"
             className="px-6 py-3 bg-charcoal text-cream font-body text-sm font-medium hover:bg-charcoal/90 transition-colors">
            25 € · 5 km
          </a>
          <a href={siteConfig.donate.zeffy} target="_blank" rel="noopener noreferrer"
             className="px-6 py-3 bg-carmine text-cream font-body text-sm font-medium hover:bg-carmine-light transition-colors">
            50 € · 10 km
          </a>
          <a href={siteConfig.donate.zeffy} target="_blank" rel="noopener noreferrer"
             className="px-6 py-3 bg-charcoal text-cream font-body text-sm font-medium hover:bg-charcoal/90 transition-colors">
            250 € · 50 km
          </a>
        </div>
      </div>
    </section>
  )
}
