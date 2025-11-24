"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import { motion } from "framer-motion";

export default function ServicesContent() {
  const [openModal, setOpenModal] = useState(null);

  const servicesDetails = {
    estimation: {
      sections: [
        {
          title: "Une analyse complète du marché",
          content: "Notre estimation repose sur une analyse approfondie des transactions récentes dans le secteur du Mont-Valérien. Nous prenons en compte les spécificités de chaque quartier (Nanterre, Puteaux, Suresnes, Rueil-Malmaison) pour vous donner une valorisation précise et réaliste."
        },
        {
          title: "Les critères étudiés",
          content: "Surface habitable et annexes, état général du bien, luminosité et orientation, prestations et équipements, emplacement et environnement, potentiel d'amélioration, comparaison avec les biens similaires vendus récemment."
        },
        {
          title: "Un prix juste pour vendre rapidement",
          content: "Un bien correctement estimé se vend en moyenne 30% plus vite qu'un bien surévalué. Notre objectif : vous proposer un prix attractif qui correspond au marché actuel, pour maximiser vos chances de vente dans les meilleures conditions."
        }
      ]
    },
    renovation: {
      sections: [
        {
          title: "Le saut de classe énergétique : un atout majeur",
          content: "Depuis les nouvelles réglementations, la performance énergétique est devenue un critère déterminant pour les acheteurs. Passer d'une classe F ou G à une classe D ou C peut augmenter la valeur de votre bien de 10 à 20% et accélérer considérablement sa vente."
        },
        {
          title: "Les aides financières disponibles",
          content: "MaPrimeRénov', Éco-PTZ (prêt à taux zéro), CEE (Certificats d'Économies d'Énergie), TVA réduite à 5,5% pour les travaux de rénovation énergétique. Nous vous guidons dans l'identification et l'obtention de ces aides qui peuvent couvrir jusqu'à 70% du coût des travaux."
        },
        {
          title: "Les travaux les plus rentables",
          content: "Isolation des combles et toiture (ROI rapide), remplacement des fenêtres par du double ou triple vitrage, installation d'une pompe à chaleur ou chaudière à condensation, isolation des murs par l'extérieur, installation de panneaux solaires."
        },
        {
          title: "Notre accompagnement",
          content: "Audit énergétique pour identifier les priorités, recommandations de professionnels RGE (Reconnus Garants de l'Environnement), aide au montage des dossiers de financement, suivi des travaux et validation du nouveau DPE."
        }
      ]
    },
    division: {
      sections: [
        {
          title: "Pourquoi diviser votre terrain ?",
          content: "Si vous possédez un grand terrain, la division peut multiplier sa valeur. Au lieu de vendre un bien unique, vous pouvez créer plusieurs lots constructibles et ainsi optimiser significativement votre retour sur investissement."
        },
        {
          title: "Étude de faisabilité",
          content: "Analyse du Plan Local d'Urbanisme (PLU), vérification de la constructibilité et des règles de division, étude de la viabilisation (accès, réseaux), évaluation du potentiel de chaque lot créé."
        },
        {
          title: "Les démarches administratives",
          content: "Demande de certificat d'urbanisme, dépôt d'une déclaration préalable ou permis d'aménager, division parcellaire auprès du géomètre, mise à jour cadastrale. Nous vous accompagnons à chaque étape pour sécuriser votre projet."
        },
        {
          title: "Stratégie de commercialisation",
          content: "Une fois la division réalisée, nous élaborons une stratégie adaptée : vente en bloc, vente lot par lot, ou vente après construction. Notre connaissance du marché local nous permet de vous conseiller la meilleure approche."
        }
      ]
    },
    communication: {
      sections: [
        {
          title: "Reportage photo professionnel",
          content: "Les premières photos sont décisives : 90% des acheteurs commencent leur recherche en ligne. Nous faisons appel à des photographes immobiliers spécialisés qui savent mettre en valeur chaque espace, jouer avec la lumière et créer un véritable coup de cœur visuel."
        },
        {
          title: "Visite virtuelle et vidéo",
          content: "Pour les biens d'exception, nous proposons des visites virtuelles 360° et des vidéos cinématographiques avec drone. Ces outils permettent aux acheteurs de se projeter et génèrent jusqu'à 3 fois plus de demandes de visite."
        },
        {
          title: "Diffusion multi-canal optimisée",
          content: "Publication sur les portails immobiliers majeurs (SeLoger, Le Bon Coin, PAP), mise en avant sur le réseau national eXp France, campagnes ciblées sur les réseaux sociaux, newsletter aux acheteurs qualifiés de notre base de données, vitrine locale dans le secteur du Mont-Valérien."
        },
        {
          title: "Home staging et conseils déco",
          content: "Avant le reportage photo et les visites, nous vous conseillons sur la mise en scène de votre bien : désencombrement, réagencement des meubles, petites réparations prioritaires, choix des couleurs neutres. Un bien bien présenté se vend 15% plus cher et 2 fois plus vite."
        }
      ]
    }
  };

  const services = [
    {
      title: "Estimation immobilière",
      description:
        "Une estimation fiable et objective basée sur notre connaissance du marché local, de ses tendances et des spécificités du Mont-Valérien. Nous analysons les ventes récentes, le potentiel du bien, et ses atouts pour en déterminer le juste prix. Estimation gratuite à Nanterre, Rueil-Malmaison, Suresnes, Puteaux.",
      image: "/photos/interieur.png",
      modalKey: "estimation",
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
          />
        </svg>
      ),
    },
    {
      title: "Conseils en rénovation énergétique",
      description:
        "Vous souhaitez améliorer la performance énergétique de votre logement ? Nous vous accompagnons dans le saut de classe énergétique, la mise aux normes et la valorisation énergétique de votre bien, afin d'attirer davantage d'acheteurs et de vendre plus vite.",
      image: "/photos/maison-energie.png",
      modalKey: "renovation",
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
    },
    {
      title: "Accompagnement à la division de terrain",
      description:
        "Vous disposez d'un terrain divisible ? Nous étudions sa faisabilité, vous guidons dans les démarches administratives et vous aidons à optimiser la valeur globale de votre propriété.",
      image: "/photos/mont-valerien.jpg",
      modalKey: "division",
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
          />
        </svg>
      ),
    },
    {
      title: "Mise en valeur et communication",
      description:
        "Chaque bien mérite une stratégie adaptée : reportage photo professionnel, diffusion sur les portails majeurs, mise en avant sur le réseau eXp France et sur nos supports locaux. Notre priorité : présenter votre bien sous son meilleur jour à des acheteurs déjà qualifiés.",
      image: "/photos/interieur.png",
      modalKey: "communication",
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Modales pour chaque service */}
      {Object.keys(servicesDetails).map((key) => (
        <Modal
          key={key}
          isOpen={openModal === key}
          onClose={() => setOpenModal(null)}
          title={services.find(s => s.modalKey === key)?.title}
        >
          <div className="space-y-6">
            {servicesDetails[key].sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold mr-3">
                    {idx + 1}
                  </span>
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-11">
                  {section.content}
                </p>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: servicesDetails[key].sections.length * 0.1 }}
              className="pt-6 border-t border-gray-200"
            >
              <Button 
                href="/contact" 
                variant="primary"
                className="w-full justify-center"
              >
                Discutons de votre projet
              </Button>
            </motion.div>
          </div>
        </Modal>
      ))}

      {/* Services */}
      {services.map((service, index) => (
        <Section
          key={service.title}
          background={index % 2 === 0 ? "white" : "gray"}
        >
          <div
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <FadeIn direction={index % 2 === 0 ? "left" : "right"}>
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <motion.div
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 p-3 text-white mb-6"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  {service.icon}
                </motion.div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                  {service.title}
                </h2>
                <p className="text-lg leading-8 text-gray-600 mb-8">
                  {service.description}
                </p>
                <Button 
                  variant="secondary" 
                  onClick={() => setOpenModal(service.modalKey)}
                >
                  En savoir plus
                  <svg 
                    className="ml-2 w-4 h-4 inline-block" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </Button>
              </div>
            </FadeIn>
            <FadeIn direction={index % 2 === 0 ? "right" : "left"} delay={0.2}>
              <motion.div
                className={`relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300" />
              </motion.div>
            </FadeIn>
          </div>
        </Section>
      ))}

      {/* Section Estimations par ville */}
      <Section background="white">
        <FadeIn>
          <SectionHeading
            label="Estimation par ville"
            title={
              <>
                Estimation immobilière{" "}
                <span className="text-blue-600">près de chez vous</span>
              </>
            }
            subtitle="Expert du marché local dans les Hauts-de-Seine"
            showLine={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Link
              href="/nos-services/estimation-nanterre"
              className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors">
                  <svg
                    className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors"
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
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Nanterre
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Estimation gratuite à Nanterre : Mont-Valérien, Centre-Ville,
                Quartier des Musiciens.
              </p>
              <div className="flex items-center text-blue-600 font-semibold text-sm">
                En savoir plus
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            <Link
              href="/nos-services/estimation-rueil-malmaison"
              className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors">
                  <svg
                    className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors"
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
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Rueil-Malmaison
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Estimation gratuite à Rueil-Malmaison : Mont-Valérien,
                Centre-Ville, Plateau, Buzenval.
              </p>
              <div className="flex items-center text-blue-600 font-semibold text-sm">
                En savoir plus
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            <Link
              href="/nos-services/estimation-suresnes"
              className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors">
                  <svg
                    className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors"
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
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Suresnes
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Estimation gratuite à Suresnes : Mont-Valérien, Centre-Ville,
                Cité-Jardins UNESCO, Longchamp.
              </p>
              <div className="flex items-center text-blue-600 font-semibold text-sm">
                En savoir plus
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            <Link
              href="/nos-services/estimation-puteaux"
              className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors">
                  <svg
                    className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors"
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
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Puteaux
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Estimation gratuite à Puteaux : Centre-Ville, Bas de Puteaux,
                secteur La Défense, République.
              </p>
              <div className="flex items-center text-blue-600 font-semibold text-sm">
                En savoir plus
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              💡 Une estimation précise est la clé d&apos;une vente réussie
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Demander mon estimation gratuite
            </Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

