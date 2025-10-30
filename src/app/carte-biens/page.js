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
      lat: 48.8920,
      lng: 2.2070,
    },
  ];

  const features = [
    {
      icon: "📍",
      title: "Localisation précise",
      description: "Visualisez l'emplacement exact de chaque bien"
    },
    {
      icon: "🏘️",
      title: "Vue d'ensemble",
      description: "Tous nos biens sur une seule carte interactive"
    },
    {
      icon: "🖱️",
      title: "Navigation intuitive",
      description: "Cliquez sur un marker pour voir les détails"
    },
    {
      icon: "🗺️",
      title: "Zoom et déplacement",
      description: "Explorez le secteur à votre guise"
    }
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
          <InteractiveMap 
            properties={allProperties}
            height="600px"
            zoom={13}
          />
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
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        📍
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {property.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {property.location}
                      </p>
                      <p className="text-sm font-semibold text-blue-600">
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
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg"
        >
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-blue-900 mb-2">💡 Astuce</h3>
              <p className="text-blue-800 text-sm">
                Sur la carte, vous pouvez zoomer avec la molette de la souris ou les boutons + / -, 
                et déplacer la vue en glissant. Cliquez sur un marker bleu pour voir la fiche 
                complète du bien avec photo et prix.
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
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Besoin d&apos;aide pour trouver le bien idéal ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Notre équipe connaît parfaitement le secteur et peut vous 
            accompagner dans votre recherche
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/biens-a-vendre"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Voir tous les biens
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-400 transition-colors"
            >
              Contactez-nous
            </a>
          </div>
        </motion.div>
      </Section>
    </>
  );
}

