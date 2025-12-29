import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

const vectors = [
  { name: "People", color: "#6366f1", position: [1.1, 0.8, 0.3] as [number, number, number], category: "capability" },
  { name: "Process", color: "#8b5cf6", position: [-0.5, 1.0, 0.4] as [number, number, number], category: "capability" },
  { name: "Technology", color: "#a855f7", position: [0.3, 0.5, 0.9] as [number, number, number], category: "capability" },
  { name: "Community", color: "#06b6d4", position: [-0.9, -0.3, 0.5] as [number, number, number], category: "flywheel" },
  { name: "Distribution", color: "#14b8a6", position: [0.8, -0.6, 0.3] as [number, number, number], category: "flywheel" },
  { name: "Products", color: "#10b981", position: [0, -0.9, 0.5] as [number, number, number], category: "flywheel" },
];

function VectorBeam({ 
  end, 
  color,
  name 
}: { 
  end: [number, number, number]; 
  color: string;
  name: string;
}) {
  const threeColor = useMemo(() => new THREE.Color(color), [color]);
  
  const { geometry, quaternion } = useMemo(() => {
    // Create beam shape with square cross-section (like ImpossibleTriangle)
    const shape = new THREE.Shape();
    const size = 0.05;
    shape.moveTo(-size, -size);
    shape.lineTo(size, -size);
    shape.lineTo(size, size);
    shape.lineTo(-size, size);
    shape.lineTo(-size, -size);

    const direction = new THREE.Vector3(end[0], end[1], end[2]);
    const len = direction.length();
    direction.normalize();

    const path = new THREE.LineCurve3(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, len)
    );

    const extrudeSettings = {
      steps: 2,
      bevelEnabled: false,
      extrudePath: path,
    };

    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);

    // Calculate rotation to align with beam direction
    const quat = new THREE.Quaternion();
    quat.setFromUnitVectors(new THREE.Vector3(0, 0, 1), direction);

    return { geometry: geo, quaternion: quat };
  }, [end]);

  // Label position slightly beyond the end block
  const labelPos = useMemo(() => {
    const direction = new THREE.Vector3(end[0], end[1], end[2]).normalize();
    return [
      end[0] + direction.x * 0.22,
      end[1] + direction.y * 0.22,
      end[2] + direction.z * 0.22
    ] as [number, number, number];
  }, [end]);

  return (
    <group>
      {/* Beam */}
      <mesh
        geometry={geometry}
        position={[0, 0, 0]}
        quaternion={quaternion}
      >
        <meshStandardMaterial
          color={threeColor}
          metalness={0.3}
          roughness={0.4}
          emissive={threeColor}
          emissiveIntensity={0.15}
        />
      </mesh>
      
      {/* End block (like corner joints in ImpossibleTriangle) */}
      <mesh position={end}>
        <boxGeometry args={[0.12, 0.12, 0.12]} />
        <meshStandardMaterial
          color={threeColor}
          metalness={0.3}
          roughness={0.4}
          emissive={threeColor}
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Label */}
      <Text
        position={labelPos}
        fontSize={0.1}
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
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.18, 0.18, 0.18]} />
      <meshStandardMaterial
        color="#ef4444"
        metalness={0.4}
        roughness={0.3}
        emissive="#ef4444"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

function VectorSpaceScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Slow rotation like ImpossibleTriangle
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.2}
      floatIntensity={0.3}
    >
      <group ref={groupRef}>
        {/* Central node */}
        <CentralNode />
        
        {/* Vector beams */}
        {vectors.map((vector) => (
          <VectorBeam
            key={vector.name}
            end={vector.position}
            color={vector.color}
            name={vector.name}
          />
        ))}
      </group>
    </Float>
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
        className="w-3 h-3 rounded-sm mt-1.5 shrink-0"
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
      <div className="h-[320px] md:h-[380px] order-1 lg:order-2">
        <Canvas
          camera={{ position: [0, 0, 3], fov: 50 }}
          style={{ background: "transparent" }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, -5, -5]} intensity={0.3} />
          <pointLight position={[0, 0, 2]} intensity={0.5} color="#ef4444" />
          
          <VectorSpaceScene />
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
