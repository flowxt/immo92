"use client";

import { motion } from "framer-motion";

/**
 * Composant DPE (Diagnostic de Performance Énergétique)
 * Affiche les classes énergétiques avec les vraies couleurs réglementaires
 */
export default function DPE({ energyClass, energyValue, climateClass, climateValue }) {
  // Classes énergétiques avec leurs couleurs officielles
  const energyClasses = [
    { letter: "A", range: "≤ 70", color: "#319834", textColor: "#fff" },
    { letter: "B", range: "71 à 110", color: "#33CC33", textColor: "#fff" },
    { letter: "C", range: "111 à 180", color: "#CCFF33", textColor: "#000" },
    { letter: "D", range: "181 à 250", color: "#FFFF00", textColor: "#000" },
    { letter: "E", range: "251 à 330", color: "#FFCC00", textColor: "#000" },
    { letter: "F", range: "331 à 420", color: "#FF9933", textColor: "#fff" },
    { letter: "G", range: "> 420", color: "#FF0000", textColor: "#fff" },
  ];

  // Classes climat (GES) avec leurs couleurs officielles
  const climateClasses = [
    { letter: "A", range: "≤ 6", color: "#F2F0FF", textColor: "#000" },
    { letter: "B", range: "7 à 11", color: "#E9D6FF", textColor: "#000" },
    { letter: "C", range: "12 à 30", color: "#D0BEF1", textColor: "#000" },
    { letter: "D", range: "31 à 50", color: "#C5A3E0", textColor: "#000" },
    { letter: "E", range: "51 à 70", color: "#B388CF", textColor: "#fff" },
    { letter: "F", range: "71 à 100", color: "#9F6DBE", textColor: "#fff" },
    { letter: "G", range: "> 100", color: "#8B52AD", textColor: "#fff" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Classe Énergie */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl p-6 shadow-lg"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Consommation énergétique
        </h3>
        
        <div className="space-y-1 mb-4">
          {energyClasses.map((item, index) => {
            const isActive = item.letter === energyClass;
            const width = isActive ? "100%" : `${85 - index * 5}%`;
            
            return (
              <motion.div
                key={item.letter}
                initial={{ width: 0 }}
                whileInView={{ width }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
                style={{
                  backgroundColor: item.color,
                  height: isActive ? "48px" : "40px",
                  borderRadius: "0 8px 8px 0",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-between px-4 font-bold"
                  style={{ color: item.textColor }}
                >
                  <span className="text-xl">{item.letter}</span>
                  <span className="text-sm">{item.range}</span>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
                    >
                      <div className="w-3 h-3 bg-[#2998a6] rounded-full"></div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mt-4">
          <div className="text-sm text-gray-600 mb-1">Consommation</div>
          <div className="text-2xl font-bold text-gray-900">
            {energyValue} <span className="text-sm font-normal text-gray-500">kWhEP/m².an</span>
          </div>
        </div>

        <div className="mt-3 text-xs text-gray-500 italic">
          * Énergie primaire
        </div>
      </motion.div>

      {/* Classe Climat (GES) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl p-6 shadow-lg"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Émissions de gaz à effet de serre
        </h3>
        
        <div className="space-y-1 mb-4">
          {climateClasses.map((item, index) => {
            const isActive = item.letter === climateClass;
            const width = isActive ? "100%" : `${85 - index * 5}%`;
            
            return (
              <motion.div
                key={item.letter}
                initial={{ width: 0 }}
                whileInView={{ width }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
                style={{
                  backgroundColor: item.color,
                  height: isActive ? "48px" : "40px",
                  borderRadius: "0 8px 8px 0",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-between px-4 font-bold"
                  style={{ color: item.textColor }}
                >
                  <span className="text-xl">{item.letter}</span>
                  <span className="text-sm">{item.range}</span>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
                    >
                      <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mt-4">
          <div className="text-sm text-gray-600 mb-1">Émissions</div>
          <div className="text-2xl font-bold text-gray-900">
            {climateValue} <span className="text-sm font-normal text-gray-500">kg CO2/m².an</span>
          </div>
        </div>

        <div className="mt-3 text-xs text-gray-500 italic">
          * Gaz à effet de serre
        </div>
      </motion.div>
    </div>
  );
}

