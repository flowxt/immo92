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
              Rénovez, <span className="text-blue-600">valorisez</span>, vendez
              à sa juste valeur
            </>
          }
          subtitle="Chez eXp France, nous accompagnons les propriétaires dans la rénovation énergétique de leur bien immobilier pour qu'ils puissent le valoriser et le vendre au meilleur prix."
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

        {/* CTA ENRLUX France */}
        <StaggerItem>
          <FadeIn>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 p-12 shadow-2xl"
            >
              {/* Décorations de fond */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <span className="text-6xl">🌿</span>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                  Nous vous accompagnons dans vos travaux de rénovation
                  énergétique
                </h3>

                <p className="text-xl text-green-50 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
                  En partenariat avec{" "}
                  <strong className="text-white">ENRLUX France</strong>, nous
                  vous proposons une solution complète : panneaux solaires,
                  pompe à chaleur, isolation thermique et bien plus encore.
                  Profitez d&apos;un accompagnement expert et des aides de
                  l&apos;État.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-white font-semibold">
                        Certifié QualiPV & QualiPAC
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-white font-semibold">
                        Aides de l&apos;État
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.enrlux-france.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-700 rounded-xl font-bold text-lg hover:bg-green-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Découvrir ENRLUX France
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
                  >
                    Nous contacter
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20 text-center">
                  <p className="text-green-100 text-sm">
                    📞 Contact ENRLUX :{" "}
                    <a
                      href="tel:0987376599"
                      className="text-white font-semibold hover:underline"
                    >
                      09 87 37 65 99
                    </a>{" "}
                    ou{" "}
                    <a
                      href="tel:0662155757"
                      className="text-white font-semibold hover:underline"
                    >
                      06 62 15 57 57
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </FadeIn>
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
                  ce qui augmente significativement la valeur de votre maison
                  sur le marché.
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
                  bien rénové. Grâce à la performance énergétique améliorée,
                  vous bénéficiez d&apos;un argument fort auprès des acheteurs
                  et d&apos;un retour sur investissement optimal.
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
