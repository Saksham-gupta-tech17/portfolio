"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageColor: string;
  liveUrl?: string;
  githubUrl?: string;
}

function MagneticButton({ children, href }: { children: React.ReactNode; href?: string }) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring configuration for the magnetic pull
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate pull strength (0.3 = 30% of distance from center)
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="relative z-20 inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors overflow-hidden bg-card/50 backdrop-blur-md"
    >
      {children}
    </motion.a>
  );
}

export default function ProjectCard({ title, description, tags, imageColor, liveUrl = "#", githubUrl = "#" }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the mouse movement for the tilt effect
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  // Map mouse position to rotation degrees (max tilt is 7 degrees)
  const rotateX = useTransform(springY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="relative group w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full rounded-2xl p-[1px] bg-border transition-colors duration-500 group-hover:border-transparent"
      >
        {/* Animated Tailwind Border Shimmer */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute -inset-[150%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,#a1a1aa_50%,#00000000_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,#52525b_50%,#00000000_100%)]" />
        </div>

        {/* Main Card Content */}
        <div 
          className="relative flex flex-col h-full bg-card rounded-2xl overflow-hidden shadow-xl"
          style={{ transform: "translateZ(30px)" }} // Pops the content out towards the user slightly during tilt
        >
          {/* Image Placeholder area */}
          <div className="h-48 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${imageColor} opacity-20`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md flex items-center justify-center">
                <Code size={48} className="text-white/30" />
              </div>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted mb-6 flex-1">{description}</p>
            
            <div className="flex items-center justify-between mt-auto">
              <MagneticButton href={githubUrl}>
                <Code size={16} /> Code
              </MagneticButton>
              <ExternalLink size={18} className="text-muted group-hover:text-primary transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}