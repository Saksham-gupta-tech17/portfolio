"use client";
import { create } from 'zustand';
interface ColorState {
  color: string;
  setColor: (color: string) => void;
}
export const useProjectColor = create<ColorState>((set) => ({
  color: '#ffffff',
  setColor: (color) => set({ color }),
}));