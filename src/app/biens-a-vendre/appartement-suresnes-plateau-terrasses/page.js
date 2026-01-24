"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";
import MortgageCalculator from "@/components/MortgageCalculator";
import DPE from "@/components/DPE";
import FeesSchedule from "@/components/FeesSchedule";
import InteractiveMap from "@/components/InteractiveMap";

export default function AppartementSurnesnesPlateauTerrasses() {
  const [showCalculator, setShowCalculator] = useState(false);

  // Toutes les photos de l'appartement
  const propertyImages = [
    "/photos/iouga/salon.jpeg",
    "/photos/iouga/sejour.jpeg",
    "/photos/iouga/chambre.jpeg",
    "/photos/iouga/lit.jpeg",
    "/photos/iouga/sdb.jpeg",
    "/photos/iouga/table.jpeg",
    "/photos/iouga/terrasse.jpeg",
    "/photos/iouga/WhatsApp Image 2025-11-10 at 14.54.21.jpeg",
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#2998a6]">
              Accueil
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/biens-a-vendre"
              className="text-gray-500 hover:text-[#2998a6]"
            >
              Biens à vendre
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">
              Appartement 3 pièces lumineux avec deux terrasses
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2998a6] to-[#0d6c8a] text-white rounded-full text-sm font-bold mb-3">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    APPARTEMENT 3 PIÈCES
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    Appartement 3 pièces lumineux avec deux terrasses
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
                    <span className="text-base sm:text-lg">
                      92150, Suresnes - Quartier du Plateau
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Résidence récente et sécurisée, proche du parc et des
                    commerces
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <div className="text-3xl sm:text-4xl font-bold text-[#2998a6] whitespace-nowrap">
                    459 000 €
                  </div>
                  <div className="text-sm text-gray-500 mt-1">HAI</div>
                </div>
              </div>

              {/* Caractéristiques principales */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">66.41</div>
                  <div className="text-sm text-gray-500 mt-1">
                    m² Loi Carrez
                  </div>
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
                <p className="text-lg leading-relaxed">
                  Découvrez ce 3 pièces traversant de 66,41 m² (Loi Carrez),
                  situé dans une résidence récente et sécurisée à la limite de
                  Suresnes, dans le quartier recherché du Plateau. Proche du
                  parc, des écoles, commerces et services, et à quelques minutes
                  de la future gare du métro 15 Mont Valérien.
                </p>

                <div className="bg-gradient-to-br from-[#2998a6]/5 to-[#2998a6]/10 rounded-xl p-6 my-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg
                      className="w-6 h-6 text-[#2998a6]"
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
                    Points forts
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#2998a6] font-bold">•</span>
                      <span>Appartement traversant et lumineux</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2998a6] font-bold">•</span>
                      <span>Deux terrasses totalisant 34 m²</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2998a6] font-bold">•</span>
                      <span>
                        Pièce de vie de plus de 31 m² avec cuisine ouverte
                        équipée
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2998a6] font-bold">•</span>
                      <span>Cave et parking en sous-sol</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2998a6] font-bold">•</span>
                      <span>Résidence récente (2011) et sécurisée</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2998a6] font-bold">•</span>
                      <span>Quartier agréable et verdoyant</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2998a6] font-bold">•</span>
                      <span>Proche future gare métro 15 Mont Valérien</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed">
                  En rez-de-jardin, l&apos;appartement offre une pièce de vie
                  lumineuse de plus de 31 m² avec cuisine ouverte équipée,
                  prolongée par une terrasse Ouest. La partie nuit comprend deux
                  chambres avec placards, une salle d&apos;eau avec douche à
                  l&apos;italienne et des toilettes séparées, donnant sur une
                  seconde terrasse.
                </p>

                <p className="text-lg leading-relaxed">
                  Une cave, un parking en sous-sol et un local à vélos
                  complètent ce bien.
                </p>

                <div className="bg-[#2998a6]/5 border-l-4 border-[#2998a6] p-6 rounded-lg my-6">
                  <p className="text-gray-800 italic font-medium">
                    Un bien rare avec deux terrasses dans un quartier très
                    recherché, idéal pour une famille souhaitant profiter
                    d&apos;espaces extérieurs tout en restant à proximité de
                    toutes les commodités.
                  </p>
                </div>
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
                    <span className="text-gray-600">Taxe foncière</span>
                    <span className="font-semibold text-gray-900">
                      1 180 €/an
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Charges</span>
                    <span className="font-semibold text-gray-900">
                      611 €/trimestre (2 444 €/an)
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Surface Loi Carrez</span>
                    <span className="font-semibold text-gray-900">
                      66.41 m²
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Surface totale</span>
                    <span className="font-semibold text-gray-900">
                      66.41 m²
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Étage</span>
                    <span className="font-semibold text-gray-900">
                      Rez-de-jardin / 3
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Exposition</span>
                    <span className="font-semibold text-gray-900">Ouest</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Construit en</span>
                    <span className="font-semibold text-gray-900">2011</span>
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
                    <span className="text-gray-600">Disponibilité</span>
                    <span className="font-semibold text-gray-900">Libre</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">
                      Lots dans la copropriété
                    </span>
                    <span className="font-semibold text-gray-900">238</span>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Surfaces
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: "Séjour", surface: "23.42 m²", highlight: true },
                  {
                    name: "Cuisine américaine",
                    surface: "7.97 m²",
                    highlight: true,
                  },
                  { name: "Chambre 1", surface: "10.87 m²" },
                  { name: "Chambre 2", surface: "9.56 m²" },
                  { name: "Salle de bains", surface: "4.43 m²" },
                  { name: "Entrée", surface: "2.96 m²" },
                  { name: "Dégagement", surface: "2.66 m²" },
                  { name: "Toilette PMR", surface: "1.42 m²" },
                  { name: "Placard 1", surface: "1.25 m²" },
                  { name: "Placard 2", surface: "1.05 m²" },
                  { name: "Placard 3", surface: "0.82 m²" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className={`p-4 rounded-lg border-2 ${
                      item.highlight
                        ? "bg-[#2998a6]/5 border-[#2998a6]/20"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="font-semibold text-gray-900 mb-1">
                      {item.name}
                    </div>
                    <div className="text-sm font-bold text-[#2998a6]">
                      {item.surface}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-6 bg-gradient-to-br from-[#2998a6]/5 to-[#2998a6]/10 border-2 border-[#2998a6]/20 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <svg
                    className="w-6 h-6 text-[#0d6c8a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <h3 className="text-lg font-bold text-gray-900">
                    Extérieurs
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-white rounded-lg border border-[#2998a6]/20">
                    <div className="font-semibold text-gray-900">
                      Terrasse Ouest
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Depuis le séjour
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-[#2998a6]/20">
                    <div className="font-semibold text-gray-900">Terrasse</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Depuis la partie nuit
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-sm text-[#0c233c] font-medium">
                  Total des terrasses : 34 m²
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
                  "Fenêtre PVC",
                  "Cuisine équipée",
                  "Douche à l'italienne",
                  "Placards",
                  "Cave",
                  "Parking",
                  "Local à vélos",
                  "Résidence sécurisée",
                  "Interphone",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-white/700 flex-shrink-0"
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
                  "Bus",
                  "Centre ville",
                  "Cinéma",
                  "Commerces",
                  "Crèche",
                  "École primaire",
                  "Hôpital/clinique",
                  "Port",
                  "Supermarché",
                  "Tennis",
                  "Parc",
                  "Future gare métro 15",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-[#2998a6] rounded-full"></div>
                    {item}
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
                energyClass="C"
                energyValue={173}
                climateClass="A"
                climateValue={5}
              />

              <div className="mt-8 p-6 bg-[#2998a6]/5 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">
                  Estimation des dépenses énergétiques
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Montant estimé des dépenses annuelles d&apos;énergie pour un
                  usage standard, établi à partir des prix de l&apos;énergie de
                  l&apos;année 2021 : <strong>760 € à 1 040 €</strong>.
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
                <div className="w-12 h-12 bg-[#2998a6] rounded-xl flex items-center justify-center">
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
                    Quartier du Plateau, Suresnes (92150)
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-gray-200">
                <InteractiveMap
                  properties={[
                    {
                      id: 13,
                      title:
                        "Appartement 3 pièces lumineux avec deux terrasses",
                      location: "Suresnes",
                      price: "459 000 €",
                      image: "/photos/iouga/salon.jpeg",
                      slug: "appartement-suresnes-plateau-terrasses",
                      lat: 48.872,
                      lng: 2.218,
                    },
                  ]}
                  center={[48.872, 2.218]}
                  zoom={15}
                />
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="w-5 h-5 text-[#2998a6] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">
                      Résidence récente
                    </div>
                    <div className="text-xs text-gray-600">
                      Construite en 2011
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="w-5 h-5 text-[#2998a6] flex-shrink-0 mt-0.5"
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
                      Quartier du Plateau
                    </div>
                    <div className="text-xs text-gray-600">
                      Verdoyant et recherché
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="w-5 h-5 text-[#2998a6] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">
                      Métro 15 à venir
                    </div>
                    <div className="text-xs text-gray-600">
                      Station Mont Valérien
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Barème d'honoraires */}
            <FeesSchedule delay={0.8} />

            {/* Mentions légales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-gray-100 rounded-xl p-6"
            >
              <p className="text-xs text-gray-600 leading-relaxed">
                EXP GLOBAL FRANCE - Non-détention de fonds - SIRET
                89071070000018 - Honoraires à la charge du vendeur - Nombre de
                lots dans la copropriété: 238 - Montant moyen de la quote-part
                de charges courantes 2 444 €/an - Aucune procédure en cours
                (articles 29-1A/29-1 loi 65-557, L.615-6 du CCH) - Classe
                énergie 173 kWhEP/m².an (C) - Classe climat 5 kg CO2/m².an (A) -
                Montant estimé des dépenses annuelles d&apos;énergie pour un
                usage standard, établi à partir des prix de l&apos;énergie de
                l&apos;année 2021 : 760€ ~ 1040€ - Les informations sur les
                risques auxquels ce bien est exposé sont disponibles sur le site
                Géorisques : www.georisques.gouv.fr - Vincent LECLERC - Agent
                commercial - EI - RSAC VERSAILLES 451 258 438
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
                    <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#2998a6]/20">
                      <Image
                        src="/photos/vincent.jpg"
                        alt="Vincent LECLERC"
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
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
                    RSAC VERSAILLES 451 258 438
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="block w-full bg-[#2998a6] text-white text-center py-4 rounded-xl font-bold hover:bg-[#0d6c8a] transition-colors mb-3"
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
                  <MortgageCalculator compact={true} propertyPrice={459000} />

                  {/* Lien vers calculette complète */}
                  <Link
                    href="/calculateur"
                    className="block w-full bg-gradient-to-r from-[#2998a6] to-[#0d6c8a] text-white text-center py-3 rounded-xl font-semibold hover:from-[#0d6c8a] hover:to-[#06465c] transition-all shadow-md hover:shadow-lg"
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
                  86433600
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
