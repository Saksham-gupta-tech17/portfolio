"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function DevScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const [percent, setPercent] = useState("000%");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const value = Math.round(latest * 100);
    setPercent(`${value.toString().padStart(3, '0')}%`);
  });

  return (
    <div className="fixed bottom-4 right-4 z-[9999] pointer-events-none flex items-center justify-center">
      <div className="bg-black text-[#00ff00] font-mono text-xs sm:text-sm px-2 py-1 rounded shadow-lg border border-[#00ff00]/30 tracking-widest backdrop-blur-sm">
        {percent}
      </div>
    </div>
  );
}
