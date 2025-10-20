"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/StaggerChildren";
import PropertyCard from "@/components/PropertyCard";
import { motion } from "framer-motion";

export default function BiensAVendre() {
  return (
    <>
      <Hero
        subtitle="Biens à vendre"
        title="Trouvez votre futur bien dans les Hauts-de-Seine"
        description="Maisons et appartements sélectionnés pour leur qualité et leur emplacement privilégié autour du Mont-Valérien."
        imageSrc="/photos/mont-valerien.jpg"
        fullHeight={false}
      />

      <Section background="white">
        <FadeIn>
          <SectionHeading
            label="Nos annonces"
            title={
              <>
                Nos biens <span className="text-blue-600">disponibles</span>
              </>
            }
            subtitle="Sélection de propriétés d'exception"
            showLine={true}
          />
        </FadeIn>

        {/* Annonces */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PropertyCard
            title="Loft Industriel - Mont Valérien"
            subtitle="Découvrez l'élégance urbaine : votre loft industriel au style New York"
            location="Mont Valérien, quartier résidentiel"
            surface="170 m²"
            rooms="3 chambres + bureau"
            image="/photos/annonce1.png"
            price={null}
            slug="loft-industriel"
            featured={true}
            available={true}
          />
        </div>
      </Section>

      {/* Zones de recherche */}
      <Section background="gray">
        <FadeIn>
          <SectionHeading
            label="Notre territoire"
            title={
              <>
                Nos secteurs{" "}
                <span className="text-blue-600">d&apos;intervention</span>
              </>
            }
            subtitle="Des communes dynamiques et recherchées"
            showLine={true}
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
