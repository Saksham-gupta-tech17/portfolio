'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const codeSnippet1 = `const initProtocol = async () => {
  console.log('Initializing secure connection...');
  await CryptoModule.verifyKey();
  const socket = new SecureSocket(process.env.CORE_URL);
  
  socket.on('data', (payload) => {
    Processor.parse(payload);
  });
};`;

const codeSnippet2 = `interface NeuralConfig {
  layers: number;
  activation: 'relu' | 'sigmoid';
  learningRate: number;
}

class DeepNet {
  constructor(private config: NeuralConfig) {}
  train(data: Tensor[]) {
    // Forward propagation
    // Backpropagation
  }
}`;

const codeSnippet3 = `export const deployToEdge = (artifact: Buffer) => {
  const nodes = EdgeNetwork.getAvailableNodes();
  
  nodes.forEach(node => {
    node.sync(artifact, {
      strategy: 'rolling',
      fallback: true
    });
  });
};`;

const Layer = ({ 
  title, 
  bgClass, 
  zIndex, 
  codeText 
}: { 
  title: string, 
  bgClass: string, 
  zIndex: string, 
  codeText: string 
}) => {
  const ref = useRef<HTMLElement>(null);
  
  // Track this specific section's scroll progress as it enters the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"]
  });

  // Scale from 0.8 to 1.0, fade from 0 to 1
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  // Faster parallax for the background code
  const yParallax = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section 
      ref={ref} 
      className={`sticky top-0 h-screen w-full ${bgClass} ${zIndex} flex items-center justify-center overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]`}
    >
      {/* Background Code Layer */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute w-[150%] h-[150%] z-0 flex items-center justify-center opacity-5 pointer-events-none"
      >
        <pre className="text-white font-mono text-2xl md:text-4xl leading-loose font-bold whitespace-pre-wrap text-center opacity-50 select-none">
          {codeText.repeat(10)}
        </pre>
      </motion.div>

      {/* Foreground Content */}
      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 flex flex-col items-center"
      >
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
          {title}
        </h2>
        <div className="w-24 h-2 bg-white mt-8 opacity-50" />
      </motion.div>
    </section>
  );
};

const StackingLayout = () => {
  return (
    <>
      <style>{`
        html, body {
          height: auto !important;
          overflow: visible !important;
        }
      `}</style>
      <div className="relative w-full">
        <Layer 
          title="Project 01" 
          bgClass="bg-slate-900" 
          zIndex="z-10" 
          codeText={codeSnippet1} 
        />
        <Layer 
          title="Project 02" 
          bgClass="bg-blue-900" 
          zIndex="z-20" 
          codeText={codeSnippet2} 
        />
        <Layer 
          title="Project 03" 
          bgClass="bg-purple-900" 
          zIndex="z-30" 
          codeText={codeSnippet3} 
        />
      </div>
    </>
  );
};

export default StackingLayout;
