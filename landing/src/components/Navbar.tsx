'use client'

import Link from 'next/link'
import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'

const campaigns = [
  { label: '100 Klubs', href: '/club100' },
  { label: 'Sievietes', href: '/sievietes' },
  { label: 'Sponsori', href: '/sponsors' },
  { label: 'Merch', href: '/merch' },
  { label: 'Diaspora', href: '/diaspora' },
  { label: 'Pass the Stick', href: '/pass-the-stick' },
]

export default function Navbar() {
  const { mode, toggleMode, locale, setLocale } = useSite()

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur-md border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Campaign links */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
            {campaigns.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="whitespace-nowrap font-body text-sm font-medium text-charcoal/70 hover:text-charcoal hover:bg-charcoal/5 px-4 py-2 rounded-sm transition-colors"
              >
                {c.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Mode switcher */}
            <div className="hidden sm:flex items-center bg-charcoal/5 rounded-sm overflow-hidden">
              <button
                onClick={() => mode !== 'campaign' && toggleMode()}
                className={`text-xs font-body font-semibold px-3 py-1.5 transition-colors ${
                  mode === 'campaign' ? 'bg-charcoal text-cream' : 'text-charcoal/50 hover:text-charcoal'
                }`}
              >
                Kampaņa
              </button>
              <button
                onClick={() => mode !== 'academic' && toggleMode()}
                className={`text-xs font-body font-semibold px-3 py-1.5 transition-colors ${
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
               className="text-xs font-body font-semibold px-4 py-2 bg-carmine text-cream hover:bg-carmine-dark transition-colors">
              Atbalsti
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
