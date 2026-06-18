'use client'

import { useSite } from '@/context/SiteContext'
import { useState } from 'react'

export default function Navbar() {
  const { t, mode, toggleMode, locale, setLocale } = useSite()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal-deep/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-lg font-display font-bold text-white tracking-tight">
              🥍 LV LACROSSE
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#story" className="text-sm text-gray-300 hover:text-white transition-colors">{t.nav.story}</a>
            <a href="#campaigns" className="text-sm text-gray-300 hover:text-white transition-colors">{t.nav.campaigns}</a>
            <a href="#sponsors" className="text-sm text-gray-300 hover:text-white transition-colors">{t.nav.sponsors}</a>
            <a href="#team" className="text-sm text-gray-300 hover:text-white transition-colors">{t.nav.team}</a>
            <a href="#donate" className="text-sm font-semibold text-carmine-light hover:text-white transition-colors">{t.nav.donate}</a>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={() => setLocale(locale === 'lv' ? 'en' : 'lv')}
              className="text-xs font-semibold text-gray-400 hover:text-white border border-gray-600 rounded px-2 py-1 transition-colors"
            >
              {locale === 'lv' ? 'EN' : 'LV'}
            </button>

            {/* Mode toggle */}
            <button
              onClick={toggleMode}
              className="text-xs font-semibold rounded px-3 py-1.5 transition-all
                         bg-white/10 text-white hover:bg-white/20"
            >
              {mode === 'academic' ? t.nav.modeCampaign : t.nav.modeAcademic}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white p-1"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#story" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-300 hover:text-white py-1">{t.nav.story}</a>
            <a href="#campaigns" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-300 hover:text-white py-1">{t.nav.campaigns}</a>
            <a href="#sponsors" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-300 hover:text-white py-1">{t.nav.sponsors}</a>
            <a href="#team" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-300 hover:text-white py-1">{t.nav.team}</a>
            <a href="#donate" onClick={() => setMenuOpen(false)} className="block text-sm font-semibold text-carmine-light hover:text-white py-1">{t.nav.donate}</a>
          </div>
        )}
      </div>
    </nav>
  )
}
