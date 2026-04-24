"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useScrollStore } from "@/store/useScrollStore";

function AnimatedCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const progress = useScrollStore((state) => state.progress);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // STAGE 1: Zoom & Rotation (Progress 0 to 0.3)
    // STAGE 2: Deconstruction/Scale (Progress 0.3 to 0.7)
    // STAGE 3: Final Position (0.7 to 1.0)
    
    const targetScale = 1 + progress * 2;
    const targetRotation = progress * Math.PI * 2;
    
    meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1));
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotation, 0.1);
    
    // Camera movement based on scroll
    state.camera.position.z = THREE.MathUtils.lerp(5, 2 - progress * 3, 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color={progress > 0.5 ? "#3b82f6" : "#ffffff"}
          speed={3}
          distort={0.4 + progress * 0.4}
          wireframe
        />
      </Sphere>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedCore />
      </Canvas>
    </div>
  );
}