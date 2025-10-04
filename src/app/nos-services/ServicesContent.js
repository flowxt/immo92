"use client";

import Image from "next/image";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

export default function ServicesContent() {
  const services = [
    {
      title: "Estimation immobilière",
      description:
        "Une estimation fiable et objective basée sur notre connaissance du marché local, de ses tendances et des spécificités du Mont-Valérien. Nous analysons les ventes récentes, le potentiel du bien, et ses atouts pour en déterminer le juste prix.",
      image: "/photos/interieur.png",
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
                <p className="text-lg leading-8 text-gray-600">
                  {service.description}
                </p>
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
    </>
  );
}

