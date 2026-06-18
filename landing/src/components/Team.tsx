'use client'

import { useSite } from '@/context/SiteContext'
import Image from 'next/image'

const teamImages = [
  '08a3a247-8548-4eae-8d48-ba9a00eee53c.jpg',
  '0b0e3c56-98b5-458c-89a5-d68a2fa1b46b.jpg',
  '0d443acc-4be3-4114-8dba-5ead93ca5c12.jpg',
  '1d62b558-65e2-4602-b703-6a2b0ea41f8f.jpg',
  '398383e9-0ae1-46c8-96dd-9bb62d6b0f72.jpg',
  '5c4e3660-24c4-4bd0-9cad-d320f7ea570e.jpg',
  '6713e2f9-2951-477c-ad46-3818bc237144.jpg',
  '8859a73b-52d2-409c-8934-b87471b0422c.jpg',
  '94422ef3-721d-4a9c-b37f-c8d97da499c2.jpg',
  '952c882c-5e36-4a8c-bb8f-11dba752b72b.jpg',
  '9cb8c3ae-3464-42ac-b234-5b0c940d8322.jpg',
  'b3c02227-a881-4110-98ee-dbdedbe4a7fa.jpg',
  'b853019c-b759-477c-b46f-ff5187a6fe16.jpg',
  'c157b1d2-65c8-413f-9cc9-022b598111a7.jpg',
  'cb8a302c-707d-48f6-96ab-33c31fe00726.jpg',
  'fe40fc49-b8ca-4ba2-9295-a998bb1ab0eb.jpg',
]

export default function Team() {
  const { t } = useSite()

  return (
    <div id="team" className="relative py-32 px-4 bg-charcoal-deep overflow-hidden">
      {/* Background text */}
      <div className="bg-text select-none pointer-events-none" aria-hidden="true">TEAM</div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <p className="text-carmine font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            {t.team.overtitle}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white leading-[0.9]">
            {t.team.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mt-6">
            {t.team.description}
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1">
          {teamImages.map((img, i) => (
            <div
              key={img}
              className="relative aspect-[3/4] overflow-hidden group"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <Image
                src={`/team/${img}`}
                alt={`Team member ${i + 1}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-carmine/0 group-hover:bg-carmine/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
