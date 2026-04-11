"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Eye, Code, Sparkles, GitBranch } from "lucide-react";

const projects = [
  {
    title: "Book Matcher AI",
    description: "An AI-powered tool that recommends books based on user preferences.",
    tags: ["AI/ML", "Next.js", "TypeScript", "Tailwind", "Vercel"],
    imageColor: "from-red-500 to-orange-500",
    liveUrl: "https://book-matcher-ai.vercel.app/",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Nexus Design System",
    description: "A comprehensive design system with React components, documentation, and Figma library for consistent UI development.",
    tags: ["React", "TypeScript", "Figma", "Storybook", "Tailwind"],
    imageColor: "from-blue-500 to-cyan-500",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "EcoTrack Dashboard",
    description: "Real‑time sustainability analytics platform with interactive visualizations for environmental impact tracking.",
    tags: ["Next.js", "D3.js", "Node.js", "PostgreSQL", "Chart.js"],
    imageColor: "from-green-500 to-emerald-500",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Artisan Marketplace",
    description: "A curated e‑commerce platform connecting local artisans with global customers. Focus on UX and performance.",
    tags: ["Next.js", "Stripe", "MongoDB", "Cloudinary", "Redis"],
    imageColor: "from-amber-500 to-orange-500",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Mindful Meditation App",
    description: "A mobile‑first meditation application with personalized sessions, progress tracking, and calming UI.",
    tags: ["React Native", "Expo", "Firebase", "Lottie", "Redux"],
    imageColor: "from-purple-500 to-violet-500",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "DevCollab Platform",
    description: "Collaboration tool for developers with real‑time code editing, project management, and team communication.",
    tags: ["Socket.io", "React", "Express", "MongoDB", "Docker"],
    imageColor: "from-rose-500 to-pink-500",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const filters = ["All", "Featured", "Frontend", "Fullstack", "Mobile", "Design"];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState("All");

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : activeFilter === "Featured" 
    ? projects.filter(p => p.featured)
    : projects;

  return (
    <section id="projects" ref={ref} className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles size={16} />
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projects That <span className="text-primary">Make an Impact</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto mb-10">
            A curated selection of my recent work—each project represents a unique challenge and solution.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-primary text-white shadow-lg"
                  : "bg-card border border-border hover:border-primary/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-full">
                  Featured
                </div>
              )}

              {/* Project image placeholder */}
              <div className="h-48 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.imageColor} opacity-20`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm flex items-center justify-center">
                    <Code size={48} className="text-white/30" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-background border border-border rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target={project.liveUrl !== "#" ? "_blank" : undefined}
                      rel={project.liveUrl !== "#" ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
                    >
                      <Eye size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target={project.githubUrl !== "#" ? "_blank" : undefined}
                      rel={project.githubUrl !== "#" ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                    >
                      <GitBranch size={16} />
                      Code
                    </a>
                  </div>
                  <ExternalLink size={18} className="text-muted group-hover:text-primary transition-colors" />
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-primary rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none" />
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
