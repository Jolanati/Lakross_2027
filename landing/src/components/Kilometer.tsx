'use client'

import { siteConfig } from '@/content/config'

const TOTAL_KM_EC = 3000
const TOTAL_KM_OLYMPICS = 9500
const EUR_PER_KM = 5

export default function Kilometer() {
  const raisedEur = siteConfig.donate.raisedEur
  const kmFunded = Math.round(raisedEur / EUR_PER_KM)
  const percentEC = Math.min((kmFunded / TOTAL_KM_EC) * 100, 100)

  return (
    <section id="kilometri" className="pt-8 pb-24 md:pb-32 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">

        {/* Two-stage road visualization */}
        <div className="mb-16">
          {/* Stage 1: Rīga → EC Spānija */}
          <div className="mb-2">
            <div className="flex justify-between items-end mb-3">
              <div>
                <span className="font-display text-lg font-semibold text-charcoal">Rīga</span>
              </div>
              <div className="text-center">
                <span className="font-display text-sm font-medium text-carmine uppercase tracking-wider">
                  {kmFunded.toLocaleString()} km nofinansēti
                </span>
              </div>
              <div className="text-right">
                <span className="font-display text-lg font-semibold text-charcoal">Spānija</span>
                <span className="block text-xs text-charcoal/50">Eiropas čempionāts 2026</span>
              </div>
            </div>

            {/* Road track */}
            <div className="relative h-4 bg-charcoal/5 rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-carmine to-carmine/80 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${Math.max(percentEC, 2)}%` }}
              />
              {/* Road markings */}
              <div className="absolute inset-0 flex items-center justify-evenly pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-3 h-[2px] bg-white/30" />
                ))}
              </div>
            </div>

            {/* Marker dot */}
            <div className="relative">
              <div
                className="absolute -top-[22px] w-6 h-6 bg-carmine rounded-full border-3 border-cream shadow-lg transition-all duration-1000"
                style={{ left: `calc(${Math.max(percentEC, 2)}% - 12px)` }}
              >
                <div className="absolute inset-0 rounded-full bg-carmine animate-ping opacity-30" />
              </div>
            </div>

            <div className="flex justify-between mt-3 text-xs text-charcoal/40">
              <span>0 km</span>
              <span>{TOTAL_KM_EC.toLocaleString()} km</span>
            </div>
          </div>

          {/* Stage 2: EC → Olympics (greyed, future) */}
          <div className="mt-10 opacity-40">
            <div className="flex justify-between items-end mb-3">
              <div>
                <span className="font-display text-lg font-medium text-charcoal">Spānija</span>
              </div>
              <div className="text-right">
                <span className="font-display text-lg font-medium text-charcoal">Los Andželosa</span>
                <span className="block text-xs text-charcoal/50">Olimpiskās spēles 2028</span>
              </div>
            </div>

            <div className="relative h-4 bg-charcoal/5 rounded-full overflow-hidden">
              {/* Road markings only, no progress */}
              <div className="absolute inset-0 flex items-center justify-evenly pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-3 h-[2px] bg-charcoal/10" />
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-3 text-xs text-charcoal/30">
              <span>0 km</span>
              <span>{TOTAL_KM_OLYMPICS.toLocaleString()} km</span>
            </div>
          </div>
        </div>

        {/* Text + Donation */}
        <p className="text-lg md:text-xl text-charcoal/80 max-w-3xl mb-10 leading-relaxed">
          No Rīgas līdz Eiropas čempionātam Spānijā - <span className="font-display font-semibold text-charcoal">3 000 km</span>.<br />
          No Spānijas līdz Olimpiādei Los Andželosā - <span className="font-display font-semibold text-charcoal">9 500 km</span>.<br />
          <span className="mt-2 block">Katrs ziedotais kilometrs (<span className="font-semibold text-carmine">5 EUR</span>) palīdzēs komandai nonākt tuvāk startam Spānijā un cīnīties par vietu Olimpiādē.</span>
        </p>

        {/* Donation buttons */}
        <div className="flex flex-wrap gap-3">
          <a href={siteConfig.donate.zeffy} target="_blank" rel="noopener noreferrer"
             className="px-7 py-3.5 border-2 border-charcoal text-charcoal font-display text-sm font-semibold hover:bg-charcoal hover:text-cream transition-all duration-200 rounded-sm">
            5 € · 1 km
          </a>
          <a href={siteConfig.donate.zeffy} target="_blank" rel="noopener noreferrer"
             className="px-7 py-3.5 border-2 border-charcoal text-charcoal font-display text-sm font-semibold hover:bg-charcoal hover:text-cream transition-all duration-200 rounded-sm">
            25 € · 5 km
          </a>
          <a href={siteConfig.donate.zeffy} target="_blank" rel="noopener noreferrer"
             className="px-7 py-3.5 bg-carmine border-2 border-carmine text-cream font-display text-sm font-semibold hover:bg-carmine-dark transition-all duration-200 rounded-sm">
            50 € · 10 km
          </a>
          <a href={siteConfig.donate.zeffy} target="_blank" rel="noopener noreferrer"
             className="px-7 py-3.5 border-2 border-charcoal text-charcoal font-display text-sm font-semibold hover:bg-charcoal hover:text-cream transition-all duration-200 rounded-sm">
            250 € · 50 km
          </a>
        </div>
      </div>
    </section>
  )
}
