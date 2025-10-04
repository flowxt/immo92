'use client';

import { motion } from 'framer-motion';

export default function ServiceCard({ icon, title, description }) {
  return (
    <motion.div 
      className="relative rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }
      }}
    >
      {icon && (
        <motion.div 
          className="mb-6 inline-flex items-center justify-center rounded-lg bg-blue-600 p-3 text-white"
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3 }
          }}
        >
          {icon}
        </motion.div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-base leading-7 text-gray-600">{description}</p>
    </motion.div>
  );
}

