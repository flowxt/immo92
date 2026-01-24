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

export default function AppartementNanterreCentre() {
  const [showCalculator, setShowCalculator] = useState(false);

  // Toutes les photos de l'appartement
  const propertyImages = [
    "/photos/Guerrin/ext.jpeg",
    "/photos/Guerrin/salon.jpeg",
    "/photos/Guerrin/chambre.jpeg",
    "/photos/Guerrin/piece.jpeg",
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
              Appartement Nanterre Centre
            </span>
          </nav>
        </div>
      </div>

      {/* Badge EXCLUSIVITÉ */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5 text-amber-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-bold text-amber-800 text-sm uppercase tracking-wide">
              Exclusivité
            </span>
          </div>
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
                    Appartement - Nanterre Centre
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
                    <span className="text-base sm:text-lg">92000, Nanterre - Centre</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    RER A - Nanterre Centre Ville
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <div className="text-3xl sm:text-4xl font-bold text-[#2998a6] whitespace-nowrap">
                    346 000 €
                  </div>
                  <div className="text-sm text-gray-500 mt-1">HAI</div>
                </div>
              </div>

              {/* Caractéristiques principales */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">59.89</div>
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
                  Idéalement situé à 8 minutes à pied du RER A - Nanterre Ville,
                  accès rapide A14 et A86, des commerces, écoles, crèches et du
                  centre-ville.
                </p>
                <p>
                  Venez découvrir cet appartement très bien agencé, en très bon
                  état général, disposant de trois pièces deux chambres, salle de
                  bain, wc séparés, lumineux avec cuisine ouverte sur séjour
                  exposé ouest donnant sur un grand balcon filant.
                </p>
                <p>
                  Un emplacement de parking sécurisé en sous-sol avec accès
                  direct à l&apos;appartement.
                </p>
                <p>
                  Copropriété récente et très bien entretenue à proximité de
                  l&apos;ancienne usine du Docteur Pierre transformé en espace de
                  Coworking et jardins.
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
                      Rez-de-chaussée
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Charges</span>
                    <span className="font-semibold text-gray-900">
                      388 €/trimestre
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Taxe foncière</span>
                    <span className="font-semibold text-gray-900">
                      1 021 €/an
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Surface totale</span>
                    <span className="font-semibold text-gray-900">59.89 m²</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Loi Carrez</span>
                    <span className="font-semibold text-gray-900">59.89 m²</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Exposition</span>
                    <span className="font-semibold text-gray-900">Ouest</span>
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
                      Individuelle Chaudière
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">État</span>
                    <span className="font-semibold text-gray-900">Bon état</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Vue</span>
                    <span className="font-semibold text-gray-900">Aperçu</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Énergie de chauffage</span>
                    <span className="font-semibold text-gray-900">Gaz</span>
                  </div>
                </div>
              </div>

              {/* Copropriété */}
              <div className="mt-6 p-4 bg-[#2998a6]/5 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-3">
                  Informations copropriété
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Nombre de lots :</span>
                    <span className="font-semibold">224</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Charges courantes moyennes :</span>
                    <span className="font-semibold">1 552 €/an</span>
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
                  { name: "Entrée", surface: "2.16 m²" },
                  { name: "Cuisine", surface: "7.68 m²" },
                  { name: "Séjour", surface: "18.7 m²" },
                  { name: "Chambre 1", surface: "10.55 m²" },
                  { name: "Chambre 2", surface: "12.3 m²" },
                  { name: "Dégagement", surface: "4.33 m²" },
                  { name: "Salle de bains", surface: "2.8 m²" },
                  { name: "Toilettes", surface: "1.37 m²" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="font-semibold text-gray-900 mb-1">
                      {item.name}
                    </div>
                    <div className="text-sm text-[#2998a6]">{item.surface}</div>
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
                  "Double vitrage",
                  "Fenêtre PVC",
                  "Internet",
                  "Ventilation double flux",
                  "Accès handicapé",
                  "Alarme incendie",
                  "Ascenseur",
                  "Fibre optique",
                  "Digicode",
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
                  "Autoroute",
                  "Bus",
                  "Centre ville",
                  "Commerces",
                  "Crèche",
                  "École primaire",
                  "École secondaire",
                  "Gare",
                  "Médecin",
                  "Parc",
                  "Parking public",
                  "Salle de sport",
                  "Supermarché",
                  "Université",
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
                energyClass="D"
                energyValue={162}
                climateClass="D"
                climateValue={31}
              />

              <div className="mt-8 p-6 bg-[#2998a6]/5 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">
                  Estimation des dépenses énergétiques
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Montant estimé des dépenses annuelles d&apos;énergie pour un
                  usage standard, établi à partir des prix de l&apos;énergie de
                  l&apos;année 2021 : <strong>970 € à 1 330 €</strong>{" "}
                  (abonnement compris).
                </p>
                <p className="text-gray-600 text-sm mt-3">
                  <strong>Énergie - Consommation finale :</strong> 147
                  kWhEF/m².an (C)
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
                    Centre-Ville, Nanterre (92000)
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-gray-200">
                <InteractiveMap
                  properties={[
                    {
                      id: 2,
                      title: "Appartement - Nanterre Centre",
                      location: "Nanterre",
                      price: "346 000 €",
                      image: "/photos/Guerrin/ext.jpeg",
                      slug: "appartement-nanterre-centre",
                      lat: 48.8925,
                      lng: 2.2055,
                    },
                  ]}
                  center={[48.8925, 2.2055]}
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">
                      RER A - Nanterre Ville
                    </div>
                    <div className="text-xs text-gray-600">8 minutes à pied</div>
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
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">
                      Autoroutes A14 & A86
                    </div>
                    <div className="text-xs text-gray-600">Accès rapide</div>
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">
                      Centre-ville & Commerces
                    </div>
                    <div className="text-xs text-gray-600">Toutes commodités</div>
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
                89071070000018 - 330 000 € honoraires exclus - Honoraires de
                4.85%TTC à charge acquéreur - Nombre de lots dans la copropriété:
                224 - Montant moyen de la quote-part de charges courantes 1 552
                €/an - Aucune procédure en cours (articles 29-1A/29-1 loi 65-557,
                L.615-6 du CCH) - Classe énergie 162 kWhEP/m².an (D) - Classe
                climat 31 kg CO2/m².an (D) - Montant estimé des dépenses annuelles
                d&apos;énergie pour un usage standard, établi à partir des prix de
                l&apos;énergie de l&apos;année 2021 : 970€ ~ 1330€ - Les
                informations sur les risques auxquels ce bien est exposé sont
                disponibles sur le site Géorisques : www.georisques.gouv.fr -
                Alexandre NAQUIN - Agent commercial - EI - RSAC Nanterre 830744959
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
                  <MortgageCalculator compact={true} propertyPrice={346000} />

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
                  86341082
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

