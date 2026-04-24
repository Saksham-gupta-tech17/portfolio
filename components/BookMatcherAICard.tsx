"use client";
import React from 'react';
import { ExternalLink, Eye, Code } from "lucide-react";
import { projects } from './Projects'; 

interface BookMatcherAICardProps {
  className?: string;
}

export default function BookMatcherAICard({ className }: BookMatcherAICardProps) {
  // Find the book matcher data from the exported array
  const projectData = projects.find(p => p.title === "Book Matcher AI");

  if (!projectData) return null;

  return (
    <div className={`bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden ${className}`}>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{projectData.title}</h3>
        <p className="text-zinc-400 text-sm mb-4">{projectData.description}</p>
        <div className="flex gap-3">
          <a 
            href={projectData.liveUrl} 
            target="_blank" 
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold"
          >
            <Eye size={14} /> View Project
          </a>
          <a 
            href={projectData.githubUrl} 
            target="_blank" 
            className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white rounded-full text-xs font-bold border border-white/10"
          >
            <Code size={14} /> Source
          </a>
        </div>
      </div>
    </div>
  );
}