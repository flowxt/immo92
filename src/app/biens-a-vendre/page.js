"use client";

import { useState, useMemo } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/StaggerChildren";
import PropertyCard from "@/components/PropertyCard";
import PropertyFilters from "@/components/PropertyFilters";
import { motion } from "framer-motion";

// Données des propriétés (à remplacer par Sanity plus tard)
const allProperties = [
    {
      id: 1,
      title: "Loft Industriel - Mont Valérien",
      subtitle: "Découvrez l'élégance urbaine : votre loft industriel au style New York",
      location: "Mont Valérien, quartier résidentiel",
      surface: "170 m²",
      rooms: 3,
      roomsLabel: "3 chambres + bureau",
      image: "/photos/annonce1.png",
      price: null,
      priceValue: 750000,
      slug: "loft-industriel",
      type: "appartement",
      featured: true,
      available: true,
    },
    {
      id: 2,
      title: "Maison Familiale - Suresnes",
      subtitle: "Maison de caractère avec jardin et vue dégagée",
      location: "Suresnes, proche transports",
      surface: "150 m²",
      rooms: 5,
      roomsLabel: "5 pièces",
      image: "/photos/mont-valerien.jpg",
      price: "685 000 €",
      priceValue: 685000,
      slug: "maison-suresnes",
      type: "maison",
      featured: false,
      available: true,
    },
    {
      id: 3,
      title: "Appartement T3 - Nanterre",
      subtitle: "Appartement moderne proche La Défense",
      location: "Nanterre, quartier calme",
      surface: "75 m²",
      rooms: 3,
      roomsLabel: "3 pièces",
      image: "/photos/interieur.png",
      price: "320 000 €",
      priceValue: 320000,
      slug: "appartement-nanterre",
      type: "appartement",
      featured: false,
      available: true,
    },
    {
      id: 4,
      title: "Villa d'exception - Rueil-Malmaison",
      subtitle: "Villa de prestige avec piscine et jardin paysager",
      location: "Rueil-Malmaison, secteur prisé",
      surface: "280 m²",
      rooms: 7,
      roomsLabel: "7 pièces",
      image: "/photos/moitie-renov.png",
      price: "1 250 000 €",
      priceValue: 1250000,
      slug: "villa-rueil",
      type: "maison",
      featured: true,
      available: true,
    },
    {
      id: 5,
      title: "Studio - Puteaux",
      subtitle: "Studio fonctionnel idéal investisseur",
      location: "Puteaux, proche métro",
      surface: "28 m²",
      rooms: 1,
      roomsLabel: "1 pièce",
      image: "/photos/interieur.png",
      price: "185 000 €",
      priceValue: 185000,
      slug: "studio-puteaux",
      type: "appartement",
      featured: false,
      available: true,
    },
    {
      id: 6,
      title: "Terrain constructible - Nanterre",
      subtitle: "Belle opportunité pour votre projet immobilier",
      location: "Nanterre, zone résidentielle",
      surface: "450 m²",
      rooms: 0,
      roomsLabel: "Terrain",
      image: "/photos/mont-valerien.jpg",
      price: "420 000 €",
      priceValue: 420000,
      slug: "terrain-nanterre",
      type: "terrain",
      featured: false,
      available: true,
    },
];

export default function BiensAVendre() {
  const [filters, setFilters] = useState({
    type: "all",
    rooms: "all",
    priceRange: "all",
  });

  // Filtrer les propriétés
  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      // Filtre par type
      if (filters.type !== "all" && property.type !== filters.type) {
        return false;
      }

      // Filtre par nombre de pièces
      if (filters.rooms !== "all") {
        if (filters.rooms === "5+") {
          if (property.rooms < 5) return false;
        } else {
          if (property.rooms !== parseInt(filters.rooms)) return false;
        }
      }

      // Filtre par prix
      if (filters.priceRange !== "all") {
        const priceValue = property.priceValue;
        if (filters.priceRange === "0-200000" && priceValue >= 200000) return false;
        if (filters.priceRange === "200000-400000" && (priceValue < 200000 || priceValue >= 400000)) return false;
        if (filters.priceRange === "400000-600000" && (priceValue < 400000 || priceValue >= 600000)) return false;
        if (filters.priceRange === "600000-800000" && (priceValue < 600000 || priceValue >= 800000)) return false;
        if (filters.priceRange === "800000+" && priceValue < 800000) return false;
      }

      return true;
    });
  }, [filters]);

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

        {/* Filtres */}
        <PropertyFilters
          filters={filters}
          setFilters={setFilters}
          counts={filteredProperties.length}
        />

        {/* Annonces filtrées */}
        {filteredProperties.length > 0 ? (
          <motion.div
            key={`${filters.type}-${filters.rooms}-${filters.priceRange}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                title={property.title}
                subtitle={property.subtitle}
                location={property.location}
                surface={property.surface}
                rooms={property.roomsLabel}
                image={property.image}
                price={property.price}
                slug={property.slug}
                featured={property.featured}
                available={property.available}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Aucun bien trouvé
            </h3>
            <p className="text-gray-600 mb-6">
              Essayez de modifier vos critères de recherche
            </p>
            <button
              onClick={() =>
                setFilters({ type: "all", rooms: "all", priceRange: "all" })
              }
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
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
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Réinitialiser les filtres
            </button>
          </motion.div>
        )}
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
