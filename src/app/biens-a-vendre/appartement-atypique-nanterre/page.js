"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";
import MortgageCalculator from "@/components/MortgageCalculator";
import DPE from "@/components/DPE";
import InteractiveMap from "@/components/InteractiveMap";

export default function AppartementAtypiqueNanterre() {
  const [showCalculator, setShowCalculator] = useState(false);

  // Toutes les photos de l'appartement
  const propertyImages = [
    "/photos/Gauthier/ext.png",
    "/photos/Gauthier/piece.jpg",
    "/photos/Gauthier/piece2.jpg",
    "/photos/Gauthier/piece3.jpg",
    "/photos/Gauthier/piece4.jpg",
    "/photos/Gauthier/piece5.jpg",
    "/photos/Gauthier/cuisine.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
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
              Appartement Atypique Années 30
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
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    Appartement Atypique Années 30
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
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
                    <span className="text-lg">92000, Nanterre - Centre</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Proche RER, université et commerces
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-4xl font-bold text-blue-600">
                    250 000 €
                  </div>
                  <div className="text-sm text-gray-500 mt-1">HAI</div>
                </div>
              </div>

              {/* Caractéristiques principales */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">55.19</div>
                  <div className="text-sm text-gray-500 mt-1">m² habitable</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">3</div>
                  <div className="text-sm text-gray-500 mt-1">pièces</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">2</div>
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
                  Découvrez ce charmant appartement trois pièces situé au dernier
                  étage d&apos;une copropriété des années 30.
                </p>
                <p>
                  Il offre de belles hauteurs sous plafond et se compose
                  d&apos;un séjour, d&apos;une cuisine séparée, de deux chambres,
                  d&apos;une salle de bain et d&apos;un débarras.
                </p>
                <p>Faibles charges de copropriété.</p>
                <p>
                  Emplacement idéal au pied du RER A Nanterre Ville, de
                  l&apos;université et des commerces.
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
                      6ème / 6
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Charges</span>
                    <span className="font-semibold text-gray-900">
                      350 €/trimestre
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Taxe foncière</span>
                    <span className="font-semibold text-gray-900">
                      706 €/an
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Surface totale</span>
                    <span className="font-semibold text-gray-900">60.99 m²</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Loi Carrez</span>
                    <span className="font-semibold text-gray-900">55 m²</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Exposition</span>
                    <span className="font-semibold text-gray-900">Sud</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Type de chauffage</span>
                    <span className="font-semibold text-gray-900">Radiateur</span>
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
                      Individuelle Chauffe-eau
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">État</span>
                    <span className="font-semibold text-gray-900">Bon état</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Vue</span>
                    <span className="font-semibold text-gray-900">
                      Dégagée, Ciel
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Construit en</span>
                    <span className="font-semibold text-gray-900">1930</span>
                  </div>
                </div>
              </div>

              {/* Copropriété */}
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-3">
                  Informations copropriété
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Nombre de lots :</span>
                    <span className="font-semibold">20</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Charges courantes moyennes :</span>
                    <span className="font-semibold">1 400 €/an</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-600">
                    Aucune procédure en cours (articles 29-1A/29-1 loi 65-557,
                    L.615-6 du CCH)
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Surfaces détaillées */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Surfaces</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: "Entrée", surface: "5.16 m²" },
                  { name: "Cuisine", surface: "7.21 m²" },
                  { name: "Séjour", surface: "12.13 m²" },
                  { name: "Chambre 1", surface: "10.48 m²" },
                  { name: "Chambre 2", surface: "12.91 m²" },
                  { name: "Salle de bains", surface: "5.38 m²" },
                  { name: "Toilettes", surface: "0.78 m²" },
                  { name: "Débarras", surface: "1.14 m²" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="font-semibold text-gray-900 mb-1">
                      {item.name}
                    </div>
                    <div className="text-sm text-blue-600">{item.surface}</div>
                  </div>
                ))}
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
                  "Fenêtre PVC",
                  "Interphone",
                  "Ascenseur",
                  "Internet",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { name: "Autoroute", time: "5 minutes" },
                  { name: "Bus", time: null },
                  { name: "Centre ville", time: "3 minutes" },
                  { name: "Cinéma", time: "10 minutes" },
                  { name: "Commerces", time: null },
                  { name: "Crèche", time: null },
                  { name: "École primaire", time: null },
                  { name: "Gare", time: "2 minutes" },
                  { name: "Médecin", time: null },
                  { name: "Parc", time: null },
                  { name: "Parking public", time: null },
                  { name: "Supermarché", time: null },
                  { name: "Université", time: null },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>
                      {item.name}
                      {item.time && (
                        <span className="text-gray-400"> • {item.time}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* DPE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Diagnostic de Performance Énergétique
              </h2>

              <DPE
                energyClass="G"
                energyValue={548}
                climateClass="C"
                climateValue={18}
              />

              <div className="mt-8 p-6 bg-red-50 border-2 border-red-200 rounded-xl">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold text-red-900 mb-2">
                      ⚠️ Passoire énergétique
                    </h3>
                    <p className="text-red-800 text-sm leading-relaxed">
                      Ce logement est classé G (consommation énergétique
                      excessive). Des travaux de rénovation énergétique sont
                      fortement recommandés pour améliorer son efficacité et
                      réduire les coûts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">
                  Estimation des dépenses énergétiques
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Montant estimé des dépenses annuelles d&apos;énergie pour un
                  usage standard, établi à partir des prix de l&apos;énergie de
                  l&apos;année 2021 : <strong>2 300 € à 3 130 €</strong>{" "}
                  (abonnement compris).
                </p>
                <p className="text-gray-600 text-sm mt-3">
                  <strong>Énergie - Consommation finale :</strong> 238
                  kWhEF/m².an (D)
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  <strong>Audit énergétique :</strong> Réalisé
                </p>
              </div>

              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">
                  Les informations sur les risques auxquels ce bien est exposé
                  sont disponibles sur le site Géorisques :{" "}
                  <a
                    href="https://www.georisques.gouv.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-amber-900"
                  >
                    www.georisques.gouv.fr
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Localisation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Localisation
                  </h2>
                  <p className="text-sm text-gray-600">
                    Centre-Ville, Nanterre (92000)
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-gray-200">
                <InteractiveMap
                  properties={[
                    {
                      id: 3,
                      title: "Appartement Atypique Années 30",
                      location: "Nanterre",
                      price: "250 000 €",
                      image: "/photos/Gauthier/ext.png",
                      slug: "appartement-atypique-nanterre",
                      lat: 48.8910,
                      lng: 2.2045,
                    },
                  ]}
                  center={[48.8910, 2.2045]}
                  zoom={15}
                />
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">
                      RER A - Nanterre Ville
                    </div>
                    <div className="text-xs text-gray-600">Au pied du RER</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">
                      Université
                    </div>
                    <div className="text-xs text-gray-600">À proximité</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">
                      Commerces
                    </div>
                    <div className="text-xs text-gray-600">Nombreux commerces</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mentions légales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gray-100 rounded-xl p-6"
            >
              <p className="text-xs text-gray-600 leading-relaxed">
                EXP GLOBAL FRANCE - Non-détention de fonds - SIRET
                89071070000018 - 238 000 € honoraires exclus - Honoraires de
                5.04%TTC à charge acquéreur - Nombre de lots dans la copropriété:
                20 - Montant moyen de la quote-part de charges courantes 1 400
                €/an - Aucune procédure en cours (articles 29-1A/29-1 loi 65-557,
                L.615-6 du CCH) - Classe énergie 548 kWhEP/m².an (G) - Classe
                climat 18 kg CO2/m².an (C) - Montant estimé des dépenses annuelles
                d&apos;énergie pour un usage standard, établi à partir des prix de
                l&apos;énergie de l&apos;année 2021 : 2300€ ~ 3130€ - Logement à
                consommation énergétique excessive : classe G - Les informations
                sur les risques auxquels ce bien est exposé sont disponibles sur
                le site Géorisques : www.georisques.gouv.fr - Alexandre NAQUIN -
                Agent commercial - EI - RSAC Nanterre 830744959
              </p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Intéressé par ce bien ?
                </h3>

                {/* Agent */}
                <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-blue-200">
                      <Image
                        src="/photos/alexandre.jpg"
                        alt="Alexandre NAQUIN"
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        Alexandre NAQUIN
                      </div>
                      <div className="text-xs text-gray-500">
                        Agent commercial
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">
                    RSAC Nanterre 830744959
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
                  <MortgageCalculator compact={true} propertyPrice={250000} />

                  {/* Lien vers calculette complète */}
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
                  86336390
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

