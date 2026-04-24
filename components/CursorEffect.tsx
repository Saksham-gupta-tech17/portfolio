"use client";

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorEffect() {
// ... the rest of your code
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  // Use Framer Motion values for high performance (bypasses React render cycle)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const dotX = useSpring(cursorX, { stiffness: 800, damping: 30, mass: 0.5 });
  const dotY = useSpring(cursorY, { stiffness: 800, damping: 30, mass: 0.5 });

  const ringX = useSpring(cursorX, { stiffness: 150, damping: 20, mass: 0.5 });
  const ringY = useSpring(cursorY, { stiffness: 150, damping: 20, mass: 0.5 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const mouseLeave = () => setIsVisible(false);
    const mouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseleave", mouseLeave);
    document.addEventListener("mouseenter", mouseEnter);

    // Change cursor on interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, [role='button']"
    );

    const handleMouseOver = () => setIsInteractive(true);
    const handleMouseOut = () => setIsInteractive(false);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseover", handleMouseOver);
      el.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseleave", mouseLeave);
      document.removeEventListener("mouseenter", mouseEnter);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOver);
        el.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 z-[100] rounded-full bg-white pointer-events-none mix-blend-difference"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isInteractive ? 4 : 12,
          height: isInteractive ? 4 : 12,
          opacity: isInteractive ? 0 : 1,
        }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[99] rounded-full border border-white pointer-events-none mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isInteractive ? 60 : 40,
          height: isInteractive ? 60 : 40,
          backgroundColor: isInteractive ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
        }}
      />
    </>
  );
}