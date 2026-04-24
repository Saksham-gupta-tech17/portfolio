"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionReveal({ children, className = "" }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Scan-line effect that runs once when triggered */}
      {isInView && (
        <motion.div
          initial={{ top: "-20%" }}
          animate={{ top: "120%" }}
          transition={{ duration: 1.2, ease: "linear" }}
          className="absolute left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-primary/20 to-transparent z-10 pointer-events-none"
        />
      )}

      {/* Main content reveal animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
