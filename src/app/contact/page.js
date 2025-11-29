"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Hero
        subtitle="Contactez-nous"
        title="Parlons de votre projet immobilier"
        description="Une question, un projet, besoin d'un conseil ? Notre équipe est à votre écoute pour vous accompagner."
        imageSrc="/photos/mont-valerien.jpg"
        fullHeight={false}
      />

      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <FadeIn direction="left">
            <div>
              <SectionHeading
                label="Formulaire de contact"
                title={
                  <>
                    Envoyez-nous un{" "}
                    <span className="text-[#2998a6]">message</span>
                  </>
                }
                subtitle="Nous vous répondons rapidement"
                centered={false}
              />
              <ContactForm />
            </div>
          </FadeIn>

          {/* Informations de contact */}
          <FadeIn direction="right" delay={0.2}>
            <div>
              <SectionHeading
                label="Coordonnées"
                title={
                  <>
                    Contactez-nous{" "}
                    <span className="text-[#2998a6]">directement</span>
                  </>
                }
                subtitle="Nous sommes à votre écoute"
                centered={false}
              />

              <div className="space-y-8">
                {/* Téléphone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2998a6] text-white"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </motion.div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-900">
                      Téléphone
                    </p>
                    <a
                      href="tel:+33662155757"
                      className="mt-2 text-base text-gray-600 hover:text-[#2998a6] transition-colors"
                    >
                      06 62 15 57 57
                    </a>
                    <p className="text-sm text-gray-500">
                      Disponible du lundi au dimanche, 9h-19h
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2998a6] text-white"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </motion.div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:contact@ener-immo92.fr"
                      className="mt-2 text-base text-gray-600 hover:text-[#2998a6] transition-colors"
                    >
                      contact@ener-immo92.fr
                    </a>
                    <p className="text-sm text-gray-500">Réponse sous 24h</p>
                  </div>
                </div>

                {/* Secteur */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2998a6] text-white"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </motion.div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-900">
                      Secteur d&apos;intervention
                    </p>
                    <p className="mt-2 text-base text-gray-600">
                      Mont-Valérien, Nanterre, Suresnes, Puteaux,
                      Rueil-Malmaison
                    </p>
                  </div>
                </div>
              </div>

              {/* Réseau eXp */}
              <div className="mt-12 rounded-2xl bg-gray-50 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Membre du réseau eXp France
                </h3>
                <p className="text-base text-gray-600">
                  En tant que membres du réseau eXp France, nous bénéficions
                  d&apos;outils digitaux performants et d&apos;une visibilité
                  nationale pour vous offrir le meilleur accompagnement.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
