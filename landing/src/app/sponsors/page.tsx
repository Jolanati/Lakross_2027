'use client'

import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Sponsors from '@/components/Sponsors'

export default function SponsorsPage() {
  const router = useRouter()
  return (
    <>
      <Navbar />
      <div className="pt-14">
        <div className="px-6 py-4 bg-cream border-b border-charcoal/10">
          <button onClick={() => router.back()} className="text-sm font-body text-charcoal/50 hover:text-charcoal transition-colors">
            ← Atpakaļ
          </button>
        </div>
        <Sponsors />
      </div>
    </>
  )
}
