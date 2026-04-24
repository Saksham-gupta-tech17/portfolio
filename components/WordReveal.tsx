"use client";

import { motion } from "framer-motion";

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function WordReveal({ text, className = "", delay = 0 }: WordRevealProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.25em] align-bottom">
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}