'use client'

import { useSite } from '@/context/SiteContext'

export default function PassTheStick() {
  const { t } = useSite()

  return (
    <div className="pt-8 pb-12 md:pt-10 md:pb-16 px-4 bg-charcoal-deep overflow-hidden">
      {/* Dramatic background */}
      <div className="bg-text top-1/2 -translate-y-1/2 left-[-2%] text-white/[0.02]">PASS</div>
      <div className="absolute top-0 left-1/4 w-[2px] h-full bg-carmine/10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — video placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[9/16] max-w-[280px] mx-auto relative">
              {/* Phone frame */}
              <div className="absolute inset-0 border-2 border-white/10 bg-gradient-to-b from-white/5 to-charcoal-deep overflow-hidden">
                {/* Red accent */}
                <div className="absolute top-1/3 left-0 w-full h-1/3 bg-carmine/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-white/20 flex items-center justify-center hover:border-carmine transition-colors cursor-pointer">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <p className="absolute bottom-6 left-0 right-0 text-center text-[10px] text-gray-600 uppercase tracking-widest">
                  {t.passTheStick.videoPlaceholder}
                </p>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="order-1 lg:order-2">
            <p className="text-carmine-light text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
              {t.passTheStick.overtitle}
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-white leading-[1.05] mb-8">
              {t.passTheStick.title}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-12 max-w-md">
              {t.passTheStick.description}
            </p>

            {/* Steps — bold numbered */}
            <div className="space-y-6 mb-10">
              {t.passTheStick.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-6">
                  <span className="text-4xl font-display font-black text-carmine/30 leading-none">{step.step}</span>
                  <p className="text-white font-semibold text-lg pt-1">{step.text}</p>
                </div>
              ))}
            </div>

            {/* Hashtags */}
            <div className="flex flex-wrap gap-4">
              {t.passTheStick.hashtags.map((tag, i) => (
                <span key={i} className="text-sm font-bold text-carmine-light">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
