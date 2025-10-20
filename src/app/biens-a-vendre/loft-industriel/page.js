"use client";

import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LoftIndustriel() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Accueil
                </Link>
              </li>
              <li>
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li>
                <Link
                  href="/biens-a-vendre"
                  className="text-gray-500 hover:text-gray-700"
                >
                  Biens à vendre
                </Link>
              </li>
              <li>
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li className="text-gray-900 font-medium">Loft Industriel</li>
            </ol>
          </nav>
        </div>
      </div>

      <Section background="white">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Galerie photos */}
          <div className="grid md:grid-cols-3 gap-2">
            <motion.div
              className="md:col-span-2 relative h-96 md:h-[500px] overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/photos/annonce1.png"
                alt="Loft Industriel - Vue principale"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
            <div className="grid grid-rows-2 gap-2">
              <motion.div
                className="relative h-48 md:h-auto overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/photos/annonce2.png"
                  alt="Loft Industriel - Vue 2"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div
                className="relative h-48 md:h-auto overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/photos/annonce3.png"
                  alt="Loft Industriel - Vue 3"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
          </div>

          {/* Contenu */}
          <div className="p-8 md:p-12">
            {/* En-tête */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                    💎 Coup de cœur
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                    Disponible
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Loft Industriel - Mont Valérien
                </h1>
                <p className="text-xl text-blue-600 font-semibold mb-4">
                  Découvrez l&apos;élégance urbaine : votre loft industriel au
                  style New York
                </p>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">
                    Mont Valérien, quartier calme & résidentiel
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <p className="text-lg leading-relaxed text-gray-700">
                Plongez dans l&apos;univers unique d&apos;un loft de{" "}
                <strong className="text-gray-900">170 m²</strong>. Ce loft est
                plus qu&apos;un simple lieu de vie, c&apos;est une expérience :
                un mélange parfait de modernité et de caractère industriel.
                Planchers en parquet massif, poutres métalliques, briques
                apparentes... chaque détail a été pensé pour créer une
                atmosphère authentique et chaleureuse.
              </p>
            </div>

            {/* Caractéristiques */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Caractéristiques clés
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: "☀️", text: "Un grand séjour lumineux" },
                  { icon: "🌳", text: "Un Patio" },
                  { icon: "🛏️", text: "3 chambres élégantes" },
                  { icon: "💼", text: "1 grand bureau ou chambre" },
                  { icon: "🍳", text: "Cuisine semi-ouverte" },
                  { icon: "🚗", text: "Garage fermé et sécurisé" },
                  { icon: "📱", text: "Domotique - Contrôle par application" },
                  {
                    icon: "🔥",
                    text: "Chauffage et volets roulants connectés",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700 font-medium">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Localisation */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Emplacement idéal
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Idéalement situé dans un quartier calme & résidentiel, rue à
                sens unique, à mi-chemin entre le Mont Valérien et la place de
                la Boule. Écoles et commerces à proximité.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl p-8 text-center">
              <p className="text-2xl font-bold text-gray-900 mb-3">
                Ne laissez pas passer cette opportunité unique !
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Votre loft, votre style, votre vie.
              </p>
              <Button
                href="/contact"
                variant="accent"
                className="text-lg px-10 py-4"
              >
                Contactez-nous rapidement
                <svg
                  className="ml-2 w-5 h-5 inline-block"
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
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
