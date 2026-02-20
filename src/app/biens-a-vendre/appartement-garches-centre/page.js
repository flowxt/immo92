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

export default function AppartementGarchesCentre() {
  const [showCalculator, setShowCalculator] = useState(false);

  const propertyImages = [
    "/photos/guimot/ext.jpeg",
    "/photos/guimot/sejour.jpeg",
    "/photos/guimot/salon.jpeg",
    "/photos/guimot/space.jpeg",
    "/photos/guimot/chambre.jpeg",
    "/photos/guimot/chambre2.jpeg",
    "/photos/guimot/chambre3.jpeg",
    "/photos/guimot/sdb.jpeg",
    "/photos/guimot/couloir.jpeg",
  ];

  const propertyData = {
    id: 12,
    title: "Appartement 4 pièces - Garches centre",
    location: "92380, Garches",
    price: "450 000 €",
    lat: 48.8428,
    lng: 2.1873,
    slug: "appartement-garches-centre",
    image: "/photos/guimot/ext.jpeg",
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
              Appartement 4 pièces Garches
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
                    Appartement 4 pièces - Garches centre
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
                    <span className="text-base sm:text-lg">92380, Garches</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <div className="text-3xl sm:text-4xl font-bold text-[#2998a6] whitespace-nowrap">
                    450 000 €
                  </div>
                  <div className="text-sm text-gray-500 mt-1">HAI</div>
                </div>
              </div>

              {/* Caractéristiques principales */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">84</div>
                  <div className="text-sm text-gray-500 mt-1">m²</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">4</div>
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
                  Garches – À deux pas du centre-ville, des commerces, des
                  écoles et de la gare, dans une copropriété avec gardien et au
                  calme, venez découvrir ce bel appartement familial de 4
                  pièces.
                </p>
                <p>
                  Il se compose d&apos;un séjour lumineux avec balcon, de trois
                  chambres, d&apos;une salle de bains et d&apos;une cave.
                </p>
                <p className="font-semibold text-[#2998a6]">
                  Situé dans un environnement résidentiel et verdoyant, ce bien
                  offre un cadre de vie recherché, alliant confort, proximité
                  des commodités et accès rapide à Paris et La Défense.
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
                    <span className="font-semibold text-gray-900">1er / 4</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Niveaux</span>
                    <span className="font-semibold text-gray-900">1</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">État</span>
                    <span className="font-semibold text-gray-900">
                      Bon état
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Vue</span>
                    <span className="font-semibold text-gray-900">Dégagée</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Construit en</span>
                    <span className="font-semibold text-gray-900">1955</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Loi Carrez</span>
                    <span className="font-semibold text-gray-900">84 m²</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Surface totale</span>
                    <span className="font-semibold text-gray-900">
                      84.73 m²
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Disponibilité</span>
                    <span className="font-semibold text-[#0d6c8a]">Libre</span>
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
                    <span className="font-semibold text-gray-900">Gaz</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Moyen de chauffage</span>
                    <span className="font-semibold text-gray-900">
                      Collectif
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Eau chaude</span>
                    <span className="font-semibold text-gray-900">
                      Chaudière Collective
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Eaux usées</span>
                    <span className="font-semibold text-gray-900">
                      Tout à l&apos;égout
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Charges</span>
                    <span className="font-semibold text-gray-900">
                      1 070 €/trimestre
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Lots copropriété</span>
                    <span className="font-semibold text-gray-900">138</span>
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
                  <span className="text-gray-600">Entrée</span>
                  <span className="font-semibold text-gray-900">✓</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Cuisine</span>
                  <span className="font-semibold text-gray-900">✓</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Séjour</span>
                  <span className="font-semibold text-gray-900">Lumineux</span>
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
                  <span className="text-gray-600">Salle de bains</span>
                  <span className="font-semibold text-gray-900">✓</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Toilettes</span>
                  <span className="font-semibold text-gray-900">✓</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Balcon</span>
                  <span className="font-semibold text-gray-900">✓</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Cave</span>
                  <span className="font-semibold text-gray-900">✓</span>
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
                  "🌞 Séjour lumineux",
                  "🏖️ Balcon",
                  "🏠 Cave",
                  "🏢 Copropriété avec gardien",
                  "🌳 Environnement verdoyant",
                  "🤫 Au calme",
                  "🏠 Bon état",
                  "👁️ Vue dégagée",
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
                  "🚌 Bus",
                  "🏛️ Centre ville",
                  "🎬 Cinéma",
                  "🛒 Commerces",
                  "👶 Crèche",
                  "🏫 École primaire",
                  "🚉 Gare",
                  "🛍️ Supermarché",
                  "🏢 Paris (accès rapide)",
                  "🏢 La Défense (accès rapide)",
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
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Diagnostic de Performance Énergétique (DPE)
              </h2>
              
              {/* Message DPE en cours */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">
                      Diagnostic énergétique en cours
                    </h3>
                    <p className="text-sm text-amber-800">
                      Le diagnostic de performance énergétique de ce bien est
                      actuellement en cours de réalisation. Il sera disponible
                      prochainement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Affichage Climat uniquement */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Classe Climat
                    </h3>
                    <div className="text-sm text-gray-500">
                      62 kg CO₂/m².an
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {[
                      { letter: 'A', range: '≤ 6', color: 'bg-[#2998a6]/50', active: false },
                      { letter: 'B', range: '7 - 11', color: 'bg-lime-400', active: false },
                      { letter: 'C', range: '12 - 30', color: 'bg-yellow-300', active: false },
                      { letter: 'D', range: '31 - 50', color: 'bg-yellow-400', active: false },
                      { letter: 'E', range: '51 - 70', color: 'bg-orange-400', active: true },
                      { letter: 'F', range: '71 - 100', color: 'bg-red-400', active: false },
                      { letter: 'G', range: '> 100', color: 'bg-red-600', active: false },
                    ].map((item) => (
                      <div
                        key={item.letter}
                        className={`flex items-center gap-3 ${
                          item.active ? 'scale-105' : ''
                        } transition-transform`}
                      >
                        <div
                          className={`${item.color} ${
                            item.active ? 'w-full' : 'w-3/4'
                          } h-10 flex items-center justify-between px-4 rounded-r-lg transition-all ${
                            item.active ? 'ring-4 ring-[#2998a6] ring-offset-2' : ''
                          }`}
                        >
                          <span className="font-bold text-white text-lg">
                            {item.letter}
                          </span>
                          <span className="text-sm text-white font-medium">
                            {item.range}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#2998a6]/5 rounded-lg p-4 mt-6">
                  <p className="text-sm text-gray-700">
                    💰 <strong>Coût énergétique estimé</strong> : 1910€ ~ 2620€ par an
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Montant estimé des dépenses annuelles d&apos;énergie pour un
                    usage standard (prix de l&apos;énergie 2021)
                  </p>
                </div>
              </div>
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
                📍 Garches - Centre ville - Accès rapide Paris & La Défense
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
                89071070000018 - 435 000 € honoraires exclus - Honoraires de
                3.45%TTC à charge acquéreur - Nombre de lots dans la
                copropriété: 138 - Montant moyen de la quote-part de charges
                courantes 4 280 €/an - Aucune procédure en cours (articles
                29-1A/29-1 loi 65-557, L.615-6 du CCH) - Classe énergie En
                cours - Classe climat 62 kg CO2/m².an (E) - Montant estimé des
                dépenses annuelles d&apos;énergie pour un usage standard, établi à
                partir des prix de l&apos;énergie de l&apos;année 2021 : 1910€ ~
                2620€ - Les informations sur les risques auxquels ce bien est
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
                  <div className="text-sm font-bold text-[#2998a6] uppercase tracking-wider mb-2">
                    Votre Contact
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <Image
                      src="/photos/vincent2.jpg"
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
                  <div className="text-xs text-gray-500 font-mono">
                    RSAC Versailles 451 258 438
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
                  <MortgageCalculator compact={true} propertyPrice={450000} />

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
                  85997833
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

