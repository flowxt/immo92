"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MortgageCalculator({ propertyPrice = 500000, compact = false }) {
  const [price, setPrice] = useState(propertyPrice);
  const [downPayment, setDownPayment] = useState(Math.round(propertyPrice * 0.2));
  const [duration, setDuration] = useState(25);
  const [rate, setRate] = useState(3.5);
  const [results, setResults] = useState(null);

  // Calcul des résultats
  useEffect(() => {
    calculateMortgage();
  }, [price, downPayment, duration, rate]);

  const calculateMortgage = () => {
    // Frais de notaire (environ 7-8% pour l'ancien, 2-3% pour le neuf)
    const notaryFees = Math.round(price * 0.075);
    
    // Montant à emprunter
    const loanAmount = price - downPayment + notaryFees;
    
    // Taux mensuel
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = duration * 12;
    
    // Calcul de la mensualité (formule standard)
    let monthlyPayment;
    if (monthlyRate === 0) {
      monthlyPayment = loanAmount / numberOfPayments;
    } else {
      monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                       (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }
    
    // Coût total
    const totalCost = monthlyPayment * numberOfPayments;
    const totalInterest = totalCost - loanAmount;
    
    // Pourcentages pour le graphique
    const principalPercentage = (loanAmount / totalCost) * 100;
    const interestPercentage = (totalInterest / totalCost) * 100;

    setResults({
      monthlyPayment: Math.round(monthlyPayment),
      totalCost: Math.round(totalCost),
      totalInterest: Math.round(totalInterest),
      loanAmount: Math.round(loanAmount),
      notaryFees: notaryFees,
      principalPercentage: principalPercentage.toFixed(1),
      interestPercentage: interestPercentage.toFixed(1),
    });
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('fr-FR').format(num);
  };

  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Calculateur de prêt</h3>
            <p className="text-sm text-gray-600">Estimation rapide</p>
          </div>
        </div>

        {results && (
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <div className="text-sm text-gray-600 mb-1">Mensualité estimée</div>
              <div className="text-3xl font-bold text-blue-600">
                {formatNumber(results.monthlyPayment)} €<span className="text-lg text-gray-500">/mois</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-gray-600">Sur {duration} ans</div>
                <div className="font-semibold text-gray-900">{formatNumber(results.totalCost)} €</div>
              </div>
              <div>
                <div className="text-gray-600">Intérêts</div>
                <div className="font-semibold text-gray-900">{formatNumber(results.totalInterest)} €</div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Calculateur de prêt</h3>
            <p className="text-blue-100 text-sm">Estimez vos mensualités en temps réel</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Prix du bien */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-gray-700">Prix du bien</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-32 px-3 py-1.5 text-right font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm font-semibold text-gray-600">€</span>
            </div>
          </div>
          <input
            type="range"
            min="100000"
            max="2000000"
            step="10000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        {/* Apport personnel */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-gray-700">
              Apport personnel
              <span className="text-xs text-gray-500 ml-2">
                ({((downPayment / price) * 100).toFixed(0)}%)
              </span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-32 px-3 py-1.5 text-right font-bold text-amber-600 bg-amber-50 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <span className="text-sm font-semibold text-gray-600">€</span>
            </div>
          </div>
          <input
            type="range"
            min="0"
            max={price * 0.5}
            step="5000"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Durée */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-gray-700">Durée du prêt</label>
              <div className="px-3 py-1.5 font-bold text-green-600 bg-green-50 border border-green-200 rounded-lg">
                {duration} ans
              </div>
            </div>
            <input
              type="range"
              min="5"
              max="30"
              step="1"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>5 ans</span>
              <span>30 ans</span>
            </div>
          </div>

          {/* Taux */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-gray-700">Taux d&apos;intérêt</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-20 px-3 py-1.5 text-right font-bold text-purple-600 bg-purple-50 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <span className="text-sm font-semibold text-gray-600">%</span>
              </div>
            </div>
            <input
              type="range"
              min="0.5"
              max="6"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0.5%</span>
              <span>6%</span>
            </div>
          </div>
        </div>

        {/* Résultats */}
        {results && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Mensualité principale */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white mb-6">
              <div className="text-center">
                <div className="text-sm font-semibold text-blue-100 mb-2">Mensualité</div>
                <div className="text-5xl font-bold mb-1">
                  {formatNumber(results.monthlyPayment)} €
                </div>
                <div className="text-blue-100">par mois pendant {duration} ans</div>
              </div>
            </div>

            {/* Détails */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-xs text-gray-600 mb-1">Montant emprunté</div>
                <div className="text-xl font-bold text-gray-900">
                  {formatNumber(results.loanAmount)} €
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-xs text-gray-600 mb-1">Coût total</div>
                <div className="text-xl font-bold text-gray-900">
                  {formatNumber(results.totalCost)} €
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-xs text-gray-600 mb-1">Intérêts totaux</div>
                <div className="text-xl font-bold text-orange-600">
                  {formatNumber(results.totalInterest)} €
                </div>
              </div>
            </div>

            {/* Graphique de répartition */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-sm font-semibold text-gray-700 mb-4">Répartition du coût total</div>
              
              {/* Barre de progression */}
              <div className="h-8 bg-gray-200 rounded-full overflow-hidden mb-4 flex">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${results.principalPercentage}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bg-blue-600 flex items-center justify-center"
                >
                  {results.principalPercentage > 15 && (
                    <span className="text-xs font-semibold text-white">
                      {results.principalPercentage}%
                    </span>
                  )}
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${results.interestPercentage}%` }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="bg-orange-500 flex items-center justify-center"
                >
                  {results.interestPercentage > 15 && (
                    <span className="text-xs font-semibold text-white">
                      {results.interestPercentage}%
                    </span>
                  )}
                </motion.div>
              </div>

              {/* Légende */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  <div>
                    <div className="text-gray-600">Capital + frais</div>
                    <div className="font-semibold text-gray-900">
                      {formatNumber(results.loanAmount)} €
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <div>
                    <div className="text-gray-600">Intérêts</div>
                    <div className="font-semibold text-gray-900">
                      {formatNumber(results.totalInterest)} €
                    </div>
                  </div>
                </div>
              </div>

              {/* Frais de notaire */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">💼 Frais de notaire inclus</span>
                  <span className="font-semibold text-gray-900">
                    {formatNumber(results.notaryFees)} €
                  </span>
                </div>
              </div>
            </div>

            {/* Avertissement */}
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div className="text-sm text-amber-800">
                  <strong>Information :</strong> Cette estimation est indicative. 
                  Les taux, frais et conditions peuvent varier selon les banques. 
                  Contactez-nous pour une étude personnalisée.
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

