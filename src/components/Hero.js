'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero({ 
  title, 
  subtitle, 
  description,
  imageSrc,
  cta,
  overlay = true 
}) {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src={imageSrc}
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </motion.div>
        {overlay && <div className="absolute inset-0 bg-gray-900/70" />}
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {subtitle && (
            <motion.p 
              className="text-lg font-semibold leading-8 text-blue-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p 
              className="mt-6 text-lg leading-8 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {description}
            </motion.p>
          )}
          {cta && (
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {cta}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

