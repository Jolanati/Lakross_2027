import Navbar from '@/components/Navbar'
import Sponsors from '@/components/Sponsors'
import Link from 'next/link'

export default function SponsorsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-11">
        <div className="px-6 py-4 bg-cream border-b border-charcoal/10">
          <Link href="/" className="text-sm font-body text-charcoal/50 hover:text-charcoal transition-colors">
            ← Atpakaļ uz sākumu
          </Link>
        </div>
        <Sponsors />
      </div>
    </>
  )
}
