"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import DPE from "@/components/DPE";

export default function MaisonNanterreRenovationEnergetique() {
  const [showBefore, setShowBefore] = useState(false);

  const photosAvant = [
    "/photos/autret/facade-avant.jpeg",
    "/photos/autret/sejour.jpeg",
    "/photos/autret/chambre.jpeg",
    "/photos/autret/terrasse.jpeg",
  ];

  const photosApres = [
    "/photos/autret/travaux-renov/travaux1.jpeg",
    "/photos/autret/travaux-renov/travaux2.jpeg",
    "/photos/autret/travaux-renov/travaux3.jpeg",
    "/photos/autret/travaux-renov/travaux4.jpeg",
    "/photos/autret/travaux-renov/travaux5.jpeg",
    "/photos/autret/travaux-renov/travaux6.jpeg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-gray-50">
      {/* Hero Success Story */}
      <div className="relative bg-gradient-to-br from-green-600 via-blue-600 to-green-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center space-x-2 text-sm text-green-100 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/biens-vendus" className="hover:text-white transition-colors">
              Biens vendus
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Success Story</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <span className="text-2xl">🌿</span>
              <span className="font-bold text-lg">Success Story - Rénovation Énergétique</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              De Passoire Énergétique<br />à Maison Éco-Performante
            </h1>
            
            <p className="text-xl text-green-50 mb-8 max-w-3xl mx-auto">
              Découvrez comment nous avons accompagné nos clients dans la transformation complète 
              d&apos;une maison à Nanterre, avec un accompagnement 100% personnalisé pour la rénovation énergétique.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border-2 border-white/30">
                <div className="text-3xl font-bold">459 000 €</div>
                <div className="text-sm text-green-100">Prix de vente</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border-2 border-white/30">
                <div className="text-3xl font-bold">Oct. 2025</div>
                <div className="text-sm text-green-100">Vendu</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border-2 border-white/30">
                <div className="text-3xl font-bold">G → C</div>
                <div className="text-sm text-green-100">Amélioration DPE</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toggle Avant/Après */}
      <div className="sticky top-20 z-20 bg-white shadow-lg border-b-2 border-green-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setShowBefore(false)}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                !showBefore
                  ? "bg-green-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              ✨ Après Rénovation
            </button>
            <div className="text-2xl">↔️</div>
            <button
              onClick={() => setShowBefore(true)}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                showBefore
                  ? "bg-orange-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              🏚️ Avant Travaux
            </button>
          </div>
        </div>
      </div>

      {/* Galerie Photos Avant/Après */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          key={showBefore ? "avant" : "apres"}
          initial={{ opacity: 0, x: showBefore ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {showBefore ? (
            <div className="bg-orange-50 rounded-3xl p-8 border-4 border-orange-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-orange-900 mb-2">
                  🏚️ État Initial - Avant Travaux
                </h2>
                <p className="text-orange-700">
                  Maison à rénover - DPE G (Passoire énergétique)
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {photosAvant.map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative h-80 rounded-2xl overflow-hidden shadow-xl"
                  >
                    <Image
                      src={photo}
                      alt={`Photo avant travaux ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                      AVANT
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-green-50 rounded-3xl p-8 border-4 border-green-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-green-900 mb-2">
                  ✨ Après Rénovation Énergétique
                </h2>
                <p className="text-green-700">
                  Maison éco-performante - DPE amélioré
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photosApres.map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative h-80 rounded-2xl overflow-hidden shadow-xl"
                  >
                    <Image
                      src={photo}
                      alt={`Photo après rénovation ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                      APRÈS
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-8">
            {/* Le Projet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl">
                  🏡
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Le Projet</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <h3 className="text-xl font-bold text-green-700">
                  Maison à Rénover avec Grand Terrain – Rue Raymond Barbet, Nanterre
                </h3>
                <p>
                  Située dans un cadre calme et agréable à Nanterre, cette maison
                  de <strong>92 m²</strong> était une toile blanche qui n&apos;attendait
                  que les idées de nos clients pour lui redonner vie.
                </p>
                <p>
                  Avec son emplacement stratégique près du RER, des commerces et
                  de l&apos;université, elle combinait tranquillité et praticité.
                </p>
                <p>
                  La maison se composait d&apos;une entrée, d&apos;un séjour
                  accueillant, d&apos;une grande cuisine, de deux chambres,
                  d&apos;une salle d&apos;eau. Le tout était complété par un
                  sous-sol total et un <strong>vaste terrain de 525 m²</strong>,
                  parfait pour des projets d&apos;aménagement extérieur ou de
                  stationnement.
                </p>
              </div>
            </motion.div>

            {/* Notre Accompagnement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg border-2 border-blue-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                  🤝
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Notre Accompagnement 100%
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border-l-4 border-green-600">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">1️⃣</div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">
                        Diagnostic Énergétique Initial
                      </h4>
                      <p className="text-gray-600">
                        Évaluation complète de la performance énergétique (DPE G - passoire énergétique) 
                        et identification des travaux prioritaires pour améliorer le confort et réduire les consommations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-blue-600">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">2️⃣</div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">
                        Plan de Rénovation Personnalisé
                      </h4>
                      <p className="text-gray-600">
                        Élaboration d&apos;un plan détaillé avec nos partenaires certifiés : 
                        isolation renforcée, menuiseries performantes, système de chauffage optimisé, 
                        et solutions d&apos;énergies renouvelables.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-purple-600">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">3️⃣</div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">
                        Accès aux Subventions & Aides
                      </h4>
                      <p className="text-gray-600">
                        Accompagnement complet pour accéder aux subventions MaPrimeRénov&apos;, 
                        CEE, et autres aides financières, réduisant considérablement le coût des travaux.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-orange-600">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">4️⃣</div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">
                        Suivi des Travaux
                      </h4>
                      <p className="text-gray-600">
                        Coordination avec les artisans RGE, suivi régulier du chantier, 
                        et garantie du respect des normes et des délais.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-green-600">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">5️⃣</div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">
                        Valorisation & Vente
                      </h4>
                      <p className="text-gray-600">
                        Nouveau DPE amélioré, mise en valeur professionnelle, et vente réussie 
                        au meilleur prix grâce à la performance énergétique du bien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Caractéristiques du bien */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Caractéristiques
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Surface habitable</span>
                    <span className="font-semibold text-gray-900">92 m²</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Surface terrain</span>
                    <span className="font-semibold text-gray-900">525 m²</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Pièces</span>
                    <span className="font-semibold text-gray-900">4 pièces</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Chambres</span>
                    <span className="font-semibold text-gray-900">2</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Niveaux</span>
                    <span className="font-semibold text-gray-900">2</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Exposition</span>
                    <span className="font-semibold text-gray-900">Sud</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Construit en</span>
                    <span className="font-semibold text-gray-900">1920</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Taxe foncière</span>
                    <span className="font-semibold text-gray-900">1 000 €/an</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Chauffage</span>
                    <span className="font-semibold text-gray-900">Gaz individuel</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Eaux usées</span>
                    <span className="font-semibold text-gray-900">Tout à l&apos;égout</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Disponibilité</span>
                    <span className="font-semibold text-green-600">Libre</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Vue</span>
                    <span className="font-semibold text-gray-900">Aperçu, Jardin</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* DPE Avant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                DPE Initial (Avant Rénovation)
              </h3>
              <DPE
                energyClass="G"
                climateClass="F"
                energyValue={486}
                climateValue={97}
                estimatedCost="2750€ ~ 3800€"
              />
            </motion.div>

            {/* Mentions légales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <p className="text-xs text-gray-600 leading-relaxed">
                EXP GLOBAL FRANCE - Non-détention de fonds - SIRET 89071070000018
                - 429 000 € honoraires exclus - Honoraires de 6.99%TTC à charge
                acquéreur - Classe énergie 486 kWhEP/m².an (G) - Classe climat 97
                kg CO2/m².an (F) - Montant estimé des dépenses annuelles
                d&apos;énergie pour un usage standard, établi à partir des prix de
                l&apos;énergie de l&apos;année 2021 : 2750€ ~ 3800€ - Logement à
                consommation énergétique excessive : classe G - Les informations
                sur les risques auxquels ce bien est exposé sont disponibles sur
                le site Géorisques : www.georisques.gouv.fr - Vincent LECLERC -
                Agent commercial - EI - RSAC VERSAILLES 451 258 438
              </p>
            </motion.div>
          </div>

          {/* Colonne latérale */}
          <div className="lg:col-span-1">
            <div className="sticky top-40 space-y-6">
              {/* Success Story Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-green-600 to-blue-600 text-white rounded-2xl p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold mb-2">Success Story</h3>
                  <p className="text-sm text-green-50 mb-4">
                    Accompagnement complet en rénovation énergétique
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold mb-1">459 000 €</div>
                    <div className="text-sm">Vendu avec succès</div>
                  </div>
                </div>
              </motion.div>

              {/* Agent */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200"
              >
                <div className="text-center mb-4">
                  <div className="text-sm font-bold text-green-600 uppercase tracking-wider mb-2">
                    Accompagné par
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <Image
                      src="/photos/vincent.jpg"
                      alt="Vincent LECLERC"
                      width={80}
                      height={80}
                      className="rounded-full shadow-md object-cover"
                      style={{ objectPosition: "center 30%" }}
                    />
                    <div>
                      <div className="font-bold text-gray-900">
                        Vincent LECLERC
                      </div>
                      <div className="text-xs text-gray-500">
                        Expert Rénovation Énergétique
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 font-mono mt-2">
                    RSAC Versailles 451 258 438
                  </div>
                </div>
              </motion.div>

              {/* CTA Rénovation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border-2 border-green-200"
              >
                <div className="text-center">
                  <div className="text-3xl mb-3">🌿</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Votre projet de rénovation ?
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Bénéficiez de notre accompagnement complet pour valoriser
                    votre bien
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full bg-green-600 text-white text-center py-4 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg"
                  >
                    Être accompagné
                  </Link>
                </div>
              </motion.div>

              {/* Retour */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/biens-vendus"
                  className="block text-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                >
                  ← Voir tous les biens vendus
                </Link>
              </motion.div>

              {/* Référence */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-100 rounded-xl p-4"
              >
                <div className="text-sm text-gray-600 mb-1">Référence</div>
                <div className="font-mono font-bold text-gray-900">
                  84712341
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

