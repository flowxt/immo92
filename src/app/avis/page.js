"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AvisClientsPage() {
  const reviews = [
    {
      id: 1,
      author: "Charlajian Serge",
      reviewCount: 30,
      photos: 4,
      badge: "Local Guide",
      date: "il y a 2 semaines",
      text: "Je tiens à remercier chaleureusement monsieur Leclerc pour son professionnalisme et sa vision. Après plusieurs difficultés à vendre ma maison, il a su trouver une solution intelligente en proposant la division du terrain, ce qui a totalement débloqué la situation. Il s'est également occupé de toute la partie administrative liée à cette division, avec une parfaite maîtrise du sujet. La vente s'est ensuite réalisée rapidement. Un vrai accompagnement, du début à la fin. Merci",
      service: "Vente & Division terrain",
      featured: true,
      rating: 5,
    },
    {
      id: 2,
      author: "LEROUX Jean Claude",
      reviewCount: 2,
      date: "il y a 2 semaines",
      text: "Habitant en Picardie et ne pouvant me déplacer, Alexandre m'a très bien accompagné à distance pour vendre ma maison de Suresnes. Personne efficace, réactive, à l'écoute, de bons conseils, honnête, la vente a été réglée rapidement dans de bonnes conditions. Un vrai pro que je recommande.",
      service: "Vente",
      visitDate: "Visité en janvier 2026",
      rating: 5,
    },
    {
      id: 3,
      author: "Amaury D'Aligny",
      reviewCount: 1,
      date: "il y a 2 semaines",
      text: "Très satisfait de l'accompagnement de Monsieur Naquin. Il possède une vraie expertise, donne de bons conseils et contribue à établir une réelle relation de confiance. Je recommande !",
      rating: 5,
    },
    {
      id: 4,
      author: "Grégoire PIQUET",
      reviewCount: 2,
      date: "il y a 2 semaines",
      text: "Une très bonne expérience, ayant mis mon bien dans plusieurs agences EXP à été très réactif et sûrement les plus actifs dans la recherche d'acquéreurs. C'est pourquoi je suis content d'avoir vendu mon bien par leur intermédiaire.",
      service: "Vente",
      visitDate: "Visité en juillet 2025",
      rating: 5,
    },
    {
      id: 5,
      author: "Michèle Azoulay",
      reviewCount: 2,
      date: "il y a 2 semaines",
      text: "Personnes très professionnelles, tout est mis en oeuvre pour la réalisation du projet, diagnostic, photos, personnes très courtoises et de très bonnes explications bon relationnel, merci encore pour la vente de notre bien",
      service: "Vente",
      visitDate: "Visité en janvier",
      rating: 5,
    },
    {
      id: 6,
      author: "Guillaume Rabasté",
      reviewCount: 9,
      date: "il y a 2 semaines",
      text: "Monsieur Naquin a une très solide expertise sur le marché de l&apos;ouest parisien. Ses conseils et sa vision nous ont été très précieux.",
      visitDate: "Visité en janvier",
      rating: 5,
    },
    {
      id: 7,
      author: "Philippe Pinheiro",
      reviewCount: 5,
      date: "il y a 2 semaines",
      text: "Merci Alexandre, qui a su m&apos;accompagner pour mon projet d&apos;acquisition. Je recommande !!",
      service: "Acquisition",
      visitDate: "Visité en janvier",
      rating: 5,
    },
    {
      id: 8,
      author: "Régis Szczepaniak",
      reviewCount: 2,
      photos: 15,
      date: "il y a 2 semaines",
      text: "Très bon conseils, une transaction finalisée claire, merci pour votre accompagnement très pro !",
      visitDate: "Visité en janvier",
      rating: 5,
    },
    {
      id: 9,
      author: "Vabinase",
      reviewCount: 2,
      date: "il y a 2 semaines",
      text: "Je recommande vivement, respectueux et professionnel.",
      visitDate: "Visité en janvier",
      rating: 5,
    },
    {
      id: 10,
      author: "Sarah Kanti",
      reviewCount: 6,
      date: "il y a 2 semaines",
      text: "Excellent service et accompagnement personnalisé. Je recommande vivement !",
      rating: 5,
    },
  ];

  const averageRating = 5.0;
  const totalReviews = reviews.length;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2998a6] to-[#0d6c8a] text-white pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Avis de nos Clients
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits qui nous ont
              fait confiance pour leurs projets immobiliers
            </p>

            {/* Rating Summary */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="text-6xl font-bold">{averageRating}</div>
                <div>
                  <StarRating rating={5} />
                  <div className="text-sm text-white/80 mt-1">
                    Basé sur {totalReviews} avis Google
                  </div>
                </div>
              </div>

              {/* Google Badge */}
              <div className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Avis Google Certifiés</span>
              </div>

              {/* CTA Button */}
              <a
                href="https://share.google/Pwv70PmUH2XkDGABb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#2998a6] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl mt-4"
              >
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
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                Voir tous nos avis Google
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow ${
                review.featured
                  ? "border-2 border-[#2998a6] md:col-span-2"
                  : ""
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2998a6] to-[#0d6c8a] flex items-center justify-center text-white font-bold text-lg">
                    {review.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-900">
                        {review.author}
                      </h3>
                      {review.badge && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
                          {review.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{review.reviewCount} avis</span>
                      {review.photos && (
                        <>
                          <span>•</span>
                          <span>{review.photos} photos</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">{review.date}</div>
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>

              {/* Service Tag */}
              {review.service && (
                <div className="mb-3">
                  <span className="inline-block bg-[#2998a6]/10 text-[#2998a6] px-3 py-1 rounded-full text-sm font-semibold">
                    {review.service}
                  </span>
                </div>
              )}

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {review.text}
              </p>

              {/* Visit Date */}
              {review.visitDate && (
                <div className="text-sm text-gray-500 italic">
                  {review.visitDate}
                </div>
              )}

              {/* Featured Badge */}
              {review.featured && (
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center gap-2 text-[#2998a6] font-semibold">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>Témoignage mis en avant</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-[#2998a6] mb-2">100%</div>
            <div className="text-gray-600 font-semibold">
              Clients Satisfaits
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Note moyenne de 5/5 étoiles
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#2998a6] mb-2">
              {totalReviews}+
            </div>
            <div className="text-gray-600 font-semibold">Avis Certifiés</div>
            <div className="text-sm text-gray-500 mt-1">
              Témoignages vérifiés Google
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#2998a6] mb-2">15+</div>
            <div className="text-gray-600 font-semibold">Ans d&apos;Expérience</div>
            <div className="text-sm text-gray-500 mt-1">
              Expertise de l&apos;ouest parisien
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 bg-gradient-to-r from-[#2998a6] to-[#0d6c8a] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Vous aussi, confiez-nous votre projet
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez nos clients satisfaits et bénéficiez d&apos;un accompagnement
            personnalisé pour votre projet immobilier
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#2998a6] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Nous contacter
            </Link>
            <a
              href="tel:0662155757"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#2998a6] transition-all"
            >
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              06 62 15 57 57
            </a>
          </div>
        </motion.div>

        {/* Leave Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 mb-4">
            Vous avez déjà travaillé avec nous ?
          </p>
          <a
            href="https://share.google/Pwv70PmUH2XkDGABb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#2998a6] font-semibold hover:text-[#0d6c8a] transition-colors"
          >
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
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            Laisser un avis sur Google
          </a>
        </motion.div>
      </div>
    </div>
  );
}
