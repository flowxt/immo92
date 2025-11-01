"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";
import MortgageCalculator from "@/components/MortgageCalculator";
import DPE from "@/components/DPE";
import InteractiveMap from "@/components/InteractiveMap";

export default function MaisonNanterreMontValerienJardin() {
  const [showCalculator, setShowCalculator] = useState(false);

  const propertyImages = [
    "/photos/jardin/jardin.jpeg",
    "/photos/jardin/sejour.jpeg",
    "/photos/jardin/terrasse.jpeg",
    "/photos/jardin/terrasse2.jpeg",
    "/photos/jardin/chambre.jpeg",
    "/photos/jardin/chambre2.jpeg",
    "/photos/jardin/douche.jpeg",
    "/photos/jardin/hall.jpeg",
    "/photos/jardin/toilette.jpeg",
    "/photos/jardin/vue .jpeg",
  ];

  const propertyData = {
    id: 11,
    title: "Maison 4 pièces avec jardin - Mont-Valérien",
    location: "92000, Nanterre",
    price: "690 000 €",
    lat: 48.8895,
    lng: 2.2095,
    slug: "maison-nanterre-mont-valerien-jardin",
    image: "/photos/jardin/jardin.jpeg",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="text-gray-500 hover:text-blue-600">
              Accueil
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/biens-a-vendre"
              className="text-gray-500 hover:text-blue-600"
            >
              Biens à vendre
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">
              Maison Mont-Valérien avec jardin
            </span>
          </nav>
        </div>
      </div>

      {/* Galerie photos */}
      <div className="bg-white">
        <ImageGallery images={propertyImages} />
      </div>

      {/* Contenu principal */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-8">
            {/* En-tête */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    Maison 4 pièces avec jardin - Mont-Valérien
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-base sm:text-lg">
                      92000, Nanterre - Mont-Valérien
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 whitespace-nowrap">
                    690 000 €
                  </div>
                  <div className="text-sm text-gray-500 mt-1">HAI</div>
                </div>
              </div>

              {/* Caractéristiques principales */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">106</div>
                  <div className="text-sm text-gray-500 mt-1">m² habitable</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">6</div>
                  <div className="text-sm text-gray-500 mt-1">pièces</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">3</div>
                  <div className="text-sm text-gray-500 mt-1">chambres</div>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Description
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  Nanterre Mont-Valérien – Proche de Rueil et du futur métro,
                  découvrez cette maison au calme qui vous surprendra par son
                  état intérieur et sa décoration.
                </p>
                <p>
                  Elle se compose d&apos;une grande pièce de vie avec cuisine
                  ouverte, trois chambres, deux salles de douche avec toilettes,
                  et trois terrasses (une à chaque niveau).
                </p>
                <p>
                  Vous apprécierez également une agréable véranda, une salle de
                  sport, un grand garage et un jardin arboré.
                </p>
                <p className="font-semibold text-green-600">
                  La maison est équipée d&apos;une pompe à chaleur récente,
                  assurant une excellente performance énergétique, avec une
                  classification en classe C.
                </p>
                <p className="font-bold text-blue-600">
                  Le tout sur un terrain de 300 m².
                </p>
                <p className="text-sm italic">
                  N&apos;hésitez pas à me contacter pour toute information
                  supplémentaire ou pour organiser une visite.
                </p>
              </div>
            </motion.div>

            {/* Informations détaillées */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informations
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Niveaux</span>
                    <span className="font-semibold text-gray-900">2</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">État</span>
                    <span className="font-semibold text-green-600">
                      Excellent état
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Année de rénovation</span>
                    <span className="font-semibold text-gray-900">1950</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Surface habitable</span>
                    <span className="font-semibold text-gray-900">106 m²</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Surface totale</span>
                    <span className="font-semibold text-gray-900">130 m²</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Surface terrain</span>
                    <span className="font-semibold text-blue-600">300 m²</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Type de chauffage</span>
                    <span className="font-semibold text-gray-900">
                      Radiateur
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Énergie de chauffage</span>
                    <span className="font-semibold text-gray-900">
                      Électrique
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Moyen de chauffage</span>
                    <span className="font-semibold text-gray-900">
                      Individuel
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Eau chaude</span>
                    <span className="font-semibold text-green-600">
                      Pompe à chaleur Individuelle
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Performance énergétique</span>
                    <span className="font-semibold text-green-600">
                      Classe C
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Surfaces */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Surfaces
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Pièce de vie (cuisine ouverte)</span>
                  <span className="font-semibold text-gray-900">Grande</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Chambre 1</span>
                  <span className="font-semibold text-gray-900">✓</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Chambre 2</span>
                  <span className="font-semibold text-gray-900">✓</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Chambre 3</span>
                  <span className="font-semibold text-gray-900">✓</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Salle de douche/toilettes 1</span>
                  <span className="font-semibold text-gray-900">✓</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Salle de douche/toilettes 2</span>
                  <span className="font-semibold text-gray-900">✓</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Véranda</span>
                  <span className="font-semibold text-gray-900">✓</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Salle de sport</span>
                  <span className="font-semibold text-gray-900">✓</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Local technique</span>
                  <span className="font-semibold text-gray-900">✓</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Garage</span>
                  <span className="font-semibold text-gray-900">Grand</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Terrasses (3 niveaux)</span>
                  <span className="font-semibold text-gray-900">3</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Terrain arboré</span>
                  <span className="font-semibold text-blue-600">300 m²</span>
                </div>
              </div>
            </motion.div>

            {/* Prestations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Prestations
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "🪟 Fenêtre PVC",
                  "♨️ Pompe à chaleur récente",
                  "🍳 Cuisine ouverte",
                  "🌿 Véranda",
                  "💪 Salle de sport",
                  "🚗 Grand garage",
                  "🌳 Jardin arboré (300 m²)",
                  "🏖️ 3 terrasses",
                  "🚿 2 salles de douche",
                  "🏠 Excellent état intérieur",
                  "🎨 Décoration soignée",
                  "⚡ Performance énergétique classe C",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Proximités */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Proximités
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "🚗 Autoroute",
                  "🚌 Bus",
                  "🏛️ Centre ville",
                  "🎬 Cinéma",
                  "🛒 Commerces",
                  "👶 Crèche",
                  "🏫 École primaire",
                  "🚉 Gare",
                  "🏋️ Salle de sport",
                  "🚇 Futur métro ligne 15",
                  "📍 Proche Rueil-Malmaison",
                  "🌳 Quartier calme",
                ].map((proximity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span>{proximity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* DPE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <DPE
                energyClass="C"
                climateClass="A"
                energyValue={158}
                climateValue={5}
                estimatedCost="1327€ ~ 1797€"
              />
            </motion.div>

            {/* Carte */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Localisation
              </h2>
              <div className="h-[400px] rounded-xl overflow-hidden">
                <InteractiveMap properties={[propertyData]} />
              </div>
              <p className="text-sm text-gray-500 mt-4">
                📍 Nanterre Mont-Valérien - Proche Rueil et du futur métro
                ligne 15
              </p>
            </motion.div>

            {/* Mentions légales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <p className="text-xs text-gray-600 leading-relaxed">
                EXP GLOBAL FRANCE - Non-détention de fonds - SIRET
                89071070000018 - 670 000 € honoraires exclus - Honoraires de
                2.99%TTC à charge acquéreur - Classe énergie 158 kWhEP/m².an
                (C) - Classe climat 5 kg CO2/m².an (A) - Montant estimé des
                dépenses annuelles d&apos;énergie pour un usage standard, établi à
                partir des prix de l&apos;énergie de l&apos;année 2021 : 1327€ ~
                1797€ - Les informations sur les risques auxquels ce bien est
                exposé sont disponibles sur le site Géorisques :
                www.georisques.gouv.fr - Vincent LECLERC - Agent commercial -
                EI - RSAC VERSAILLES 451 258 438
              </p>
            </motion.div>
          </div>

          {/* Colonne latérale */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="text-center mb-6">
                  <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
                    Votre Contact
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <Image
                      src="/photos/vincent.jpg"
                      alt="Vincent LECLERC"
                      width={80}
                      height={80}
                      className="rounded-full shadow-md"
                    />
                    <div>
                      <div className="font-bold text-gray-900">
                        Vincent LECLERC
                      </div>
                      <div className="text-xs text-gray-500">
                        Agent commercial
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">
                    RSAC Versailles 451 258 438
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="block w-full bg-blue-600 text-white text-center py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors mb-3"
                >
                  Nous contacter
                </Link>

                <button
                  onClick={() => setShowCalculator(!showCalculator)}
                  className="block w-full bg-gray-100 text-gray-900 text-center py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                >
                  {showCalculator ? "Masquer" : "Calculer mon prêt"}
                </button>
              </motion.div>

              {/* Calculateur compact */}
              {showCalculator && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-4"
                >
                  <MortgageCalculator compact={true} propertyPrice={690000} />

                  <Link
                    href="/calculateur"
                    className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      Calculette complète
                    </span>
                  </Link>
                </motion.div>
              )}

              {/* Référence */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gray-100 rounded-xl p-4"
              >
                <div className="text-sm text-gray-600 mb-1">Référence</div>
                <div className="font-mono font-bold text-gray-900">
                  85735304
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

