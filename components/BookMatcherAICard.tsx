"use client";

import { ExternalLink, Eye, Code } from "lucide-react";

interface BookMatcherAICardProps {
  className?: string;
  variant?: "default" | "compact";
}

export default function BookMatcherAICard({ 
  className = "",
  variant = "default" 
}: BookMatcherAICardProps) {
  const project = {
    title: "Book Matcher AI",
    description: "An AI-powered tool that recommends books based on user preferences.",
    tags: ["AI/ML", "Next.js", "TypeScript", "Tailwind", "Vercel"],
    imageColor: "from-red-500 to-orange-500",
    liveUrl: "https://book-matcher-ai.vercel.app/",
    githubUrl: "#",
    featured: true,
  };

  const handleCardClick = () => {
    window.open(project.liveUrl, "_blank", "noopener,noreferrer");
  };

  if (variant === "compact") {
    return (
      <div 
        className={`group bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-all cursor-pointer ${className}`}
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleCardClick();
          }
        }}
      >
        <div className="flex items-start gap-3">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.imageColor} flex items-center justify-center`}>
            <Code size={20} className="text-white/80" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <ExternalLink size={16} className="text-muted group-hover:text-primary transition-colors" />
            </div>
            <p className="text-sm text-muted mt-1">{project.description}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {project.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 bg-background border border-border rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article 
      className={`group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all ${className}`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleCardClick();
        }
      }}
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
          {project.tags.map((tag, index) => (
            <span
              key={index}
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
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Eye size={16} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Code size={16} />
              Code
            </a>
          </div>
          <ExternalLink size={18} className="text-muted group-hover:text-primary transition-colors" />
        </div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 border-2 border-primary rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none" />
    </article>
  );
}