"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import MortgageCalculator from "@/components/MortgageCalculator";
import DPE from "@/components/DPE";
import FeesSchedule from "@/components/FeesSchedule";
import dynamic from "next/dynamic";

const InteractiveMap = dynamic(() => import("@/components/InteractiveMap"), {
  ssr: false,
});

export default function MaisonNanterrePlainPied() {
  const [showCalculator, setShowCalculator] = useState(false);
  const propertyImages = [
    "/photos/maison-mars26/exterieur.jpg",
    "/photos/maison-mars26/terrasse.jpg",
    "/photos/maison-mars26/photo-2.jpg",
    "/photos/maison-mars26/photo-3.jpg",
    "/photos/maison-mars26/sdb.jpg",
    "/photos/maison-mars26/garage.jpg",
    "/photos/maison-mars26/generated_2026-03-13T13_26_35.461.jpg",
    "/photos/avant-apres.jpeg",
    "/photos/maison-mars26/retouche1.jpg",
    "/photos/maison-mars26/retouche-2.jpg",
    "/photos/maison-mars26/retouche3.jpg",
    "/photos/maison-mars26/retouche4.jpg",
    "/photos/maison-mars26/retouche5.jpg",
  ];

  const propertyData = {
    id: 22,
    title: "Maison de plain-pied à Nanterre",
    location: "92000, Nanterre",
    price: "577 000 €",
    lat: 48.8830,
    lng: 2.2100,
    slug: "maison-nanterre-plain-pied",
    image: "/photos/maison-mars26/exterieur.jpg",
  };

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
              href="/biens-a-vendre"
              className="text-gray-500 hover:text-[#2998a6]"
            >
              Biens à vendre
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">
              Maison plain-pied Nanterre
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
                    Maison de plain-pied à Nanterre
                  </h1>
                  <p className="text-lg text-[#2998a6] font-semibold mb-2">
                    Proche Rueil-Malmaison et futur Paris
                  </p>
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
                    <span className="text-base sm:text-lg">83 rue des Suisses, 92000 Nanterre</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <div className="text-3xl sm:text-4xl font-bold text-[#2998a6] whitespace-nowrap">
                    577 000 €
                  </div>
                  <div className="text-sm text-gray-500 mt-1">HAI</div>
                </div>
              </div>

              {/* Caractéristiques principales */}
              <div className="grid grid-cols-4 gap-4 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">105</div>
                  <div className="text-sm text-gray-500 mt-1">m² habitable</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">5</div>
                  <div className="text-sm text-gray-500 mt-1">pièces</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">3</div>
                  <div className="text-sm text-gray-500 mt-1">chambres</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">311</div>
                  <div className="text-sm text-gray-500 mt-1">m² terrain</div>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Description
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  À Nanterre, dans le bas du Mont-Valérien, à proximité du secteur de La Boule et à quelques mètres de Rueil-Malmaison, venez découvrir cette charmante <strong className="text-gray-900">maison de plain-pied d&apos;environ 100 m²</strong>. Idéalement située, elle est proche du futur Paris, offrant un accès pratique à toutes les commodités et aux transports.
                </p>
                <p>
                  Cette maison se compose de <strong className="text-gray-900">trois chambres</strong>, d&apos;une cuisine indépendante, d&apos;un <strong className="text-gray-900">séjour spacieux de 25 m²</strong>, d&apos;une salle de bain, ainsi que d&apos;un garage et d&apos;une terrasse pour profiter de l&apos;extérieur. Le tout est implanté sur un <strong className="text-[#2998a6]">terrain de 311 m²</strong>.
                </p>
                <p>
                  Plusieurs entrées existent déjà, offrant la <strong className="text-[#2998a6]">possibilité de créer différents lots</strong>. Des travaux sont à prévoir, ce qui permet d&apos;imaginer un projet sur mesure, avec la <strong className="text-[#2998a6]">possibilité de surélévation</strong> pour augmenter la surface habitable.
                </p>
                <p className="font-semibold text-gray-900">
                  Cette maison représente une belle opportunité pour un projet familial ou un investissement.
                </p>
              </div>
            </motion.div>

            {/* Caractéristiques détaillées */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Caractéristiques détaillées
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Type</span>
                    <span className="font-semibold text-gray-900">Maison ancienne</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">État</span>
                    <span className="font-semibold text-gray-900">À rénover</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Surface habitable</span>
                    <span className="font-semibold text-gray-900">105,30 m²</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Terrain</span>
                    <span className="font-semibold text-gray-900">311 m²</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Plain-pied</span>
                    <span className="font-semibold text-gray-900">Oui</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Année de construction</span>
                    <span className="font-semibold text-gray-900">1920</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Pièces</span>
                    <span className="font-semibold text-gray-900">5</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Chambres</span>
                    <span className="font-semibold text-gray-900">3</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Salle de bains</span>
                    <span className="font-semibold text-gray-900">1</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">WC</span>
                    <span className="font-semibold text-gray-900">2 (dont 1 indépendant)</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Chauffage</span>
                    <span className="font-semibold text-gray-900">Fioul individuel</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Cuisine</span>
                    <span className="font-semibold text-gray-900">Aménagée indépendante</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Surfaces détaillées */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Surfaces détaillées
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Séjour</span>
                  <span className="font-semibold text-gray-900">24,60 m²</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Cuisine</span>
                  <span className="font-semibold text-gray-900">13,24 m²</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Chambre 1</span>
                  <span className="font-semibold text-gray-900">11,98 m²</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Chambre 2</span>
                  <span className="font-semibold text-gray-900">12,02 m²</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Chambre 3</span>
                  <span className="font-semibold text-gray-900">11,79 m²</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Bureau</span>
                  <span className="font-semibold text-gray-900">7,40 m²</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Salle de bains</span>
                  <span className="font-semibold text-gray-900">4,24 m²</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Entrée</span>
                  <span className="font-semibold text-gray-900">3,06 m²</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Garage</span>
                  <span className="font-semibold text-gray-900">24 m²</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Cave</span>
                  <span className="font-semibold text-gray-900">27,64 m²</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Terrasse</span>
                  <span className="font-semibold text-gray-900">2</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Surface totale</span>
                  <span className="font-semibold text-gray-900">152,95 m²</span>
                </div>
              </div>
            </motion.div>

            {/* Points forts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-[#2998a6]/10 to-[#0d6c8a]/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Points forts
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Plain-pied 105 m²",
                  "Terrain 311 m²",
                  "Séjour spacieux 25 m²",
                  "Garage 24 m²",
                  "2 terrasses",
                  "Cave 27 m²",
                  "Surélévation possible",
                  "Création de lots possible",
                  "Proche futur Paris",
                  "Limite Rueil-Malmaison",
                  "Double vitrage PVC",
                  "Tout à l\u0027égout",
                ].map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <svg className="w-5 h-5 text-[#2998a6] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{point}</span>
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
                energyClass="G"
                climateClass="G"
                energyValue={450}
                climateValue={110}
                estimatedCost="7774€ ~ 10519€"
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
                Nanterre, bas du Mont-Valérien - Proche Rueil-Malmaison et secteur La Boule
              </p>
            </motion.div>

            {/* Barème d'honoraires */}
            <FeesSchedule delay={0.8} />

            {/* Mentions légales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <p className="text-xs text-gray-600 leading-relaxed">
                EXP GLOBAL FRANCE - Non-détention de fonds - SIRET
                89071070000018 - 577 000 € honoraires inclus - Logement à consommation énergétique excessive - Classe énergie G - Classe climat G - Montant estimé des
                dépenses annuelles d&apos;énergie pour un usage standard : 7774€ ~ 10519€ (abonnements compris) - Les informations sur les risques auxquels ce bien est exposé
                sont disponibles sur le site Géorisques : www.georisques.gouv.fr
                - Vincent LECLERC - Agent commercial - EI - RSAC Versailles
                451 258 438 - Réf. VM41374 - Mandat N°19215
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
                  <div className="text-sm font-bold text-[#2998a6] uppercase tracking-wider mb-2">
                    Votre Contact
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <Image
                      src="/photos/vincent2.jpg"
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
                        Conseiller Immobilier
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 font-mono mt-2">
                    RSAC Versailles 451 258 438
                  </div>
                </div>

                <a
                  href="tel:0662155757"
                  className="flex items-center justify-center gap-2 w-full bg-[#2998a6] text-white py-4 rounded-xl font-bold hover:bg-[#0d6c8a] transition-colors mb-3"
                >
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  06 62 15 57 57
                </a>

                <Link
                  href="/contact"
                  className="block w-full bg-gray-100 text-gray-900 text-center py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors mb-3"
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
                  <MortgageCalculator compact={true} propertyPrice={577000} />

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
                  VM41374
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
