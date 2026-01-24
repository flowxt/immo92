"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import InteractiveMap from "@/components/InteractiveMap";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

export default function CarteBiensPage() {
  // Tous les biens avec leurs coordonnées GPS
  const allProperties = [
    {
      id: 1,
      title: "Maison - Quartier des Musiciens",
      location: "Nanterre",
      price: "699 000 €",
      image: "/photos/maison_DEBAYE/exterieur.jpg",
      slug: "maison-nanterre-musiciens",
      lat: 48.892,
      lng: 2.207,
    },
    {
      id: 2,
      title: "Appartement - Nanterre Centre",
      location: "Nanterre, Centre",
      price: "346 000 €",
      image: "/photos/Guerrin/ext.jpeg",
      slug: "appartement-nanterre-centre",
      lat: 48.8925,
      lng: 2.2055,
    },
    {
      id: 3,
      title: "Appartement Atypique Années 30",
      location: "Nanterre, Centre",
      price: "250 000 €",
      image: "/photos/Gauthier/ext.png",
      slug: "appartement-atypique-nanterre",
      lat: 48.891,
      lng: 2.2045,
    },
    {
      id: 4,
      title: "Loft Industriel - Mont Valérien",
      location: "Suresnes",
      price: "850 000 €",
      image: "/photos/loft/sejour.jpeg",
      slug: "loft-industriel-suresnes",
      lat: 48.87,
      lng: 2.22,
    },
    {
      id: 5,
      title: "Maison - Mont Valérien - La Boule",
      location: "Rueil-Malmaison",
      price: "615 000 €",
      image: "/photos/jeff/exterieur.jpeg",
      slug: "maison-rueil-mont-valerien",
      lat: 48.8698,
      lng: 2.1839,
    },
    {
      id: 6,
      title: "Maison rénovée - Mont Valérien",
      location: "Suresnes",
      price: "549 000 €",
      image: "/photos/bellin/ext.jpeg",
      slug: "maison-suresnes-mont-valerien",
      lat: 48.8715,
      lng: 2.2195,
    },
    {
      id: 7,
      title: "Appartement Familial - Mazurières",
      location: "Rueil-Malmaison",
      price: "299 000 €",
      image: "/photos/mazuriere/salon.jpeg",
      slug: "appartement-rueil-mazurieres",
      lat: 48.8795,
      lng: 2.1775,
    },
    {
      id: 8,
      title: "Appartement T1 Bis - Centre-ville",
      location: "Boulogne-Billancourt",
      price: "272 000 €",
      image: "/photos/boulogne/sejour.jpeg",
      slug: "appartement-boulogne-centre",
      lat: 48.8352,
      lng: 2.2408,
    },
    {
      id: 9,
      title: "Studio - Carrières-sur-Seine",
      location: "Carrières-sur-Seine",
      price: "173 000 €",
      image: "/photos/robert/exterieur.jpeg",
      slug: "studio-carrieres-sur-seine",
      lat: 48.9088,
      lng: 2.1818,
    },
    {
      id: 10,
      title: "Appartement 3 pièces - Chatou",
      location: "Chatou",
      price: "327 000 €",
      image: "/photos/benjamin/ext.jpeg",
      slug: "appartement-chatou-3-pieces",
      lat: 48.8953,
      lng: 2.1574,
    },
    {
      id: 11,
      title: "Maison 4 pièces avec jardin - Mont-Valérien",
      location: "Nanterre",
      price: "690 000 €",
      image: "/photos/jardin/jardin.jpeg",
      slug: "maison-nanterre-mont-valerien-jardin",
      lat: 48.8895,
      lng: 2.2095,
    },
    {
      id: 12,
      title: "Appartement 4 pièces - Garches centre",
      location: "Garches",
      price: "450 000 €",
      image: "/photos/guimot/ext.jpeg",
      slug: "appartement-garches-centre",
      lat: 48.8428,
      lng: 2.1873,
    },
    {
      id: 13,
      title: "Appartement 3 pièces lumineux avec deux terrasses",
      location: "Suresnes",
      price: "459 000 €",
      image: "/photos/iouga/salon.jpeg",
      slug: "appartement-suresnes-plateau-terrasses",
      lat: 48.872,
      lng: 2.218,
    },
    {
      id: 14,
      title: "Maison familiale Mont Valérien - EXCLUSIVITÉ",
      location: "Suresnes",
      price: "699 000 €",
      image: "/photos/maison/exterieur.jpeg",
      slug: "maison-suresnes-familiale-exclusivite",
      lat: 48.8738,
      lng: 2.2165,
    },
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
    {
      id: 16,
      title: "Maison à fort potentiel - Mont-Valérien",
      location: "Suresnes",
      price: "849 000 €",
      image: "/photos/maison-849/ext.jpeg",
      slug: "maison-suresnes-mont-valerien-potentiel",
      lat: 48.8750,
      lng: 2.2180,
    },
    {
      id: 17,
      title: "Maison à fort potentiel - Nanterre Mont Valérien",
      location: "Nanterre",
      price: "449 000 €",
      image: "/photos/bonniec/ext.jpeg",
      slug: "maison-nanterre-mont-valerien-a-renover",
      lat: 48.8885,
      lng: 2.2100,
    },
    {
      id: 18,
      title: "Maison idéale profession libérale",
      location: "Rueil-Malmaison",
      price: "589 000 €",
      image: "/photos/vm38106/presentation.jpeg",
      slug: "maison-rueil-profession-liberale",
      lat: 48.8698,
      lng: 2.1889,
    },
    {
      id: 19,
      title: "Maison 5 pièces avec jardin - Mont-Valérien",
      location: "Nanterre",
      price: "679 000 €",
      image: "/photos/valerien-jardin/ext.jpeg",
      slug: "maison-nanterre-mont-valerien-jardin",
      lat: 48.8892,
      lng: 2.2095,
    },
    {
      id: 20,
      title: "Maison de ville Familiale",
      location: "Puteaux",
      price: "949 000 €",
      image: "/photos/puteaux/salon_1er.jpeg",
      slug: "maison-puteaux-bergere",
      lat: 48.8847,
      lng: 2.2397,
    },
  ];

  const features = [
    {
      icon: "📍",
      title: "Localisation précise",
      description: "Visualisez l'emplacement exact de chaque bien",
    },
    {
      icon: "🏘️",
      title: "Vue d'ensemble",
      description: "Tous nos biens sur une seule carte interactive",
    },
    {
      icon: "🖱️",
      title: "Navigation intuitive",
      description: "Cliquez sur un marker pour voir les détails",
    },
    {
      icon: "🗺️",
      title: "Zoom et déplacement",
      description: "Explorez le secteur à votre guise",
    },
  ];

  return (
    <>
      <Hero
        subtitle="Localisation"
        title="Carte interactive de nos biens"
        description="Découvrez l'emplacement de tous nos biens disponibles dans les Hauts-de-Seine."
        imageSrc="/photos/mont-valerien.jpg"
        fullHeight={false}
      />

      <Section background="white">
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {allProperties.length} biens disponibles
            </h2>
            <p className="text-lg text-gray-600">
              Cliquez sur un marker pour afficher les informations du bien
            </p>
          </div>
        </FadeIn>

        {/* Carte principale */}
        <div className="mb-12">
          <InteractiveMap properties={allProperties} height="600px" zoom={13} />
        </div>

        {/* Liste des biens */}
        <FadeIn delay={0.3}>
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Liste des biens sur la carte
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allProperties.map((property, index) => (
                <motion.a
                  key={property.id}
                  href={`/biens-a-vendre/${property.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2998a6]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#2998a6] transition-colors">
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        📍
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1 group-hover:text-[#2998a6] transition-colors">
                        {property.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {property.location}
                      </p>
                      <p className="text-sm font-semibold text-[#2998a6]">
                        {property.price}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Fonctionnalités */}
      <Section background="gray">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi utiliser la carte ?
            </h2>
            <p className="text-lg text-gray-600">
              Un outil pratique pour visualiser nos biens disponibles
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#2998a6]/5 border-l-4 border-[#2998a6] p-6 rounded-lg"
        >
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-[#2998a6]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[#0c233c] mb-2">💡 Astuce</h3>
              <p className="text-[#06465c] text-sm">
                Sur la carte, vous pouvez zoomer avec la molette de la souris ou
                les boutons + / -, et déplacer la vue en glissant. Cliquez sur
                un marker bleu pour voir la fiche complète du bien avec photo et
                prix.
              </p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#2998a6] to-[#0d6c8a] rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Besoin d&apos;aide pour trouver le bien idéal ?
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Notre équipe connaît parfaitement le secteur et peut vous
            accompagner dans votre recherche
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/biens-a-vendre"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2998a6] rounded-lg font-bold hover:bg-[#2998a6]/5 transition-colors"
            >
              Voir tous les biens
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
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2998a6] text-white rounded-lg font-bold hover:bg-[#2998a6]/40 transition-colors"
            >
              Contactez-nous
            </a>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
