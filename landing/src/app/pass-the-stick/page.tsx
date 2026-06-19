'use client'

import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import PassTheStick from '@/components/PassTheStick'

export default function PassTheStickPage() {
  const router = useRouter()
  return (
    <>
      <Navbar />
      <div className="pt-14">
        <div className="px-6 py-3 bg-cream border-b border-charcoal/10 flex items-center gap-4">
          <button onClick={() => router.back()} className="font-body text-xs tracking-[0.1em] uppercase text-charcoal/50 hover:text-charcoal transition-colors flex items-center gap-1.5">
            ← Atpakaļ
          </button>
        </div>
        <PassTheStick />
      </div>
    </>
  )
}
