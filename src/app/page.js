import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/StaggerChildren";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="eXp France - Spécialiste Mont-Valérien"
        title="Valorisez et vendez votre bien au meilleur prix"
        description="Expertise locale, accompagnement personnalisé et outils innovants pour réussir votre projet immobilier dans les Hauts-de-Seine."
        imageSrc="/photos/mont-valerien.jpg"
        cta={
          <>
            <Button
              href="/contact"
              variant="accent"
              className="w-full sm:w-auto"
            >
              Estimation gratuite
            </Button>
            <Button
              href="/nos-services"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Nos services
            </Button>
          </>
        }
      />

      {/* Pourquoi nous choisir */}
      <Section background="white">
        <FadeIn>
          <SectionHeading
            label="Notre différence"
            title={
              <>
                Pourquoi <span className="text-blue-600">nous choisir</span> ?
              </>
            }
            subtitle="Expertise, proximité et outils innovants"
            showLine={true}
          />
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-8">
              Avec plus de 10 ans d&apos;expérience chacun, acquise au sein
              d&apos;agences immobilières réputées, nous avons choisi de mettre
              notre savoir-faire au service des habitants du Mont-Valérien.
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
              expertise locale à la puissance d&apos;un réseau international,
              pour vous garantir la meilleure visibilité et des outils modernes.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Nos services */}
      <Section background="gray">
        <FadeIn>
          <SectionHeading
            label="Notre expertise"
            title={
              <>
                Nos <span className="text-blue-600">services</span>
              </>
            }
            subtitle="Nous vous accompagnons dans tous vos projets"
            showLine={true}
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

      {/* eXp France Network */}
      <Section
        background="white"
        className="bg-gradient-to-br from-blue-50 via-white to-amber-50"
      >
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-amber-600 mb-2">
              MEMBRE DU RÉSEAU
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              eXp France
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cellule indépendante du réseau <strong>eXp France</strong>, nous
              avons choisi de nous spécialiser dans le secteur du Mont-Valérien
              (92) pour vous offrir une expertise locale pointue, tout en
              bénéficiant de la puissance d&apos;un réseau international.
            </p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <FadeIn delay={0.1}>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Réseau International
              </h3>
              <p className="text-sm text-gray-600">
                Présent dans 24 pays avec des milliers de conseillers
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Outils Innovants
              </h3>
              <p className="text-sm text-gray-600">
                Technologies de pointe et métavers immobilier
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-600"
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
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Expertise Locale
              </h3>
              <p className="text-sm text-gray-600">
                Connaissance approfondie du secteur 92
              </p>
            </div>
          </FadeIn>
        </div>
        <div className="text-center mt-10">
          <a
            href="https://www.expfrance.fr/fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group"
          >
            Découvrir le réseau eXp France
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
      </Section>

      {/* Zone d'expertise */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div>
              <SectionHeading
                label="Notre territoire"
                title={
                  <>
                    Zone <span className="text-blue-600">d&apos;expertise</span>
                  </>
                }
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
      <CTASection
        title="Vous souhaitez connaître la valeur de votre bien ?"
        subtitle="Obtenez une estimation précise et gratuite de votre propriété par nos experts locaux."
        primaryButton={{ text: "Estimation gratuite", href: "/contact" }}
        secondaryButton={{
          text: "Découvrir nos services",
          href: "/nos-services",
        }}
        variant="light"
      />
    </>
  );
}
