'use client'

import { useSite } from '@/context/SiteContext'

export default function Budget() {
  const { t } = useSite()

  return (
    <div className="py-20 px-4 bg-gray-50" style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
      <div className="max-w-4xl mx-auto">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-carmine mb-3 text-center">
          {t.budget.overtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-charcoal text-center mb-12">
          {t.budget.title}
        </h2>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-100">
            <h3 className="font-display font-bold text-charcoal">{t.budget.revenue.title}</h3>
          </div>
          <table className="w-full">
            <tbody>
              {t.budget.revenue.items.map((item, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-700">{item.source}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-charcoal text-right">{item.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-400 text-right w-20">{item.percent}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-charcoal">
                <td className="px-6 py-4 text-sm font-bold text-white">KOPĀ / TOTAL</td>
                <td className="px-6 py-4 text-sm font-bold text-gold text-right">{t.budget.revenue.total}</td>
                <td className="px-6 py-4 text-sm text-gray-300 text-right">100%</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {t.budget.marketing && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="font-display font-bold text-charcoal">{t.budget.marketing.title}</h3>
            </div>
            <table className="w-full">
              <tbody>
                {t.budget.marketing.items.map((item, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-700">{item.source}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-charcoal text-right">{item.amount}</td>
                    <td className="px-6 py-4 text-sm text-gray-400 text-right w-20">{item.percent}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-charcoal">
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
