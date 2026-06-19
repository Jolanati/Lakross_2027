import Navbar from '@/components/Navbar'
import Sponsors from '@/components/Sponsors'
import Link from 'next/link'

export default function SponsorsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-11">
        <div className="px-6 py-6 bg-charcoal border-b border-white/10">
          <Link href="/" className="text-sm font-body text-cream/50 hover:text-cream transition-colors">
            ← Atpakaļ
          </Link>
        </div>
        <Sponsors />
      </div>
    </>
  )
}
