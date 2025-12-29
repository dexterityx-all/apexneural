import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Text } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

const vectors = [
  { name: "People", color: "#6366f1", position: [1.1, 0.9, 0.3] as [number, number, number], category: "capability" },
  { name: "Process", color: "#8b5cf6", position: [-0.6, 1.1, 0.5] as [number, number, number], category: "capability" },
  { name: "Technology", color: "#a855f7", position: [0.4, 0.6, 1.1] as [number, number, number], category: "capability" },
  { name: "Community", color: "#06b6d4", position: [-1.0, -0.4, 0.8] as [number, number, number], category: "flywheel" },
  { name: "Distribution", color: "#14b8a6", position: [0.9, -0.8, 0.4] as [number, number, number], category: "flywheel" },
  { name: "Products", color: "#10b981", position: [0, -1.0, 0.7] as [number, number, number], category: "flywheel" },
];

function VectorArrow({ 
  start, 
  end, 
  color, 
  name,
  index 
}: { 
  start: [number, number, number]; 
  end: [number, number, number]; 
  color: string; 
  name: string;
  index: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const lineRef = useRef<THREE.Line>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      const pulse = Math.sin(clock.getElapsedTime() * 0.5 + index) * 0.02;
      groupRef.current.scale.setScalar(1 + pulse);
    }
  });

  const direction = new THREE.Vector3(end[0] - start[0], end[1] - start[1], end[2] - start[2]);
  const length = direction.length();
  const arrowEnd: [number, number, number] = [
    end[0] * 0.85,
    end[1] * 0.85,
    end[2] * 0.85,
  ];

  return (
    <group ref={groupRef}>
      <Line
        points={[start, arrowEnd]}
        color={color}
        lineWidth={2}
        transparent
        opacity={0.8}
      />
      {/* Arrow head */}
      <mesh position={end}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
      {/* Label */}
      <Text
        position={[end[0] * 1.15, end[1] * 1.15, end[2] * 1.15]}
        fontSize={0.12}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
}

function CentralNode() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      const scale = 0.15 + Math.sin(clock.getElapsedTime() * 0.8) * 0.02;
      meshRef.current.scale.setScalar(scale / 0.15);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.1}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[0.15, 0]} />
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshBasicMaterial
          color="#fbbf24"
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

function VectorScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.15;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.08) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <CentralNode />
      {vectors.map((v, i) => (
        <VectorArrow
          key={v.name}
          start={[0, 0, 0]}
          end={v.position}
          color={v.color}
          name={v.name}
          index={i}
        />
      ))}
    </group>
  );
}

interface VectorInfoProps {
  title: string;
  description: string;
  color: string;
  delay: number;
}

function VectorInfo({ title, description, color, delay }: VectorInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex items-start gap-3"
    >
      <div 
        className="w-3 h-3 rounded-full mt-1.5 shrink-0"
        style={{ backgroundColor: color }}
      />
      <div>
        <h4 className="font-serif text-sm font-medium">{title}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

const vectorDetails = [
  { title: "People", description: "Upskilling at pace; structured training paths; hands-on labs.", color: "#6366f1", category: "capability" },
  { title: "Process", description: "Industry best practices; governance, QA, PMO; measurable SLAs.", color: "#8b5cf6", category: "capability" },
  { title: "Technology", description: "Modern, composable stack; secure by design; cloud or on-prem.", color: "#a855f7", category: "capability" },
  { title: "Community", description: "Events, cohorts, and collaborations that build talent and demand.", color: "#06b6d4", category: "flywheel" },
  { title: "Distribution", description: "Partner and community reach to accelerate adoption.", color: "#14b8a6", category: "flywheel" },
  { title: "Products", description: "Outcome-driven components and accelerators targeting real pain points.", color: "#10b981", category: "flywheel" },
];

export default function VectorSpace() {
  const capabilityVectors = vectorDetails.filter(v => v.category === "capability");
  const flywheelVectors = vectorDetails.filter(v => v.category === "flywheel");

  return (
    <div className="grid lg:grid-cols-[1fr_400px_1fr] gap-8 items-center">
      {/* Left column - Capability System */}
      <div className="space-y-4 order-2 lg:order-1">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4"
        >
          Capability System
        </motion.h3>
        {capabilityVectors.map((v, i) => (
          <VectorInfo key={v.title} {...v} delay={i * 0.1} />
        ))}
      </div>

      {/* Center - 3D Visualization */}
      <div className="h-[350px] md:h-[400px] order-1 lg:order-2">
        <Canvas
          camera={{ position: [0, 0, 3.5], fov: 50 }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.6} />
          <pointLight position={[-10, -10, -5]} intensity={0.3} color="#6366f1" />
          <VectorScene />
        </Canvas>
      </div>

      {/* Right column - Flywheel Effect */}
      <div className="space-y-4 order-3">
        <motion.h3
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4"
        >
          Flywheel Effect
        </motion.h3>
        {flywheelVectors.map((v, i) => (
          <VectorInfo key={v.title} {...v} delay={i * 0.1 + 0.2} />
        ))}
      </div>
    </div>
  );
}
