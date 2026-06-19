'use client'

import { useSite } from '@/context/SiteContext'

export default function Budget() {
  const { t } = useSite()

  return (
    <div className="py-20 px-4 bg-charcoal">
      <div className="max-w-4xl mx-auto">
        <p className="text-carmine font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-center">
          {t.budget.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-cream text-center mb-12">
          {t.budget.title}
        </h2>

        <div className="bg-[#1f1f1f] rounded-2xl border border-white/10 overflow-hidden mb-8">
          <div className="p-6 border-b border-white/10">
            <h3 className="font-display font-bold text-cream">{t.budget.revenue.title}</h3>
          </div>
          <table className="w-full">
            <tbody>
              {t.budget.revenue.items.map((item, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm text-cream/70">{item.source}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-cream text-right">{item.amount}</td>
                  <td className="px-6 py-4 text-sm text-cream/40 text-right w-20">{item.percent}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-charcoal-deep">
                <td className="px-6 py-4 text-sm font-bold text-white">KOPĀ / TOTAL</td>
                <td className="px-6 py-4 text-sm font-bold text-gold text-right">{t.budget.revenue.total}</td>
                <td className="px-6 py-4 text-sm text-cream/40 text-right">100%</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Marketing budget */}
        {t.budget.marketing && (
          <div className="bg-[#1f1f1f] rounded-2xl border border-white/10 overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <h3 className="font-display font-bold text-cream">{t.budget.marketing.title}</h3>
            </div>
            <table className="w-full">
              <tbody>
                {t.budget.marketing.items.map((item, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-cream/70">{item.source}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-cream text-right">{item.amount}</td>
                    <td className="px-6 py-4 text-sm text-cream/40 text-right w-20">{item.percent}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-charcoal-deep">
                  <td className="px-6 py-4 text-sm font-bold text-white">KOPĀ / TOTAL</td>
                  <td className="px-6 py-4 text-sm font-bold text-gold text-right" colSpan={2}>{t.budget.marketing.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
