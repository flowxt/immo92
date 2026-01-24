"use client";

import { motion } from "framer-motion";

export default function FeesSchedule({ delay = 0.9 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#2998a6]/20"
    >
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-[#2998a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Barème d&apos;honoraires eXp Global France
      </h3>
      <div className="space-y-3">
        <p className="text-sm text-gray-700 font-semibold">
          Immobilier traditionnel et ancien - À l&apos;exclusion du neuf (VEFA), commerces et immobilier d&apos;entreprise
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[#2998a6]/10">
              <tr>
                <th className="px-4 py-2 text-left font-semibold text-gray-900">Prix de vente</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-900">Honoraires TTC*</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 text-gray-700">de 0 à 100 000 €</td>
                <td className="px-4 py-2 text-gray-900 font-semibold">10 000 €</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 text-gray-700">de 100 001 à 200 000 €</td>
                <td className="px-4 py-2 text-gray-900 font-semibold">9 %</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-700">de 200 001 à 300 000 €</td>
                <td className="px-4 py-2 text-gray-900 font-semibold">8 %</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 text-gray-700">de 300 001 à 400 000 €</td>
                <td className="px-4 py-2 text-gray-900 font-semibold">7 %</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-gray-700">Supérieur à 400 000 €</td>
                <td className="px-4 py-2 text-gray-900 font-semibold">6 %</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed mt-3">
          * Honoraires maximum et cumulables par tranche. Ces taux s&apos;entendent hors frais de rédaction d&apos;actes. Nos tarifs sont rédigés toutes taxes comprises au taux de TVA en vigueur inclus. Nos honoraires sont à la charge du vendeur sauf convention contraire précisée dans le mandat. Ils comprennent les prestations de visite, de négociation et de constitution du dossier de vente.
        </p>
      </div>
    </motion.div>
  );
}
