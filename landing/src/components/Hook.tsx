'use client'

export default function Hook() {
  return (
    <section className="pt-24 pb-12 flex items-center justify-center px-6 bg-cream">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-charcoal leading-[1.2] mb-6">
          Četrpadsmit gadus mēs to esam darījušas pašas.
        </h2>
        <p className="text-2xl sm:text-3xl md:text-4xl font-display text-charcoal/70 leading-snug">
          Pēdējos kilometrus tikai{' '}
          <span className="text-carmine font-semibold">kopā</span>.
        </p>
      </div>
    </section>
  )
}
