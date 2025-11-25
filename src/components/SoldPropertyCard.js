"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SoldPropertyCard({ property }) {
  return (
    <Link href={`/biens-vendus/${property.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-md overflow-hidden h-full flex flex-col relative cursor-pointer"
      >
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <div className="bg-gradient-to-r from-[#0d6c8a] to-[#06465c] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
            ✓ VENDU
          </div>
          {property.exclusive && (
            <div className="bg-amber-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              ⭐ EXCLUSIVITÉ
            </div>
          )}
        </div>

        {/* Image avec overlay */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10" />
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Contenu */}
        <div className="p-6 flex-grow flex flex-col">
          {/* Localisation et date */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-medium">{property.location}</span>
            </div>
            {property.soldDate && (
              <div className="text-xs text-gray-500 font-medium">
                {property.soldDate}
              </div>
            )}
          </div>

          {/* Titre */}
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {property.title}
          </h3>

          {/* Sous-titre */}
          {property.subtitle && (
            <p className="text-sm text-gray-600 mb-4">{property.subtitle}</p>
          )}

          {/* Infos rapides */}
          <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <svg
                className="w-5 h-5 text-[#2998a6]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7H4V5zM20 5a1 1 0 00-1-1h-4a1 1 0 00-1 1v7h6V5zM4 13a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
              <span className="font-semibold">{property.surface}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <svg
                className="w-5 h-5 text-[#2998a6]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="font-semibold">{property.roomsLabel}</span>
            </div>
          </div>

          {/* Prix et agent */}
          <div className="mt-auto pt-4 border-t flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-[#0d6c8a]">
                {property.price}
              </div>
              <div className="text-xs text-gray-500">
                Vendu en {property.soldYear || "2025"}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">Par</div>
              <div className="text-sm font-semibold text-gray-900">
                {property.agent}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
