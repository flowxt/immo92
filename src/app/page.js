import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/StaggerChildren";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Votre partenaire immobilier de confiance au Mont-Valérien"
        description="Spécialistes du secteur du Mont-Valérien, à Nanterre, Puteaux, Suresnes et Rueil-Malmaison, nous vous accompagnons dans la vente, l'achat et la valorisation de votre bien immobilier. Grâce à notre expertise locale et aux outils innovants du réseau eXp France, nous offrons un accompagnement complet, humain et sur mesure."
        imageSrc="/photos/mont-valerien.jpg"
        cta={
          <>
            <Button href="/contact" variant="primary">
              Estimer mon bien
            </Button>
            <Button href="/nos-services" variant="outline">
              Découvrir nos services
            </Button>
          </>
        }
      />

      {/* Notre histoire */}
      <Section background="white">
        <FadeIn>
          <SectionHeading
            title="Notre histoire"
            subtitle="Une expertise locale au service de vos projets"
          />
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-8">
              Avec plus de 10 ans d'expérience chacun, acquise au sein d'agences
              immobilières réputées, nous avons choisi de mettre notre
              savoir-faire au service des habitants du Mont-Valérien.
            </p>
            <p className="text-lg leading-8 mt-6">
              Notre objectif :{" "}
              <strong className="text-gray-900">
                redonner du sens à la relation client
              </strong>{" "}
              en offrant un suivi personnalisé à chaque étape de votre projet.
            </p>
            <p className="text-lg leading-8 mt-6">
              En rejoignant le groupe eXp France, nous avons allié notre
              expertise locale à la puissance d'un réseau international, pour
              vous garantir la meilleure visibilité et des outils modernes.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Nos services */}
      <Section background="gray">
        <FadeIn>
          <SectionHeading
            title="Nos services"
            subtitle="Nous vous accompagnons dans tous vos projets"
          />
        </FadeIn>
        <StaggerChildren className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <StaggerItem>
            <ServiceCard
              icon={
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
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              }
              title="Estimation précise de votre bien"
              description="Basée sur une connaissance fine du marché local, nous vous proposons une estimation objective et réaliste pour optimiser la vente de votre propriété."
            />
          </StaggerItem>
          <StaggerItem>
            <ServiceCard
              icon={
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
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              }
              title="Accompagnement à la rénovation énergétique"
              description="Améliorez le classement DPE de votre bien pour le valoriser et attirer davantage d'acheteurs. Nous vous guidons dans toutes les démarches."
            />
          </StaggerItem>
          <StaggerItem>
            <ServiceCard
              icon={
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
                    d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                  />
                </svg>
              }
              title="Conseils en division de terrain"
              description="Optimisez la valeur de votre patrimoine grâce à nos conseils stratégiques sur la division de terrain et les démarches administratives."
            />
          </StaggerItem>
          <StaggerItem>
            <ServiceCard
              icon={
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
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                  />
                </svg>
              }
              title="Mise en valeur et communication"
              description="Reportage photo professionnel, diffusion optimale sur les portails majeurs et présentation de votre bien à des acheteurs qualifiés."
            />
          </StaggerItem>
        </StaggerChildren>
      </Section>

      {/* Zone d'expertise */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div>
              <SectionHeading
                title="Zone d'expertise"
                subtitle="Un secteur stratégique entre Paris et La Défense"
                centered={false}
              />
              <p className="text-lg leading-8 text-gray-600 mb-6">
                Notre activité se concentre autour du Mont-Valérien, un secteur
                stratégique entre Paris et La Défense.
              </p>
              <p className="text-lg leading-8 text-gray-600 mb-6">
                Nous intervenons principalement sur{" "}
                <strong className="text-gray-900">
                  Nanterre, Puteaux, Suresnes et Rueil-Malmaison
                </strong>
                , des communes en constante évolution offrant un cadre de vie
                recherché.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                {["Nanterre", "Puteaux", "Suresnes", "Rueil-Malmaison"].map(
                  (city) => (
                    <span
                      key={city}
                      className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
                    >
                      {city}
                    </span>
                  )
                )}
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/photos/mont-valerien.jpg"
                alt="Mont-Valérien"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* CTA Final */}
      <Section background="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Vous souhaitez connaître la valeur de votre bien ?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Faites une estimation gratuite dès aujourd'hui.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button href="/contact" variant="primary">
                Estimation gratuite
              </Button>
              <Button href="/nos-services" variant="outline">
                En savoir plus
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
