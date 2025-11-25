import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: "Estimation immobilière gratuite à Suresnes (92150) | Expert local",
  description:
    "Estimation immobilière gratuite et précise à Suresnes. Expert du marché local : Mont-Valérien, Centre-ville, Cité-Jardins. Estimation en 48h par un professionnel.",
  keywords:
    "estimation Suresnes, estimation immobilière Suresnes, estimer appartement Suresnes, estimer maison Suresnes, prix immobilier Suresnes 92150",
  alternates: {
    canonical: "https://ener-immo92.fr/nos-services/estimation-suresnes",
  },
  openGraph: {
    title: "Estimation immobilière gratuite à Suresnes | Expert local",
    description:
      "Estimation gratuite de votre bien à Suresnes. Expert du Mont-Valérien, Centre-ville, Cité-Jardins. Réponse sous 48h.",
    url: "https://ener-immo92.fr/nos-services/estimation-suresnes",
    type: "website",
    images: [
      {
        url: "/photos/mont-valerien.jpg",
        width: 1200,
        height: 630,
        alt: "Estimation immobilière Suresnes",
      },
    ],
  },
};

export default function EstimationSuresnes() {
  const quartiers = [
    {
      nom: "Mont-Valérien",
      description:
        "Quartier résidentiel d'exception, calme absolu, verdure, maisons de caractère. Proximité future ligne 15.",
      prixMoyen: "6 800 - 8 800 €/m²",
    },
    {
      nom: "Centre-Ville",
      description:
        "Hyper-centre avec Tramway T2, commerces, restaurants, marchés. Très dynamique et prisé.",
      prixMoyen: "6 200 - 8 000 €/m²",
    },
    {
      nom: "Cité-Jardins",
      description:
        "Quartier historique classé UNESCO, architecture remarquable, espaces verts. Très recherché.",
      prixMoyen: "7 000 - 9 200 €/m²",
    },
    {
      nom: "Longchamp",
      description:
        "Secteur proche hippodrome et bois de Boulogne, cadre verdoyant, résidences de standing.",
      prixMoyen: "6 500 - 8 500 €/m²",
    },
  ];

  return (
    <>
      <Hero
        subtitle="Estimation immobilière à Suresnes"
        title="Estimation gratuite de votre bien à Suresnes (92150)"
        description="Expert du marché immobilier suresnois depuis plus de 10 ans. Estimation précise et gratuite de votre appartement ou maison à Suresnes en 48h."
        imageSrc="/photos/mont-valerien.jpg"
        fullHeight={false}
        cta={
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#2998a6] rounded-xl hover:bg-[#0d6c8a] transition-colors shadow-lg hover:shadow-xl"
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
                <span className="text-[#2998a6]">à Suresnes</span>
              </>
            }
            subtitle="Une connaissance pointue du marché suresnois"
            showLine={true}
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#2998a6]/10 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#2998a6]"
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
                Spécialiste de Suresnes
              </h3>
              <p className="text-gray-600">
                Expert du marché suresnois : Mont-Valérien, Centre-ville,
                Cité-Jardins, Longchamp. Connaissance approfondie de chaque
                secteur et de ses particularités.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#2998a6]/10 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#2998a6]"
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
                Analyse du marché local
              </h3>
              <p className="text-gray-600">
                Suivi quotidien des transactions à Suresnes pour une estimation
                au prix réel du marché, actualisée en permanence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#2998a6]/10 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#2998a6]"
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
                Service rapide
              </h3>
              <p className="text-gray-600">
                Contact sous 48h, visite de votre bien et remise d&apos;une
                estimation détaillée avec rapport complet.
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
                <span className="text-[#2998a6]">à Suresnes</span>
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
                  <span className="bg-[#2998a6]/10 text-[#0d6c8a] px-3 py-1 rounded-lg text-sm font-bold">
                    {quartier.prixMoyen}
                  </span>
                </div>
                <p className="text-gray-600">{quartier.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-sm text-amber-900">
              <strong>📊 Bon à savoir :</strong> Ces prix sont des moyennes
              indicatives. Chaque bien est unique. Seule une estimation
              personnalisée déterminera le juste prix de votre propriété.
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section background="white">
        <FadeIn>
          <SectionHeading
            label="Atouts de Suresnes"
            title={
              <>
                Pourquoi investir{" "}
                <span className="text-[#2998a6]">à Suresnes</span> ?
              </>
            }
            showLine={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">🚇</div>
              <h3 className="font-bold text-gray-900 mb-2">
                Excellente desserte
              </h3>
              <p className="text-sm text-gray-600">
                Tramway T2, future ligne 15, RER à proximité. Accès rapide La
                Défense et Paris.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="font-bold text-gray-900 mb-2">Patrimoine UNESCO</h3>
              <p className="text-sm text-gray-600">
                Cité-Jardins classée, architecture remarquable, histoire riche.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">🌳</div>
              <h3 className="font-bold text-gray-900 mb-2">Cadre verdoyant</h3>
              <p className="text-sm text-gray-600">
                Nombreux espaces verts, parcs, proximité bois de Boulogne et
                Seine.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">🏫</div>
              <h3 className="font-bold text-gray-900 mb-2">
                Écoles de qualité
              </h3>
              <p className="text-sm text-gray-600">
                Établissements réputés, lycée Paul Langevin, nombreuses écoles
                primaires.
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
                <span className="text-[#2998a6]">à Suresnes</span>
              </>
            }
            showLine={true}
          />

          <div className="mt-12 space-y-6 max-w-3xl mx-auto">
            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Combien coûte votre estimation à Suresnes ?
              </summary>
              <p className="mt-3 text-gray-600">
                Notre estimation est totalement gratuite et sans engagement.
                Aucuns frais jusqu&apos;à la vente effective de votre bien.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Quel est le prix moyen à Suresnes ?
              </summary>
              <p className="mt-3 text-gray-600">
                Le prix varie de 6 200 €/m² (Centre-Ville) à 9 200 €/m²
                (Cité-Jardins). Le Mont-Valérien et Longchamp se situent entre 6
                500 et 8 800 €/m².
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Suresnes est-elle une ville recherchée ?
              </summary>
              <p className="mt-3 text-gray-600">
                Oui, très recherchée pour son cadre de vie, sa Cité-Jardins
                UNESCO, sa proximité La Défense/Paris, ses écoles et ses espaces
                verts. Marché immobilier dynamique.
              </p>
            </details>
          </div>
        </FadeIn>
      </Section>

      <CTASection
        title="Estimez votre bien à Suresnes"
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


