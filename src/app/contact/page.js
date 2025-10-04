import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Contact | eXp France - Mont-Valérien",
  description:
    "Contactez-nous pour échanger sur votre projet immobilier. Nous serons ravis de vous accompagner.",
};

export default function Contact() {
  return (
    <>
      <Hero
        title="Parlons de votre projet immobilier dès aujourd'hui"
        description="Vous avez un projet de vente, d'achat ou simplement besoin d'un conseil ? Contactez-nous pour échanger sur vos besoins. Nous serons ravis de vous accompagner."
        imageSrc="/photos/mont-valerien.jpg"
      />

      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <FadeIn direction="left">
            <div>
              <SectionHeading
                title="Envoyez-nous un message"
                subtitle="Nous vous répondons rapidement"
                centered={false}
              />
              <ContactForm />
            </div>
          </FadeIn>

          {/* Informations de contact */}
          <FadeIn direction="right" delay={0.2}>
            <div>
              <SectionHeading
                title="Contactez-nous directement"
                subtitle="Nous sommes à votre écoute"
                centered={false}
              />

              <div className="space-y-8">
                {/* Téléphone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
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
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-900">
                      Téléphone
                    </p>
                    <p className="mt-2 text-base text-gray-600">À venir</p>
                    <p className="text-sm text-gray-500">
                      Disponible du lundi au vendredi, 9h-19h
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
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
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-900">Email</p>
                    <p className="mt-2 text-base text-gray-600">
                      contact@exp-mont-valerien.fr
                    </p>
                    <p className="text-sm text-gray-500">Réponse sous 24h</p>
                  </div>
                </div>

                {/* Secteur */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
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
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-900">
                      Secteur d'intervention
                    </p>
                    <p className="mt-2 text-base text-gray-600">
                      Mont-Valérien, Nanterre, Suresnes, Puteaux,
                      Rueil-Malmaison
                    </p>
                  </div>
                </div>
              </div>

              {/* Réseau eXp */}
              <div className="mt-12 rounded-2xl bg-gray-50 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Membre du réseau eXp France
                </h3>
                <p className="text-base text-gray-600">
                  En tant que membres du réseau eXp France, nous bénéficions
                  d'outils digitaux performants et d'une visibilité nationale
                  pour vous offrir le meilleur accompagnement.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
