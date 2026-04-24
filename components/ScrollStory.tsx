"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const ScrollStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Debugging: Force currentStage to 2 (corresponding to "Deploying Scalable AI Solutions")
  // This removes the dynamic phase-checking logic and forces the content to show immediately.
  const currentStage = 2;

  const stages = [
    'System.init("Saksham Gupta")',
    'Building High-Performance RAG Apps',
    'Deploying Scalable AI Solutions'
  ];

  return (
    <section ref={containerRef} className="relative h-[300vh] w-full bg-slate-950">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-black">
        <div className="text-center z-10 w-full px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)] mb-4 h-[100px] flex items-center justify-center font-mono tracking-tight">
            {stages[currentStage]}
          </h2>
        </div>
        
        {/* Decorative background grid and glow for a terminal/developer aesthetic */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      </div>
    </section>
  );
};

export default ScrollStory;
