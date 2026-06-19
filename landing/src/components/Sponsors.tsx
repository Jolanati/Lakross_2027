'use client'

import { siteConfig } from '@/content/config'

const packages = [
  {
    name: 'Ģenerālsponsors "Lidojuma spārni"',
    price: '4 000–6 000 €',
    description: 'Viena vai divu lielo zīmolu ekskluzīvā pakete — banka, IT, sports vai enerģētika.',
    perks: [
      'Centrālā logo pozīcija uz Eiropas čempionāta spēļu formām Spānijā',
      '"Galvenā varoņa" loma visos mediju relīzēs un PR materiālos',
      'Integrācija AI atribūtikā, mājaslapā un visās kampaņu komunikācijās',
      'Ielūgums uz Atklāto treniņu dienu ar foto/video saturu jūsu CSR kanāliem',
    ],
    cta: 'Sazināties par ģenerālsponsoringu',
    href: 'mailto:info@llf.lv',
    highlighted: true,
  },
  {
    name: 'Reģionālā sponsora pakete',
    price: '2 000 €',
    description: 'Trīs vietas vidējiem reģionālajiem uzņēmumiem. Ja ģenerālsponsor pakete netiek aizpildīta, tā tiek sadalīta šajos trīs.',
    perks: [
      'Logo redzamība kampaņas materiālos un mājaslapā',
      'Pateicības publiskācija komandas sociālajos tīklos',
      'Uzņēmuma pieminēšana visos PR relīzēs',
    ],
    cta: 'Sazināties',
    href: 'mailto:info@llf.lv',
    highlighted: false,
  },
]

export default function Sponsors() {
  return (
    <section id="sponsors" className="min-h-screen py-24 md:py-32 px-6 bg-cream flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-16">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal/50 mb-4">
            03 · Korporatīvais sponsorings
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-semibold text-charcoal leading-[1.0] mb-6">
            Kļūsti par stāsta dzinējspēku.
          </h2>
          <p className="text-xl text-charcoal/60 max-w-2xl leading-relaxed">
            Mēs nepārdodam vietu uz formas — mēs piedāvājam dalību vēsturiskā brīdī. Latvijas pirmā olimpiskā kvalifikācija lakrosā ir stāsts, ko vēlaties stāstīt kopā ar mums.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`p-10 flex flex-col ${
                pkg.highlighted ? 'bg-charcoal text-cream' : 'bg-white border border-charcoal/10'
              }`}
            >
              <span className={`text-xs font-body font-medium tracking-[0.15em] uppercase mb-4 ${
                pkg.highlighted ? 'text-cream/60' : 'text-charcoal/40'
              }`}>
                {pkg.name}
              </span>
              <span className={`text-4xl font-display font-semibold mb-3 ${
                pkg.highlighted ? 'text-cream' : 'text-charcoal'
              }`}>
                {pkg.price}
              </span>
              <p className={`text-sm mb-8 leading-relaxed ${
                pkg.highlighted ? 'text-cream/60' : 'text-charcoal/50'
              }`}>
                {pkg.description}
              </p>
              <ul className={`space-y-3 mb-10 flex-grow ${
                pkg.highlighted ? 'text-cream/70' : 'text-charcoal/60'
              }`}>
                {pkg.perks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                    <span className="text-carmine mt-0.5 flex-shrink-0">→</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <a
                href={pkg.href}
                className={`inline-block text-center px-6 py-4 font-body text-sm font-semibold transition-colors ${
                  pkg.highlighted
                    ? 'bg-carmine text-cream hover:bg-carmine-dark'
                    : 'bg-charcoal text-cream hover:bg-charcoal/90'
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-sm text-charcoal/50">
          Meklē mazāku ieguldījumu?{' '}
          <a href="/sievietes" className="text-carmine hover:underline">
            Sievietes atbalsta sievietes (100–500 €) →
          </a>
        </p>
      </div>
    </section>
  )
}
