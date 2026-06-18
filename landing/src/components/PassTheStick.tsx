'use client'

import { useSite } from '@/context/SiteContext'

export default function PassTheStick() {
  const { t } = useSite()

  return (
    <div className="py-24 px-4 bg-cream">
      <div className="max-w-5xl mx-auto">
        <p className="text-carmine font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-center">
          {t.passTheStick.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-charcoal text-center mb-6">
          {t.passTheStick.title}
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          {t.passTheStick.description}
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {t.passTheStick.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-carmine text-white font-display font-black text-xl
                               rounded-full flex items-center justify-center">
                  {step.step}
                </div>
                <div>
                  <p className="text-lg font-semibold text-charcoal">{step.text}</p>
                </div>
              </div>
            ))}

            {/* Hashtags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {t.passTheStick.hashtags.map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-carmine/10 text-carmine font-semibold text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Video placeholder */}
          <div className="aspect-[9/16] max-w-xs mx-auto bg-charcoal-deep rounded-3xl flex items-center justify-center border-4 border-charcoal/20 shadow-2xl">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-carmine/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-carmine" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">{t.passTheStick.videoPlaceholder}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
