"use client";

import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import { useState } from "react";

// Photos de la rénovation
const renovationPhotos = [
  { src: "/photos/autret/facade-avant.jpeg", alt: "Façade avant rénovation" },
  { src: "/photos/autret/sejour.jpeg", alt: "Séjour rénové" },
  { src: "/photos/autret/chambre.jpeg", alt: "Chambre" },
  { src: "/photos/autret/terrasse.jpeg", alt: "Terrasse" },
];

const travauxPhotos = [
  { src: "/photos/autret/travaux-renov/travaux1.jpeg", alt: "Travaux 1" },
  { src: "/photos/autret/travaux-renov/travaux2.jpeg", alt: "Travaux 2" },
  { src: "/photos/autret/travaux-renov/travaux3.jpeg", alt: "Travaux 3" },
  { src: "/photos/autret/travaux-renov/travaux4.jpeg", alt: "Travaux 4" },
  { src: "/photos/autret/travaux-renov/travaux5.jpeg", alt: "Travaux 5" },
  { src: "/photos/autret/travaux-renov/travaux6.jpeg", alt: "Travaux 6" },
];

export default function AccompagnementPersonnalise() {
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  return (
    <>
      <Hero
        subtitle="Notre expertise"
        title="Un accompagnement personnalisé pour chaque projet"
        description="Rénovation énergétique, division de terrain... Nous vous guidons de A à Z dans vos projets de valorisation immobilière."
        imageSrc="/photos/autret/facade-avant.jpeg"
        fullHeight={false}
      />

      {/* Introduction */}
      <Section background="white">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              label="Notre philosophie"
              title={
                <>
                  Chaque projet est{" "}
                  <span className="text-[#2998a6]">unique</span>
                </>
              }
              showLine={true}
            />
            <p className="text-lg text-gray-600 leading-relaxed">
              Chez Ener Immo 92, nous croyons qu&apos;un accompagnement
              personnalisé fait toute la différence. Que vous souhaitiez
              améliorer le DPE de votre bien, diviser votre terrain ou optimiser
              votre patrimoine, nous sommes à vos côtés à chaque étape.
            </p>
          </div>
        </FadeIn>

        {/* Deux piliers */}
        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Rénovation énergétique */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 shadow-lg"
            >
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Rénovation Énergétique
              </h3>
              <p className="text-gray-600 mb-6">
                Transformez votre passoire énergétique en bien éco-performant.
                Nous vous accompagnons dans le diagnostic, les travaux et
                l&apos;obtention des aides.
              </p>
              <ul className="space-y-3">
                {[
                  "Diagnostic énergétique complet",
                  "Plan de rénovation personnalisé",
                  "Accès aux subventions (MaPrimeRénov', CEE...)",
                  "Réseau d'artisans RGE certifiés",
                  "Suivi des travaux de A à Z",
                  "Amélioration du DPE garantie",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-green-600 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Division de terrain */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100 shadow-lg"
            >
              <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mb-6">
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
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Division de Terrain
              </h3>
              <p className="text-gray-600 mb-6">
                Optimisez la valeur de votre patrimoine foncier. Nous vous
                guidons dans toutes les démarches administratives et techniques.
              </p>
              <ul className="space-y-3">
                {[
                  "Étude de faisabilité du projet",
                  "Analyse du PLU et règlements",
                  "Accompagnement géomètre-expert",
                  "Constitution du dossier",
                  "Suivi des autorisations",
                  "Valorisation optimale de chaque lot",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-amber-600 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </FadeIn>
      </Section>

      {/* Success Story - Rénovation Énergétique */}
      <div className="bg-gradient-to-br from-[#2998a6]/5 via-white to-[#2998a6]/10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg mb-6">
                <span className="text-3xl">🏆</span>
                <span className="font-bold text-xl text-[#0c233c]">
                  Success Story
                </span>
              </div>
              <SectionHeading
                label="Accompagnement Rénovation Énergétique"
                title={
                  <>
                    De passoire énergétique à{" "}
                    <span className="text-[#0d6c8a]">maison éco-performante</span>
                  </>
                }
                subtitle="Découvrez comment nous accompagnons nos clients de A à Z"
                showLine={true}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Galerie photos */}
                <div className="relative">
                  {/* Photo principale */}
                  <div className="relative h-80 lg:h-full min-h-[400px]">
                    <Image
                      src={renovationPhotos[selectedPhoto].src}
                      alt={renovationPhotos[selectedPhoto].alt}
                      fill
                      className="object-cover"
                    />
                    {/* Badge VENDU */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-[#0d6c8a] text-white px-6 py-3 rounded-full font-bold text-lg shadow-xl flex items-center gap-2">
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
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        VENDU 459 000 €
                      </div>
                    </div>

                    {/* Transformation DPE */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl">
                        <div className="flex items-center justify-center gap-6">
                          <div className="text-center">
                            <div className="text-red-600 font-bold text-3xl">
                              G
                            </div>
                            <div className="text-xs text-gray-600">
                              DPE Avant
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-12 h-0.5 bg-gray-300"></div>
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
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                            <div className="w-12 h-0.5 bg-gray-300"></div>
                          </div>
                          <div className="text-center">
                            <div className="text-[#0d6c8a] font-bold text-3xl">
                              C
                            </div>
                            <div className="text-xs text-gray-600">
                              DPE Après
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Miniatures */}
                  <div className="absolute bottom-24 left-6 flex gap-2">
                    {renovationPhotos.map((photo, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedPhoto(index)}
                        className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          selectedPhoto === index
                            ? "border-white shadow-lg scale-110"
                            : "border-white/50 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-8 lg:p-10">
                  <div className="mb-6">
                    <p className="text-sm text-[#2998a6] font-semibold mb-2">
                      Maison à Nanterre
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Accompagnement Complet Rénovation Énergétique
                    </h3>
                    <p className="text-gray-600">
                      Découvrez comment nous avons accompagné nos clients dans la
                      transformation complète d&apos;une passoire énergétique en
                      maison éco-performante, avec un gain de 4 classes DPE.
                    </p>
                  </div>

                  {/* Caractéristiques */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-[#0d6c8a]">
                        92 m²
                      </div>
                      <div className="text-sm text-gray-600">Surface</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-[#2998a6]">
                        525 m²
                      </div>
                      <div className="text-sm text-gray-600">Terrain</div>
                    </div>
                  </div>

                  {/* Notre accompagnement */}
                  <div className="bg-gradient-to-br from-[#2998a6]/5 to-[#2998a6]/10 rounded-2xl p-6 mb-6">
                    <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">🤝</span>
                      Notre Accompagnement 100%
                    </h4>
                    <div className="grid gap-3">
                      {[
                        "Diagnostic énergétique complet",
                        "Plan de rénovation personnalisé",
                        "Accès aux subventions & aides (MaPrimeRénov')",
                        "Suivi des travaux avec artisans RGE",
                        "Amélioration DPE (G → C)",
                        "Valorisation & vente au meilleur prix",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <svg
                            className="w-5 h-5 text-[#2998a6] flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Agent */}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
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
              </div>

              {/* Photos des travaux */}
              <div className="bg-gray-50 p-6 border-t">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🏗️</span>
                  Photos des travaux
                </h4>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {travauxPhotos.map((photo, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Avantages */}
      <Section background="white">
        <FadeIn>
          <SectionHeading
            label="Pourquoi nous choisir"
            title={
              <>
                Les avantages de notre{" "}
                <span className="text-[#2998a6]">accompagnement</span>
              </>
            }
            subtitle="Un service complet et personnalisé"
            showLine={true}
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100"
            >
              <div className="text-5xl mb-6">💰</div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">
                Accès aux Subventions
              </h4>
              <p className="text-gray-600">
                MaPrimeRénov&apos;, CEE, éco-PTZ et autres aides pour réduire
                significativement le coût de vos travaux.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100"
            >
              <div className="text-5xl mb-6">🏗️</div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">
                Réseau d&apos;Artisans RGE
              </h4>
              <p className="text-gray-600">
                Partenaires certifiés pour des travaux de qualité, garantis et
                conformes aux exigences des aides.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100"
            >
              <div className="text-5xl mb-6">📈</div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">
                Valorisation du Bien
              </h4>
              <p className="text-gray-600">
                DPE amélioré, terrain optimisé : des atouts majeurs pour une
                vente rapide et au meilleur prix.
              </p>
            </motion.div>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section background="gray">
        <FadeIn>
          <div className="text-center bg-gradient-to-br from-[#1e3771] via-[#2998a6] to-[#0d6c8a] rounded-3xl p-12 text-white shadow-2xl">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Vous avez un projet de rénovation ou de division ?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Parlons de votre projet ! Notre équipe vous accompagne dans toutes
              les étapes pour valoriser au maximum votre bien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1e3771] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <span>Discuter de mon projet</span>
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
              </Link>
              <Link
                href="/nos-services"
                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-colors"
              >
                <span>Tous nos services</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

