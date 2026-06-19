import Navbar from '@/components/Navbar'
import Club100 from '@/components/Club100'
import Link from 'next/link'

export default function Club100Page() {
  return (
    <>
      <Navbar />
      <div className="pt-11">
        <div className="px-6 py-6 bg-charcoal border-b border-white/10">
          <Link href="/" className="text-sm font-body text-cream/50 hover:text-cream transition-colors">
            ← Atpakaļ
          </Link>
        </div>
        <Club100 />
      </div>
    </>
  )
}
