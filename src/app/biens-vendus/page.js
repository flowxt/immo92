"use client";

import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/StaggerChildren";
import SoldPropertyCard from "@/components/SoldPropertyCard";
import { motion } from "framer-motion";

// Liste des biens vendus
const soldProperties = [
  {
    id: 1,
    title: "Maison 4 pièces - Proche T2",
    subtitle: "Maison domotisée avec jardin",
    location: "Bezons",
    surface: "70 m²",
    rooms: 4,
    roomsLabel: "4 pièces",
    image: "/photos/picquet/sejour.jpeg",
    price: "278 000 €",
    priceValue: 278000,
    slug: "maison-bezons-proche-t2",
    type: "maison",
    agent: "Vincent LECLERC",
    rsac: "451 258 438",
    soldDate: "Oct. 2025",
    soldYear: "2025",
    dpe: {
      energy: "E",
      climate: "B",
      energyValue: 310,
      climateValue: 10,
    },
  },
  {
    id: 2,
    title: "Appartement 2 pièces - Nanterre Centre",
    subtitle: "Centre-Ville - Parking - Balcon",
    location: "Nanterre",
    surface: "47.75 m²",
    rooms: 2,
    roomsLabel: "2 pièces",
    image: "/photos/rouge/sejour.jpeg",
    price: "265 000 €",
    priceValue: 265000,
    slug: "appartement-nanterre-centre-exclusivite",
    type: "appartement",
    agent: "Alexandre NAQUIN",
    rsac: "830 744 959",
    soldDate: "Nov. 2025",
    soldYear: "2025",
    dpe: {
      energy: "C",
      climate: "C",
      energyValue: 153,
      climateValue: 29,
    },
    exclusive: true,
  },
  {
    id: 3,
    title: "Appartement 2 pièces - Colombes Centre-Ville",
    subtitle: "Grand séjour - Cuisine ouverte - Balcon - Parking",
    location: "Colombes",
    surface: "49.36 m²",
    rooms: 2,
    roomsLabel: "2 pièces",
    image: "/photos/ouazzani/salon.jpeg",
    price: "315 000 €",
    priceValue: 315000,
    slug: "appartement-colombes-centre",
    type: "appartement",
    agent: "Alexandre NAQUIN",
    rsac: "830 744 959",
    soldDate: "Nov. 2025",
    soldYear: "2025",
    dpe: {
      energy: "C",
      climate: "A",
      energyValue: 161,
      climateValue: 5,
    },
  },
];

export default function BiensVendus() {
  return (
    <>
      <Hero
        subtitle="Nos réussites"
        title="Des ventes réussies, des clients satisfaits"
        description="Découvrez notre expertise à travers les transactions que nous avons menées avec succès autour du Mont-Valérien."
        imageSrc="/photos/mont-valerien.jpg"
        fullHeight={false}
      />

      <Section background="white">
        <FadeIn>
          <SectionHeading
            label="Notre expérience"
            title={
              <>
                Nos <span className="text-blue-600">réussites</span>
              </>
            }
            subtitle="Des projets menés avec succès"
            showLine={true}
          />
        </FadeIn>

        {/* Grille des biens vendus */}
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {soldProperties.map((property, index) => (
            <StaggerItem key={property.id}>
              <SoldPropertyCard property={property} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Encart plus de ventes */}
        <FadeIn delay={0.3}>
          <div className="mt-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10 text-center text-white shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
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
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Plus d&apos;une dizaine de biens vendus avec succès
                </h3>
                <p className="text-lg text-blue-100">
                  Les biens présentés ci-dessus ne sont qu&apos;un aperçu de notre
                  expertise. Nous avons accompagné de nombreux clients dans la
                  réussite de leur projet immobilier.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Success Story - Rénovation Énergétique */}
      <div className="bg-gradient-to-br from-green-50 via-blue-50 to-green-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <FadeIn>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg mb-6">
                  <span className="text-3xl">🌿</span>
                  <span className="font-bold text-xl text-green-800">
                    Success Story
                  </span>
                </div>
                <SectionHeading
                  label="Accompagnement Rénovation Énergétique"
                  title={
                    <>
                      De passoire énergétique à{" "}
                      <span className="text-green-600">
                        maison éco-performante
                      </span>
                    </>
                  }
                  subtitle="Découvrez comment nous accompagnons nos clients de A à Z"
                  showLine={true}
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link href="/biens-vendus/maison-nanterre-renovation-energetique">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white rounded-3xl overflow-hidden shadow-2xl cursor-pointer max-w-5xl mx-auto"
                >
                  {/* Badges en haut */}
                  <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-3">
                    <div className="bg-green-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-xl flex items-center gap-2">
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
                      VENDU
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-xl">
                      🏆 SUCCESS STORY
                    </div>
                  </div>

                  {/* Image principale */}
                  <div className="relative h-96">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                    <Image
                      src="/photos/autret/facade-avant.jpeg"
                      alt="Maison Nanterre - Rénovation Énergétique"
                      fill
                      className="object-cover"
                    />

                    {/* Transformation indicator */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-2xl">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-red-600 font-bold text-2xl">
                            DPE G
                          </div>
                          <div className="text-xs text-gray-600">Avant</div>
                        </div>
                        <div className="text-3xl">→</div>
                        <div className="text-center">
                          <div className="text-green-600 font-bold text-2xl">
                            DPE C
                          </div>
                          <div className="text-xs text-gray-600">Après</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">
                        Maison à Nanterre - Accompagnement Complet Rénovation
                        Énergétique
                      </h3>
                      <p className="text-lg text-gray-600 mb-4">
                        Découvrez comment nous avons accompagné nos clients dans
                        la transformation complète d&apos;une passoire
                        énergétique en maison éco-performante.
                      </p>
                    </div>

                    {/* Points clés */}
                    <div className="grid md:grid-cols-4 gap-6 mb-6">
                      <div className="text-center p-4 bg-green-50 rounded-xl">
                        <div className="text-3xl font-bold text-green-600">
                          92 m²
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          Surface
                        </div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-xl">
                        <div className="text-3xl font-bold text-blue-600">
                          525 m²
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          Terrain
                        </div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-xl">
                        <div className="text-3xl font-bold text-purple-600">
                          459K€
                        </div>
                        <div className="text-sm text-gray-600 mt-1">Vendu</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-xl">
                        <div className="text-3xl font-bold text-orange-600">
                          Oct 25
                        </div>
                        <div className="text-sm text-gray-600 mt-1">Date</div>
                      </div>
                    </div>

                    {/* Notre accompagnement */}
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 mb-6">
                      <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">🤝</span>
                        Notre Accompagnement 100%
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          "✅ Diagnostic énergétique complet",
                          "✅ Plan de rénovation personnalisé",
                          "✅ Accès aux subventions & aides",
                          "✅ Suivi des travaux avec artisans RGE",
                          "✅ Amélioration DPE (G → C)",
                          "✅ Valorisation & vente au meilleur prix",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          <span>Accompagné par Vincent LECLERC</span>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors">
                        <span>Découvrir l&apos;histoire complète</span>
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
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>

            {/* Avantages de notre accompagnement */}
            <FadeIn delay={0.4}>
              <div className="mt-16 grid md:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center"
                >
                  <div className="text-4xl mb-4">💰</div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Accès aux Subventions
                  </h4>
                  <p className="text-gray-600 text-sm">
                    MaPrimeRénov&apos;, CEE, et autres aides pour réduire le
                    coût des travaux
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center"
                >
                  <div className="text-4xl mb-4">🏗️</div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Réseau d&apos;Artisans RGE
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Partenaires certifiés pour des travaux de qualité et
                    garantis
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center"
                >
                  <div className="text-4xl mb-4">📈</div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Valorisation du Bien
                  </h4>
                  <p className="text-gray-600 text-sm">
                    DPE amélioré pour une vente rapide et au meilleur prix
                  </p>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <Section background="white">
        {/* CTA pour vendeurs */}
        <FadeIn delay={0.4}>
          <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
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
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Vous souhaitez vendre votre bien ?
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Profitez de notre expertise locale et de notre accompagnement
              personnalisé pour vendre au meilleur prix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" className="text-lg">
                Estimation gratuite
              </Button>
              <Button
                href="/biens-a-vendre"
                variant="secondary"
                className="text-lg"
              >
                Voir nos biens disponibles
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Statistiques */}
      <Section background="gray">
        <div className="text-center">
          <FadeIn>
            <SectionHeading
              label="Nos atouts"
              title={
                <>
                  Pourquoi <span className="text-blue-600">nous choisir</span> ?
                </>
              }
              subtitle="Une expertise qui fait la différence"
              showLine={true}
            />
          </FadeIn>
          <StaggerChildren className="grid gap-8 md:grid-cols-3 mt-12">
            <StaggerItem>
              <motion.div
                className="bg-white rounded-xl p-8 shadow-sm cursor-pointer h-full"
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="text-5xl font-bold text-blue-600 mb-2"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                >
                  10+
                </motion.div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  Années d&apos;expérience
                </div>
                <p className="text-base text-gray-600">
                  Une expertise approfondie du marché immobilier local
                </p>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div
                className="bg-white rounded-xl p-8 shadow-sm cursor-pointer h-full"
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="text-5xl font-bold text-blue-600 mb-2"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                >
                  100%
                </motion.div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  Accompagnement personnalisé
                </div>
                <p className="text-base text-gray-600">
                  Chaque projet est unique et mérite une attention particulière
                </p>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div
                className="bg-white rounded-xl p-8 shadow-sm cursor-pointer h-full"
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="text-5xl font-bold text-blue-600 mb-2"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                >
                  8+
                </motion.div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  Communes d&apos;expertise
                </div>
                <p className="text-base text-gray-600">
                  Nanterre, Suresnes, Rueil, Boulogne, Chatou, Bezons...
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </Section>
    </>
  );
}
