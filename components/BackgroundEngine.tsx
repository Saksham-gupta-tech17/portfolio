"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Grid, PerspectiveCamera, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useScrollStore } from "@/store/useScrollStore";

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const progress = useScrollStore((state) => state.progress);

  useFrame((state) => {
    if (!groupRef.current) return;
    state.camera.position.z = THREE.MathUtils.lerp(8, 2, progress);
    state.camera.position.y = THREE.MathUtils.lerp(2, 0.5, progress);
    groupRef.current.rotation.y = progress * Math.PI * 0.5;
  });

  return (
    <group ref={groupRef}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#3b82f6" />
      <Grid
        infiniteGrid
        fadeDistance={50}
        fadeStrength={5}
        cellSize={0.5}
        sectionSize={3}
        sectionThickness={1.5}
        sectionColor="#1e3a8a"
        cellColor="#0f172a"
      />
    </group>
  );
}

export default function BackgroundEngine() {
  return (
    /* This wrapper MUST be fixed to allow the content to scroll OVER it */
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-[#020202]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={50} />
        <Scene />
      </Canvas>
    </div>
  );
}