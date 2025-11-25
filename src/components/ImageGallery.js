"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageGallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Navigation avec les touches du clavier
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
        setIsZoomed(false);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
        setIsZoomed(false);
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
        setIsZoomed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  // Empêcher le scroll du body quand la lightbox est ouverte
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    setIsZoomed(false);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    setIsZoomed(false);
  };

  return (
    <>
      {/* Galerie principale */}
      <div className="grid grid-cols-4 gap-2">
        {/* Image principale (2 cols sur desktop) */}
        <motion.div
          className="col-span-4 md:col-span-2 md:row-span-2 relative h-64 md:h-[500px] overflow-hidden rounded-xl cursor-pointer group"
          onClick={() => setSelectedIndex(0)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={images[0]}
            alt="Photo principale"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg
              className="w-5 h-5 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
              />
            </svg>
          </div>
        </motion.div>

        {/* Images secondaires */}
        {images.slice(1, 5).map((image, index) => (
          <motion.div
            key={index + 1}
            className="relative h-32 md:h-auto overflow-hidden rounded-xl cursor-pointer group col-span-2 md:col-span-1"
            onClick={() => setSelectedIndex(index + 1)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={image} alt={`Photo ${index + 2}`} fill className="object-cover" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg
                className="w-4 h-4 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                />
              </svg>
            </div>
          </motion.div>
        ))}

        {/* Badge "Voir toutes les photos" si plus de 5 images */}
        {images.length > 5 && (
          <motion.div
            className="col-span-2 md:col-span-1 relative h-32 md:h-auto overflow-hidden rounded-xl cursor-pointer bg-gradient-to-br from-[#2998a6] to-[#0d6c8a]"
            onClick={() => setSelectedIndex(5)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <svg
                className="w-10 h-10 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-bold text-lg">+{images.length - 5}</span>
              <span className="text-sm">photos</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={() => {
              setSelectedIndex(null);
              setIsZoomed(false);
            }}
          >
            {/* Bouton fermer */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              onClick={() => {
                setSelectedIndex(null);
                setIsZoomed(false);
              }}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Compteur */}
            <div className="absolute top-4 left-4 text-white font-semibold z-10 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              {selectedIndex + 1} / {images.length}
            </div>

            {/* Bouton zoom */}
            <button
              className="absolute top-4 left-1/2 -translate-x-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2"
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
              }}
            >
              {isZoomed ? (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
                    />
                  </svg>
                  <span className="text-sm">Dézoomer</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                  <span className="text-sm">Zoomer</span>
                </>
              )}
            </button>

            {/* Navigation précédent */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Image principale */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: isZoomed ? 1.5 : 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`relative ${isZoomed ? "w-full h-full" : "w-11/12 h-5/6 md:w-4/5 md:h-4/5"} ${
                isZoomed ? "overflow-auto" : ""
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex]}
                alt={`Photo ${selectedIndex + 1}`}
                fill
                className={`${isZoomed ? "object-contain cursor-move" : "object-contain"}`}
                quality={100}
              />
            </motion.div>

            {/* Navigation suivant */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Miniatures en bas */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-full px-4 pb-2 scrollbar-hide">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(index);
                    setIsZoomed(false);
                  }}
                  className={`relative w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden ${
                    selectedIndex === index ? "ring-2 ring-white" : "opacity-60 hover:opacity-100"
                  } transition-all`}
                  whileHover={{ scale: 1.1 }}
                >
                  <Image src={image} alt={`Miniature ${index + 1}`} fill className="object-cover" />
                </motion.button>
              ))}
            </div>

            {/* Aide navigation clavier */}
            <div className="absolute bottom-24 right-4 text-white/60 text-xs hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 space-y-1">
                <div className="flex items-center gap-2">
                  <kbd className="bg-white/20 px-2 py-1 rounded">←</kbd>
                  <kbd className="bg-white/20 px-2 py-1 rounded">→</kbd>
                  <span>Navigation</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="bg-white/20 px-2 py-1 rounded">Esc</kbd>
                  <span>Fermer</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS pour cacher la scrollbar des miniatures */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}

