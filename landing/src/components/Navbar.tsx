'use client'

import { useSite } from '@/context/SiteContext'
import { useState } from 'react'

export default function Navbar() {
  const { t, mode, toggleMode, locale, setLocale } = useSite()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal-deep/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="font-display font-black text-white text-sm tracking-[0.15em] uppercase">
            Latvia Lacrosse
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#story" className="text-[11px] uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors">{t.nav.story}</a>
            <a href="#campaigns" className="text-[11px] uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors">{t.nav.campaigns}</a>
            <a href="#sponsors" className="text-[11px] uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors">{t.nav.sponsors}</a>
            <a href="#team" className="text-[11px] uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors">{t.nav.team}</a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLocale(locale === 'lv' ? 'en' : 'lv')}
              className="text-[10px] font-bold tracking-widest text-gray-500 hover:text-white border border-gray-700 hover:border-gray-500 px-2 py-1 transition-colors"
            >
              {locale === 'lv' ? 'EN' : 'LV'}
            </button>

            <button
              onClick={toggleMode}
              className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 transition-all border border-carmine/40 text-carmine-light hover:bg-carmine/10"
            >
              {mode === 'academic' ? '\u2192 Campaign' : '\u2192 Academic'}
            </button>

            <a href="#donate"
               className="hidden sm:inline-block text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 bg-carmine text-white hover:bg-carmine-light transition-colors">
              {t.nav.donate}
            </a>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-1 ml-1" aria-label="Menu">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-white/5 space-y-3">
            <a href="#story" onClick={() => setMenuOpen(false)} className="block text-xs uppercase tracking-[0.15em] text-gray-400">{t.nav.story}</a>
            <a href="#campaigns" onClick={() => setMenuOpen(false)} className="block text-xs uppercase tracking-[0.15em] text-gray-400">{t.nav.campaigns}</a>
            <a href="#sponsors" onClick={() => setMenuOpen(false)} className="block text-xs uppercase tracking-[0.15em] text-gray-400">{t.nav.sponsors}</a>
            <a href="#donate" onClick={() => setMenuOpen(false)} className="block text-xs uppercase tracking-[0.15em] text-carmine-light">{t.nav.donate}</a>
          </div>
        )}
      </div>
    </nav>
  )
}
