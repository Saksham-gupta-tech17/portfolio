"use client";
import { Heart, Coffee, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky sections
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const sectionHeight = element.offsetHeight;
      const centerOfSection = elementPosition + (sectionHeight / 3);

      window.scrollTo({
        top: id === 'home' ? 0 : centerOfSection,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="w-full bg-[#020202] border-t border-white/5 pt-16 pb-8 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          {/* Brand Side */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
              <span className="text-white font-bold tracking-tight text-sm uppercase">saksham gupta</span>
            </div>
            <p className="text-zinc-500 text-xs max-w-xs leading-relaxed">
              Crafting digital experiences with purpose, precision, and passion.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap gap-6 md:gap-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[10px] font-bold text-zinc-500 hover:text-white transition-colors uppercase tracking-[0.2em] cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
            © 2026 saksham gupta. All rights reserved.
          </p>

          {/* Legal & Credits */}
          <div className="flex items-center gap-6">
             <div className="flex gap-4 text-[10px] text-zinc-600 uppercase tracking-widest">
                <span className="hover:text-zinc-400 cursor-pointer transition-colors">Privacy Policy</span>
                <span>•</span>
                <span className="hover:text-zinc-400 cursor-pointer transition-colors">Terms of Service</span>
             </div>
             <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-zinc-600 uppercase tracking-widest">
                Made with <Heart size={10} className="text-red-500/60" /> and <Coffee size={10} className="text-orange-500/60" />
             </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-5 py-2 bg-zinc-900/50 border border-white/5 rounded-full text-[10px] text-zinc-400 hover:text-white hover:border-white/20 transition-all uppercase tracking-[0.2em] cursor-pointer"
          >
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}