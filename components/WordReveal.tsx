"use client";
import { motion, Variants } from "framer-motion";

interface WordRevealProps {
  text: string;
  className?: string;
}

export default function WordReveal({ text, className = "" }: WordRevealProps) {
  const words = text.split(" ");

  // Explicitly typing as 'Variants' fixes the Vercel Type Error
  const wordVariants: Variants = {
    hidden: { 
      y: "100%", 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex flex-wrap justify-center ${className}`}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="overflow-hidden inline-block mr-[0.25em] align-bottom"
        >
          <motion.span
            variants={wordVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}