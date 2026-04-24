"use client";
import { Target, Heart, Zap, Eye, Quote } from "lucide-react";

const principles = [
  {
    title: "Purpose-Driven",
    desc: "Every project starts with a clear purpose. I focus on solving real problems, not just building features.",
    icon: <Target className="text-blue-400" size={20} />,
    color: "bg-blue-500/10"
  },
  {
    title: "Human-Centered",
    desc: "Design should serve people. I prioritize accessibility, empathy, and intuitive interactions.",
    icon: <Heart className="text-pink-400" size={20} />,
    color: "bg-pink-500/10"
  },
  {
    title: "Performance First",
    desc: "Speed matters. I optimize for fast loading, smooth animations, and efficient code.",
    icon: <Zap className="text-orange-400" size={20} />,
    color: "bg-orange-500/10"
  },
  {
    title: "Visual Storytelling",
    desc: "Great design tells a story. I craft visual narratives that engage and communicate effectively.",
    icon: <Eye className="text-purple-400" size={20} />,
    color: "bg-purple-500/10"
  }
];

export default function Philosophy() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase tracking-widest">My Philosophy</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-4">
          Design with <span className="text-blue-400">Intention</span>,<br />Build with <span className="text-purple-400">Precision</span>
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-sm md:text-base">
          I believe that exceptional digital experiences are born from the marriage of thoughtful design and meticulous engineering.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-6 items-start">
        {/* Left Card: Journey */}
        <div className="md:col-span-5 bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10"><Quote size={40} /></div>
          <h3 className="text-xl font-bold text-white mb-4">My Journey</h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8">
            Starting as a self-taught designer, I've spent over three years bridging the gap between aesthetics and functionality. Today, I work at the intersection of design and development.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Projects</div>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-2xl font-bold text-white">30+</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Clients</div>
            </div>
          </div>
        </div>

        {/* Right Grid: Principles */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {principles.map((p, i) => (
            <div key={i} className="bg-zinc-900/40 backdrop-blur-sm border border-white/5 p-6 rounded-2xl">
              <div className={`w-10 h-10 ${p.color} rounded-xl flex items-center justify-center mb-4`}>
                {p.icon}
              </div>
              <h4 className="text-white font-bold mb-2 text-sm uppercase tracking-wide">{p.title}</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">{p.desc}</p>
              <div className="mt-4 pt-4 border-t border-white/5 text-[8px] text-zinc-600 uppercase tracking-widest">Core Principle</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-16 opacity-40 italic text-zinc-500 text-sm">
        "Good design is as little design as possible. Less, but better." — Dieter Rams
      </div>
    </div>
  );
}