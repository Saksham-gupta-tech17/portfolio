"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollStore } from "@/store/useScrollStore";
import { Sparkles, ExternalLink } from "lucide-react";

import BackgroundEngine from "@/components/BackgroundEngine";
import Philosophy from "@/components/Philosophy";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const setProgress = useScrollStore((state) => state.setProgress);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  // STAGE TIMINGS
  const heroOpacity = useTransform(scrollYProgress, [0, 0.08, 0.12], [1, 1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.12], [1, 0.85]);
  
  const philOpacity = useTransform(scrollYProgress, [0.15, 0.22, 0.32, 0.38], [0, 1, 1, 0]);
  const philScale = useTransform(scrollYProgress, [0.15, 0.22], [0.9, 1]);

  const skillsOpacity = useTransform(scrollYProgress, [0.42, 0.48, 0.62, 0.68], [0, 1, 1, 0]);
  const skillsScale = useTransform(scrollYProgress, [0.42, 0.48], [0.9, 1]);
  
  const projectsOpacity = useTransform(scrollYProgress, [0.72, 0.78, 0.92, 0.98], [0, 1, 1, 0]);
  const projectsScale = useTransform(scrollYProgress, [0.72, 0.78], [0.95, 1]);

  useEffect(() => {
    setMounted(true);
    if (containerRef.current) {
      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => setProgress(self.progress),
      });
      return () => trigger.kill();
    }
  }, [setProgress]);

  if (!mounted) return null;

  return (
    <main ref={containerRef} className="relative bg-[#020202] text-white overflow-x-hidden">
      <BackgroundEngine />

      {/* HERO SECTION */}
      <section id="home" className="h-[130vh] relative z-10 px-4 md:px-6">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center pt-10 md:pt-0">
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }} 
            className="w-full max-w-5xl mx-auto text-center flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400 text-[8px] md:text-[10px] font-medium tracking-wide mb-4 md:mb-6 uppercase">
              <Sparkles size={12} /> Modern Developer & Designer
            </div>

            {/* Title - Responsive Sizes */}
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-[1.1]">
              Crafting Digital <br className="hidden sm:block" />
              Experiences That <span className="bg-gradient-to-br from-blue-400 to-indigo-500 bg-clip-text text-transparent italic font-serif">Inspire</span>
            </h1>

            {/* Subtext - Responsive Width */}
            <p className="text-zinc-500 text-xs md:text-base max-w-[280px] sm:max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
              I'm <span className="text-white font-medium uppercase font-bold">saksham gupta</span>, a creative developer building beautiful, performant products.
            </p>

            {/* Buttons - Stack on small mobile, row on larger */}
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mb-12 md:mb-16 w-full sm:w-auto px-6 sm:px-0">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})} 
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                View My Work <ExternalLink size={14} />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} 
                className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/5 text-white/90 rounded-full text-[10px] font-bold uppercase tracking-widest cursor-pointer"
              >
                Get in Touch
              </button>
            </div>

            {/* Stats - Grid 2x2 on mobile, 1x4 on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 w-full max-w-4xl px-4">
              {[
                { label: "Projects", value: "10+" }, 
                { label: "Experience", value: "3+ Yrs" }, 
                { label: "Satisfaction", value: "100%" }, 
                { label: "Passion", value: "∞" }
              ].map((stat, i) => (
                <div key={i} className="bg-zinc-900/20 border border-white/5 px-4 py-4 md:px-6 md:py-5 rounded-2xl flex flex-col items-center backdrop-blur-sm">
                  <div className="text-xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-[8px] md:text-[9px] text-zinc-600 uppercase tracking-widest font-medium text-center">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT / PHILOSOPHY */}
      <section id="about" className="h-[200vh] relative z-10 px-4">
        <div className="sticky top-0 h-screen flex items-center justify-center pt-20">
          <motion.div style={{ opacity: philOpacity, scale: philScale }} className="w-full">
            <Philosophy />
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="h-[200vh] relative z-10 px-4">
        <div className="sticky top-0 h-screen flex items-center justify-center pt-24 pb-10">
          <motion.div style={{ opacity: skillsOpacity, scale: skillsScale }} className="w-full">
            <Skills />
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="h-[280vh] relative z-10 px-4">
        <div className="sticky top-0 h-screen flex items-center justify-center pt-28 pb-12">
          <motion.div style={{ opacity: projectsOpacity, scale: projectsScale }} className="w-full">
            <Projects />
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen relative z-10 flex items-center justify-center py-20 px-4 bg-black/60 backdrop-blur-md">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}