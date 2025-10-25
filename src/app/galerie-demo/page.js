"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ImageGallery from "@/components/ImageGallery";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

export default function GalerieDemoPage() {
  // Exemple avec toutes les photos disponibles
  const demoImages = [
    "/photos/annonce1.png",
    "/photos/annonce2.png",
    "/photos/annonce3.png",
    "/photos/interieur.png",
    "/photos/moitie-renov.png",
    "/photos/mont-valerien.jpg",
    "/photos/renov.png",
    "/photos/dpe.jpg",
  ];

  const features = [
    {
      icon: "🖼️",
      title: "Lightbox full-screen",
      description: "Cliquez sur n'importe quelle photo pour l'afficher en grand format"
    },
    {
      icon: "⌨️",
      title: "Navigation clavier",
      description: "Utilisez les flèches ← → pour naviguer et Esc pour fermer"
    },
    {
      icon: "🔍",
      title: "Zoom intégré",
      description: "Zoomez sur les détails en un clic dans la lightbox"
    },
    {
      icon: "📱",
      title: "Responsive",
      description: "Adapté automatiquement aux écrans mobile et desktop"
    },
    {
      icon: "🎬",
      title: "Animations fluides",
      description: "Transitions et effets animés avec Framer Motion"
    },
    {
      icon: "🖼️",
      title: "Miniatures",
      description: "Barre de miniatures en bas pour naviguer rapidement"
    }
  ];

  return (
    <>
      <Hero
        subtitle="Démonstration"
        title="Galerie photos interactive"
        description="Découvrez notre système de galerie professionnel avec lightbox, zoom et navigation clavier."
        imageSrc="/photos/mont-valerien.jpg"
        fullHeight={false}
      />

      <Section background="white">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Galerie complète
            </h2>
            <p className="text-lg text-gray-600">
              Cliquez sur une photo pour l&apos;agrandir et découvrir toutes les fonctionnalités
            </p>
          </div>
        </FadeIn>

        <div className="max-w-6xl mx-auto">
          <ImageGallery images={demoImages} />
        </div>
      </Section>

      <Section background="gray">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fonctionnalités
            </h2>
            <p className="text-lg text-gray-600">
              Une expérience utilisateur optimale pour vos annonces immobilières
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                Dans la lightbox, utilisez les flèches du clavier pour naviguer entre les photos,
                le bouton de zoom pour voir les détails, et Echap pour fermer. Sur mobile,
                swipez pour naviguer entre les images.
              </p>
            </div>
          </div>
        </motion.div>
      </Section>

      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Prêt à mettre en valeur vos biens ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Cette galerie sera automatiquement utilisée pour toutes vos futures annonces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/biens-a-vendre/loft-industriel"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Voir un exemple
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

