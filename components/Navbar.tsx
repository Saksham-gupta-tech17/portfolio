"use client";
import { Moon } from "lucide-react";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      
      // We target the center of the section height so the scrollytelling 
      // animations have reached their "Active" state.
      const sectionHeight = element.offsetHeight;
      const centerOfSection = elementPosition + (sectionHeight / 3);

      window.scrollTo({
        top: id === 'home' ? 0 : centerOfSection,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-4 flex items-center justify-between pointer-events-none">
      <div 
        className="flex items-center gap-3 pointer-events-auto cursor-pointer" 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      >
        <div className="w-8 h-8 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
        <span className="text-white font-bold tracking-tight text-sm uppercase">saksham gupta</span>
      </div>

      <div className="hidden md:flex items-center gap-8 bg-black/40 backdrop-blur-xl border border-white/5 px-8 py-2.5 rounded-full pointer-events-auto">
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="text-[10px] font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-[0.2em] cursor-pointer"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4 pointer-events-auto">
        <button className="p-2.5 bg-zinc-900/50 border border-white/5 rounded-full text-zinc-400 hover:text-white transition-all">
          <Moon size={16} />
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-400 text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-blue-500/20 transition-all"
        >
          Get in touch
        </button>
      </div>
    </nav>
  );
}