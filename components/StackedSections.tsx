'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, cubicBezier } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
};

const charVariants = {
  hidden: { opacity: 0, display: "none" },
  visible: { opacity: 1, display: "inline-block" },
};

const TypewriterText = ({ text }: { text: string }) => {
  return (
    <motion.div
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold text-white font-mono flex items-center"
    >
      <span className="text-emerald-400 mr-4 opacity-80">{">"}</span>
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={charVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="w-3 md:w-5 h-8 md:h-14 bg-emerald-400 ml-2 block"
      />
    </motion.div>
  );
};

const GridBackground = ({ yMove }: { yMove: any }) => (
  <motion.div
    style={{ y: yMove }}
    className="absolute inset-[-100%] z-0 pointer-events-none"
  >
    <div 
      className="w-full h-full opacity-10" 
      style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} 
    />
  </motion.div>
);

const StackedSections = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const customEase = cubicBezier(0.23, 1, 0.32, 1);

  // Section 1 animates while Section 2 is scrolling up (progress 0 to 0.5)
  const scale1 = useTransform(scrollYProgress, [0, 0.5], [1, 0.9], { ease: customEase });
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0.5], { ease: customEase });
  // Parallax movement for the grid
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Section 2 animates while Section 3 is scrolling up (progress 0.5 to 1.0)
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.9], { ease: customEase });
  const opacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.5], { ease: customEase });
  // Faster parallax for section 2
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // Fastest parallax for section 3
  const bgY3 = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Section 1 */}
      <section className="sticky top-0 h-screen w-full bg-black z-10 overflow-hidden">
        <motion.div 
          style={{ scale: scale1, opacity: opacity1 }} 
          className="relative w-full h-full flex items-center justify-center bg-slate-900 origin-top overflow-hidden"
        >
          <GridBackground yMove={bgY1} />
          <TypewriterText text="PROJECT_ALPHA.exe" />
        </motion.div>
      </section>

      {/* Section 2 */}
      <section className="sticky top-0 h-screen w-full bg-black z-20 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <motion.div 
          style={{ scale: scale2, opacity: opacity2 }}
          className="relative w-full h-full flex items-center justify-center bg-zinc-900 origin-top overflow-hidden"
        >
          <GridBackground yMove={bgY2} />
          <TypewriterText text="SYS_ARCHITECTURE" />
        </motion.div>
      </section>

      {/* Section 3 */}
      <section className="sticky top-0 h-screen w-full bg-black z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        <motion.div 
          className="relative w-full h-full flex items-center justify-center bg-stone-900 origin-top overflow-hidden"
        >
          <GridBackground yMove={bgY3} />
          <TypewriterText text="DEPLOY_SEQUENCE" />
        </motion.div>
      </section>
    </div>
  );
};

export default StackedSections;
