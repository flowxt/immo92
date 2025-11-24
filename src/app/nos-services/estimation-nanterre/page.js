import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Estimation immobilière gratuite à Nanterre (92000) | Expert local",
  description:
    "Estimation immobilière gratuite et précise à Nanterre. Expert du marché local depuis 10 ans : Mont-Valérien, Centre-ville, Quartier des Musiciens. Estimation en 48h.",
  keywords:
    "estimation Nanterre, estimation immobilière Nanterre, estimer appartement Nanterre, estimer maison Nanterre, prix immobilier Nanterre 92000",
  alternates: {
    canonical: "https://ener-immo92.fr/nos-services/estimation-nanterre",
  },
  openGraph: {
    title: "Estimation immobilière gratuite à Nanterre | Expert local",
    description:
      "Estimation gratuite et précise de votre bien à Nanterre. Expert du Mont-Valérien, Centre-ville, Quartier des Musiciens. Réponse en 48h.",
    url: "https://ener-immo92.fr/nos-services/estimation-nanterre",
    type: "website",
    images: [
      {
        url: "/photos/mont-valerien.jpg",
        width: 1200,
        height: 630,
        alt: "Estimation immobilière Nanterre",
      },
    ],
  },
};

export default function EstimationNanterre() {
  const quartiers = [
    {
      nom: "Mont-Valérien",
      description:
        "Quartier résidentiel prisé, calme et verdoyant. Proximité RER A et future ligne 15.",
      prixMoyen: "5 500 - 7 000 €/m²",
    },
    {
      nom: "Centre-Ville",
      description:
        "Proximité immédiate RER A Nanterre-Ville, commerces, écoles. Très recherché.",
      prixMoyen: "5 000 - 6 500 €/m²",
    },
    {
      nom: "Quartier des Musiciens",
      description:
        "Quartier familial avec maisons et jardins. Écoles Jules Ferry et Abdelmalek Sayad.",
      prixMoyen: "6 000 - 7 500 €/m²",
    },
    {
      nom: "Parc André Malraux",
      description:
        "Secteur moderne et dynamique, proche université et préfecture.",
      prixMoyen: "4 800 - 6 200 €/m²",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Estimation immobilière à Nanterre"
        title="Estimation gratuite de votre bien à Nanterre (92000)"
        description="Expert du marché immobilier nanterrien depuis plus de 10 ans. Estimation précise et gratuite de votre appartement ou maison à Nanterre en 48h."
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

      {/* Pourquoi nous choisir pour votre estimation à Nanterre */}
      <Section background="white">
        <FadeIn>
          <SectionHeading
            label="Notre expertise"
            title={
              <>
                Pourquoi choisir notre{" "}
                <span className="text-blue-600">expertise à Nanterre</span> ?
              </>
            }
            subtitle="Une connaissance approfondie du marché immobilier nanterrien"
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
                Expert local à Nanterre
              </h3>
              <p className="text-gray-600">
                Plus de 10 ans d&apos;expérience sur le marché immobilier
                nanterrien. Nous connaissons chaque quartier : Mont-Valérien,
                Centre-ville, Quartier des Musiciens, Parc André Malraux.
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
                Analyse du marché en temps réel
              </h3>
              <p className="text-gray-600">
                Nous analysons quotidiennement les ventes réalisées à Nanterre
                pour vous proposer une estimation au prix du marché actuel.
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
                Réponse rapide en 48h
              </h3>
              <p className="text-gray-600">
                Après votre demande, nous vous recontactons sous 48h pour
                planifier une visite et vous remettre une estimation détaillée.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Prix par quartier à Nanterre */}
      <Section background="gray">
        <FadeIn>
          <SectionHeading
            label="Prix du marché"
            title={
              <>
                Prix immobilier par{" "}
                <span className="text-blue-600">quartier à Nanterre</span>
              </>
            }
            subtitle="Estimation moyenne au m² selon les quartiers de Nanterre (2024)"
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
              <strong>📊 Note importante :</strong> Ces prix sont indicatifs et
              peuvent varier selon l&apos;état du bien, l&apos;étage,
              l&apos;exposition, les prestations, etc. Seule une estimation
              personnalisée vous donnera le prix exact de votre bien.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Processus d'estimation */}
      <Section background="white">
        <FadeIn>
          <SectionHeading
            label="Notre méthode"
            title={
              <>
                Comment se déroule{" "}
                <span className="text-blue-600">l&apos;estimation</span> ?
              </>
            }
            subtitle="Un processus simple et transparent en 3 étapes"
            showLine={true}
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Prise de contact
              </h3>
              <p className="text-gray-600">
                Remplissez le formulaire en ligne ou appelez-nous. Nous
                recueillons les premières informations sur votre bien à
                Nanterre.
              </p>
            </div>

            <div className="relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Visite du bien
              </h3>
              <p className="text-gray-600">
                Nous visitons votre bien à Nanterre pour évaluer ses atouts, son
                état, son environnement et toutes ses caractéristiques.
              </p>
            </div>

            <div className="relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Remise de l&apos;estimation
              </h3>
              <p className="text-gray-600">
                Vous recevez un rapport d&apos;estimation complet avec le prix
                de marché, les biens comparables vendus et nos recommandations.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Nos ventes à Nanterre */}
      <Section background="gray">
        <FadeIn>
          <SectionHeading
            label="Nos références"
            title={
              <>
                Nos ventes récentes{" "}
                <span className="text-blue-600">à Nanterre</span>
              </>
            }
            subtitle="Découvrez quelques-uns des biens que nous avons vendus à Nanterre"
            showLine={true}
          />

          <div className="mt-12 text-center">
            <Link
              href="/biens-a-vendre"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              Voir tous nos biens à vendre à Nanterre
              <svg
                className="w-5 h-5"
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
            </Link>
          </div>
        </FadeIn>
      </Section>

      {/* FAQ Nanterre */}
      <Section background="white">
        <FadeIn>
          <SectionHeading
            label="Questions fréquentes"
            title={
              <>
                FAQ - Estimation immobilière{" "}
                <span className="text-blue-600">à Nanterre</span>
              </>
            }
            showLine={true}
          />

          <div className="mt-12 space-y-6 max-w-3xl mx-auto">
            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Combien coûte une estimation immobilière à Nanterre ?
              </summary>
              <p className="mt-3 text-gray-600">
                Notre estimation immobilière est totalement gratuite et sans
                engagement. Nous nous rémunérons uniquement si vous décidez de
                vendre votre bien avec nous.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Quel est le prix moyen au m² à Nanterre ?
              </summary>
              <p className="mt-3 text-gray-600">
                Le prix moyen au m² à Nanterre varie selon les quartiers : de 4
                800 €/m² (Parc André Malraux) à 7 500 €/m² (Quartier des
                Musiciens). Le Mont-Valérien et le Centre-Ville se situent entre
                5 000 et 7 000 €/m².
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Quels sont les quartiers les plus recherchés à Nanterre ?
              </summary>
              <p className="mt-3 text-gray-600">
                Les quartiers les plus prisés sont le Mont-Valérien (calme,
                verdoyant, écoles), le Centre-Ville (RER A, commerces) et le
                Quartier des Musiciens (maisons avec jardin, secteur familial).
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Combien de temps faut-il pour vendre un bien à Nanterre ?
              </summary>
              <p className="mt-3 text-gray-600">
                Un bien correctement estimé se vend en moyenne en 60 à 90 jours
                à Nanterre. Les biens surévalués peuvent mettre 6 mois ou plus,
                d&apos;où l&apos;importance d&apos;une estimation juste.
              </p>
            </details>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <CTASection
        title="Prêt à estimer votre bien à Nanterre ?"
        subtitle="Obtenez une estimation gratuite et précise de votre appartement ou maison à Nanterre en moins de 48h."
        primaryButton={{
          text: "Demander mon estimation gratuite",
          href: "/contact",
        }}
        secondaryButton={{ text: "Nous appeler", href: "tel:+33123456789" }}
        variant="dark"
      />
    </>
  );
}

