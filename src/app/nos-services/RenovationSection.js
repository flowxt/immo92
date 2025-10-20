"use client";

import Section from "@/components/Section";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import StaggerChildren, { StaggerItem } from "@/components/StaggerChildren";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RenovationSection() {
  return (
    <Section background="white">
      <FadeIn>
        <SectionHeading
          label="🌿 Rénovation énergétique"
          title={
            <>
              Rénovez, <span className="text-blue-600">valorisez</span>, vendez à sa juste valeur
            </>
          }
          subtitle="Chez eXp France, nous accompagnons les propriétaires dans la rénovation énergétique de leur bien immobilier pour qu&apos;ils puissent le valoriser et le vendre au meilleur prix."
          showLine={true}
        />
      </FadeIn>

      {/* Étapes de rénovation */}
      <StaggerChildren className="space-y-16">
        <StaggerItem>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🏡</span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    1. Diagnostic et analyse du bien
                  </h3>
                </div>
                <p className="text-lg leading-8 text-gray-600">
                  Nous commençons par une évaluation complète de votre maison
                  afin d&apos;identifier les points faibles en matière
                  d&apos;isolation, de chauffage, de ventilation ou encore de
                  consommation énergétique. Cela nous permet de définir ensemble
                  les meilleures actions à entreprendre.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <motion.div
                className="relative h-80 rounded-2xl overflow-hidden shadow-xl group"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src="/photos/dpe.jpg"
                  alt="Diagnostic énergétique"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300" />
              </motion.div>
            </FadeIn>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="lg:order-2">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🧰</span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    2. Plan de rénovation énergétique sur mesure
                  </h3>
                </div>
                <p className="text-lg leading-8 text-gray-600">
                  Nous élaborons un plan clair, étape par étape, avec des
                  solutions adaptées à votre budget : isolation, fenêtres
                  performantes, pompe à chaleur, panneaux solaires, etc.
                  Objectif : améliorer le DPE de votre bien et réduire sa
                  consommation.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <motion.div
                className="relative h-80 rounded-2xl overflow-hidden shadow-xl group lg:order-1"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src="/photos/renov.png"
                  alt="Rénovation énergétique"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300" />
              </motion.div>
            </FadeIn>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">👷</span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    3. Réalisation des travaux
                  </h3>
                </div>
                <p className="text-lg leading-8 text-gray-600">
                  Nos équipes partenaires réalisent les travaux dans les
                  meilleures conditions, avec des matériaux durables et
                  performants, tout en respectant les normes en vigueur.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <motion.div
                className="relative h-80 rounded-2xl overflow-hidden shadow-xl group"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src="/photos/moitie-renov.png"
                  alt="Travaux de rénovation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300" />
              </motion.div>
            </FadeIn>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="lg:order-2">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">📝</span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    4. Certification et valorisation du bien
                  </h3>
                </div>
                <p className="text-lg leading-8 text-gray-600">
                  Une fois la rénovation achevée, nous mettons à jour votre DPE,
                  ce qui augmente significativement la valeur de votre maison sur
                  le marché.
                </p>
                <p className="text-lg font-semibold text-blue-600 mt-4">
                  Un bien rénové se vend plus vite et à un meilleur prix.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <motion.div
                className="relative h-80 rounded-2xl overflow-hidden shadow-xl group lg:order-1"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src="/photos/dpe.jpg"
                  alt="Certification énergétique"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300" />
              </motion.div>
            </FadeIn>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">💰</span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    5. Mise en vente accompagnée
                  </h3>
                </div>
                <p className="text-lg leading-8 text-gray-600">
                  Nous vous accompagnons ensuite dans la mise en vente de votre
                  bien rénové. Grâce à la performance énergétique améliorée, vous
                  bénéficiez d&apos;un argument fort auprès des acheteurs et
                  d&apos;un retour sur investissement optimal.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <motion.div
                className="relative h-80 rounded-2xl overflow-hidden shadow-xl group"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src="/photos/interieur.png"
                  alt="Vente immobilière"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300" />
              </motion.div>
            </FadeIn>
          </div>
        </StaggerItem>
      </StaggerChildren>

      {/* Mission */}
      <FadeIn delay={0.6}>
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl mr-4">✨</span>
            <h3 className="text-2xl font-bold text-gray-900">
              Notre mission : transformer une maison énergivore en un logement
              confortable, écologique et rentable.
            </h3>
          </div>
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Démarrer votre projet de rénovation
            </Button>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

