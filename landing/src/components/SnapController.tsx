'use client'

import { useEffect, useRef } from 'react'
import { useSite } from '@/context/SiteContext'

// Removes scroll-snap when in academic mode so sections scroll freely.
// Restores it when switching back to campaign (only if it was active before).
export default function SnapController() {
  const { mode } = useSite()
  const snapWasActive = useRef(false)

  useEffect(() => {
    const html = document.documentElement
    if (mode === 'academic') {
      snapWasActive.current = html.classList.contains('snap-ready')
      html.classList.remove('snap-ready')
    } else {
      if (snapWasActive.current) {
        html.classList.add('snap-ready')
      }
    }
  }, [mode])

  return null
}
