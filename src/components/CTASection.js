'use client';

import { motion } from 'framer-motion';
import Button from './Button';

export default function CTASection({
  title = "Prêt à donner vie à votre projet ?",
  subtitle = "Contactez-nous dès aujourd'hui pour une estimation gratuite",
  primaryButton = { text: "Estimation gratuite", href: "/contact" },
  secondaryButton = { text: "Nos services", href: "/nos-services" },
  variant = "light" // light, dark
}) {
  const isLight = variant === "light";

  return (
    <section className={`relative overflow-hidden ${isLight ? 'bg-gradient-to-b from-gray-50 to-white' : 'bg-gray-900'} py-20 sm:py-24`}>
      {/* Motif décoratif subtil */}
      {!isLight && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        </div>
      )}

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h2
            className={`text-3xl font-bold tracking-tight sm:text-4xl mb-4 ${isLight ? 'text-gray-900' : 'text-white'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className={`mt-4 text-lg leading-8 max-w-2xl mx-auto ${isLight ? 'text-gray-600' : 'text-gray-300'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button 
              href={primaryButton.href} 
              variant="accent"
              className="w-full sm:w-auto"
            >
              {primaryButton.text}
            </Button>
            
            {secondaryButton && (
              <Button 
                href={secondaryButton.href} 
                variant={isLight ? "secondary" : "outline"}
                className="w-full sm:w-auto"
              >
                {secondaryButton.text}
              </Button>
            )}
          </motion.div>

          {/* Petits indicateurs de confiance */}
          <motion.div
            className={`mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm ${isLight ? 'text-gray-600' : 'text-gray-400'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <svg className={`w-5 h-5 ${isLight ? 'text-blue-600' : 'text-blue-400'}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Experts locaux</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className={`w-5 h-5 ${isLight ? 'text-blue-600' : 'text-blue-400'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">Accompagnement sur mesure</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className={`w-5 h-5 ${isLight ? 'text-blue-600' : 'text-blue-400'}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Réponse rapide</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

