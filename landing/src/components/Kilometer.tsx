'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { siteConfig } from '@/content/config'

const TOTAL_KM = 3000
const EUR_PER_KM = 5

// Cost references (EUR) → tangible equivalents (per item, low→high so counts read intuitively).
const COST_MEAL = 10 // vienas spēlētājas maltīte
const COST_NIGHT = 40 // vienas spēlētājas nakts viesnīcā
const COST_KIT = 60 // viens spēles komplekts

// Above this a single gift funds a whole leg of the trip — stop itemising, just say thanks.
const BIG_SUPPORT_EUR = 600

// Milestones on the road Rīga → Spānija (approx. driving distance in km).
const ROUTE = [
  { city: 'Rīga', km: 0, note: 'Starts' },
  { city: 'Kauņa', km: 270, note: 'Lietuva' },
  { city: 'Varšava', km: 720, note: 'Polija' },
  { city: 'Prāga', km: 1280, note: 'Čehija' },
  { city: 'Minhene', km: 1750, note: 'Vācija' },
  { city: 'Lione', km: 2400, note: 'Francija' },
  { city: 'Spānija', km: 3000, note: 'Čempionāts' },
]

const PRESETS = [1, 5, 10, 50, 100]
const CONFETTI = ['#9D2235', '#C9A84C', '#F6F2EA', '#C42847']

// A stylised winding road across the viewBox (1000 × 240).
const ROAD = 'M 40 95 C 190 25, 280 70, 410 140 C 540 210, 650 215, 750 120 C 835 40, 905 75, 965 150'

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

export default function Kilometer() {
  const raisedEur = siteConfig.donate.raisedEur
  const kmFunded = Math.round(raisedEur / EUR_PER_KM)
  const remainingKm = Math.max(TOTAL_KM - kmFunded, 1)

  const [selectedKm, setSelectedKm] = useState(Math.min(25, remainingKm))
  const [dragging, setDragging] = useState(false)

  const selectedEur = selectedKm * EUR_PER_KM
  const previewKm = Math.min(kmFunded + selectedKm, TOTAL_KM)
  const previewFrac = previewKm / TOTAL_KM
  const fundedFrac = kmFunded / TOTAL_KM
  const reached = previewKm >= TOTAL_KM

  // ── Measure the road once so we can place pins + drag the bus along it ──
  const svgRef = useRef<SVGSVGElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [samples, setSamples] = useState<{ x: number; y: number }[]>([])
  const [pathLen, setPathLen] = useState(0)

  useEffect(() => {
    const p = pathRef.current
    if (!p) return
    const len = p.getTotalLength()
    const N = 160
    const pts: { x: number; y: number }[] = []
    for (let i = 0; i < N; i++) {
      const pt = p.getPointAtLength((i / (N - 1)) * len)
      pts.push({ x: pt.x, y: pt.y })
    }
    setSamples(pts)
    setPathLen(len)
  }, [])

  const pointAtFrac = (f: number) => {
    if (samples.length === 0) return null
    const idx = Math.max(0, Math.min(1, f)) * (samples.length - 1)
    const lo = Math.floor(idx)
    const hi = Math.min(lo + 1, samples.length - 1)
    const t = idx - lo
    return { x: lerp(samples[lo].x, samples[hi].x, t), y: lerp(samples[lo].y, samples[hi].y, t) }
  }

  const busPt = useMemo(() => pointAtFrac(previewFrac), [previewFrac, samples])

  // ── Drag / tap the road to set the contribution ──
  const setFromPointer = (clientX: number, clientY: number) => {
    const svg = svgRef.current
    if (!svg || samples.length === 0) return
    const ctm = svg.getScreenCTM()
    if (!ctm) return
    const sp = svg.createSVGPoint()
    sp.x = clientX
    sp.y = clientY
    const u = sp.matrixTransform(ctm.inverse())
    let best = 0
    let bestD = Infinity
    for (let i = 0; i < samples.length; i++) {
      const dx = samples[i].x - u.x
      const dy = samples[i].y - u.y
      const d = dx * dx + dy * dy
      if (d < bestD) {
        bestD = d
        best = i
      }
    }
    const targetKm = Math.round((best / (samples.length - 1)) * TOTAL_KM)
    setSelectedKm(Math.max(Math.min(targetKm - kmFunded, remainingKm), 1))
  }

  const onDown = (e: React.PointerEvent) => {
    ;(e.currentTarget as Element).setPointerCapture(e.pointerId)
    setDragging(true)
    setFromPointer(e.clientX, e.clientY)
  }
  const onMove = (e: React.PointerEvent) => {
    if (dragging) setFromPointer(e.clientX, e.clientY)
  }
  const onUp = () => setDragging(false)

  // ── Derived copy ──
  const reachedStop = useMemo(() => {
    let r = ROUTE[0]
    for (const s of ROUTE) if (previewKm >= s.km) r = s
    return r
  }, [previewKm])
  const nextStop = useMemo(() => ROUTE.find((s) => s.km > previewKm) ?? ROUTE[ROUTE.length - 1], [previewKm])
  const kmToNext = Math.max(nextStop.km - previewKm, 0)

  // Journey done = full goal met (3 000 km × 5 € = 15 000 €). bigSupport = funds a whole leg.
  const bigSupport = selectedEur >= BIG_SUPPORT_EUR && !reached
  const equivalents = [
    { icon: '🍽️', value: Math.floor(selectedEur / COST_MEAL), label: 'spēlētāju maltītes' },
    { icon: '🛏️', value: Math.floor(selectedEur / COST_NIGHT), label: 'naktis viesnīcā' },
    { icon: '👕', value: Math.floor(selectedEur / COST_KIT), label: 'spēles komplekti' },
  ].filter((e) => e.value >= 1)

  return (
    <section id="kilometri" className="py-24 md:py-32 px-6 bg-charcoal-deep">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-cream/50 mb-4">
            Ceļš uz Spāniju · Nopērc kilometru
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-cream leading-[1.05]">
            Velc autobusu. Aizved
            <br className="hidden sm:block" /> izlasi līdz startam.
          </h2>
          <p className="text-lg text-cream/70 max-w-2xl mt-6 leading-relaxed">
            No Rīgas līdz Eiropas čempionātam ir aptuveni 3&nbsp;000 km. Pavelc autobusu pa ceļu vai pieskaries
            pilsētai — un redzi tieši, cik tālu tavs ieguldījums aizved komandu.
          </p>
        </div>

        {/* Funded-so-far stats */}
        <div className="flex flex-wrap items-end gap-x-8 gap-y-3 mb-6">
          <div>
            <span className="font-display text-4xl font-semibold text-carmine">{kmFunded.toLocaleString()}</span>
            <span className="text-cream/50 text-sm ml-2">/ {TOTAL_KM.toLocaleString()} km nofinansēti</span>
          </div>
          <div className="text-cream/30">·</div>
          <div>
            <span className="font-display text-4xl font-semibold text-cream">{raisedEur.toLocaleString()}&nbsp;€</span>
            <span className="text-cream/50 text-sm ml-2">savākti līdz šim</span>
          </div>
        </div>

        {/* ── Interactive road ─────────────────────────────── */}
        <div className="relative mb-12 select-none" style={{ touchAction: 'none' }}>
          {reached && (
            <div className="confetti pointer-events-none absolute inset-0 overflow-hidden z-20">
              {Array.from({ length: 18 }).map((_, i) => (
                <span
                  key={i}
                  style={{
                    left: `${(i * 5.6) % 100}%`,
                    animationDelay: `${(i % 6) * 0.18}s`,
                    background: CONFETTI[i % CONFETTI.length],
                  }}
                />
              ))}
            </div>
          )}

          <svg
            ref={svgRef}
            viewBox="0 0 1000 240"
            className="w-full h-auto"
            style={{ cursor: dragging ? 'grabbing' : 'grab' }}
          >
            {/* faint full road */}
            <path
              ref={pathRef}
              d={ROAD}
              fill="none"
              stroke="#F6F2EA"
              strokeOpacity="0.15"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="2 9"
            />
            {/* gold — your contribution reach */}
            {pathLen > 0 && (
              <path
                d={ROAD}
                fill="none"
                stroke="#C9A84C"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={`${previewFrac * pathLen} ${pathLen}`}
              />
            )}
            {/* carmine — already funded */}
            {pathLen > 0 && (
              <path
                d={ROAD}
                fill="none"
                stroke="#9D2235"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={`${fundedFrac * pathLen} ${pathLen}`}
              />
            )}

            {/* invisible fat hit-area for dragging anywhere on the road */}
            <path
              d={ROAD}
              fill="none"
              stroke="transparent"
              strokeWidth="44"
              strokeLinecap="round"
              onPointerDown={onDown}
              onPointerMove={onMove}
              onPointerUp={onUp}
            />

            {/* city pins */}
            {samples.length > 0 &&
              ROUTE.map((stop) => {
                const pt = pointAtFrac(stop.km / TOTAL_KM)!
                const isFunded = kmFunded >= stop.km
                const isPreview = !isFunded && previewKm >= stop.km
                const isReached = previewKm >= stop.km
                const last = stop.km === TOTAL_KM
                return (
                  <g
                    key={stop.city}
                    onPointerDown={(e) => {
                      e.stopPropagation()
                      setSelectedKm(Math.max(Math.min(stop.km - kmFunded, remainingKm), 1))
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* generous invisible tap target */}
                    <circle cx={pt.x} cy={pt.y} r={18} fill="transparent" />
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={last ? 8 : 6}
                      fill={isFunded ? '#9D2235' : isPreview ? '#C9A84C' : '#F6F2EA'}
                      stroke={isFunded ? '#9D2235' : isPreview ? '#C9A84C' : '#F6F2EA'}
                      strokeOpacity={isReached ? 1 : 0.3}
                      strokeWidth="2.5"
                    />
                    {last && reached && <circle cx={pt.x} cy={pt.y} r={8} fill="none" stroke="#C9A84C" strokeWidth="2" className="pin-pulse" />}
                    <text
                      x={pt.x}
                      y={pt.y - 16}
                      textAnchor="middle"
                      className="font-display"
                      style={{ fontSize: 16, fontWeight: 600, fill: isReached ? '#F6F2EA' : 'rgba(246,242,234,0.4)' }}
                    >
                      {last ? '🇪🇸 ' : ''}
                      {stop.city}
                    </text>
                    <text
                      x={pt.x}
                      y={pt.y + 26}
                      textAnchor="middle"
                      style={{ fontSize: 10, letterSpacing: 1, fill: 'rgba(246,242,234,0.35)', textTransform: 'uppercase' }}
                    >
                      {stop.km.toLocaleString()} km
                    </text>
                  </g>
                )
              })}

            {/* the bus */}
            {busPt && (
              <g
                onPointerDown={onDown}
                onPointerMove={onMove}
                onPointerUp={onUp}
                style={{ cursor: dragging ? 'grabbing' : 'grab' }}
              >
                <circle cx={busPt.x} cy={busPt.y} r={22} fill="transparent" />
                <circle cx={busPt.x} cy={busPt.y} r={15} fill="#F6F2EA" stroke="#1A1A1A" strokeWidth="3" />
                <text x={busPt.x} y={busPt.y + 6} textAnchor="middle" style={{ fontSize: 16 }}>
                  🚌
                </text>
              </g>
            )}
          </svg>

          <p className="text-center text-xs text-cream/40 uppercase tracking-[0.2em] mt-1">
            ↤ Velc autobusu vai pieskaries pilsētai ↦
          </p>
        </div>

        {/* ── Chooser + impact ──────────────────────────────── */}
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-start bg-charcoal text-cream p-8 sm:p-10 rounded-sm border border-white/10">
          {/* chooser */}
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-cream/50 mb-6">Tavs posms</p>

            <div className="flex items-baseline gap-3 mb-1">
              <span className="font-display text-6xl sm:text-7xl font-semibold text-cream leading-none tabular-nums">
                {selectedKm}
              </span>
              <span className="font-display text-2xl text-cream/60">km</span>
            </div>
            <p className="font-body text-gold text-lg font-medium mb-7 tabular-nums">= {selectedEur.toLocaleString()} €</p>

            <input
              type="range"
              min={1}
              max={remainingKm}
              value={selectedKm}
              onChange={(e) => setSelectedKm(Number(e.target.value))}
              aria-label="Izvēlies kilometru skaitu"
              className="km-slider w-full mb-6"
            />

            <div className="flex flex-wrap gap-2">
              {PRESETS.filter((km) => km <= remainingKm).map((km) => {
                const active = km === selectedKm
                return (
                  <button
                    key={km}
                    onClick={() => setSelectedKm(km)}
                    className={`px-4 py-2 font-body text-sm font-medium transition-colors border ${
                      active ? 'bg-gold text-charcoal border-gold' : 'bg-transparent text-cream/80 border-cream/25 hover:border-cream/60'
                    }`}
                  >
                    {km} km
                  </button>
                )
              })}
              <button
                onClick={() => setSelectedKm(remainingKm)}
                className={`px-4 py-2 font-body text-sm font-medium transition-colors border ${
                  selectedKm === remainingKm ? 'bg-gold text-charcoal border-gold' : 'bg-transparent text-gold border-gold/40 hover:border-gold'
                }`}
              >
                🇪🇸 Līdz Spānijai
              </button>
            </div>
          </div>

          {/* impact */}
          <div className="md:border-l md:border-cream/15 md:pl-10">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-cream/50 mb-5">Ko tas izdara</p>

            <p className="text-cream/80 leading-relaxed mb-6">
              {reached ? (
                <>
                  Tu aizved izlasi <span className="text-gold font-medium">līdz pašam čempionātam Spānijā</span> 🎉
                </>
              ) : (
                <>
                  Tavs ieguldījums aizved izlasi <span className="text-gold font-medium">līdz {reachedStop.city}</span> — vēl{' '}
                  <span className="text-cream font-medium tabular-nums">{kmToNext.toLocaleString()} km</span> līdz {nextStop.city}.
                </>
              )}
            </p>

            {reached ? (
              <div className="mb-8 border border-gold/40 bg-gold/10 p-5 rounded-sm">
                <p className="text-2xl mb-2">🎉</p>
                <p className="text-cream font-display text-xl font-semibold leading-snug mb-1">
                  Fantastiski — ar šo izlases ceļš uz Spāniju ir nosegts pilnībā!
                </p>
                <p className="text-cream/55 text-sm">
                  Tavi {selectedEur.toLocaleString()} € aizved komandu līdz pašam startam. Milzīgs paldies.
                </p>
              </div>
            ) : bigSupport ? (
              <div className="mb-8 border border-gold/40 bg-gold/10 p-5 rounded-sm">
                <p className="text-2xl mb-2">🙌</p>
                <p className="text-cream font-display text-xl font-semibold leading-snug mb-1">
                  Paldies par tik dāsnu atbalstu!
                </p>
                <p className="text-cream/55 text-sm">
                  Tu vienatnē finansē veselu komandas ceļa posmu — līdz {reachedStop.city} — sedzot degvielu,
                  naktsmītnes un ēdināšanu reizē.
                </p>
              </div>
            ) : (
              <>
                <p className="text-cream/45 text-sm mb-3">
                  Tie ir {selectedEur.toLocaleString()} € — pietiek, piemēram:
                </p>
                <ul className="space-y-3 mb-8">
                  {equivalents.map((e) => (
                    <li key={e.label} className="flex items-center gap-3">
                      <span className="text-lg w-6 text-center">{e.icon}</span>
                      <span className="font-display text-2xl font-semibold text-cream tabular-nums">{e.value}</span>
                      <span className="text-cream/55 text-sm">{e.label}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <a
              href={siteConfig.donate.zeffy}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center w-full px-6 py-4 bg-carmine text-cream font-body text-sm font-semibold uppercase tracking-wide hover:bg-carmine-light transition-colors"
            >
              Ziedo {selectedEur.toLocaleString()} € · {selectedKm} km
              <svg className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-cream/35 text-xs text-center mt-3">Droši caur Zeffy · 100% nonāk izlasei</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .km-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          background: rgba(246, 242, 234, 0.2);
          border-radius: 9999px;
          outline: none;
        }
        .km-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          background: #c9a84c;
          border: 3px solid #f6f2ea;
          cursor: pointer;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
          transition: transform 0.15s ease;
        }
        .km-slider::-webkit-slider-thumb:hover {
          transform: scale(1.12);
        }
        .km-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          background: #c9a84c;
          border: 3px solid #f6f2ea;
          cursor: pointer;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
        }
        .confetti span {
          position: absolute;
          top: -14px;
          width: 8px;
          height: 14px;
          border-radius: 1px;
          opacity: 0.9;
          animation: fall 1.8s linear infinite;
        }
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.95;
          }
          100% {
            transform: translateY(240px) rotate(320deg);
            opacity: 0;
          }
        }
        .pin-pulse {
          transform-box: fill-box;
          transform-origin: center;
          animation: pulse 1.4s ease-out infinite;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.4);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
