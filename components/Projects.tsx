"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, Sparkles, Globe } from "lucide-react"; 

// Added 'export' here so other files can use this data
export const projects = [
  { 
    title: "Book Matcher AI", 
    category: "Featured", 
    description: "An AI-powered tool that recommends books based on user preferences.", 
    tags: ["AI/ML", "Next.js"], 
    imageColor: "from-orange-900/40 to-orange-800/20", 
    liveUrl: "https://book-matcher-ai-git-main-saksham-gupta-tech17s-projects.vercel.app/", 
    githubUrl: "#" 
  },
  { 
    title: "LocalMind", 
    category: "Fullstack", 
    description: "Privacy-First RAG platform for PDF chat.", 
    tags: ["React", "Gemini AI"], 
    imageColor: "from-indigo-900/40 to-indigo-800/20", 
    liveUrl: "#", 
    githubUrl: "https://github.com/Saksham-gupta-tech17/local_mind", 
    isAi: true 
  },
  { 
    title: "EcoTrack Dashboard", 
    category: "Frontend", 
    description: "Real-time sustainability analytics.", 
    tags: ["D3.js", "Node.js"], 
    imageColor: "from-emerald-900/40 to-emerald-800/20", 
    liveUrl: "#", 
    githubUrl: "#" 
  },
  { 
    title: "Artisan Marketplace", 
    category: "Fullstack", 
    description: "E-commerce for local artisans.", 
    tags: ["Stripe", "MongoDB"], 
    imageColor: "from-amber-900/40 to-amber-800/20", 
    liveUrl: "#", 
    githubUrl: "#" 
  },
  { 
    title: "Mindful Meditation", 
    category: "Mobile", 
    description: "Calming UI for mental wellness.", 
    tags: ["React Native", "Expo"], 
    imageColor: "from-blue-900/40 to-blue-800/20", 
    liveUrl: "#", 
    githubUrl: "#" 
  },
  { 
    title: "DevCollab Platform", 
    category: "Design", 
    description: "Real-time code editing tool.", 
    tags: ["Socket.io", "Docker"], 
    imageColor: "from-rose-900/40 to-rose-800/20", 
    liveUrl: "#", 
    githubUrl: "#" 
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", "Featured", "Frontend", "Fullstack", "Mobile", "Design"];
  const filteredProjects = projects.filter(p => activeTab === "All" || p.category === activeTab);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 flex flex-col justify-center">
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[8px] uppercase tracking-[0.2em] mb-2">
          <Sparkles size={10} /> Selected Work
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-1">
          Projects That <span className="text-blue-500">Make an Impact</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-1.5 mt-2">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveTab(cat)} className={`px-3 py-1 rounded-full text-[9px] font-bold transition-all border uppercase tracking-wider ${activeTab === cat ? "bg-blue-600 border-blue-600 text-white" : "bg-zinc-900/50 border-white/5 text-zinc-500 hover:border-white/20"}`}>{cat}</button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="group flex flex-col bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all cursor-pointer"
              onClick={() => project.liveUrl !== "#" && window.open(project.liveUrl, "_blank")}
            >
              <div className={`h-24 w-full bg-gradient-to-br ${project.imageColor} flex items-center justify-center relative`}>
                 <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md bg-black/40 text-[7px] text-white/70 uppercase font-bold tracking-widest">{project.category}</div>
                 <Code size={24} className="text-white/10 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xs font-bold text-white truncate">{project.title}</h3>
                  {project.isAi && <span className="text-[6px] text-purple-400 border border-purple-500/20 px-1 py-0.5 rounded-full font-bold uppercase">AI</span>}
                </div>
                <p className="text-zinc-500 text-[10px] line-clamp-2 mb-3 leading-tight opacity-80">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-1.5 py-0.5 rounded bg-white/5 text-[7px] text-zinc-500 font-medium uppercase tracking-tighter">{tag}</span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-3">
                   <div className="flex gap-1.5">
                    <button onClick={(e) => { e.stopPropagation(); if(project.liveUrl !== "#") window.open(project.liveUrl, "_blank"); }} className="flex items-center gap-1 px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-[8px] font-bold uppercase tracking-wider transition-all"><Globe size={9} /> Live</button>
                    <button onClick={(e) => { e.stopPropagation(); if(project.githubUrl !== "#") window.open(project.githubUrl, "_blank"); }} className="flex items-center gap-1 px-2.5 py-1 bg-white/5 hover:bg-white/10 text-white rounded-full text-[8px] font-bold border border-white/5 transition-all"><Code size={9} /> Code</button>
                   </div>
                   <ExternalLink size={10} className="text-zinc-700 group-hover:text-blue-500 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}