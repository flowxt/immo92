"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import MortgageCalculator from "@/components/MortgageCalculator";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

export default function CalculateurPage() {
  const benefits = [
    {
      icon: "⚡",
      title: "Calcul instantané",
      description: "Résultats en temps réel dès que vous ajustez les paramètres"
    },
    {
      icon: "💰",
      title: "Frais inclus",
      description: "Les frais de notaire sont automatiquement intégrés"
    },
    {
      icon: "📊",
      title: "Visualisation claire",
      description: "Graphique de répartition capital vs intérêts"
    },
    {
      icon: "🎯",
      title: "Personnalisable",
      description: "Ajustez tous les paramètres selon votre situation"
    }
  ];

  return (
    <>
      <Hero
        subtitle="Outils pratiques"
        title="Calculateur de prêt immobilier"
        description="Estimez vos mensualités et le coût total de votre crédit immobilier en quelques clics."
        imageSrc="/photos/mont-valerien.jpg"
        fullHeight={false}
      />

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <MortgageCalculator propertyPrice={500000} />
          </FadeIn>
        </div>
      </Section>

      {/* Avantages */}
      <Section background="gray">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi utiliser notre calculateur ?
            </h2>
            <p className="text-lg text-gray-600">
              Un outil simple et complet pour préparer votre projet immobilier
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Questions fréquentes
            </h2>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="font-bold text-gray-900 mb-2">
                  📌 Les frais de notaire sont-ils inclus ?
                </h3>
                <p className="text-gray-600">
                  Oui, le calculateur intègre automatiquement environ 7,5% de frais de notaire, 
                  ce qui correspond à la moyenne pour l&apos;ancien. Pour le neuf, ces frais sont 
                  généralement plus bas (2-3%).
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="font-bold text-gray-900 mb-2">
                  📌 Le taux proposé est-il à jour ?
                </h3>
                <p className="text-gray-600">
                  Le taux par défaut (3,5%) est une moyenne indicative. Les taux réels varient 
                  selon votre profil, votre apport et la banque. Nous vous conseillons pour 
                  obtenir les meilleurs taux du marché.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="font-bold text-gray-900 mb-2">
                  📌 Quel apport personnel est recommandé ?
                </h3>
                <p className="text-gray-600">
                  Un apport de 10 à 20% du prix du bien est généralement recommandé. 
                  Un apport plus élevé vous permet d&apos;obtenir de meilleures conditions 
                  et réduit vos mensualités.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="font-bold text-gray-900 mb-2">
                  📌 Puis-je obtenir une étude personnalisée ?
                </h3>
                <p className="text-gray-600">
                  Absolument ! Contactez-nous pour une simulation détaillée et personnalisée. 
                  Nous travaillons avec plusieurs partenaires bancaires pour vous obtenir 
                  les meilleures conditions.
                </p>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Besoin d&apos;aide pour votre financement ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Notre équipe vous accompagne dans votre recherche de financement 
            et négocie pour vous les meilleures conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Demander un rendez-vous
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="tel:+33123456789"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Appeler maintenant
            </a>
          </div>
        </motion.div>
      </Section>
    </>
  );
}

