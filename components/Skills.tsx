"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code, 
  Palette, 
  Database, 
  Cpu, 
  Globe, 
  Smartphone,
  GitBranch,
  Cloud,
  Terminal,
  Layers
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="w-5 h-5" />,
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="w-5 h-5" />,
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 80 },
      { name: "User Research", level: 75 },
      { name: "Prototyping", level: 85 },
      { name: "Design Systems", level: 82 },
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend & DevOps",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 78 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Tools & Workflow",
    icon: <GitBranch className="w-5 h-5" />,
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Jira", level: 80 },
      { name: "Webpack", level: 75 },
      { name: "CI/CD", level: 78 },
    ],
    color: "from-orange-500 to-amber-500",
  },
];

const otherSkills = [
  { name: "Responsive Design", icon: <Smartphone /> },
  { name: "Performance Optimization", icon: <Cpu /> },
  { name: "Web Accessibility", icon: <Globe /> },
  { name: "Cloud Services", icon: <Cloud /> },
  { name: "CLI Tools", icon: <Terminal /> },
  { name: "Component Libraries", icon: <Layers /> },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  return (
    <section id="skills" ref={ref} className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and user‑friendly digital products.
          </p>
        </motion.div>

        {/* Skill categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-2xl p-6 hover:border-primary/30 transition-all"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                <div className="text-white">{category.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 + skillIndex * 0.05 }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Additional Capabilities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-background border border-border rounded-xl p-4 flex flex-col items-center text-center hover:border-primary/30 transition-all"
              >
                <div className="text-primary mb-2">{skill.icon}</div>
                <div className="text-sm font-medium">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Developer mindset */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-3">Continuous Learning</h4>
              <p className="text-muted">
                I stay updated with the latest technologies and best practices through courses, conferences, and hands‑on experimentation.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3">Clean Code Advocate</h4>
              <p className="text-muted">
                I write maintainable, well‑documented code following industry standards and design patterns.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3">Collaborative Approach</h4>
              <p className="text-muted">
                I thrive in cross‑functional teams, communicating effectively with designers, product managers, and other developers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}