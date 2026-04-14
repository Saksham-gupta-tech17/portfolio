"use client";

import { motion } from "framer-motion";
import { Target, Heart, Zap, Eye } from "lucide-react";

export default function About() {

  const philosophyItems = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Purpose-Driven",
      description: "Every project starts with a clear purpose. I focus on solving real problems, not just building features.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Human-Centered",
      description: "Design should serve people. I prioritize accessibility, empathy, and intuitive interactions.",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance First",
      description: "Speed matters. I optimize for fast loading, smooth animations, and efficient code.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Visual Storytelling",
      description: "Great design tells a story. I craft visual narratives that engage and communicate effectively.",
      color: "from-purple-500 to-violet-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="about" className="relative py-24 px-6 bg-gradient-to-b from-background to-card overflow-hidden">
      {/* Subtle background glassmorphism / gradient blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Design with <span className="text-primary">Intention</span>,<br />
            Build with <span className="text-secondary">Precision</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            I believe that exceptional digital experiences are born from the marriage of thoughtful design and meticulous engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Visual storytelling */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-card/60 backdrop-blur-xl border border-border/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-muted mb-6">
                  Starting as a self‑taught designer, I've spent over three years bridging the gap between aesthetics and functionality.
                  Today, I work at the intersection of design and development, creating products that are both beautiful and robust.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">3+</span>
                  </div>
                  <div>
                    <div className="font-semibold">Years of experience</div>
                    <div className="text-sm text-muted">Design & Development</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted mt-2">Projects Delivered</div>
              </div>
              <div className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6">
                <div className="text-3xl font-bold text-secondary">30+</div>
                <div className="text-sm text-muted mt-2">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Philosophy cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {philosophyItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all group"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4`}>
                  <div className="text-white">{item.icon}</div>
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-muted">{item.description}</p>
                <div className="mt-4 pt-4 border-t border-border group-hover:border-primary/30 transition-colors">
                  <div className="text-xs text-muted">Core Principle</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <div className="text-xl md:text-2xl lg:text-3xl font-light italic text-muted mb-6">
            "Good design is as little design as possible. Less, but better."
          </div>
          <div className="text-sm text-muted">— Dieter Rams</div>
        </motion.div>
      </div>
    </section>
  );
}