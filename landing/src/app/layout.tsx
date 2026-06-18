import type { Metadata } from 'next'
import { SiteProvider } from '@/context/SiteContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'Latvijas Sieviešu Lakrosa Izlase — Road to Top 5',
  description: 'Atbalsti Latvijas sieviešu lakrosa izlasi ceļā uz Eiropas čempionātu Spānijā 2026. gadā.',
  openGraph: {
    title: 'Latvijas Sieviešu Lakrosa Izlase — Road to Top 5',
    description: 'Palīdzi mums iekļūt Eiropas Top 5 un spert pirmo soli uz Olimpiskajām spēlēm!',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lv">
      <body>
        <SiteProvider>
          {children}
        </SiteProvider>
      </body>
    </html>
  )
}
