import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Float } from "@react-three/drei";
import * as THREE from "three";

function GlowingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.1;
    }
    if (glowRef.current) {
      const scale = 1.2 + Math.sin(clock.getElapsedTime() * 0.5) * 0.05;
      glowRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group>
        {/* Inner glowing core */}
        <Sphere ref={meshRef} args={[1, 64, 64]}>
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.9}
          />
        </Sphere>
        
        {/* Outer glow layer */}
        <Sphere ref={glowRef} args={[1.2, 32, 32]}>
          <meshBasicMaterial
            color="#818cf8"
            transparent
            opacity={0.15}
            side={THREE.BackSide}
          />
        </Sphere>
        
        {/* Wireframe overlay */}
        <Sphere args={[1.02, 24, 24]}>
          <meshBasicMaterial
            color="#a5b4fc"
            wireframe
            transparent
            opacity={0.3}
          />
        </Sphere>
      </group>
    </Float>
  );
}

function ParticleField() {
  const points = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2 + Math.random() * 1.5;
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
      pointsRef.current.rotation.x = clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#c7d2fe"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function VisionGlobe() {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#e0e7ff" />
        <pointLight position={[-10, -10, -5]} intensity={0.4} color="#6366f1" />
        <GlowingSphere />
        <ParticleField />
      </Canvas>
    </div>
  );
}
