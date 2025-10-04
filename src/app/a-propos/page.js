import Hero from '@/components/Hero';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/FadeIn';
import StaggerChildren, { StaggerItem } from '@/components/StaggerChildren';

export const metadata = {
  title: "À propos | eXp France - Mont-Valérien",
  description: "Une équipe locale, passionnée par l'immobilier et attachée au Mont-Valérien.",
};

export default function APropos() {
  const values = [
    {
      name: 'Transparence',
      description: 'Un suivi clair et honnête, sans surprise.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      name: 'Exigence',
      description: 'Chaque projet est mené avec rigueur et précision.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
    },
    {
      name: 'Proximité',
      description: 'Une relation directe et humaine avec nos clients.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
    },
    {
      name: 'Innovation',
      description: 'Des outils digitaux performants pour une expérience fluide et efficace.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Une équipe locale, passionnée par l'immobilier et attachée au Mont-Valérien"
        imageSrc="/photos/mont-valerien.jpg"
      />

      {/* Notre histoire */}
      <Section background="white">
        <FadeIn>
          <SectionHeading 
            title="Notre histoire" 
            subtitle="Une expertise au service de votre projet"
          />
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-8">
              Après plus de dix ans passés dans différentes agences immobilières, nous avons choisi de créer une structure indépendante, à taille humaine, tout en nous appuyant sur la force du réseau eXp France.
            </p>
            <p className="text-lg leading-8 mt-6">
              Cette alliance nous permet de proposer une approche <strong className="text-gray-900">moderne, digitale et réactive</strong>, tout en conservant la proximité et la disponibilité d'une agence locale.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Notre mission */}
      <Section background="gray">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Notre mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Offrir à chaque client un accompagnement personnalisé à chaque étape de son projet : estimation, conseil, mise en valeur, accompagnement technique et suivi administratif.
            </p>
            <p className="mt-6 text-xl font-semibold text-blue-600">
              Notre objectif : valoriser votre bien et vous aider à vendre dans les meilleures conditions.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Nos valeurs */}
      <Section background="white">
        <FadeIn>
          <SectionHeading 
            title="Nos valeurs" 
            subtitle="Ce qui guide notre action au quotidien"
          />
        </FadeIn>
        <StaggerChildren className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <StaggerItem key={value.name}>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.name}</h3>
                <p className="text-base text-gray-600">{value.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>
    </>
  );
}

