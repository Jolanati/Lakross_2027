'use client'

import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'
import type { ReactNode } from 'react'

interface SectionWrapperProps {
  sectionKey: keyof typeof siteConfig.sections
  children: ReactNode
  className?: string
}

export default function SectionWrapper({ sectionKey, children, className = '' }: SectionWrapperProps) {
  const { isVisible, mode } = useSite()

  if (!isVisible(sectionKey)) return null

  const isAcademicOnly = siteConfig.sections[sectionKey].campaign === false

  return (
    <section className={`section-reveal ${className}`}>
      {isAcademicOnly && mode === 'academic' && (
        <div className="flex justify-center mb-4">
          <span className="academic-badge">📊 Akadēmiskā sadaļa</span>
        </div>
      )}
      {children}
    </section>
  )
}
