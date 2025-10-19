"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/StaggerChildren";
import { motion } from "framer-motion";

export default function BiensAVendre() {
  return (
    <>
      <Hero
        title="Découvrez nos biens à vendre autour du Mont-Valérien"
        description="Nous sélectionnons avec soin chaque maison et appartement pour leur qualité, leur potentiel et leur emplacement privilégié. Explorez nos annonces à Nanterre, Puteaux, Suresnes et Rueil-Malmaison, et trouvez le bien qui correspond à vos attentes."
        imageSrc="/photos/mont-valerien.jpg"
        fullHeight={false}
      />

      <Section background="white">
        <FadeIn>
          <SectionHeading
            title="Nos biens disponibles"
            subtitle="Sélection de propriétés d&apos;exception"
          />
        </FadeIn>

        {/* Placeholder pour les annonces */}
        <FadeIn delay={0.2}>
          <div className="text-center py-16">
            <svg
              className="mx-auto h-24 w-24 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
              />
            </svg>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              Biens disponibles prochainement
            </h3>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Nous mettons régulièrement à jour notre sélection de biens
              d&apos;exception autour du Mont-Valérien. Contactez-nous pour être
              informé en priorité de nos nouvelles annonces.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary">
                Être alerté des nouveautés
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Zones de recherche */}
      <Section background="gray">
        <FadeIn>
          <SectionHeading
            title="Nos secteurs d'intervention"
            subtitle="Des communes dynamiques et recherchées"
          />
        </FadeIn>
        <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Nanterre",
              description: "Proche de La Défense, dynamique et bien desservie",
            },
            {
              name: "Puteaux",
              description: "Au cœur du quartier d'affaires de La Défense",
            },
            {
              name: "Suresnes",
              description: "Cadre de vie privilégié avec vue sur Paris",
            },
            {
              name: "Rueil-Malmaison",
              description: "Ville verte et résidentielle recherchée",
            },
          ].map((zone) => (
            <StaggerItem key={zone.name}>
              <motion.div
                className="bg-white rounded-xl p-6 shadow-sm cursor-pointer h-full"
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {zone.name}
                </h3>
                <p className="text-base text-gray-600">{zone.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>
    </>
  );
}
