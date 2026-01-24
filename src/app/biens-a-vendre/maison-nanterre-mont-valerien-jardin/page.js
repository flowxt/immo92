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

export default function MaisonNanterreMontValerienJardin() {
  const [showCalculator, setShowCalculator] = useState(false);
  const propertyImages = [
    "/photos/valerien-jardin/ext.jpeg",
    "/photos/valerien-jardin/salon.jpeg",
    "/photos/valerien-jardin/cuisine.jpeg",
    "/photos/valerien-jardin/chambre.jpeg",
    "/photos/valerien-jardin/chambre-2.jpeg",
    "/photos/valerien-jardin/chambre-3.jpeg",
    "/photos/valerien-jardin/sdb.jpeg",
    "/photos/valerien-jardin/douche.jpeg",
    "/photos/valerien-jardin/garage.jpeg",
    "/photos/valerien-jardin/terrain.jpeg",
  ];

  const propertyData = {
    id: 19,
    title: "Maison 5 pièces avec jardin - Mont-Valérien",
    location: "92000, Nanterre",
    price: "679 000 €",
    lat: 48.8892,
    lng: 2.2095,
    slug: "maison-nanterre-mont-valerien-jardin",
    image: "/photos/valerien-jardin/ext.jpeg",
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
              Maison Nanterre Mont-Valérien avec jardin
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
                    Maison 5 pièces avec jardin - Mont-Valérien
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
                    <span className="text-base sm:text-lg">23 Impasse des Luaps Prolongées, 92000 Nanterre</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <div className="text-3xl sm:text-4xl font-bold text-[#2998a6] whitespace-nowrap">
                    679 000 €
                  </div>
                  <div className="text-sm text-gray-500 mt-1">HAI</div>
                </div>
              </div>

              {/* Caractéristiques principales */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">115</div>
                  <div className="text-sm text-gray-500 mt-1">m² habitable</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">5</div>
                  <div className="text-sm text-gray-500 mt-1">pièces</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">410</div>
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
                  <strong className="text-[#2998a6]">Située au calme, dans une rue recherchée du Mont-Valérien,</strong> venez découvrir cette agréable maison édifiée sur un terrain de 410 m², bénéficiant d&apos;un emplacement privilégié et d&apos;un environnement paisible.
                </p>
                <p>
                  Au rez-de-chaussée, vous trouverez un salon lumineux, une salle à manger conviviale, une cuisine équipée et séparée, une chambre, une salle de bains ainsi que deux grands garages offrant de belles capacités de stationnement et de rangement.
                </p>
                <p>
                  À l&apos;étage, un palier dessert trois chambres confortables et une salle d&apos;eau.
                </p>
                <p>
                  La maison est équipée de <strong className="text-gray-900">panneaux photovoltaïques</strong> permettant la revente d&apos;électricité, ainsi que d&apos;une <strong className="text-gray-900">climatisation réversible</strong>, apportant un réel confort été comme hiver et un avantage économique supplémentaire.
                </p>
                <p className="font-semibold text-gray-900">
                  Un bien idéal pour une famille à la recherche de calme, de confort et d&apos;une situation géographique de premier choix.
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
                    <span className="font-semibold text-gray-900">
                      Maison individuelle
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">État</span>
                    <span className="font-semibold text-gray-900">
                      En bon état
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Surface habitable</span>
                    <span className="font-semibold text-gray-900">115 m²</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Surface au sol</span>
                    <span className="font-semibold text-gray-900">218 m²</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Terrain</span>
                    <span className="font-semibold text-gray-900">410 m²</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Niveaux</span>
                    <span className="font-semibold text-gray-900">2</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Pièces</span>
                    <span className="font-semibold text-gray-900">5</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Chambres</span>
                    <span className="font-semibold text-gray-900">4</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Salles d&apos;eau</span>
                    <span className="font-semibold text-gray-900">2</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">WC</span>
                    <span className="font-semibold text-gray-900">3 (dont 1 indépendant)</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Année de construction</span>
                    <span className="font-semibold text-gray-900">1940</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Chauffage</span>
                    <span className="font-semibold text-gray-900">Électrique</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Détail des surfaces par niveau */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Détail des surfaces par niveau
              </h2>
              
              {/* RDC */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#2998a6] mb-3">Rez-de-chaussée</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">Entrée</div>
                    <div className="font-bold text-gray-900">5,34 m²</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">Garage 1</div>
                    <div className="font-bold text-gray-900">34,20 m²</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">Dégagement</div>
                    <div className="font-bold text-gray-900">24,10 m²</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">WC</div>
                    <div className="font-bold text-gray-900">1,10 m²</div>
                  </div>
                </div>
              </div>

              {/* 1er étage */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#2998a6] mb-3">1er étage</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">Palier</div>
                    <div className="font-bold text-gray-900">4,50 m²</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">Chambre 1</div>
                    <div className="font-bold text-gray-900">12,30 m²</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">Chambre 2</div>
                    <div className="font-bold text-gray-900">13,20 m²</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">WC</div>
                    <div className="font-bold text-gray-900">1,10 m²</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">Salle d&apos;eau</div>
                    <div className="font-bold text-gray-900">4,90 m²</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">Cuisine</div>
                    <div className="font-bold text-gray-900">11,30 m²</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center col-span-2">
                    <div className="text-sm text-gray-600">Salon / Salle à manger</div>
                    <div className="font-bold text-gray-900">26,10 m²</div>
                  </div>
                </div>
              </div>

              {/* 2ème étage */}
              <div>
                <h3 className="text-lg font-semibold text-[#2998a6] mb-3">2ème étage</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">Palier</div>
                    <div className="font-bold text-gray-900">5,40 m²</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">Salle d&apos;eau / WC</div>
                    <div className="font-bold text-gray-900">4,10 m²</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">Chambre 3</div>
                    <div className="font-bold text-gray-900">13,35 m²</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">Chambre 4</div>
                    <div className="font-bold text-gray-900">12,35 m²</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">Dressing</div>
                    <div className="font-bold text-gray-900">5,80 m²</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">Grenier</div>
                    <div className="font-bold text-gray-900">30 m²</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Surface totale</span>
                  <span className="text-2xl font-bold text-[#2998a6]">209,14 m²</span>
                </div>
              </div>
            </motion.div>

            {/* Surfaces */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Surfaces
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Séjour</span>
                  <span className="font-semibold text-gray-900">27 m²</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Jardin</span>
                  <span className="font-semibold text-gray-900">410 m²</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Stationnement intérieur</span>
                  <span className="font-semibold text-gray-900">2 places</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Stationnement extérieur</span>
                  <span className="font-semibold text-gray-900">1 place</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Balcon</span>
                  <span className="font-semibold text-gray-900">1</span>
                </div>
              </div>
            </motion.div>

            {/* Prestations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Prestations
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "⚡ Chauffage électrique",
                  "💧 Chauffe-eau électrique",
                  "🚗 Double garage",
                  "🌳 Grand jardin 410 m²",
                  "☀️ Panneaux photovoltaïques",
                  "❄️ Climatisation réversible",
                  "🏠 WC indépendant",
                  "🛁 2 salles d'eau",
                  "📦 Grenier 30 m²",
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

            {/* Points forts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-[#2998a6]/10 to-[#0d6c8a]/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                🌟 Points forts
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "🏡 Quartier calme et recherché",
                  "🌳 Terrain de 410 m²",
                  "☀️ Panneaux solaires",
                  "❄️ Clim réversible",
                  "🚗 Double garage",
                  "👨‍👩‍👧‍👦 Idéal famille",
                  "🛏️ 4 chambres",
                  "📦 Grenier aménageable",
                  "📍 Mont-Valérien",
                ].map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* DPE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <DPE
                energyClass="E"
                climateClass="B"
                energyValue={276}
                climateValue={12}
                estimatedCost="2776€ ~ 3757€"
              />
            </motion.div>

            {/* Carte */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Localisation
              </h2>
              <div className="h-[400px] rounded-xl overflow-hidden">
                <InteractiveMap properties={[propertyData]} />
              </div>
              <p className="text-sm text-gray-500 mt-4">
                📍 Nanterre, quartier Mont-Valérien - Rue calme et recherchée
              </p>
            </motion.div>

            {/* Barème d'honoraires */}
            <FeesSchedule delay={0.9} />

            {/* Mentions légales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <p className="text-xs text-gray-600 leading-relaxed">
                EXP GLOBAL FRANCE - Non-détention de fonds - SIRET
                89071070000018 - 679 000 € honoraires inclus - Classe énergie E - Classe climat B - Montant estimé des
                dépenses annuelles d&apos;énergie pour un usage standard : 2776€ ~ 3757€ (abonnements compris) - Les informations sur les risques auxquels ce bien est exposé
                sont disponibles sur le site Géorisques : www.georisques.gouv.fr
                - Vincent LECLERC - Agent commercial - EI - RSAC Versailles
                451 258 438 - Réf. VM38345
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
                  <MortgageCalculator compact={true} propertyPrice={679000} />

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
                  VM38345
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
