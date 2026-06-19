'use client'

import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'

export default function Footer() {
  const { t } = useSite()
  const social = siteConfig.social

  return (
    <>
      {/* Emotional closing CTA */}
      <section className="min-h-screen px-6 bg-charcoal text-center flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-cream leading-[1.2] mb-8">
            Četrpadsmit gadus pašas.{' '}
            <em className="italic text-cream/70">Pēdējos kilometrus — kopā.</em>
          </h2>
          <p className="text-cream/60 text-lg mb-10 font-display italic">
            {t.footer.tagline}
          </p>
          <a
            href="#kilometri"
            className="inline-flex items-center px-10 py-4 bg-carmine text-cream font-body font-semibold text-sm hover:bg-carmine-light transition-colors"
          >
            Atbalsti komandu
            <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Actual footer */}
      <footer className="bg-charcoal border-t border-white/10 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-cream/40">
            <span className="font-display font-semibold text-cream/60">Latvijas sieviešu lakrosa izlase</span>
            <span className="mx-3">·</span>
            <span>Zeffy</span>
            <span className="mx-2">·</span>
            <span>PayPal</span>
          </div>
          <div className="flex gap-5">
            {social.instagram && (
              <a href={social.instagram} target="_blank" rel="noopener noreferrer"
                 className="text-cream/40 hover:text-cream transition-colors text-sm">
                Instagram
              </a>
            )}
            {social.facebook && (
              <a href={social.facebook} target="_blank" rel="noopener noreferrer"
                 className="text-cream/40 hover:text-cream transition-colors text-sm">
                Facebook
              </a>
            )}
          </div>
        </div>
        <div className="text-center text-xs text-cream/30 mt-6">
          Ziedojumi bez komisijas maksas · Rīga, Latvija
        </div>
      </footer>
    </>
  )
}
