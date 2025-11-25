"use client";

import { motion } from "framer-motion";

export default function PropertyFilters({ filters, setFilters, counts }) {
  const propertyTypes = [
    { value: "all", label: "Tous", icon: "🏘️" },
    { value: "maison", label: "Maisons", icon: "🏠" },
    { value: "appartement", label: "Appartements", icon: "🏢" },
    { value: "terrain", label: "Terrains", icon: "🌳" },
  ];

  const roomOptions = [
    { value: "all", label: "Tous" },
    { value: "1", label: "1 pièce" },
    { value: "2", label: "2 pièces" },
    { value: "3", label: "3 pièces" },
    { value: "4", label: "4 pièces" },
    { value: "5+", label: "5+ pièces" },
  ];

  const priceRanges = [
    { value: "all", label: "Tous prix" },
    { value: "0-200000", label: "< 200k €" },
    { value: "200000-400000", label: "200k - 400k €" },
    { value: "400000-600000", label: "400k - 600k €" },
    { value: "600000-800000", label: "600k - 800k €" },
    { value: "800000+", label: "> 800k €" },
  ];

  const handleReset = () => {
    setFilters({
      type: "all",
      rooms: "all",
      priceRange: "all",
    });
  };

  const hasActiveFilters =
    filters.type !== "all" ||
    filters.rooms !== "all" ||
    filters.priceRange !== "all";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-6 mb-12"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#2998a6]/10 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-[#2998a6]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Filtrer les biens
            </h3>
            <p className="text-sm text-gray-500">
              {counts} bien{counts > 1 ? "s" : ""} disponible{counts > 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {hasActiveFilters && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={handleReset}
            className="text-sm text-[#2998a6] hover:text-[#0d6c8a] font-semibold flex items-center gap-2 hover:underline"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Réinitialiser
          </motion.button>
        )}
      </div>

      {/* Type de bien */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Type de bien
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {propertyTypes.map((type) => (
            <motion.button
              key={type.value}
              onClick={() => setFilters({ ...filters, type: type.value })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                filters.type === type.value
                  ? "border-[#2998a6] bg-[#2998a6]/5 text-[#0d6c8a]"
                  : "border-gray-200 hover:border-gray-300 text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="text-2xl mb-2">{type.icon}</span>
              <span className="text-sm font-semibold">{type.label}</span>
              {filters.type === type.value && (
                <motion.div
                  layoutId="activeType"
                  className="absolute inset-0 border-2 border-[#2998a6] rounded-xl"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Nombre de pièces */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Nombre de pièces
          </label>
          <div className="grid grid-cols-3 gap-2">
            {roomOptions.map((option) => (
              <motion.button
                key={option.value}
                onClick={() => setFilters({ ...filters, rooms: option.value })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`py-2.5 px-3 rounded-lg border text-sm font-semibold transition-all ${
                  filters.rooms === option.value
                    ? "border-[#2998a6] bg-[#2998a6] text-white shadow-md"
                    : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {option.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Fourchette de prix */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Budget
          </label>
          <select
            value={filters.priceRange}
            onChange={(e) =>
              setFilters({ ...filters, priceRange: e.target.value })
            }
            className={`w-full py-2.5 px-4 rounded-lg border-2 text-sm font-semibold transition-all cursor-pointer ${
              filters.priceRange !== "all"
                ? "border-[#2998a6] text-[#0d6c8a] bg-[#2998a6]/5"
                : "border-gray-200 text-gray-700 bg-white hover:border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[#2998a6] focus:border-transparent`}
          >
            {priceRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </motion.div>
  );
}

