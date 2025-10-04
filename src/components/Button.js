'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '',
  ...props 
}) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold transition-all duration-200 shadow-sm';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-md',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const MotionComponent = href ? motion(Link) : motion.button;

  return (
    <MotionComponent 
      href={href}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

