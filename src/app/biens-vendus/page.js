"use client";

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

        {/* CTA pour vendeurs */}
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12">
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
              <Button href="/biens-a-vendre" variant="secondary" className="text-lg">
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
