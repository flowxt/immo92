"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";
import MortgageCalculator from "@/components/MortgageCalculator";
import DPE from "@/components/DPE";
import InteractiveMap from "@/components/InteractiveMap";

export default function LoftIndustrielSuresnes() {
  const [showCalculator, setShowCalculator] = useState(false);

  // Toutes les photos du loft
  const propertyImages = [
    "/photos/loft/sejour.jpeg",
    "/photos/loft/sejour2.jpeg",
    "/photos/loft/chambre.jpeg",
    "/photos/loft/chambre2.jpeg",
    "/photos/loft/piece.jpeg",
    "/photos/loft/sdb.jpeg",
    "/photos/loft/terrasse.jpeg",
    "/photos/loft/training.jpeg",
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
              Loft Industriel Mont Valérien
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full text-sm font-bold mb-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    LOFT INDUSTRIEL
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    Loft Industriel - Mont Valérien
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
                    <span className="text-base sm:text-lg">92150, Suresnes</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Découvrez l&apos;élégance urbaine au style New York
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 whitespace-nowrap">
                    899 000 €
                  </div>
                  <div className="text-sm text-gray-500 mt-1">HAI</div>
                </div>
              </div>

              {/* Caractéristiques principales */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">143</div>
                  <div className="text-sm text-gray-500 mt-1">m² habitable</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">5</div>
                  <div className="text-sm text-gray-500 mt-1">pièces</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">3+1</div>
                  <div className="text-sm text-gray-500 mt-1">chambres + bureau</div>
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
                <p className="text-xl font-semibold text-gray-900">
                  Plongez dans l&apos;univers unique d&apos;un loft de 170 m²
                </p>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 my-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Caractéristiques clés
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Un grand séjour lumineux</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Un Patio</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>3 chambres élégantes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>1 grand bureau ou chambre</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Cuisine semi-ouverte</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Garage fermé et sécurisé</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="font-semibold">Domotique</span> - Contrôle par application (Chauffage et volets roulants)
                    </li>
                  </ul>
                </div>

                <p>
                  Idéalement situé dans un quartier calme & résidentiel, rue à
                  sens unique, à mi-chemin entre le Mont Valérien et la place de
                  la Boule, écoles, commerces à proximité.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg my-6">
                  <p className="text-gray-800 italic font-medium">
                    Ce loft est plus qu&apos;un simple lieu de vie, c&apos;est une
                    expérience : un mélange parfait de modernité et de caractère
                    industriel. Planchers en parquet massif, poutres métalliques,
                    briques apparentes... chaque détail a été pensé pour créer une
                    atmosphère authentique et chaleureuse.
                  </p>
                </div>

                <p className="text-lg font-semibold text-gray-900">
                  Ne laissez pas passer cette opportunité unique !
                </p>
                <p className="text-xl font-bold text-blue-600 italic">
                  Votre loft, votre style, votre vie.
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
                    <span className="text-gray-600">Taxe foncière</span>
                    <span className="font-semibold text-gray-900">
                      2 249 €/an
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Surface totale</span>
                    <span className="font-semibold text-gray-900">174.83 m²</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Loi Carrez</span>
                    <span className="font-semibold text-gray-900">143.05 m²</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Style</span>
                    <span className="font-semibold text-gray-900">Loft Industriel</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Exposition</span>
                    <span className="font-semibold text-gray-900">Sud</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Vue</span>
                    <span className="font-semibold text-gray-900">
                      Dégagée, Ciel
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Type de chauffage</span>
                    <span className="font-semibold text-gray-900">Convecteur</span>
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
                    <span className="font-semibold text-gray-900">
                      Excellent état
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Énergie de chauffage</span>
                    <span className="font-semibold text-gray-900">Électrique</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Eaux usées</span>
                    <span className="font-semibold text-gray-900">Tout à l&apos;égout</span>
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
                  { name: "Séjour/cuisine", surface: "64.52 m²", highlight: true },
                  { name: "Patio", surface: "17.3 m²", highlight: true },
                  { name: "Chambre 1", surface: "16.3 m²" },
                  { name: "Chambre 2", surface: "15.3 m²" },
                  { name: "Chambre 3", surface: "12.26 m²" },
                  { name: "Bureau", surface: "14.15 m²" },
                  { name: "Entrée", surface: "6.32 m²" },
                  { name: "Cellier", surface: "3.4 m²" },
                  { name: "Salle de douche / WC", surface: "5.29 m²" },
                  { name: "Toilettes", surface: "1.93 m²" },
                  { name: "Palier", surface: "2.5 m²" },
                  { name: "Dégagement", surface: "1.08 m²" },
                  { name: "Garage", surface: "14.48 m²" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className={`p-4 rounded-lg border-2 ${
                      item.highlight
                        ? "bg-blue-50 border-blue-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="font-semibold text-gray-900 mb-1">
                      {item.name}
                    </div>
                    <div className={`text-sm font-bold ${
                      item.highlight ? "text-blue-600" : "text-blue-600"
                    }`}>
                      {item.surface}
                    </div>
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
                Prestations Premium
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Domotique",
                  "Double vitrage",
                  "Fenêtres coulissantes",
                  "Internet",
                  "Thermostat connecté",
                  "Ventilation double flux",
                  "Volets roulants électriques",
                  "Éclairage extérieur",
                  "Fibre optique",
                  "Alarme",
                  "Interphone",
                  "Porte blindée",
                  "Vidéophone",
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
                  "Bus",
                  "Commerces",
                  "Crèche",
                  "École primaire",
                  "École secondaire",
                  "Garderie",
                  "Médecin",
                  "Parking public",
                  "Supermarché",
                  "Taxi",
                  "Tennis",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
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
                energyClass="D"
                energyValue={247}
                climateClass="B"
                climateValue={8}
              />

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">
                  Estimation des dépenses énergétiques
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Montant estimé des dépenses annuelles d&apos;énergie pour un
                  usage standard, établi à partir des prix de l&apos;énergie de
                  l&apos;année 2021 : <strong>2 680 € à 3 627 €</strong>{" "}
                  (abonnement compris).
                </p>
                <p className="text-gray-600 text-sm mt-3">
                  <strong>Énergie - Consommation finale :</strong> 107
                  kWhEF/m².an (B)
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
                    Mont Valérien, Suresnes (92150)
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-gray-200">
                <InteractiveMap
                  properties={[
                    {
                      id: 4,
                      title: "Loft Industriel - Mont Valérien",
                      location: "Suresnes",
                      price: "899 000 €",
                      image: "/photos/loft/sejour.jpeg",
                      slug: "loft-industriel-suresnes",
                      lat: 48.8700,
                      lng: 2.2200,
                    },
                  ]}
                  center={[48.8700, 2.2200]}
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">
                      Quartier résidentiel
                    </div>
                    <div className="text-xs text-gray-600">Calme et sécurisé</div>
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
                      Écoles & Commerces
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">
                      Mont Valérien
                    </div>
                    <div className="text-xs text-gray-600">Secteur prisé</div>
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
                89071070000018 - 872 000 € honoraires exclus - Honoraires de
                3.1%TTC à charge acquéreur - Aucune procédure en cours (articles
                29-1A/29-1 loi 65-557, L.615-6 du CCH) - Classe énergie 247
                kWhEP/m².an (D) - Classe climat 8 kg CO2/m².an (B) - Montant
                estimé des dépenses annuelles d&apos;énergie pour un usage
                standard, établi à partir des prix de l&apos;énergie de l&apos;année
                2021 : 2680€ ~ 3627€ - Les informations sur les risques auxquels
                ce bien est exposé sont disponibles sur le site Géorisques :
                www.georisques.gouv.fr - Alexandre NAQUIN - Agent commercial - EI
                - RSAC Nanterre 830744959
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
                  <MortgageCalculator compact={true} propertyPrice={899000} />

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
                  85995476
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

