"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({
  title,
  subtitle,
  description,
  imageSrc,
  cta,
  overlay = true,
  fullHeight = true,
}) {
  return (
    <div
      className={`relative isolate overflow-hidden ${
        fullHeight ? "min-h-[calc(100vh-5rem)] lg:h-screen" : "pt-20"
      }`}
    >
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
      <div
        className={`mx-auto max-w-7xl px-6 lg:px-8 ${
          fullHeight
            ? "min-h-[calc(100vh-5rem)] lg:h-screen flex items-center justify-center pt-24 pb-16 lg:pt-0 lg:pb-0"
            : "py-32 sm:py-40"
        }`}
      >
        <div className="mx-auto max-w-4xl text-center w-full">
          {subtitle && (
            <motion.p
              className="text-sm sm:text-base font-semibold leading-7 text-amber-400 mb-3 sm:mb-4 uppercase tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
          <motion.h1
            className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {description}
            </motion.p>
          )}
          {cta && (
            <motion.div
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {cta}
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator - only show on fullHeight and desktop */}
      {fullHeight && (
        <motion.div
          className="hidden lg:block absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      )}
    </div>
  );
}
//test
