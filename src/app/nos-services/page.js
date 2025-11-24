import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import ServicesContent from "./ServicesContent";
import RenovationSection from "./RenovationSection";

export const metadata = {
  title:
    "Estimation immobilière gratuite Nanterre, Rueil, Suresnes, Puteaux | eXp France",
  description:
    "Estimation immobilière gratuite à Nanterre, Rueil-Malmaison, Suresnes, Puteaux. Expert local du Mont-Valérien. Rénovation énergétique, division de terrain. Réponse en 48h.",
  keywords:
    "estimation immobilière, estimation Nanterre, estimation Rueil-Malmaison, estimation Suresnes, estimation Puteaux, agent immobilier 92, rénovation énergétique",
  alternates: {
    canonical: "https://ener-immo92.fr/nos-services",
  },
  openGraph: {
    title:
      "Estimation immobilière gratuite - Nanterre, Rueil, Suresnes, Puteaux",
    description:
      "Estimation gratuite à Nanterre, Rueil-Malmaison, Suresnes, Puteaux. Rénovation énergétique, division de terrain. Expert local Mont-Valérien.",
    url: "https://ener-immo92.fr/nos-services",
    type: "website",
  },
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
