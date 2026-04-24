"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    setMounted(true);
    const sections = gsap.utils.toArray<HTMLElement>(".scroll-section");
    
    const ctx = gsap.context(() => {
      // Global Background Progress
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => setProgress(self.progress),
      });

      // Individual Section Animations
      sections.forEach((section) => {
        const content = section.querySelector(".content-wrapper");
        if (content) {
          gsap.fromTo(content, 
            { opacity: 0, scale: 0.95, y: 30 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              scrollTrigger: {
                trigger: section,
                start: "top 70%", // Starts revealing earlier
                end: "top 20%",   // Fully visible sooner
                toggleActions: "play reverse play reverse",
                scrub: 0.5,
              }
            }
          );
          
          // Fade out as it leaves
          gsap.to(content, {
            opacity: 0,
            scale: 1.05,
            scrollTrigger: {
              trigger: section,
              start: "bottom 30%",
              end: "bottom top",
              scrub: 0.5,
            }
          });
        }
      });
    });

    return () => ctx.revert();
  }, [setProgress]);

  if (!mounted) return null;

  return (
    <main ref={containerRef} className="relative bg-[#020202] text-white">
      <BackgroundEngine />

      {/* HERO SECTION - Responsive Padding for Navbar */}
      <section id="home" className="min-h-screen relative z-10 pt-20 md:pt-0 flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400 text-[9px] md:text-[11px] font-medium tracking-wide mb-6 uppercase">
              <Sparkles size={12} /> Modern Developer & Designer
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tighter leading-tight">
              Crafting Digital <br /> Experiences That <span className="text-blue-500 italic font-serif">Inspire</span>
            </h1>
            <p className="text-zinc-500 text-sm md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              I'm <span className="text-white font-bold uppercase tracking-tight">saksham gupta</span>, a creative developer building high-end, performant products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})} className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-[11px] font-bold uppercase tracking-widest transition-all shadow-lg shadow-blue-500/20 cursor-pointer">View My Work</button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="px-10 py-4 bg-transparent border border-white/10 hover:bg-white/20 text-white rounded-full text-[11px] font-bold uppercase tracking-widest transition-all cursor-pointer">Get in Touch</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION - min-h reduced to prevent black gaps */}
      <section id="about" className="scroll-section min-h-[120vh] relative z-10">
        <div className="content-wrapper sticky top-0 h-screen flex items-center justify-center px-4">
          <Philosophy />
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="scroll-section min-h-[120vh] relative z-10">
        <div className="content-wrapper sticky top-0 h-screen flex items-center justify-center px-4">
          <Skills />
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="scroll-section min-h-[130vh] relative z-10">
        <div className="content-wrapper sticky top-0 h-screen flex items-center justify-center px-4 pt-10">
          <Projects />
        </div>
      </section>

      {/* CONTACT & FOOTER - Solid background to terminate scrollytelling */}
      <section id="contact" className="min-h-screen relative z-20 bg-[#020202] py-20 px-4 border-t border-white/5">
        <Contact />
        <Footer />
      </section>
    </main>
  );
}