"use client";
import { Target, Heart, Zap, Eye, Quote } from "lucide-react";

export default function Philosophy() {
  const principles = [
    { title: "Purpose-Driven", icon: <Target size={16} />, color: "bg-blue-500/10", text: "blue-400" },
    { title: "Human-Centered", icon: <Heart size={16} />, color: "bg-pink-500/10", text: "pink-400" },
    { title: "Performance First", icon: <Zap size={16} />, color: "bg-orange-500/10", text: "orange-400" },
    { title: "Visual Narrative", icon: <Eye size={16} />, color: "bg-purple-500/10", text: "purple-400" }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 overflow-y-auto max-h-[90dvh] sm:max-h-none py-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-5xl font-bold text-white mb-2">Design with <span className="text-blue-400">Intention</span></h2>
        <p className="text-zinc-500 text-[10px] sm:text-sm uppercase tracking-widest font-bold">Meticulous Engineering & Thoughtful Design</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Journey Card */}
        <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-3xl">
          <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">My Journey</h3>
          <p className="text-zinc-500 text-xs leading-relaxed mb-6">
            Bridging the gap between aesthetics and functionality. I work at the intersection of design and development to create robust digital products.
          </p>
          <div className="flex gap-4">
            <div className="text-center"><div className="text-xl font-bold">10+</div><div className="text-[8px] text-zinc-600 uppercase">Projects</div></div>
            <div className="text-center"><div className="text-xl font-bold">30+</div><div className="text-[8px] text-zinc-600 uppercase">Clients</div></div>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-2 gap-3">
          {principles.map((p, i) => (
            <div key={i} className="bg-zinc-900/40 border border-white/5 p-4 rounded-2xl">
              <div className={`w-8 h-8 ${p.color} text-${p.text} rounded-lg flex items-center justify-center mb-3`}>{p.icon}</div>
              <h4 className="text-white font-bold text-[10px] uppercase tracking-tight">{p.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}