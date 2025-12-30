import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";

// Particle that flows along a triangular path - representing data/value flow
function FlowingParticle({ delay, speed, color }: { delay: number; speed: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  
  // Triangle vertices for the path
  const vertices = useMemo(() => [
    new THREE.Vector3(0, 1.5, 0),      // Top
    new THREE.Vector3(-1.3, -0.75, 0), // Bottom left
    new THREE.Vector3(1.3, -0.75, 0),  // Bottom right
  ], []);
  
  useFrame(({ clock }) => {
    if (!ref.current) return;
    
    const t = ((clock.getElapsedTime() * speed + delay) % 3);
    const segment = Math.floor(t);
    const localT = t - segment;
    
    const start = vertices[segment];
    const end = vertices[(segment + 1) % 3];
    
    ref.current.position.lerpVectors(start, end, localT);
    ref.current.position.z = Math.sin(clock.getElapsedTime() * 2 + delay) * 0.1;
  });
  
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.9} />
    </mesh>
  );
}

// Outer deterministic triangle - stable, structured, wireframe
function DeterministicFrame() {
  const ref = useRef<THREE.Group>(null);
  
  const points = useMemo(() => {
    return [
      [0, 1.8, 0],
      [-1.56, -0.9, 0],
      [1.56, -0.9, 0],
      [0, 1.8, 0],
    ] as [number, number, number][];
  }, []);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.2) * 0.02;
    }
  });
  
  return (
    <group ref={ref}>
      <Line
        points={points}
        color="#64748b"
        lineWidth={2}
        transparent
        opacity={0.6}
      />
    </group>
  );
}

// Inner non-deterministic triangle - dynamic, glowing, animated
function NonDeterministicCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  
  const triangleGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 1.2);
    shape.lineTo(-1.04, -0.6);
    shape.lineTo(1.04, -0.6);
    shape.closePath();
    
    return new THREE.ShapeGeometry(shape);
  }, []);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.3) * 0.05;
      const scale = 1 + Math.sin(clock.getElapsedTime() * 0.8) * 0.03;
      meshRef.current.scale.setScalar(scale);
    }
    if (glowRef.current) {
      const glowScale = 1.15 + Math.sin(clock.getElapsedTime() * 0.5) * 0.05;
      glowRef.current.scale.setScalar(glowScale);
    }
  });
  
  return (
    <group>
      {/* Glow layer */}
      <mesh ref={glowRef} geometry={triangleGeometry}>
        <meshBasicMaterial 
          color="#6366f1" 
          transparent 
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Core triangle */}
      <mesh ref={meshRef} geometry={triangleGeometry}>
        <meshStandardMaterial
          color="#6366f1"
          emissive="#6366f1"
          emissiveIntensity={0.4}
          transparent
          opacity={0.85}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

// Connection beams between outer and inner triangles
function ConnectionBeams() {
  const ref = useRef<THREE.Group>(null);
  
  const beamPositions = useMemo(() => [
    { outer: [0, 1.8, 0] as [number, number, number], inner: [0, 1.2, 0] as [number, number, number] },
    { outer: [-1.56, -0.9, 0] as [number, number, number], inner: [-1.04, -0.6, 0] as [number, number, number] },
    { outer: [1.56, -0.9, 0] as [number, number, number], inner: [1.04, -0.6, 0] as [number, number, number] },
  ], []);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh;
        if (mesh.material && 'opacity' in mesh.material) {
          (mesh.material as THREE.MeshBasicMaterial).opacity = 0.3 + Math.sin(clock.getElapsedTime() * 2 + i * 2) * 0.2;
        }
      });
    }
  });
  
  return (
    <group ref={ref}>
      {beamPositions.map((pos, i) => {
        const start = new THREE.Vector3(...pos.outer);
        const end = new THREE.Vector3(...pos.inner);
        const mid = start.clone().lerp(end, 0.5);
        const length = start.distanceTo(end);
        const direction = end.clone().sub(start).normalize();
        const quaternion = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          direction
        );
        
        return (
          <mesh key={i} position={mid} quaternion={quaternion}>
            <cylinderGeometry args={[0.01, 0.01, length, 8]} />
            <meshBasicMaterial color="#818cf8" transparent opacity={0.4} />
          </mesh>
        );
      })}
    </group>
  );
}

// Orbital particles representing emergent AI capabilities
function OrbitalParticles() {
  const groupRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    const result: { angle: number; radius: number; speed: number; size: number }[] = [];
    for (let i = 0; i < 12; i++) {
      result.push({
        angle: (i / 12) * Math.PI * 2,
        radius: 1.8 + Math.random() * 0.4,
        speed: 0.3 + Math.random() * 0.2,
        size: 0.02 + Math.random() * 0.02,
      });
    }
    return result;
  }, []);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const p = particles[i];
        const t = clock.getElapsedTime() * p.speed + p.angle;
        child.position.x = Math.cos(t) * p.radius;
        child.position.y = Math.sin(t) * p.radius;
        child.position.z = Math.sin(t * 2) * 0.15;
      });
    }
  });
  
  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i}>
          <sphereGeometry args={[p.size, 6, 6]} />
          <meshBasicMaterial 
            color={i % 2 === 0 ? "#a5b4fc" : "#c7d2fe"} 
            transparent 
            opacity={0.7} 
          />
        </mesh>
      ))}
    </group>
  );
}

// Data streams flowing from outer to inner triangle
function DataStreams() {
  return (
    <group>
      {/* Multiple particles flowing along the triangular paths */}
      {[0, 0.5, 1, 1.5, 2, 2.5].map((delay, i) => (
        <FlowingParticle 
          key={i} 
          delay={delay} 
          speed={0.5} 
          color={i % 2 === 0 ? "#c4b5fd" : "#818cf8"} 
        />
      ))}
    </group>
  );
}

// Main scene
function TriangleScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.15) * 0.15;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.05;
    }
  });
  
  return (
    <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.2}>
      <group ref={groupRef}>
        {/* Outer deterministic frame */}
        <DeterministicFrame />
        
        {/* Inner non-deterministic core */}
        <NonDeterministicCore />
        
        {/* Connection beams */}
        <ConnectionBeams />
        
        {/* Flowing data particles */}
        <DataStreams />
        
        {/* Orbital AI particles */}
        <OrbitalParticles />
      </group>
    </Float>
  );
}

export default function DeterministicTriangle() {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#e0e7ff" />
        <pointLight position={[-5, -5, 2]} intensity={0.4} color="#6366f1" />
        <pointLight position={[0, 3, 3]} intensity={0.3} color="#a5b4fc" />
        <TriangleScene />
      </Canvas>
    </div>
  );
}
