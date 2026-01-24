"use client";

import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

// Liste des biens vendus (le plus récent en premier)
const soldProperties = [
  {
    id: 1,
    image: "/photos/vente-690000.jpeg",
    address: "Rue des Ombraies",
    city: "92000 Nanterre",
    price: "690 000 €",
  },
  {
    id: 2,
    image: "/photos/biens-vendu/charles-degaulle.jpg",
    address: "Boulevard Charles de Gaulle",
    city: "92700 Colombes",
    price: "305 000 €",
  },
  {
    id: 3,
    image: "/photos/biens-vendu/bezons.jpg",
    address: "3 rue de la Paix",
    city: "95870 Bezons",
    price: "272 000 €",
  },
  {
    id: 4,
    image: "/photos/biens-vendu/luaps.jpg",
    address: "20 rue des Luaps prolongées",
    city: "92000 Nanterre",
    price: "802 500 €",
  },
  {
    id: 5,
    image: "/photos/biens-vendu/rueil.jpg",
    address: "11 bis rue Daniel Casanova",
    city: "92500 Rueil-Malmaison",
    price: "249 000 €",
  },
  {
    id: 6,
    image: "/photos/biens-vendu/becquet.jpg",
    address: "Rue Becquet",
    city: "92000 Nanterre",
    price: "242 000 €",
  },
];

// Carte CTA
const ctaCard = {
  id: "cta",
  isCta: true,
};

// Toutes les cartes (biens + CTA)
const allCards = [...soldProperties, ctaCard];

export default function BiensVendus() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Navigation vers la carte suivante
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % allCards.length);
  }, []);

  // Navigation vers la carte précédente
  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + allCards.length) % allCards.length);
  }, []);

  // Aller à une carte spécifique
  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change toutes les 4 secondes

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Pause l'auto-play au survol
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const currentCard = allCards[currentIndex];

  // Variants pour l'animation
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

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
                Nos <span className="text-[#2998a6]">réussites</span>
              </>
            }
            subtitle="Des projets menés avec succès"
            showLine={true}
          />
        </FadeIn>

        {/* Carrousel */}
        <FadeIn delay={0.2}>
          <div
            className="relative max-w-2xl mx-auto mt-12"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Conteneur du carrousel */}
            <div className="relative h-[480px] overflow-hidden rounded-3xl">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                  }}
                  className="absolute inset-0"
                >
                  {currentCard.isCta ? (
                    // Carte CTA
                    <div className="h-full bg-gradient-to-br from-[#1e3771] via-[#2998a6] to-[#0d6c8a] rounded-3xl p-8 flex flex-col items-center justify-center text-center text-white shadow-2xl">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
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
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold mb-4">
                        Vous aussi vous souhaitez vendre ?
                      </h3>
                      <p className="text-lg text-white/90 mb-8 max-w-md">
                        Profitez de notre expertise locale et de notre
                        accompagnement personnalisé pour vendre au meilleur
                        prix.
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white text-[#1e3771] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                      >
                        <span>Estimation gratuite</span>
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
                    </div>
                  ) : (
                    // Carte bien vendu
                    <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-2xl group">
                      {/* Image */}
                      <div className="relative h-full">
                        <Image
                          src={currentCard.image}
                          alt={currentCard.address}
                          fill
                          className="object-cover"
                          priority
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

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
                            VENDU
                          </div>
                        </div>

                        {/* Informations en bas */}
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <div className="text-white">
                            <h3 className="text-2xl font-bold mb-2">
                              {currentCard.address}
                            </h3>
                            <p className="text-white/80 text-lg mb-4">
                              {currentCard.city}
                            </p>
                            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                              <span className="text-3xl font-bold text-white">
                                {currentCard.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Boutons de navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
              aria-label="Précédent"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
              aria-label="Suivant"
            >
              <svg
                className="w-6 h-6 text-gray-800"
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
            </button>

            {/* Indicateurs de pagination */}
            <div className="flex justify-center gap-2 mt-6">
              {allCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-[#2998a6]"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Aller à la carte ${index + 1}`}
                />
              ))}
            </div>

            {/* Compteur */}
            <div className="text-center mt-4 text-gray-500">
              {currentIndex + 1} / {allCards.length}
            </div>
          </div>
        </FadeIn>

        {/* Encart plus de ventes */}
        <FadeIn delay={0.3}>
          <div className="mt-16 bg-gradient-to-br from-[#1e3771] via-[#2998a6] to-[#0d6c8a] rounded-2xl p-8 md:p-10 text-center text-white shadow-2xl max-w-4xl mx-auto">
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
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                  Plus d&apos;une dizaine de biens vendus avec succès
                </h3>
                <p className="text-lg text-white/90">
                  Les biens présentés ci-dessus ne sont qu&apos;un aperçu de
                  notre expertise. Nous avons accompagné de nombreux clients
                  dans la réussite de leur projet immobilier.
                </p>
              </div>
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
                  Pourquoi <span className="text-[#2998a6]">nous choisir</span>{" "}
                  ?
                </>
              }
              subtitle="Une expertise qui fait la différence"
              showLine={true}
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="grid gap-8 md:grid-cols-3 mt-12">
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
                  className="text-5xl font-bold text-[#2998a6] mb-2"
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
                  className="text-5xl font-bold text-[#2998a6] mb-2"
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
                  className="text-5xl font-bold text-[#2998a6] mb-2"
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
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
