"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";
import MortgageCalculator from "@/components/MortgageCalculator";
import DPE from "@/components/DPE";
import InteractiveMap from "@/components/InteractiveMap";

export default function PropertyDetailPage({ property }) {
  const [showCalculator, setShowCalculator] = useState(false);

  const {
    // Informations principales
    title,
    breadcrumbTitle,
    location,
    postalCode,
    price,
    priceDisplay,
    images,

    // Caractéristiques principales
    surface,
    rooms,
    terrain,
    
    // Description
    subtitle,
    description, // Peut être un string ou un array de sections {title, content}

    // Informations détaillées
    details, // Object avec toutes les infos (étage, taxe, exposition, etc.)

    // Prestations
    prestations = [],

    // Proximités
    proximites = [],

    // DPE
    dpe, // { energyClass, energyValue, climateClass, climateValue, estimatedCostMin, estimatedCostMax, finalConsumption, auditDone }

    // Carte
    map, // { lat, lng, center, zoom, nearbyPoints }

    // Agent
    agent, // { name, photo, rsac, rsacCity }

    // Référence et mentions
    reference,
    legalNotice,

    // ID pour la carte
    id,
    slug,
  } = property;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#2998a6]">
              Accueil
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/biens-a-vendre"
              className="text-gray-500 hover:text-[#2998a6]"
            >
              Biens à vendre
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">
              {breadcrumbTitle || title}
            </span>
          </nav>
        </div>
      </div>

      {/* Galerie photos */}
      <div className="bg-white">
        <ImageGallery images={images} />
      </div>

      {/* Contenu principal */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-8">
            {/* En-tête */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {title}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-base sm:text-lg">
                      {postalCode}, {location}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <div className="text-3xl sm:text-4xl font-bold text-[#2998a6] whitespace-nowrap">
                    {priceDisplay || `${price.toLocaleString("fr-FR")} €`}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">HAI</div>
                </div>
              </div>

              {/* Caractéristiques principales */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">
                    {surface}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    m² {terrain ? "habitable" : ""}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{rooms}</div>
                  <div className="text-sm text-gray-500 mt-1">pièces</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">
                    {terrain || "-"}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {terrain ? "m² terrain" : ""}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Description
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                {subtitle && (
                  <p className="font-semibold text-lg text-gray-800">
                    {subtitle}
                  </p>
                )}
                {typeof description === "string" ? (
                  <p>{description}</p>
                ) : (
                  description.map((section, index) => (
                    <div key={index}>
                      {section.title && (
                        <h3 className="font-bold text-gray-900">
                          {section.title}
                        </h3>
                      )}
                      <p>{section.content}</p>
                    </div>
                  ))
                )}
              </div>
            </motion.div>

            {/* Informations détaillées */}
            {details && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Informations
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(details).map(([key, sections], colIndex) => (
                    <div key={colIndex} className="space-y-4">
                      {sections.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between py-3 border-b"
                        >
                          <span className="text-gray-600">{item.label}</span>
                          <span className="font-semibold text-gray-900">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Prestations */}
            {prestations && prestations.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Prestations
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {prestations.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-white/700 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Proximités */}
            {proximites && proximites.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Proximités
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {proximites.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-[#2998a6] rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* DPE */}
            {dpe && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Diagnostic de Performance Énergétique
                </h2>

                <DPE
                  energyClass={dpe.energyClass}
                  energyValue={dpe.energyValue}
                  climateClass={dpe.climateClass}
                  climateValue={dpe.climateValue}
                />

                {(dpe.estimatedCostMin || dpe.finalConsumption) && (
                  <div className="mt-8 p-6 bg-[#2998a6]/5 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Estimation des dépenses énergétiques
                    </h3>
                    {dpe.estimatedCostMin && dpe.estimatedCostMax && (
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Montant estimé des dépenses annuelles d&apos;énergie pour
                        un usage standard, établi à partir des prix de
                        l&apos;énergie de l&apos;année 2021 :{" "}
                        <strong>
                          {dpe.estimatedCostMin.toLocaleString("fr-FR")} € à{" "}
                          {dpe.estimatedCostMax.toLocaleString("fr-FR")} €
                        </strong>{" "}
                        (abonnement compris).
                      </p>
                    )}
                    {dpe.finalConsumption && (
                      <p className="text-gray-600 text-sm mt-3">
                        <strong>Énergie - Consommation finale :</strong>{" "}
                        {dpe.finalConsumption} kWhEF/m².an ({dpe.energyClass})
                      </p>
                    )}
                    {dpe.auditDone && (
                      <p className="text-gray-600 text-sm mt-2">
                        <strong>Audit énergétique :</strong> Réalisé
                      </p>
                    )}
                  </div>
                )}

                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-800">
                    Les informations sur les risques auxquels ce bien est exposé
                    sont disponibles sur le site Géorisques :{" "}
                    <a
                      href="https://www.georisques.gouv.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-amber-900"
                    >
                      www.georisques.gouv.fr
                    </a>
                  </p>
                </div>
              </motion.div>
            )}

            {/* Localisation */}
            {map && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#2998a6] rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Localisation
                    </h2>
                    <p className="text-sm text-gray-600">
                      {map.description || `${location} (${postalCode})`}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-gray-200">
                  <InteractiveMap
                    properties={[
                      {
                        id,
                        title,
                        location,
                        price: priceDisplay || `${price.toLocaleString("fr-FR")} €`,
                        image: images[0],
                        slug,
                        lat: map.lat,
                        lng: map.lng,
                      },
                    ]}
                    center={map.center || [map.lat, map.lng]}
                    zoom={map.zoom || 15}
                  />
                </div>

                {/* Points d'intérêt à proximité */}
                {map.nearbyPoints && map.nearbyPoints.length > 0 && (
                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    {map.nearbyPoints.map((point, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                      >
                        <svg
                          className="w-5 h-5 text-[#2998a6] flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={point.icon}
                          />
                        </svg>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm mb-1">
                            {point.title}
                          </div>
                          <div className="text-xs text-gray-600">
                            {point.distance}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Mentions légales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gray-100 rounded-xl p-6"
            >
              <p className="text-xs text-gray-600 leading-relaxed">
                {legalNotice}
              </p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Intéressé par ce bien ?
                </h3>

                {/* Agent */}
                {agent && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#2998a6]/20">
                        <Image
                          src={agent.photo}
                          alt={agent.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          {agent.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          Agent commercial
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 font-mono">
                      RSAC {agent.rsacCity} {agent.rsac}
                    </div>
                  </div>
                )}

                <Link
                  href="/contact"
                  className="block w-full bg-[#2998a6] text-white text-center py-4 rounded-xl font-bold hover:bg-[#0d6c8a] transition-colors mb-3"
                >
                  Nous contacter
                </Link>

                <button
                  onClick={() => setShowCalculator(!showCalculator)}
                  className="block w-full bg-gray-100 text-gray-900 text-center py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                >
                  {showCalculator ? "Masquer" : "Calculer mon prêt"}
                </button>
              </motion.div>

              {/* Calculateur compact */}
              {showCalculator && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-4"
                >
                  <MortgageCalculator compact={true} propertyPrice={price} />

                  {/* Lien vers calculette complète */}
                  <Link
                    href="/calculateur"
                    className="block w-full bg-gradient-to-r from-[#2998a6] to-[#0d6c8a] text-white text-center py-3 rounded-xl font-semibold hover:from-[#0d6c8a] hover:to-[#06465c] transition-all shadow-md hover:shadow-lg"
                  >
                    <span className="flex items-center justify-center gap-2">
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
                          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      Calculette complète
                    </span>
                  </Link>
                </motion.div>
              )}

              {/* Référence */}
              {reference && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gray-100 rounded-xl p-4"
                >
                  <div className="text-sm text-gray-600 mb-1">Référence</div>
                  <div className="font-mono font-bold text-gray-900">
                    {reference}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

