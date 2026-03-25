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

export default function MaisonSuresnesFamilialeExclusivite() {
  const [showCalculator, setShowCalculator] = useState(false);
  const propertyImages = [
    "/photos/maison/exterieur.jpeg",
    "/photos/maison/grand-sejour.jpeg",
    "/photos/maison/sejour.jpeg",
    "/photos/maison/salon.jpeg",
    "/photos/maison/chambre.jpeg",
    "/photos/maison/bedroom.jpeg",
    "/photos/maison/room.jpeg",
    "/photos/maison/lit.jpeg",
    "/photos/maison/sdb.jpeg",
    "/photos/maison/atlier.jpeg",
    "/photos/maison/echelle.jpeg",
  ];

  const propertyData = {
    id: 15,
    title: "Maison familiale Mont Valérien - EXCLUSIVITÉ",
    location: "92150, Suresnes",
    price: "620 000 €",
    lat: 48.8738,
    lng: 2.2165,
    slug: "maison-suresnes-familiale-exclusivite",
    image: "/photos/maison/exterieur.jpeg",
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
              Maison familiale Mont Valérien
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
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30">
                      ⭐ EXCLUSIVITÉ
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#2998a6]/10 text-[#06465c]">
                      Maison
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Maison familiale Mont Valérien
                  </h1>
                  <p className="text-lg text-gray-600 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-[#2998a6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
                    Suresnes - Mont Valérien
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Référence : 86436575
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-4xl font-bold text-[#2998a6] mb-1">
                    620 000 €
                  </div>
                  <div className="text-sm text-gray-500">
                    HAI - Honoraires inclus
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    600 000 € hors honoraires
                  </div>
                </div>
              </div>

              {/* Caractéristiques principales */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">
                    192 m²
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Surface totale
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">
                    118 m²
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Surface habitable
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">6</div>
                  <div className="text-sm text-gray-600 mt-1">Pièces</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">4</div>
                  <div className="text-sm text-gray-600 mt-1">Chambres</div>
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
                  <strong>
                    Idéalement située en limite de Suresnes quartier du Mont
                    Valérien
                  </strong>
                  , venez découvrir cette charmante maison familiale :
                </p>

                <div className="bg-[#2998a6]/5 border-l-4 border-[#2998a6] p-4 my-6">
                  <p className="font-semibold text-[#0c233c] mb-2">
                    📍 Emplacement privilégié avec bonus exceptionnel
                  </p>
                  <p className="text-[#06465c]">
                    Ce bien est accompagné d&apos;une agréable surprise :{" "}
                    <strong>3 emplacements de stationnement</strong> attenant à
                    la maison.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  🏡 Distribution
                </h3>

                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#2998a6] mr-2">✓</span>
                    <span>
                      <strong>Rez-de-chaussée :</strong> Double séjour, cuisine
                      ouverte, salle à manger exposée sud-ouest donnant sur
                      jardin
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2998a6] mr-2">✓</span>
                    <span>
                      <strong>1er étage :</strong> 3 chambres, une salle de
                      bain
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2998a6] mr-2">✓</span>
                    <span>
                      <strong>2ème étage :</strong> Une chambre et un bureau
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2998a6] mr-2">✓</span>
                    <span>
                      <strong>Sous-sol :</strong> Un garage, un atelier, un
                      grand bureau aménagé
                    </span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  🎯 Proximités &amp; Services
                </h3>

                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#0d6c8a] mr-2">🏫</span>
                    <span>
                      <strong>Carte scolaire :</strong> Jules Ferry, Moulin des
                      Gibets
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0d6c8a] mr-2">🚌</span>
                    <span>
                      <strong>Transports :</strong> Bus 141 & 160
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0d6c8a] mr-2">🏢</span>
                    <span>
                      <strong>Accès La Défense :</strong> 15 minutes en voiture
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Caractéristiques détaillées */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Caractéristiques détaillées
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                    📐 Surfaces
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between py-2 border-b border-gray-100">
                      <span>Surface totale</span>
                      <span className="font-semibold text-gray-900">
                        192.28 m²
                      </span>
                    </li>
                    <li className="flex justify-between py-2 border-b border-gray-100">
                      <span>Surface habitable</span>
                      <span className="font-semibold text-gray-900">
                        117.74 m²
                      </span>
                    </li>
                    <li className="flex justify-between py-2 border-b border-gray-100">
                      <span>Surface Loi Carrez</span>
                      <span className="font-semibold text-gray-900">
                        102.42 m²
                      </span>
                    </li>
                    <li className="flex justify-between py-2 border-b border-gray-100">
                      <span>Superficie pondérée</span>
                      <span className="font-semibold text-gray-900">142 m²</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                    🏠 Informations générales
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between py-2 border-b border-gray-100">
                      <span>État</span>
                      <span className="font-semibold text-gray-900">
                        Bon état
                      </span>
                    </li>
                    <li className="flex justify-between py-2 border-b border-gray-100">
                      <span>Exposition</span>
                      <span className="font-semibold text-gray-900">
                        Sud-ouest
                      </span>
                    </li>
                    <li className="flex justify-between py-2 border-b border-gray-100">
                      <span>Vue</span>
                      <span className="font-semibold text-gray-900">
                        Dégagée, Ciel
                      </span>
                    </li>
                    <li className="flex justify-between py-2 border-b border-gray-100">
                      <span>Eaux usées</span>
                      <span className="font-semibold text-gray-900">
                        Tout à l&apos;égout
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                    🔥 Chauffage & Énergie
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between py-2 border-b border-gray-100">
                      <span>Type de chauffage</span>
                      <span className="font-semibold text-gray-900">
                        Climatisation
                      </span>
                    </li>
                    <li className="flex justify-between py-2 border-b border-gray-100">
                      <span>Énergie</span>
                      <span className="font-semibold text-gray-900">
                        Électrique
                      </span>
                    </li>
                    <li className="flex justify-between py-2 border-b border-gray-100">
                      <span>Moyen</span>
                      <span className="font-semibold text-gray-900">
                        Individuel
                      </span>
                    </li>
                    <li className="flex justify-between py-2 border-b border-gray-100">
                      <span>Eau chaude</span>
                      <span className="font-semibold text-gray-900">
                        Chauffe-eau individuel
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                    💰 Charges & Taxes
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between py-2 border-b border-gray-100">
                      <span>Taxe foncière</span>
                      <span className="font-semibold text-gray-900">
                        1 348 € / an
                      </span>
                    </li>
                    <li className="flex justify-between py-2 border-b border-gray-100">
                      <span>Charges</span>
                      <span className="font-semibold text-gray-900">
                        95 € / an
                      </span>
                    </li>
                    <li className="flex justify-between py-2 border-b border-gray-100">
                      <span>Honoraires</span>
                      <span className="font-semibold text-gray-900">
                        3.33% TTC acquéreur
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                  ✨ Prestations & Équipements
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Air conditionné",
                    "Double vitrage",
                    "Internet",
                    "Thermostat connecté",
                    "Vide sanitaire",
                    "Volets roulants électriques",
                    "Alarme",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <svg
                        className="w-5 h-5 text-[#0d6c8a] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                  📏 Détail des surfaces
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">Entrée : </span>
                    <span className="font-semibold">5.7 m²</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">Cuisine : </span>
                    <span className="font-semibold">10.8 m²</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">Séjour : </span>
                    <span className="font-semibold">34.72 m²</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">Salle à manger : </span>
                    <span className="font-semibold">13.3 m²</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">Chambre 1 : </span>
                    <span className="font-semibold">9.93 m²</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">Chambre 2 : </span>
                    <span className="font-semibold">12.44 m²</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">Chambre 3 : </span>
                    <span className="font-semibold">10.13 m²</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">Chambre 4 : </span>
                    <span className="font-semibold">11.1 m²</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">Bureau : </span>
                    <span className="font-semibold">6.8 m²</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">Salle de bains : </span>
                    <span className="font-semibold">7.7 m²</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">Toilettes : </span>
                    <span className="font-semibold">1.6 m²</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">Bureau (sous-sol) : </span>
                    <span className="font-semibold">15.32 m²</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">Garage : </span>
                    <span className="font-semibold">8.9 m²</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">Buanderie : </span>
                    <span className="font-semibold">11.12 m²</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">Cave : </span>
                    <span className="font-semibold">5.52 m²</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* DPE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <DPE
                energyClass="D"
                climateClass="A"
                energyValue={209}
                climateValue={6}
                estimatedCost="1440€ ~ 2020€"
              />
            </motion.div>

            {/* Localisation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Localisation
              </h2>
              <div className="h-[400px] rounded-xl overflow-hidden">
                <InteractiveMap
                  properties={[propertyData]}
                  center={[propertyData.lat, propertyData.lng]}
                  zoom={15}
                />
              </div>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: "🚌", label: "Bus", sublabel: "141 & 160" },
                  { icon: "🏢", label: "La Défense", sublabel: "15 min" },
                  { icon: "🏫", label: "Écoles", sublabel: "Jules Ferry" },
                  { icon: "🏪", label: "Commerces", sublabel: "À proximité" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="text-center p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {item.label}
                    </div>
                    <div className="text-xs text-gray-500">{item.sublabel}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Barème d'honoraires */}
            <FeesSchedule delay={0.5} />

            {/* Mentions légales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-50 rounded-xl p-6 text-xs text-gray-600 leading-relaxed"
            >
              <p>
                EXP GLOBAL FRANCE - Non-détention de fonds - SIRET
                89071070000018 - 600 000 € honoraires exclus - Honoraires de
                3.33% TTC à charge acquéreur - Montant moyen de la quote-part
                de charges courantes 95 €/an - Aucune procédure en cours
                (articles 29-1A/29-1 loi 65-557, L.615-6 du CCH) - Classe
                énergie 209 kWhEP/m².an (D) - Classe climat 6 kg CO2/m².an (B)
                - Montant estimé des dépenses annuelles d&apos;énergie pour un usage
                standard, établi à partir des prix de l&apos;énergie de l&apos;année
                2021, 2022, 2023 : 1 440 € ~ 2 020 € - Les informations sur les
                risques auxquels ce bien est exposé sont disponibles sur le site
                Géorisques : www.georisques.gouv.fr - Alexandre NAQUIN - Agent
                commercial - EI - RSAC Nanterre 830744959
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
                      src="/photos/alexandre2.jpg"
                      alt="Alexandre NAQUIN"
                      width={80}
                      height={80}
                      className="rounded-full shadow-md"
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
                  <MortgageCalculator compact={true} propertyPrice={620000} />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

