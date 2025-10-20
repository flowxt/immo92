import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import ServicesContent from "./ServicesContent";
import RenovationSection from "./RenovationSection";

export const metadata = {
  title: "Nos services | eXp France - Mont-Valérien",
  description:
    "Estimation immobilière, rénovation énergétique, division de terrain et mise en valeur : découvrez nos solutions pour valoriser votre bien.",
};

export default function NosServices() {
  return (
    <>
      <Hero
        subtitle="Nos services"
        title="Des solutions sur mesure pour valoriser votre bien"
        description="Estimation, rénovation énergétique, division de terrain : nous vous accompagnons à chaque étape de votre projet."
        imageSrc="/photos/mont-valerien.jpg"
        fullHeight={false}
      />

      <ServicesContent />

      <RenovationSection />

      {/* CTA */}
      <CTASection
        title="Prêt à valoriser votre bien ?"
        subtitle="Bénéficiez de notre expertise pour maximiser la valeur de votre propriété et réussir votre vente."
        primaryButton={{ text: "Démarrer mon projet", href: "/contact" }}
        secondaryButton={{ text: "Estimation gratuite", href: "/contact" }}
        variant="dark"
      />
    </>
  );
}
