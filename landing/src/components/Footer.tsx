'use client'

import { useSite } from '@/context/SiteContext'
import { siteConfig } from '@/content/config'

export default function Footer() {
  const { t } = useSite()
  const social = siteConfig.social

  return (
    <footer className="bg-charcoal-deep border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-400 italic mb-2">{t.footer.tagline}</p>
          <p className="text-2xl font-display font-black text-white">{t.footer.cta}</p>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-8">
          {social.instagram && (
            <a href={social.instagram} target="_blank" rel="noopener noreferrer"
               className="text-gray-500 hover:text-white transition-colors text-sm font-semibold">
              Instagram
            </a>
          )}
          {social.tiktok && (
            <a href={social.tiktok} target="_blank" rel="noopener noreferrer"
               className="text-gray-500 hover:text-white transition-colors text-sm font-semibold">
              TikTok
            </a>
          )}
          {social.facebook && (
            <a href={social.facebook} target="_blank" rel="noopener noreferrer"
               className="text-gray-500 hover:text-white transition-colors text-sm font-semibold">
              Facebook
            </a>
          )}
          {social.website && (
            <a href={social.website} target="_blank" rel="noopener noreferrer"
               className="text-gray-500 hover:text-white transition-colors text-sm font-semibold">
              Web
            </a>
          )}
        </div>

        <div className="text-center text-xs text-gray-600">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
