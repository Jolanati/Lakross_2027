'use client'

import { useSite } from '@/context/SiteContext'

export default function Team() {
  const { t } = useSite()

  return (
    <div id="team" className="py-24 px-4 bg-charcoal-deep">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-carmine-light font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3">
          {t.team.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-6">
          {t.team.title}
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
          {t.team.description}
        </p>

        {/* Team photo placeholder */}
        <div className="border border-white/10 p-16">
          <div className="flex justify-center gap-px mb-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-16 h-20 bg-white/5 border border-white/5" />
            ))}
          </div>
          <p className="text-xs text-gray-600 uppercase tracking-widest">{t.team.membersPlaceholder}</p>
        </div>
      </div>
    </div>
  )
}
