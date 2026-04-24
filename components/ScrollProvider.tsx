"use client";

import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  useSmoothScroll();

  return <>{children}</>;
};
