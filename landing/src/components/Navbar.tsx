'use client'

import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'
import { useState } from 'react'

export default function Navbar() {
  const { mode, toggleMode, locale, setLocale } = useSite()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur-md border-b border-charcoal/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12">
          {/* Left nav links */}
          <div className="flex items-center gap-5">
            <a href="#kilometri" className="font-body text-xs font-medium text-charcoal/70 hover:text-charcoal transition-colors">
              Ziedo kilometru
            </a>
            <span className="font-display text-xs font-semibold text-carmine">
              {siteConfig.donate.raisedEur.toLocaleString()} €
            </span>
            <a href="#campaigns" className="hidden sm:inline font-body text-xs font-medium text-charcoal/70 hover:text-charcoal transition-colors">
              Kampaņas
            </a>
            <a href="#team" className="hidden sm:inline font-body text-xs font-medium text-charcoal/70 hover:text-charcoal transition-colors">
              Komanda
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Mode switcher */}
            <div className="hidden sm:flex items-center bg-charcoal/5 rounded-sm overflow-hidden">
              <button
                onClick={() => mode !== 'campaign' && toggleMode()}
                className={`text-[10px] font-body font-semibold px-3 py-1.5 transition-colors ${
                  mode === 'campaign' ? 'bg-charcoal text-cream' : 'text-charcoal/50 hover:text-charcoal'
                }`}
              >
                Kampaņa
              </button>
              <button
                onClick={() => mode !== 'academic' && toggleMode()}
                className={`text-[10px] font-body font-semibold px-3 py-1.5 transition-colors ${
                  mode === 'academic' ? 'bg-charcoal text-cream' : 'text-charcoal/50 hover:text-charcoal'
                }`}
              >
                Universitāte
              </button>
            </div>

            {/* Language flag */}
            <button
              onClick={() => setLocale(locale === 'lv' ? 'en' : 'lv')}
              className="text-sm px-2 py-1 hover:bg-charcoal/5 rounded-sm transition-colors"
              title={locale === 'lv' ? 'English' : 'Latviešu'}
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
