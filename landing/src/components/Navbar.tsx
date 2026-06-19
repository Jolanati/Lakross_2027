'use client'

import { useSite } from '@/context/SiteContext'
import { useState } from 'react'

export default function Navbar() {
  const { t, mode, toggleMode, locale, setLocale } = useSite()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-charcoal/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-tight">
            <span className="font-display font-semibold text-charcoal text-sm">Latvijas Lakross</span>
            <span className="font-body text-[10px] text-charcoal/50">Sieviešu izlase</span>
          </a>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLocale(locale === 'lv' ? 'en' : 'lv')}
              className="text-[10px] font-body font-semibold tracking-widest text-charcoal/50 hover:text-charcoal border border-charcoal/15 px-2 py-1 transition-colors"
            >
              {locale === 'lv' ? 'EN' : 'LV'}
            </button>

            <button
              onClick={toggleMode}
              className="hidden sm:inline-block text-[10px] font-body font-semibold tracking-widest text-charcoal/50 hover:text-charcoal border border-charcoal/15 px-2 py-1 transition-colors"
            >
              {mode === 'academic' ? 'Campaign' : 'Academic'}
            </button>

            <a href="#kilometri"
               className="inline-block text-xs font-body font-semibold px-4 py-2 bg-carmine text-cream hover:bg-carmine-dark transition-colors">
              Atbalsti
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
