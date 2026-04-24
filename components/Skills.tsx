"use client";
import { motion } from "framer-motion";
import { 
  Code, Palette, Database, GitBranch, 
  Smartphone, Cpu, Globe, Cloud, Terminal, Layers 
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code size={18} />,
    color: "blue",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "UI/UX Design",
    icon: <Palette size={18} />,
    color: "pink",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 80 },
      { name: "User Research", level: 75 },
      { name: "Prototyping", level: 85 },
    ],
  },
  {
    title: "Backend & DevOps",
    icon: <Database size={18} />,
    color: "green",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 78 },
      { name: "AWS", level: 70 },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: <GitBranch size={18} />,
    color: "orange",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Webpack", level: 75 },
      { name: "CI/CD", level: 78 },
    ],
  },
];

const additionalCapabilities = [
  { name: "Responsive", icon: <Smartphone size={14} /> },
  { name: "Performance", icon: <Cpu size={14} /> },
  { name: "Accessibility", icon: <Globe size={14} /> },
  { name: "Cloud", icon: <Cloud size={14} /> },
  { name: "CLI Tools", icon: <Terminal size={14} /> },
  { name: "Libraries", icon: <Layers size={14} /> },
];

const colorMap: any = {
  blue: "bg-blue-500",
  pink: "bg-pink-500",
  green: "bg-emerald-500",
  orange: "bg-orange-500",
};

export default function Skills() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 flex flex-col justify-center min-h-[85vh]">
      {/* Header - Compact */}
      <div className="text-center mb-6">
        <div className="inline-block px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[8px] uppercase tracking-widest mb-2">
          Technical Expertise
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Skills & <span className="text-blue-500">Technologies</span>
        </h2>
      </div>

      {/* Main Skill Cards - High Density */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {skillCategories.map((category, i) => (
          <div key={i} className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-4 transition-all">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 text-white ${colorMap[category.color]}`}>
              {category.icon}
            </div>
            <h3 className="text-[12px] font-bold text-white mb-4 tracking-tight">{category.title}</h3>
            <div className="space-y-3">
              {category.skills.map((skill, si) => (
                <div key={si}>
                  <div className="flex justify-between text-[9px] text-zinc-500 mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className={`h-full ${colorMap[category.color]}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Capabilities - Compact Grid */}
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
        {additionalCapabilities.map((item, i) => (
          <div key={i} className="bg-[#0a0a0a]/60 border border-white/5 p-2 rounded-xl flex items-center gap-2 hover:bg-white/5 transition-all">
            <div className="text-blue-500">{item.icon}</div>
            <span className="text-[8px] text-zinc-400 font-bold uppercase tracking-tighter">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Bottom Philosophy Cards - Slim Layout */}
      <div className="bg-[#0a0a0a]/40 border border-white/5 rounded-2xl p-5 grid md:grid-cols-3 gap-6">
        {[
          { title: "Continuous Learning", desc: "Staying updated with the latest tech through experimentation." },
          { title: "Clean Code", desc: "Writing maintainable, well-documented code using patterns." },
          { title: "Collaborative", desc: "Thriving in cross-functional teams with clear communication." }
        ].map((p, i) => (
          <div key={i}>
            <h4 className="text-white font-bold mb-1 text-[10px] uppercase tracking-wider">{p.title}</h4>
            <p className="text-zinc-500 text-[9px] leading-snug">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}