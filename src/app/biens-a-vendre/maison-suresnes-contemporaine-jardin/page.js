"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";
import MortgageCalculator from "@/components/MortgageCalculator";
import DPE from "@/components/DPE";
import InteractiveMap from "@/components/InteractiveMap";

export default function MaisonContemporaineJardin() {
  const [showCalculator, setShowCalculator] = useState(false);

  // Toutes les photos de la maison
  const propertyImages = [
    "/photos/maison-jardin/exterieur.jpeg",
    "/photos/maison-jardin/salon.jpeg",
    "/photos/maison-jardin/cuisine.jpeg",
    "/photos/maison-jardin/terrasse.jpeg",
    "/photos/maison-jardin/chambre.jpeg",
    "/photos/maison-jardin/chambre2.jpeg",
    "/photos/maison-jardin/hauteur.jpeg",
    "/photos/maison-jardin/salle.jpeg",
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
              Maison Familiale Contemporaine
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
                    Maison Familiale Contemporaine
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
                    <span className="text-base sm:text-lg">92150, Suresnes - Mont-Valérien</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 whitespace-nowrap">
                    830 000 €
                  </div>
                  <div className="text-sm text-gray-500 mt-1">HAI</div>
                </div>
              </div>

              {/* Caractéristiques principales */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">120</div>
                  <div className="text-sm text-gray-500 mt-1">m² habitable</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">5</div>
                  <div className="text-sm text-gray-500 mt-1">pièces</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">165</div>
                  <div className="text-sm text-gray-500 mt-1">m² jardin</div>
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
                <p className="font-semibold text-lg text-gray-800">
                  Alliance parfaite entre modernité, calme et verdure
                </p>
                <p>
                  Dans un environnement résidentiel prisé du Mont-Valérien,
                  découvrez cette maison d&apos;architecte récente (2015), à la
                  fois moderne, lumineuse et conçue pour un confort de vie
                  optimal. Édifiée sur une parcelle de 165 m², elle bénéficie
                  d&apos;une triple exposition et de volumes généreux, au calme
                  absolu, à quelques minutes seulement de La Défense et de Paris.
                </p>
                <h3 className="font-bold text-gray-900">Rez-de-chaussée</h3>
                <p>
                  Dès l&apos;entrée, une pièce de vie magistrale d&apos;environ{" "}
                  <strong>50 m²</strong> s&apos;ouvre sur le jardin : espaces salon
                  & salle à manger, <strong>cuisine haut de gamme</strong>{" "}
                  entièrement équipée, WC invités. La baie vitrée plein sud offre
                  un prolongement naturel sur la terrasse et son jardin paysager,
                  invitant à la détente et à la convivialité.
                </p>
                <h3 className="font-bold text-gray-900">Premier étage</h3>
                <p>
                  <strong>Deux chambres spacieuses</strong>, salle d&apos;eau
                  élégante, WC indépendant, <strong>mezzanine ouverte</strong>{" "}
                  pouvant accueillir un bureau, un espace lecture ou être aisément
                  transformée en 4ᵉ chambre.
                </p>
                <h3 className="font-bold text-gray-900">Dernier niveau</h3>
                <p>
                  La <strong>suite parentale</strong> séduit par sa générosité :
                  dressing sur mesure, salle d&apos;eau privative et belles
                  hauteurs sous plafond.
                </p>
                <h3 className="font-bold text-gray-900">Sous-sol aménageable</h3>
                <p>
                  Un <strong>sous-sol de 50 m²</strong>, parfaitement sain, offre
                  de multiples possibilités : salle de sport, home cinéma, salle de
                  jeux, buanderie.
                </p>
                <p className="font-semibold">
                  ✨ Un bien rare, alliant standing, modernité et emplacement
                  stratégique, pour une vie aux portes de Paris.
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
                    <span className="text-gray-600">Pièces</span>
                    <span className="font-semibold text-gray-900">5</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Chambres</span>
                    <span className="font-semibold text-gray-900">4</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Niveaux</span>
                    <span className="font-semibold text-gray-900">3</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Surface habitable</span>
                    <span className="font-semibold text-gray-900">120 m²</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Surface jardin</span>
                    <span className="font-semibold text-gray-900">165 m²</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Taxe foncière</span>
                    <span className="font-semibold text-gray-900">
                      1 404 €/an
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">État</span>
                    <span className="font-semibold text-gray-900">
                      Excellent état
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Style</span>
                    <span className="font-semibold text-gray-900">Moderne</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Année construction</span>
                    <span className="font-semibold text-gray-900">2015</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Exposition</span>
                    <span className="font-semibold text-gray-900">
                      Sud-est, Sud-ouest
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Vue</span>
                    <span className="font-semibold text-gray-900">
                      Dégagée, Ciel
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Type de chauffage</span>
                    <span className="font-semibold text-gray-900">Radiateur</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Énergie de chauffage</span>
                    <span className="font-semibold text-gray-900">Gaz</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Eau chaude</span>
                    <span className="font-semibold text-gray-900">
                      Pompe à chaleur Individuelle
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
                  "Double vitrage",
                  "Fenêtre PVC",
                  "Internet",
                  "Stores électriques",
                  "Alarme",
                  "Vidéo surveillance",
                  "Barbecue",
                  "Clôture",
                  "Éclairage extérieur",
                  "Fibre optique",
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
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Proximités
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Centre ville",
                  "Commerces",
                  "Tennis",
                  "Université",
                  "École primaire",
                  "Hôpital/clinique",
                  "Médecin",
                  "Parc",
                  "Supermarché",
                  "Taxi",
                  "Crèche",
                  "La Défense",
                  "Paris",
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
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Diagnostic de Performance Énergétique
              </h2>

              <DPE
                energyClass="C"
                energyValue={170}
                climateClass="C"
                climateValue={27}
              />

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">
                  Estimation des dépenses énergétiques
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Montant estimé des dépenses annuelles d&apos;énergie pour un
                  usage standard, établi à partir des prix de l&apos;énergie de
                  l&apos;année 2021 : <strong>1 650 € à 2 240 €</strong>{" "}
                  (abonnement compris).
                </p>
                <p className="text-gray-600 text-sm mt-3">
                  <strong>Énergie - Consommation finale :</strong> 147 kWhEF/m².an
                  (C)
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
              transition={{ delay: 0.6 }}
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
                    Mont-Valérien, Suresnes (92150)
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-gray-200">
                <InteractiveMap
                  properties={[
                    {
                      id: 15,
                      title: "Maison Familiale Contemporaine",
                      location: "Suresnes",
                      price: "830 000 €",
                      image: "/photos/maison-jardin/exterieur.jpeg",
                      slug: "maison-suresnes-contemporaine-jardin",
                      lat: 48.8686,
                      lng: 2.2208,
                    },
                  ]}
                  center={[48.8686, 2.2208]}
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
                      Métro 15 Mont Valérien
                    </div>
                    <div className="text-xs text-gray-600">À quelques minutes</div>
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
                      La Défense
                    </div>
                    <div className="text-xs text-gray-600">Quelques minutes</div>
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
                    <div className="text-xs text-gray-600">Toutes commodités</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mentions légales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gray-100 rounded-xl p-6"
            >
              <p className="text-xs text-gray-600 leading-relaxed">
                EXP GLOBAL FRANCE - Non-détention de fonds - SIRET
                89071070000018 - Honoraires à la charge du vendeur - Classe
                énergie 170 kWhEP/m².an (C) - Classe climat 27 kg CO2/m².an (C) -
                Montant estimé des dépenses annuelles d&apos;énergie pour un usage
                standard, établi à partir des prix de l&apos;énergie de
                l&apos;année 2021 : 1650€ ~ 2240€ - Les informations sur les
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
                    <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-blue-200">
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
                  <MortgageCalculator compact={true} propertyPrice={830000} />

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
                  86405175
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
