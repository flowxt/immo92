"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";
import DPE from "@/components/DPE";

export default function AppartementNanterreCentreExclusivite() {
  const propertyImages = [
    "/photos/rouge/balcon.jpeg",
    "/photos/rouge/sejour.jpeg",
    "/photos/rouge/cuisine.jpeg",
    "/photos/rouge/chambre.jpeg",
    "/photos/rouge/sdb.jpeg",
    "/photos/rouge/hall.jpeg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="text-gray-500 hover:text-[#2998a6]">
              Accueil
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/biens-vendus"
              className="text-gray-500 hover:text-[#2998a6]"
            >
              Biens vendus
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">
              Appartement Nanterre Centre
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
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-2 bg-[#0d6c8a] text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  VENDU
                </div>
                <div className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                  ⭐ EXCLUSIVITÉ
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    Appartement 2 pièces - Nanterre Centre
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
                      92000, Nanterre
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <div className="text-3xl sm:text-4xl font-bold text-[#0d6c8a] whitespace-nowrap">
                    265 000 €
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Prix de vente
                  </div>
                </div>
              </div>

              {/* Caractéristiques principales */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">47.75</div>
                  <div className="text-sm text-gray-500 mt-1">m²</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">2</div>
                  <div className="text-sm text-gray-500 mt-1">pièces</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">2ème</div>
                  <div className="text-sm text-gray-500 mt-1">étage</div>
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
                  Idéalement situé à 6 minutes à pied du RER A – Nanterre-Ville,
                  charmant appartement de deux pièces une chambre.
                </p>
                <p>
                  Un grand séjour donnant sur balcon et jardin sans vis-à-vis,
                  une cuisine indépendante aménagée et équipée avec possibilité
                  d&apos;ouverture sur le séjour, une salle de bain, un
                  emplacement de parking sécurisé en sous-sol.
                </p>
                <p className="font-semibold text-[#0d6c8a]">
                  Immeuble en excellent état, parties communes intégralement
                  rénovées et ravalement de façade effectué en 2018.
                </p>
                <p>
                  Quartier résidentiel et très calme avec accès direct A86 et
                  A14, commerces et centre-ville 5 minutes à pied.
                </p>
                <p className="font-semibold text-[#2998a6]">
                  Idéal Primo-accédants et investisseurs.
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
                    <span className="text-gray-600">Étage</span>
                    <span className="font-semibold text-gray-900">2ème</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Charges</span>
                    <span className="font-semibold text-gray-900">
                      164 €/mois
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Loi Carrez</span>
                    <span className="font-semibold text-gray-900">
                      47.75 m²
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Surface totale</span>
                    <span className="font-semibold text-gray-900">
                      47.75 m²
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Exposition</span>
                    <span className="font-semibold text-gray-900">Est</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Construit en</span>
                    <span className="font-semibold text-gray-900">1995</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">État</span>
                    <span className="font-semibold text-gray-900">
                      Bon état
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Taxe foncière</span>
                    <span className="font-semibold text-gray-900">
                      724 €/an
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Disponibilité</span>
                    <span className="font-semibold text-[#0d6c8a]">Libre</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Vue</span>
                    <span className="font-semibold text-gray-900">Dégagée</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Type de chauffage</span>
                    <span className="font-semibold text-gray-900">
                      Radiateur
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Moyen de chauffage</span>
                    <span className="font-semibold text-gray-900">
                      Individuel
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Énergie de chauffage</span>
                    <span className="font-semibold text-gray-900">Gaz</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Eau chaude</span>
                    <span className="font-semibold text-gray-900">
                      Individuelle Chaudière
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Eaux usées</span>
                    <span className="font-semibold text-gray-900">
                      Tout à l&apos;égout
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
                  <span className="text-gray-600">Séjour</span>
                  <span className="font-semibold text-gray-900">21.05 m²</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Chambre</span>
                  <span className="font-semibold text-gray-900">10.68 m²</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Cuisine</span>
                  <span className="font-semibold text-gray-900">6.64 m²</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Entrée</span>
                  <span className="font-semibold text-gray-900">5.2 m²</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Salle de bains</span>
                  <span className="font-semibold text-gray-900">2.95 m²</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Toilettes</span>
                  <span className="font-semibold text-gray-900">1.23 m²</span>
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
                  "🏖️ Balcon",
                  "🅿️ Parking sécurisé",
                  "🌳 Jardin en copropriété",
                  "🎚️ Stores",
                  "💨 Ventilation simple flux",
                  "♿ Accès handicapé",
                  "🚨 Alarme incendie",
                  "🛗 Ascenseur",
                  "🌐 Fibre optique",
                  "🔢 Digicode",
                  "📞 Interphone",
                  "🚪 Porte blindée",
                  "🏢 Parties communes rénovées",
                  "🏠 Ravalement 2018",
                  "🍳 Cuisine aménagée et équipée",
                  "👁️ Sans vis-à-vis",
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
                  "🚉 RER A (6 min à pied)",
                  "🚗 Autoroute",
                  "🛣️ A86 & A14",
                  "🚌 Bus",
                  "🏛️ Centre ville (5 min)",
                  "🎬 Cinéma",
                  "🛒 Commerces (5 min)",
                  "👶 Crèche",
                  "🏫 École primaire",
                  "🚉 Gare",
                  "👨‍⚕️ Médecin",
                  "🌳 Parc",
                  "🅿️ Parking public",
                  "🛍️ Supermarché",
                  "🚕 Taxi",
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
                climateClass="C"
                energyValue={153}
                climateValue={29}
                estimatedCost="650€ ~ 940€"
              />
            </motion.div>

            {/* Mentions légales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <p className="text-xs text-gray-600 leading-relaxed">
                EXP GLOBAL FRANCE - Non-détention de fonds - SIRET
                89071070000018 - 250 000 € honoraires exclus - Honoraires de
                6%TTC à charge acquéreur - Montant moyen de la quote-part de
                charges courantes 1 968 €/an - Classe énergie 153 kWhEP/m².an
                (C) - Classe climat 29 kg CO2/m².an (C) - Montant estimé des
                dépenses annuelles d&apos;énergie pour un usage standard, établi
                à partir des prix de l&apos;énergie de l&apos;année 2021 : 650€
                ~ 940€ - Les informations sur les risques auxquels ce bien est
                exposé sont disponibles sur le site Géorisques :
                www.georisques.gouv.fr - Alexandre NAQUIN - Agent commercial -
                EI - RSAC Nanterre 830744959
              </p>
            </motion.div>
          </div>

          {/* Colonne latérale */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Info vente réussie */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-[#2998a6]/5 to-[#2998a6]/10 rounded-2xl p-6 border-2 border-[#2998a6]/20"
              >
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0d6c8a] rounded-full mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Bien vendu avec succès
                  </h3>
                  <p className="text-sm text-gray-700">
                    Cette transaction exclusive a été réalisée avec succès
                  </p>
                </div>

                <div className="border-t border-[#2998a6]/20 pt-4 mt-4">
                  <div className="text-center mb-4">
                    <div className="text-sm font-bold text-[#0d6c8a] uppercase tracking-wider mb-2">
                      Vendu par
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <Image
                        src="/photos/alexandre.jpg"
                        alt="Alexandre NAQUIN"
                        width={80}
                        height={80}
                        className="rounded-full shadow-md object-cover"
                        style={{ objectPosition: "center 30%" }}
                      />
                      <div>
                        <div className="font-bold text-gray-900">
                          Alexandre NAQUIN
                        </div>
                        <div className="text-xs text-gray-500">
                          Agent commercial
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 font-mono mt-2">
                      RSAC Nanterre 830744959
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA pour vendre */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Vous souhaitez vendre ?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Profitez de notre expertise pour vendre votre bien au meilleur
                  prix.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-[#2998a6] text-white text-center py-4 rounded-xl font-bold hover:bg-[#0d6c8a] transition-colors"
                >
                  Estimation gratuite
                </Link>
              </motion.div>

              {/* Retour aux biens vendus */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/biens-vendus"
                  className="block text-center text-[#2998a6] hover:text-[#0d6c8a] font-semibold text-sm"
                >
                  ← Voir tous les biens vendus
                </Link>
              </motion.div>

              {/* Référence */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-100 rounded-xl p-4"
              >
                <div className="text-sm text-gray-600 mb-1">Référence</div>
                <div className="font-mono font-bold text-gray-900">
                  84295701
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
