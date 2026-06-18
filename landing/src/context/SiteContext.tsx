'use client'

import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { siteConfig, type SiteMode } from '@/content/config'
import { lv } from '@/content/lv'
import { en } from '@/content/en'

type Locale = 'lv' | 'en'

interface SiteContextType {
  mode: SiteMode
  locale: Locale
  t: typeof lv
  toggleMode: () => void
  setLocale: (l: Locale) => void
  isVisible: (section: keyof typeof siteConfig.sections) => boolean
}

const SiteContext = createContext<SiteContextType | null>(null)

const translations = { lv, en } as const

export function SiteProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<SiteMode>(siteConfig.defaultMode)
  const [locale, setLocale] = useState<Locale>(siteConfig.defaultLocale)

  const toggleMode = useCallback(() => {
    setMode(prev => prev === 'academic' ? 'campaign' : 'academic')
  }, [])

  const isVisible = useCallback((section: keyof typeof siteConfig.sections) => {
    const cfg = siteConfig.sections[section]
    return cfg ? cfg[mode] : true
  }, [mode])

  const t = translations[locale]

  return (
    <SiteContext.Provider value={{ mode, locale, t, toggleMode, setLocale, isVisible }}>
      {children}
    </SiteContext.Provider>
  )
}

export function useSite() {
  const ctx = useContext(SiteContext)
  if (!ctx) throw new Error('useSite must be used within SiteProvider')
  return ctx
}
