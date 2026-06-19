'use client'

import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'

const campaigns = [
  { label: '100 Klubs', href: '#klubs' },
  { label: 'Uzņēmējiem', href: '#sponsors' },
  { label: 'Latviešiem ārzemēs', href: '#diaspora' },
  { label: 'Sievietes Sievietēm', href: '#sponsors' },
  { label: 'Nodod stafeti', href: '#pass-the-stick' },
]

export default function Navbar() {
  const { mode, toggleMode, locale, setLocale } = useSite()

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur-md border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-11">
          {/* Campaign links */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
            {campaigns.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="whitespace-nowrap font-body text-[11px] font-medium text-charcoal/60 hover:text-charcoal hover:bg-charcoal/5 px-3 py-1.5 rounded-sm transition-colors"
              >
                {c.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Mode switcher */}
            <div className="hidden sm:flex items-center bg-charcoal/5 rounded-sm overflow-hidden">
              <button
                onClick={() => mode !== 'campaign' && toggleMode()}
                className={`text-[10px] font-body font-semibold px-2.5 py-1 transition-colors ${
                  mode === 'campaign' ? 'bg-charcoal text-cream' : 'text-charcoal/50 hover:text-charcoal'
                }`}
              >
                Kampaņa
              </button>
              <button
                onClick={() => mode !== 'academic' && toggleMode()}
                className={`text-[10px] font-body font-semibold px-2.5 py-1 transition-colors ${
                  mode === 'academic' ? 'bg-charcoal text-cream' : 'text-charcoal/50 hover:text-charcoal'
                }`}
              >
                Universitāte
              </button>
            </div>

            {/* Language flag */}
            <button
              onClick={() => setLocale(locale === 'lv' ? 'en' : 'lv')}
              className="text-sm px-1.5 py-1 hover:bg-charcoal/5 rounded-sm transition-colors"
            >
              {locale === 'lv' ? '🇬🇧' : '🇱🇻'}
            </button>

            {/* CTA */}
            <a href={siteConfig.donate.zeffy} target="_blank" rel="noopener noreferrer"
               className="text-[11px] font-body font-semibold px-3 py-1.5 bg-carmine text-cream hover:bg-carmine-dark transition-colors">
              Atbalsti
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
