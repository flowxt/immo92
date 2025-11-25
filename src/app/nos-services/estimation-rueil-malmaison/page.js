import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title:
    "Estimation immobilière gratuite à Rueil-Malmaison (92500) | Expert local",
  description:
    "Estimation immobilière gratuite et précise à Rueil-Malmaison. Expert du marché local : Mont-Valérien, Centre-ville, Plateau. Estimation professionnelle en 48h.",
  keywords:
    "estimation Rueil-Malmaison, estimation immobilière Rueil, estimer appartement Rueil-Malmaison, estimer maison Rueil, prix immobilier Rueil 92500",
  alternates: {
    canonical: "https://ener-immo92.fr/nos-services/estimation-rueil-malmaison",
  },
  openGraph: {
    title: "Estimation immobilière gratuite à Rueil-Malmaison | Expert local",
    description:
      "Estimation gratuite de votre bien à Rueil-Malmaison. Expert du Mont-Valérien, Centre-ville, Plateau. Réponse sous 48h.",
    url: "https://ener-immo92.fr/nos-services/estimation-rueil-malmaison",
    type: "website",
    images: [
      {
        url: "/photos/mont-valerien.jpg",
        width: 1200,
        height: 630,
        alt: "Estimation immobilière Rueil-Malmaison",
      },
    ],
  },
};

export default function EstimationRueilMalmaison() {
  const quartiers = [
    {
      nom: "Mont-Valérien / La Boule",
      description:
        "Quartier résidentiel haut de gamme, calme et verdoyant. Maisons avec jardin, proche future ligne 15.",
      prixMoyen: "6 500 - 8 500 €/m²",
    },
    {
      nom: "Centre-Ville",
      description:
        "Hyper-centre avec RER A, commerces, restaurants. Très prisé des familles et actifs.",
      prixMoyen: "6 000 - 7 800 €/m²",
    },
    {
      nom: "Plateau",
      description:
        "Secteur recherché avec belles demeures, écoles réputées et cadre de vie exceptionnel.",
      prixMoyen: "7 000 - 9 000 €/m²",
    },
    {
      nom: "Buzenval",
      description:
        "Quartier dynamique avec métro ligne 1, nombreux commerces et vie de quartier animée.",
      prixMoyen: "5 500 - 7 000 €/m²",
    },
  ];

  return (
    <>
      <Hero
        subtitle="Estimation immobilière à Rueil-Malmaison"
        title="Estimation gratuite de votre bien à Rueil-Malmaison (92500)"
        description="Expert du marché immobilier de Rueil-Malmaison depuis plus de 10 ans. Estimation précise et gratuite de votre appartement ou maison en 48h."
        imageSrc="/photos/mont-valerien.jpg"
        fullHeight={false}
        cta={
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Obtenir mon estimation gratuite
          </Link>
        }
      />

      <Section background="white">
        <FadeIn>
          <SectionHeading
            label="Notre expertise"
            title={
              <>
                Expert immobilier{" "}
                <span className="text-blue-600">à Rueil-Malmaison</span>
              </>
            }
            subtitle="Une connaissance approfondie du marché rueillois"
            showLine={true}
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
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
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Connaissance du marché local
              </h3>
              <p className="text-gray-600">
                Expert du marché immobilier de Rueil-Malmaison : Mont-Valérien,
                Centre-ville, Plateau, Buzenval. Nous connaissons chaque secteur
                et ses spécificités.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Veille du marché quotidienne
              </h3>
              <p className="text-gray-600">
                Analyse quotidienne des ventes à Rueil-Malmaison pour une
                estimation au prix actuel du marché, ajustée en temps réel.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Réactivité garantie
              </h3>
              <p className="text-gray-600">
                Réponse sous 48h, visite rapide de votre bien et remise d&apos;un
                rapport d&apos;estimation complet et détaillé.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section background="gray">
        <FadeIn>
          <SectionHeading
            label="Prix du marché"
            title={
              <>
                Prix immobilier par quartier{" "}
                <span className="text-blue-600">à Rueil-Malmaison</span>
              </>
            }
            subtitle="Estimation moyenne au m² selon les quartiers (2024)"
            showLine={true}
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {quartiers.map((quartier, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {quartier.nom}
                  </h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-bold">
                    {quartier.prixMoyen}
                  </span>
                </div>
                <p className="text-gray-600">{quartier.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-sm text-amber-900">
              <strong>📊 Note :</strong> Ces prix sont indicatifs. Le prix réel
              dépend de nombreux critères (état, vue, étage, prestations, etc.).
              Contactez-nous pour une estimation personnalisée gratuite.
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section background="white">
        <FadeIn>
          <SectionHeading
            label="Questions fréquentes"
            title={
              <>
                FAQ - Estimation{" "}
                <span className="text-blue-600">à Rueil-Malmaison</span>
              </>
            }
            showLine={true}
          />

          <div className="mt-12 space-y-6 max-w-3xl mx-auto">
            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-bold text-gray-900 cursor-pointer">
                L&apos;estimation est-elle vraiment gratuite ?
              </summary>
              <p className="mt-3 text-gray-600">
                Oui, 100% gratuite et sans engagement. Nous ne sommes rémunérés
                que si vous vendez votre bien avec nous.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Quel est le prix moyen au m² à Rueil-Malmaison ?
              </summary>
              <p className="mt-3 text-gray-600">
                Le prix varie de 5 500 €/m² (Buzenval) à 9 000 €/m² (Plateau).
                Le Mont-Valérien et le Centre-Ville se situent entre 6 000 et 8
                500 €/m².
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Pourquoi Rueil-Malmaison est-elle si prisée ?
              </summary>
              <p className="mt-3 text-gray-600">
                Rueil-Malmaison offre un cadre de vie exceptionnel : proximité
                La Défense et Paris, RER A, métro ligne 1, écoles réputées,
                espaces verts, commerces de qualité.
              </p>
            </details>
          </div>
        </FadeIn>
      </Section>

      <CTASection
        title="Estimez votre bien à Rueil-Malmaison"
        subtitle="Obtenez une estimation gratuite et précise en moins de 48h."
        primaryButton={{
          text: "Demander mon estimation gratuite",
          href: "/contact",
        }}
        secondaryButton={{ text: "Voir nos biens", href: "/biens-a-vendre" }}
        variant="dark"
      />
    </>
  );
}


