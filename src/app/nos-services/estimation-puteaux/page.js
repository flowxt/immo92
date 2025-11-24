import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: "Estimation immobilière gratuite à Puteaux (92800) | Expert local",
  description:
    "Estimation immobilière gratuite et précise à Puteaux. Expert du marché local : Centre-ville, Bas de Puteaux, proximité La Défense. Estimation professionnelle en 48h.",
  keywords:
    "estimation Puteaux, estimation immobilière Puteaux, estimer appartement Puteaux, estimer maison Puteaux, prix immobilier Puteaux 92800",
  alternates: {
    canonical: "https://ener-immo92.fr/nos-services/estimation-puteaux",
  },
  openGraph: {
    title: "Estimation immobilière gratuite à Puteaux | Expert local",
    description:
      "Estimation gratuite de votre bien à Puteaux. Expert du Centre-ville et Bas de Puteaux, proximité La Défense. Réponse sous 48h.",
    url: "https://ener-immo92.fr/nos-services/estimation-puteaux",
    type: "website",
    images: [
      {
        url: "/photos/mont-valerien.jpg",
        width: 1200,
        height: 630,
        alt: "Estimation immobilière Puteaux",
      },
    ],
  },
};

export default function EstimationPuteaux() {
  const quartiers = [
    {
      nom: "Centre-Ville / Bergères",
      description:
        "Cœur historique de Puteaux, commerces, écoles, marché. Proximité immédiate La Défense.",
      prixMoyen: "6 500 - 8 200 €/m²",
    },
    {
      nom: "Bas de Puteaux",
      description:
        "Secteur résidentiel calme en bord de Seine. Vue exceptionnelle, cadre verdoyant.",
      prixMoyen: "7 000 - 9 000 €/m²",
    },
    {
      nom: "La Défense / Arche",
      description:
        "Tours résidentielles de standing, services haut de gamme, transports. Très prisé des cadres.",
      prixMoyen: "7 500 - 10 000 €/m²",
    },
    {
      nom: "République",
      description:
        "Quartier dynamique avec métro ligne 1, tramway T2, nombreux commerces et restaurants.",
      prixMoyen: "6 800 - 8 500 €/m²",
    },
  ];

  return (
    <>
      <Hero
        subtitle="Estimation immobilière à Puteaux"
        title="Estimation gratuite de votre bien à Puteaux (92800)"
        description="Expert du marché immobilier de Puteaux depuis plus de 10 ans. Estimation précise et gratuite de votre appartement ou maison à Puteaux en 48h."
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
                <span className="text-blue-600">à Puteaux</span>
              </>
            }
            subtitle="Une expertise reconnue du marché putéolien"
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
                Spécialiste de Puteaux
              </h3>
              <p className="text-gray-600">
                Connaissance approfondie du marché putéolien : Centre-Ville, Bas
                de Puteaux, secteur La Défense, République. Chaque quartier a
                ses spécificités.
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
                Marché dynamique
              </h3>
              <p className="text-gray-600">
                Suivi quotidien des ventes à Puteaux, ville en pleine mutation
                avec La Défense. Estimation ajustée au marché actuel.
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
                Réactivité maximale
              </h3>
              <p className="text-gray-600">
                Réponse garantie sous 48h, visite rapide et remise d&apos;un
                rapport d&apos;estimation complet avec recommandations.
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
                <span className="text-blue-600">à Puteaux</span>
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
              <strong>📊 Important :</strong> Ces prix sont des moyennes. Le
              prix réel de votre bien dépend de nombreux critères : vue, étage,
              état, prestations, etc. Contactez-nous pour une estimation
              personnalisée.
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section background="white">
        <FadeIn>
          <SectionHeading
            label="Atouts de Puteaux"
            title={
              <>
                Pourquoi Puteaux est{" "}
                <span className="text-blue-600">si attractive</span> ?
              </>
            }
            showLine={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="font-bold text-gray-900 mb-2">La Défense</h3>
              <p className="text-sm text-gray-600">
                Accès immédiat au 1er quartier d&apos;affaires européen. Idéal
                pour les actifs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">🚇</div>
              <h3 className="font-bold text-gray-900 mb-2">
                Transports exceptionnels
              </h3>
              <p className="text-sm text-gray-600">
                Métro 1, Tramway T2, RER A, bus. Connexion Paris en 10 minutes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">🌊</div>
              <h3 className="font-bold text-gray-900 mb-2">Bords de Seine</h3>
              <p className="text-sm text-gray-600">
                Bas de Puteaux en bord de Seine, quais aménagés, cadre
                exceptionnel.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">🏙️</div>
              <h3 className="font-bold text-gray-900 mb-2">Dynamisme urbain</h3>
              <p className="text-sm text-gray-600">
                Ville moderne et dynamique, nombreux services, commerces,
                restaurants.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section background="gray">
        <FadeIn>
          <SectionHeading
            label="Questions fréquentes"
            title={
              <>
                FAQ - Estimation{" "}
                <span className="text-blue-600">à Puteaux</span>
              </>
            }
            showLine={true}
          />

          <div className="mt-12 space-y-6 max-w-3xl mx-auto">
            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-bold text-gray-900 cursor-pointer">
                L&apos;estimation est-elle payante à Puteaux ?
              </summary>
              <p className="mt-3 text-gray-600">
                Non, notre estimation est 100% gratuite et sans engagement. Nous
                sommes rémunérés uniquement lors de la vente.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Quel est le prix moyen au m² à Puteaux ?
              </summary>
              <p className="mt-3 text-gray-600">
                Le prix varie de 6 500 €/m² (Centre-Ville) à 10 000 €/m²
                (secteur La Défense). Le Bas de Puteaux et République se situent
                entre 6 800 et 9 000 €/m².
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Puteaux est-elle bien desservie ?
              </summary>
              <p className="mt-3 text-gray-600">
                Excellente desserte : métro ligne 1, tramway T2, RER A, nombreux
                bus. Accès Paris centre en 10 min, La Défense à pied.
                Connectivité exceptionnelle.
              </p>
            </details>
          </div>
        </FadeIn>
      </Section>

      <CTASection
        title="Estimez votre bien à Puteaux"
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

