"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-bold transition-all duration-300 shadow-lg relative overflow-hidden group";

  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-2xl hover:shadow-blue-500/50 border-0",
    secondary:
      "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 hover:border-blue-700 shadow-md",
    outline:
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600 backdrop-blur-sm",
    accent: "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-2xl hover:shadow-amber-500/50 border-0",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' || variant === 'accent' ? (
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <MotionLink
        href={href}
        className={classes}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {buttonContent}
      </MotionLink>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
}
