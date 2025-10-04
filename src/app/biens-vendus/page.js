import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/StaggerChildren";

export const metadata = {
  title: "Biens vendus | eXp France - Mont-Valérien",
  description:
    "Découvrez nos ventes récentes autour du Mont-Valérien. Ils nous ont fait confiance pour leur projet immobilier.",
};

export default function BiensVendus() {
  return (
    <>
      <Hero
        title="Ils nous ont fait confiance — découvrez nos ventes récentes"
        description="Chaque transaction est une histoire unique. Découvrez les biens que nous avons vendus, les familles que nous avons accompagnées, et les projets que nous avons contribué à réaliser autour du Mont-Valérien."
        imageSrc="/photos/mont-valerien.jpg"
      />

      <Section background="white">
        <FadeIn>
          <SectionHeading
            title="Nos réussites"
            subtitle="Des projets menés avec succès"
          />
        </FadeIn>

        {/* Placeholder pour les biens vendus */}
        <FadeIn delay={0.2}>
          <div className="text-center py-16">
            <svg
              className="mx-auto h-24 w-24 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              Des ventes réussies
            </h3>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Grâce à notre expertise locale et notre accompagnement
              personnalisé, nous avons accompagné de nombreuses familles dans la
              vente de leur bien immobilier.
            </p>
            <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
              Nos références seront bientôt disponibles sur cette page. En
              attendant, n'hésitez pas à nous contacter pour en savoir plus sur
              nos réalisations.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary">
                Discuter de votre projet
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Statistiques */}
      <Section background="gray">
        <div className="text-center">
          <FadeIn>
            <SectionHeading
              title="Pourquoi nous choisir ?"
              subtitle="Une expertise qui fait la différence"
            />
          </FadeIn>
          <StaggerChildren className="grid gap-8 md:grid-cols-3 mt-12">
            <StaggerItem>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="text-5xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  Années d'expérience
                </div>
                <p className="text-base text-gray-600">
                  Une expertise approfondie du marché immobilier local
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  100%
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  Accompagnement personnalisé
                </div>
                <p className="text-base text-gray-600">
                  Chaque projet est unique et mérite une attention particulière
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="text-5xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  Communes d'expertise
                </div>
                <p className="text-base text-gray-600">
                  Nanterre, Puteaux, Suresnes, Rueil-Malmaison
                </p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </Section>
    </>
  );
}
