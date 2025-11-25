"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";
import DPE from "@/components/DPE";

export default function MaisonBezonsProcheT2() {
  const propertyImages = [
    "/photos/picquet/sejour.jpeg",
    "/photos/picquet/cuisine.jpeg",
    "/photos/picquet/grande-cuisine.jpeg",
    "/photos/picquet/piece.jpeg",
    "/photos/picquet/bebe.jpeg",
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
              Maison Bezons Proche T2
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
              {/* Badge VENDU */}
              <div className="inline-flex items-center gap-2 bg-[#0d6c8a] text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg mb-6">
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
                VENDU EN OCTOBRE 2025
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    Maison 4 pièces - Proche T2
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
                    <span className="text-base sm:text-lg">95870, Bezons</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <div className="text-3xl sm:text-4xl font-bold text-[#0d6c8a] whitespace-nowrap">
                    278 000 €
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Prix de vente</div>
                </div>
              </div>

              {/* Caractéristiques principales */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">70</div>
                  <div className="text-sm text-gray-500 mt-1">m²</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">4</div>
                  <div className="text-sm text-gray-500 mt-1">pièces</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">2</div>
                  <div className="text-sm text-gray-500 mt-1">niveaux</div>
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
                  Découvrez cette maison de 70m², entièrement domotisée, offrant
                  un confort moderne.
                </p>
                <p>
                  En semi-plain-pied, au rez-de-chaussée, vous trouverez un
                  spacieux séjour pour vos moments de détente, ainsi qu&apos;une
                  salle à manger avec cuisine ouverte, idéale pour partager des
                  repas conviviaux.
                </p>
                <p>
                  Une chambre avec salle d&apos;eau attenante vous offre intimité et
                  praticité au rez-de-chaussée.
                </p>
                <p>
                  À l&apos;étage, une autre chambre avec dressing vous permet
                  d&apos;organiser vos affaires avec aisance, tandis qu&apos;une
                  deuxième salle d&apos;eau offre encore plus de commodités.
                </p>
                <p className="font-semibold text-[#0d6c8a]">
                  Laissez-vous séduire par le jardin, où détente et nature se
                  conjuguent.
                </p>
                <p>
                  Avec plusieurs places de stationnement et une proximité au
                  tramway et à l&apos;A86, cette maison offre un équilibre parfait
                  entre tranquillité et accessibilité.
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
                    <span className="font-semibold text-gray-900">
                      Rez-de-jardin
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Niveaux</span>
                    <span className="font-semibold text-gray-900">2</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">État</span>
                    <span className="font-semibold text-gray-900">
                      Bon état
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Exposition</span>
                    <span className="font-semibold text-gray-900">
                      Sud-est
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Vue</span>
                    <span className="font-semibold text-gray-900">Dégagée</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Surface</span>
                    <span className="font-semibold text-gray-900">70 m²</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Surface totale</span>
                    <span className="font-semibold text-gray-900">70 m²</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Type de chauffage</span>
                    <span className="font-semibold text-gray-900">
                      Convecteur
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
                    <span className="font-semibold text-gray-900">
                      Chauffe-eau Individuelle
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Eaux usées</span>
                    <span className="font-semibold text-gray-900">
                      Tout à l&apos;égout
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Taxe foncière</span>
                    <span className="font-semibold text-gray-900">
                      368 €/an
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Prestations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Prestations
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "🏠 Entièrement domotisée",
                  "🏡 Semi-plain-pied",
                  "🛋️ Séjour spacieux",
                  "🍳 Cuisine ouverte",
                  "🛏️ Chambre avec salle d'eau",
                  "👔 Chambre avec dressing",
                  "🚿 2 salles d'eau",
                  "🌳 Jardin",
                  "🅿️ Plusieurs places de stationnement",
                  "🍖 Barbecue",
                  "🏡 Clôture",
                  "💡 Éclairage extérieur",
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
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Proximités
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "🚌 Bus",
                  "🎬 Cinéma",
                  "👶 Crèche",
                  "🏫 École primaire",
                  "🏫 École secondaire",
                  "🚉 Gare",
                  "👨‍⚕️ Médecin",
                  "🛍️ Supermarché",
                  "🚊 Tramway T2",
                  "🚗 A86 proche",
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
              transition={{ delay: 0.5 }}
            >
              <DPE
                energyClass="E"
                climateClass="B"
                energyValue={310}
                climateValue={10}
                estimatedCost="1320€ ~ 1850€"
              />
            </motion.div>

            {/* Mentions légales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <p className="text-xs text-gray-600 leading-relaxed">
                EXP GLOBAL FRANCE - Non-détention de fonds - SIRET
                89071070000018 - 268 000 € honoraires exclus - Honoraires de
                3.73%TTC à charge acquéreur - Classe énergie 310 kWhEP/m².an
                (E) - Classe climat 10 kg CO2/m².an (B) - Montant estimé des
                dépenses annuelles d&apos;énergie pour un usage standard, établi à
                partir des prix de l&apos;énergie de l&apos;année 2021 : 1320€ ~
                1850€ - Les informations sur les risques auxquels ce bien est
                exposé sont disponibles sur le site Géorisques :
                www.georisques.gouv.fr - Vincent LECLERC - Agent commercial -
                EI - RSAC VERSAILLES 451 258 438
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
                    Cette transaction a été réalisée en octobre 2025
                  </p>
                </div>

                <div className="border-t border-[#2998a6]/20 pt-4 mt-4">
                  <div className="text-center mb-4">
                    <div className="text-sm font-bold text-[#0d6c8a] uppercase tracking-wider mb-2">
                      Vendu par
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <Image
                        src="/photos/vincent.jpg"
                        alt="Vincent LECLERC"
                        width={80}
                        height={80}
                        className="rounded-full shadow-md object-cover"
                        style={{ objectPosition: 'center 30%' }}
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
                    <div className="text-xs text-gray-500 font-mono mt-2">
                      RSAC Versailles 451 258 438
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
                  Profitez de notre expertise pour vendre votre bien au
                  meilleur prix.
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
                  84243577
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

