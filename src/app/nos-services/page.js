import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import ServicesContent from "./ServicesContent";

export const metadata = {
  title: "Nos services | eXp France - Mont-Valérien",
  description:
    "Des solutions personnalisées pour valoriser votre bien immobilier : estimation, rénovation énergétique, division de terrain, mise en valeur.",
};

export default function NosServices() {
  return (
    <>
      <Hero
        title="Des solutions personnalisées pour valoriser votre bien immobilier"
        imageSrc="/photos/mont-valerien.jpg"
        fullHeight={false}
      />

      <ServicesContent />

      {/* CTA */}
      <Section background="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Prêt à valoriser votre bien ?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Contactez-nous pour un accompagnement personnalisé.
            </p>
            <div className="mt-10">
              <Button href="/contact" variant="primary">
                Prendre contact
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
