'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({ 
  title, 
  subtitle, 
  label,
  centered = true,
  dark = false,
  showLine = false 
}) {
  const textColor = dark ? 'text-white' : 'text-gray-900';
  const subtitleColor = dark ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : ''} mb-16`}>
      {/* Label optionnel */}
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={centered ? 'flex justify-center mb-4' : 'mb-4'}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#2998a6] to-[#0d6c8a] text-white shadow-sm">
            {label}
          </span>
        </motion.div>
      )}

      {/* Ligne décorative */}
      {showLine && centered && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto w-20 h-1 bg-gradient-to-r from-[#2998a6] to-amber-500 rounded-full mb-6"
        />
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl font-bold tracking-tight ${textColor} sm:text-4xl`}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-lg leading-8 ${subtitleColor}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

