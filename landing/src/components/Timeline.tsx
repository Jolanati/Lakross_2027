'use client'

import { useSite } from '@/context/SiteContext'

export default function Timeline() {
  const { t } = useSite()

  return (
    <div className="py-20 px-4 bg-cream" style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-carmine mb-3 text-center">
          {t.timeline.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-charcoal text-center mb-16">
          {t.timeline.title}
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-carmine/20 -translate-x-1/2" />

          <div className="space-y-12">
            {t.timeline.months.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={i} className={`relative flex items-start gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-carmine rounded-full -translate-x-1/2 border-4 border-cream z-10" />

                  {/* Spacer for desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-white bg-carmine px-3 py-1 rounded-full">
                        {item.month}
                      </span>
                      <span className="text-sm font-semibold text-gray-500">{item.label}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {item.tasks.map((task, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-carmine mt-0.5">→</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
