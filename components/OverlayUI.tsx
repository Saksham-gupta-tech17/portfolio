'use client';

import React from 'react';
import { projects } from './Projects'; // Import projects from Projects.tsx

// Define portfolio data directly within OverlayUI for simplicity
const portfolioData = {
  name: "Saksham Gupta",
  tagline: "Full-Stack Developer",
  skillsForPhase3: ["React", "Next.js", "Python", "RAG"], // Specific skills requested for Phase 3
   projectsForPhase7: projects.filter(p => p.title === "LocalMind" || p.title === "Book Matcher AI") // Specific projects requested for Phase 7
};

const OverlayUI = () => {
  // Add a console log to check if projectsForPhase7 is populated
  React.useEffect(() => {
    console.log('OverlayUI mounted. projectsForPhase7 length:', portfolioData.projectsForPhase7.length);
    if (portfolioData.projectsForPhase7.length === 0) {
      console.warn('No projects found for Phase 7 in OverlayUI. Check projects.filter logic.');
    }
  }, []);

  return (
    <div className="fixed inset-0 z-[999] w-full h-full pointer-events-none">
      <section className="h-screen w-full bg-transparent flex items-center justify-center px-4 md:px-20 pointer-events-none">
        <div className="w-full max-w-7xl flex justify-start items-center">
          {/* Glassmorphism Card */}
          <div className="w-full md:w-1/2 p-8 md:p-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl pointer-events-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-white font-mono mb-4 text-left">
              PROJECTS_DATA_DISPLAY
            </h2>
            <ul className="list-disc list-inside text-gray-300 text-lg md:text-xl leading-relaxed font-sans text-left">
              {portfolioData.projectsForPhase7.map((project, index) => (
                <li key={index}>Project: {project.title}</li>
              ))}
            </ul>
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-2 bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-400 border border-emerald-500/50 rounded transition-colors font-mono text-sm">
                BUTTON_ONE
              </button>
              <button className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded transition-colors font-mono text-sm">
                BUTTON_TWO
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OverlayUI;
