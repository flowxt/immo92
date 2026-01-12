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
    title: "Maison - Quartier des Musiciens",
    subtitle: "Idéalement située dans une rue calme et résidentielle",
    location: "Nanterre",
    surface: "116 m²",
    terrain: "254 m²",
    rooms: 6,
    roomsLabel: "6 pièces",
    image: "/photos/maison_DEBAYE/exterieur.jpg",
    price: "699 000 €",
    priceValue: 699000,
    slug: "maison-nanterre-musiciens",
    type: "maison",
    featured: false,
    available: true,
    agent: "Alexandre NAQUIN",
    rsac: "830744959",
  },
  {
    id: 2,
    title: "Appartement - Nanterre Centre",
    subtitle: "RER A - Nanterre Centre Ville",
    location: "Nanterre, Centre",
    surface: "59.89 m²",
    rooms: 3,
    roomsLabel: "3 pièces - 2 chambres",
    image: "/photos/Guerrin/ext.jpeg",
    price: "346 000 €",
    priceValue: 346000,
    slug: "appartement-nanterre-centre",
    type: "appartement",
    featured: false,
    available: true,
    agent: "Alexandre NAQUIN",
    rsac: "830744959",
    exclusive: true,
  },
  {
    id: 3,
    title: "Appartement Atypique Années 30",
    subtitle: "Proche RER, université et commerces",
    location: "Nanterre, Centre",
    surface: "55.19 m²",
    rooms: 3,
    roomsLabel: "3 pièces - 2 chambres",
    image: "/photos/Gauthier/ext.png",
    price: "250 000 €",
    priceValue: 250000,
    slug: "appartement-atypique-nanterre",
    type: "appartement",
    featured: false,
    available: true,
    agent: "Alexandre NAQUIN",
    rsac: "830744959",
    exclusive: false,
  },
  {
    id: 4,
    title: "Loft Industriel - Mont Valérien",
    subtitle: "Découvrez l'élégance urbaine au style New York",
    location: "Suresnes",
    surface: "143.05 m²",
    rooms: 5,
    roomsLabel: "5 pièces - 3 chambres",
    image: "/photos/loft/sejour.jpeg",
    price: "899 000 €",
    priceValue: 899000,
    slug: "loft-industriel-suresnes",
    type: "maison",
    featured: true,
    available: true,
    agent: "Alexandre NAQUIN",
    rsac: "830744959",
    exclusive: false,
  },
  {
    id: 5,
    title: "Maison - Mont Valérien - La Boule",
    subtitle: "Quartier résidentiel du Mont Valérien",
    location: "Rueil-Malmaison",
    surface: "112 m²",
    terrain: "625 m²",
    rooms: 5,
    roomsLabel: "5 pièces - 3 chambres",
    image: "/photos/jeff/exterieur.jpeg",
    price: "615 000 €",
    priceValue: 615000,
    slug: "maison-rueil-mont-valerien",
    type: "maison",
    featured: false,
    available: true,
    agent: "Alexandre NAQUIN",
    rsac: "830744959",
    exclusive: false,
  },
  {
    id: 6,
    title: "Maison rénovée - Mont Valérien",
    subtitle: "Entièrement rénovée, aucuns travaux à prévoir",
    location: "Suresnes",
    surface: "95.95 m²",
    rooms: 4,
    roomsLabel: "4 pièces - 3 chambres",
    image: "/photos/bellin/ext.jpeg",
    price: "549 000 €",
    priceValue: 549000,
    slug: "maison-suresnes-mont-valerien",
    type: "maison",
    featured: false,
    available: true,
    agent: "Alexandre NAQUIN",
    rsac: "830744959",
    exclusive: false,
  },
  {
    id: 7,
    title: "Appartement Familial - Mazurières",
    subtitle: "Résidence verdoyante, calme et sécurisée",
    location: "Rueil-Malmaison",
    surface: "65.49 m²",
    rooms: 3,
    roomsLabel: "3 pièces - 2 chambres",
    image: "/photos/mazuriere/salon.jpeg",
    price: "299 000 €",
    priceValue: 299000,
    slug: "appartement-rueil-mazurieres",
    type: "appartement",
    featured: false,
    available: true,
    agent: "Mhamed EL MAMLOUK",
    rsac: "805 060 431",
    exclusive: false,
  },
  {
    id: 8,
    title: "Appartement T1 Bis - Centre-ville",
    subtitle: "Métro Marcel Sembat ligne 9 à 1 minute",
    location: "Boulogne-Billancourt",
    surface: "24.88 m²",
    rooms: 2,
    roomsLabel: "2 pièces - 1 chambre",
    image: "/photos/boulogne/sejour.jpeg",
    price: "272 000 €",
    priceValue: 272000,
    slug: "appartement-boulogne-centre",
    type: "appartement",
    featured: false,
    available: true,
    agent: "Mhamed EL MAMLOUK",
    rsac: "805 060 431",
    exclusive: false,
  },
  {
    id: 9,
    title: "Studio - Carrières-sur-Seine",
    subtitle: "Idéal investisseur ou primo-accédant",
    location: "Carrières-sur-Seine",
    surface: "35 m²",
    rooms: 1,
    roomsLabel: "1 pièce",
    image: "/photos/robert/exterieur.jpeg",
    price: "173 000 €",
    priceValue: 173000,
    slug: "studio-carrieres-sur-seine",
    type: "appartement",
    featured: false,
    available: true,
    agent: "Vincent LECLERC",
    rsac: "451 258 438",
    exclusive: false,
  },
  {
    id: 10,
    title: "Appartement 3 pièces - Chatou",
    subtitle: "Cadre verdoyant et calme",
    location: "Chatou",
    surface: "70 m²",
    rooms: 3,
    roomsLabel: "3 pièces - 2 chambres",
    image: "/photos/benjamin/ext.jpeg",
    price: "327 000 €",
    priceValue: 327000,
    slug: "appartement-chatou-3-pieces",
    type: "appartement",
    featured: false,
    available: true,
    agent: "Vincent LECLERC",
    rsac: "451 258 438",
    exclusive: false,
  },
  {
    id: 12,
    title: "Appartement 4 pièces - Garches centre",
    subtitle: "Environnement verdoyant - Accès Paris & La Défense",
    location: "Garches",
    surface: "84 m²",
    rooms: 4,
    roomsLabel: "4 pièces - 3 chambres",
    image: "/photos/guimot/ext.jpeg",
    price: "450 000 €",
    priceValue: 450000,
    slug: "appartement-garches-centre",
    type: "appartement",
    featured: false,
    available: true,
    agent: "Vincent LECLERC",
    rsac: "451 258 438",
    exclusive: false,
  },
  {
    id: 13,
    title: "Appartement 3 pièces lumineux avec deux terrasses",
    subtitle: "Résidence récente et sécurisée - Quartier du Plateau",
    location: "Suresnes",
    surface: "66.41 m²",
    rooms: 3,
    roomsLabel: "3 pièces - 2 chambres",
    image: "/photos/iouga/salon.jpeg",
    price: "459 000 €",
    priceValue: 459000,
    slug: "appartement-suresnes-plateau-terrasses",
    type: "appartement",
    featured: false,
    available: true,
    agent: "Vincent LECLERC",
    rsac: "451 258 438",
    exclusive: false,
  },
  {
    id: 14,
    title: "Maison familiale Mont Valérien - EXCLUSIVITÉ",
    subtitle: "Charmante maison familiale avec 3 places de parking",
    location: "Suresnes",
    surface: "192 m²",
    terrain: "118 m²",
    rooms: 6,
    roomsLabel: "6 pièces - 4 chambres",
    image: "/photos/maison/exterieur.jpeg",
    price: "748 000 €",
    priceValue: 748000,
    slug: "maison-suresnes-familiale-exclusivite",
    type: "maison",
    featured: false,
    available: true,
    agent: "Alexandre NAQUIN",
    rsac: "830744959",
    exclusive: true,
  },
  {
    id: 15,
    title: "Maison Familiale Contemporaine",
    subtitle: "Alliance parfaite entre modernité, calme et verdure",
    location: "Suresnes",
    surface: "120 m²",
    terrain: "165 m²",
    rooms: 5,
    roomsLabel: "5 pièces - 4 chambres",
    image: "/photos/maison-jardin/exterieur.jpeg",
    price: "830 000 €",
    priceValue: 830000,
    slug: "maison-suresnes-contemporaine-jardin",
    type: "maison",
    featured: false,
    available: true,
    agent: "Vincent LECLERC",
    rsac: "451 258 438",
    exclusive: false,
  },
  {
    id: 16,
    title: "Maison à fort potentiel - Mont-Valérien",
    subtitle: "Maison de charme sur 446 m² de terrain avec vue dégagée",
    location: "Suresnes",
    surface: "110 m²",
    terrain: "446 m²",
    rooms: 4,
    roomsLabel: "4 pièces - 3 chambres",
    image: "/photos/maison-849/ext.jpeg",
    price: "849 000 €",
    priceValue: 849000,
    slug: "maison-suresnes-mont-valerien-potentiel",
    type: "maison",
    featured: false,
    available: true,
    agent: "Vincent LECLERC",
    rsac: "451 258 438",
    exclusive: false,
  },
  {
    id: 17,
    title: "Maison à fort potentiel - Nanterre Mont Valérien",
    subtitle: "Terrain généreux de 429 m² dans un secteur recherché",
    location: "Nanterre, Mont-Valérien",
    surface: "93.47 m²",
    terrain: "429 m²",
    rooms: 4,
    roomsLabel: "4 pièces - 3 chambres",
    image: "/photos/bonniec/ext.jpeg",
    price: "449 000 €",
    priceValue: 449000,
    slug: "maison-nanterre-mont-valerien-a-renover",
    type: "maison",
    featured: false,
    available: true,
    agent: "Vincent LECLERC",
    rsac: "451 258 438",
    exclusive: false,
  },
];

export default function BiensAVendre() {
  const [filters, setFilters] = useState({
    type: "all",
    rooms: "all",
    priceRange: "all",
  });

  // Filtrer et trier les propriétés
  const filteredProperties = useMemo(() => {
    const filtered = allProperties.filter((property) => {
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
        if (filters.priceRange === "0-200000" && priceValue >= 200000)
          return false;
        if (
          filters.priceRange === "200000-400000" &&
          (priceValue < 200000 || priceValue >= 400000)
        )
          return false;
        if (
          filters.priceRange === "400000-600000" &&
          (priceValue < 400000 || priceValue >= 600000)
        )
          return false;
        if (
          filters.priceRange === "600000-800000" &&
          (priceValue < 600000 || priceValue >= 800000)
        )
          return false;
        if (filters.priceRange === "800000+" && priceValue < 800000)
          return false;
      }

      return true;
    });

    // Tri par prix croissant
    return filtered.sort((a, b) => a.priceValue - b.priceValue);
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
                Nos biens <span className="text-[#2998a6]">disponibles</span>
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
                exclusive={property.exclusive}
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2998a6] text-white rounded-lg hover:bg-[#0d6c8a] transition-colors font-semibold"
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

        {/* CTA Carte interactive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-[#1e3771] via-[#2998a6] to-[#0d6c8a] rounded-2xl p-8 md:p-10 text-white overflow-hidden relative shadow-2xl"
        >
          {/* Décorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* Icône */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
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
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
            </div>

            {/* Contenu */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Visualisez tous les biens sur une carte
              </h3>
              <p className="text-white/90 text-lg">
                Découvrez l&apos;emplacement exact de chaque bien et explorez le
                secteur en un coup d&apos;œil
              </p>
            </div>

            {/* Bouton */}
            <div className="flex-shrink-0">
              <a
                href="/carte-biens"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#2998a6] rounded-xl font-bold hover:bg-[#2998a6]/5 transition-all hover:scale-105 shadow-xl"
              >
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
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                Voir la carte
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats rapides */}
          <div className="relative z-10 mt-8 pt-8 border-t border-white/20 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">
                {filteredProperties.length}
              </div>
              <div className="text-white/70 text-sm">Biens disponibles</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">4</div>
              <div className="text-white/70 text-sm">Communes</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-white/70 text-sm">Géolocalisés</div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Zones de recherche */}
      <Section background="gray">
        <FadeIn>
          <SectionHeading
            label="Notre territoire"
            title={
              <>
                Nos secteurs{" "}
                <span className="text-[#2998a6]">d&apos;intervention</span>
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
