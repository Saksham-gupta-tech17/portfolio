"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  
  // Transform the scroll progress (0 to 1) into a scaleY value (0 to 1)
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed top-0 right-0 bottom-0 w-1 h-full bg-primary/20 z-50">
      <motion.div
        className="w-full h-full bg-primary origin-top"
        style={{ scaleY }}
      />
    </div>
  );
}
