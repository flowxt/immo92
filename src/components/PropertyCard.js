"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PropertyCard({
  title,
  subtitle,
  location,
  surface,
  rooms,
  image,
  price,
  slug,
  featured = false,
  available = true,
  exclusive = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group h-full"
    >
      <Link href={`/biens-a-vendre/${slug}`}>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <motion.div
              className="relative w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={image} alt={title} fill className="object-cover" />
            </motion.div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              {exclusive && (
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg">
                  ⭐ Exclusivité
                </span>
              )}
              {featured && (
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-lg">
                  💎 Coup de cœur
                </span>
              )}
              {available && (
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-green-500 text-white shadow-lg">
                  Disponible
                </span>
              )}
            </div>

            {/* Info rapide en bas */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span className="text-sm font-semibold">{surface}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold">{rooms}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="p-6 flex-grow flex flex-col">
            {/* Titre */}
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>

            {/* Sous-titre */}
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {subtitle}
            </p>

            {/* Localisation */}
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">{location}</span>
            </div>

            {/* Prix et CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-auto">
              {price ? (
                <div className="text-2xl font-bold text-blue-600">{price}</div>
              ) : (
                <div className="text-sm text-gray-500 italic">
                  Prix sur demande
                </div>
              )}
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                <span>En savoir plus</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
