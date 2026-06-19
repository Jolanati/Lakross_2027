'use client'

import { siteConfig } from '@/content/config'

const steps = [
  {
    flag: '🇱🇻',
    title: 'Latvieši ārzemēs',
    text: 'Latviešu centri ASV, Eiropā un visā pasaulē. Jūsu atbalsts nes nacionālo lepnumu uz Eiropas čempionātu.',
  },
  {
    flag: '🥍',
    title: 'Starptautiskā lakrosa kopiena',
    text: 'Bijušie un esošie spēlētāji pasaulē, kas saprot, ko nozīmē cīnīties pašiem.',
  },
  {
    flag: '🤝',
    title: 'Draugi un paziņas ārvalstīs',
    text: 'Ikviens, kuram ir saikne ar Latviju vai sieviešu sportu, var būt daļa no šī stāsta.',
  },
]

export default function Diaspora() {
  return (
    <section id="diaspora" className="pt-8 pb-12 md:pt-10 md:pb-16 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-carmine mb-4">
            04 · Diasporas kampaņa
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-charcoal leading-[1.1]">
            Latvija cīnās.
            <br />
            Atbalsti no jebkuras
            <br />
            pasaules vietas.
          </h2>
        </div>

        <p className="text-lg text-charcoal/80 max-w-2xl mb-12 leading-relaxed">
          2026. gada novembrī Spānijā Latvija pirmo reizi vēsturē startēs Olimpiskās kvalifikācijas
          turnīrā lakrosā. Šis brīdis pieder ne tikai mums - tas pieder ikvienam latvietim pasaulē.
        </p>

        {/* Who we're reaching */}
        <div className="grid md:grid-cols-3 gap-px bg-charcoal/10 mb-12">
          {steps.map((s, i) => (
            <div key={i} className="bg-cream-light p-8">
              <div className="text-3xl mb-4">{s.flag}</div>
              <h3 className="font-display font-semibold text-charcoal text-xl mb-3">{s.title}</h3>
              <p className="text-sm text-charcoal/80 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <blockquote className="border-l-4 border-carmine pl-6 mb-12">
          <p className="text-xl md:text-2xl font-display font-semibold text-charcoal leading-snug">
            "Latvija cīnās par Olimpiskajām spēlēm lakrosā.
            <br />
            Palīdzi nest nacionālo lepnumu Eiropā."
          </p>
        </blockquote>

        {/* Two payment options */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-charcoal/10 p-8">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-carmine mb-3">
              Latvijā un ES
            </p>
            <p className="text-sm text-charcoal/80 mb-6 leading-relaxed">
              Zeffy - tiešie ziedojumi bez komisijas maksas. 100% nonāk pie komandas.
            </p>
            <a
              href={siteConfig.donate.zeffy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-carmine text-cream font-body font-semibold text-sm hover:bg-carmine-dark transition-colors"
            >
              Ziedot caur Zeffy →
            </a>
          </div>
          <div className="border border-charcoal/10 p-8">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-carmine mb-3">
              ASV, Kanāda, citur
            </p>
            <p className="text-sm text-charcoal/80 mb-6 leading-relaxed">
              PayPal - ātrākais veids ziedot no jebkuras pasaules vietas.
            </p>
            <a
              href={siteConfig.donate.zeffy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-charcoal text-charcoal font-body font-semibold text-sm hover:bg-charcoal hover:text-cream transition-colors"
            >
              Ziedot caur PayPal →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
