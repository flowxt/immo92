"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/StaggerChildren";
import { motion } from "framer-motion";
import Image from "next/image";

export default function APropos() {
  const team = [
    {
      name: "Mhamed El Mamlouk",
      rsac: "805 060 431 RSAC Nanterre",
      image: "/photos/Mhamed.jpg",
      role: "Conseiller Immobilier",
    },
    {
      name: "Vincent Leclerc",
      rsac: "451 258 438 RSAC Versailles",
      image: "/photos/vincent.jpg",
      role: "Conseiller Immobilier",
    },
    {
      name: "Alexandre Naquin",
      rsac: "830 744 959 RSAC Nanterre",
      image: "/photos/alexandre.jpg",
      role: "Conseiller Immobilier",
    },
  ];

  const values = [
    {
      name: "Transparence",
      description: "Un suivi clair et honnête, sans surprise.",
      icon: (
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
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      name: "Exigence",
      description: "Chaque projet est mené avec rigueur et précision.",
      icon: (
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
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ),
    },
    {
      name: "Proximité",
      description: "Une relation directe et humaine avec nos clients.",
      icon: (
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
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      ),
    },
    {
      name: "Innovation",
      description:
        "Des outils digitaux performants pour une expérience fluide et efficace.",
      icon: (
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
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Hero
        subtitle="Notre histoire"
        title="Experts du Mont-Valérien, passionnés par votre réussite"
        description="Une équipe locale avec plus de 10 ans d'expérience, au service de vos projets immobiliers."
        imageSrc="/photos/mont-valerien.jpg"
        fullHeight={false}
      />

      {/* Notre histoire */}
      <Section background="white">
        <FadeIn>
          <SectionHeading
            label="Qui sommes-nous"
            title={
              <>
                Notre <span className="text-[#2998a6]">histoire</span>
              </>
            }
            subtitle="Une expertise au service de votre projet"
            showLine={true}
          />
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-8">
              Après plus de dix ans passés dans différentes agences
              immobilières, nous avons choisi de créer une structure
              indépendante, à taille humaine, tout en nous appuyant sur la force
              du réseau eXp France.
            </p>
            <p className="text-lg leading-8 mt-6">
              Cette alliance nous permet de proposer une approche{" "}
              <strong className="text-gray-900">
                moderne, digitale et réactive
              </strong>
              , tout en conservant la proximité et la disponibilité d&apos;une
              agence locale.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Notre équipe */}
      <Section background="gray">
        <FadeIn>
          <SectionHeading
            label="Les experts"
            title={
              <>
                Notre <span className="text-[#2998a6]">équipe</span>
              </>
            }
            subtitle="Des professionnels à votre écoute"
            showLine={true}
          />
        </FadeIn>
        <StaggerChildren className="grid gap-8 md:grid-cols-3 mt-12">
          {team.map((member, index) => (
            <StaggerItem key={member.name}>
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col items-center text-center"
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Photo circulaire avec effet zoom au hover */}
                <div className="relative w-40 h-40 mb-6 overflow-hidden rounded-full ring-4 ring-[#2998a6]/10">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.4 },
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                      style={{ objectPosition: 'center 30%' }}
                      sizes="160px"
                    />
                  </motion.div>
                </div>

                {/* Informations */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#2998a6] font-semibold mb-4">
                    {member.role}
                  </p>
                  
                  {/* Badge RSAC */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="text-sm text-gray-600 font-mono">
                      {member.rsac}
                    </span>
                  </div>
                </div>

                {/* Décoration */}
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-[#2998a6] to-[#2998a6] rounded-full"></div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Message d'équipe */}
        <FadeIn delay={0.4}>
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#2998a6]/5 to-white rounded-2xl p-8 md:p-10 border border-[#2998a6]/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Une équipe soudée, une passion commune
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Forts de notre expérience et de notre connaissance approfondie
                    du secteur, nous mettons notre expertise au service de vos
                    projets immobiliers. Chaque membre de l&apos;équipe apporte sa
                    vision unique pour vous garantir un accompagnement
                    personnalisé et des résultats concrets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Notre mission */}
      <Section background="white">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              label="Notre engagement"
              title={
                <>
                  Notre <span className="text-[#2998a6]">mission</span>
                </>
              }
              showLine={true}
            />
            <p className="text-lg leading-8 text-gray-600">
              Offrir à chaque client un accompagnement personnalisé à chaque
              étape de son projet : estimation, conseil, mise en valeur,
              accompagnement technique et suivi administratif.
            </p>
            <p className="mt-6 text-xl font-semibold text-[#2998a6]">
              Notre objectif : valoriser votre bien et vous aider à vendre dans
              les meilleures conditions.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Nos valeurs */}
      <Section background="white">
        <FadeIn>
          <SectionHeading
            label="Nos engagements"
            title={
              <>
                Nos <span className="text-[#2998a6]">valeurs</span>
              </>
            }
            subtitle="Ce qui guide notre action au quotidien"
            showLine={true}
          />
        </FadeIn>
        <StaggerChildren className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <StaggerItem key={value.name}>
              <div className="text-center">
                <motion.div
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2998a6] text-white mb-4"
                  whileHover={{
                    scale: 1.15,
                    rotate: 10,
                    transition: { duration: 0.3 },
                  }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.name}
                </h3>
                <p className="text-base text-gray-600">{value.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>
    </>
  );
}
