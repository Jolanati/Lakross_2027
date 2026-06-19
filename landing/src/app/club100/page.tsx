import Navbar from '@/components/Navbar'
import Club100 from '@/components/Club100'
import Link from 'next/link'

export default function Club100Page() {
  return (
    <>
      <Navbar />
      <div className="pt-11">
        <div className="px-6 py-4 bg-cream border-b border-charcoal/10">
          <Link href="/" className="text-sm font-body text-charcoal/50 hover:text-charcoal transition-colors">
            ← Atpakaļ uz sākumu
          </Link>
        </div>
        <Club100 />
      </div>
    </>
  )
}
