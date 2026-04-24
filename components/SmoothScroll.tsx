"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis();

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      console.log('Lenis is running');
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        html.lenis {
          height: auto;
          scroll-behavior: auto !important;
        }
      `}} />
      {children}
    </>
  );
}
