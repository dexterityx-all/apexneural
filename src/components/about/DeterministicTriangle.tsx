import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";

// Outer deterministic triangle - stable, structured
function DeterministicFrame() {
  const outerPoints = useMemo(() => {
    return [
      [0, 1.8, 0],
      [-1.56, -0.9, 0],
      [1.56, -0.9, 0],
      [0, 1.8, 0],
    ] as [number, number, number][];
  }, []);
  
  return (
    <Line
      points={outerPoints}
      color="#64748b"
      lineWidth={2}
      transparent
      opacity={0.5}
    />
  );
}

// Inner non-deterministic triangle - the core
function NonDeterministicCore() {
  const triangleGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 1.2);
    shape.lineTo(-1.04, -0.6);
    shape.lineTo(1.04, -0.6);
    shape.closePath();
    
    return new THREE.ShapeGeometry(shape);
  }, []);
  
  return (
    <group>
      {/* Glow layer */}
      <mesh geometry={triangleGeometry}>
        <meshBasicMaterial 
          color="#6366f1" 
          transparent 
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Core triangle */}
      <mesh geometry={triangleGeometry} position={[0, 0, 0.01]}>
        <meshBasicMaterial
          color="#818cf8"
          transparent
          opacity={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

// Connection beams between outer and inner triangles
function ConnectionBeams() {
  const beamPositions = useMemo(() => [
    { outer: [0, 1.8, 0] as [number, number, number], inner: [0, 1.2, 0] as [number, number, number] },
    { outer: [-1.56, -0.9, 0] as [number, number, number], inner: [-1.04, -0.6, 0] as [number, number, number] },
    { outer: [1.56, -0.9, 0] as [number, number, number], inner: [1.04, -0.6, 0] as [number, number, number] },
  ], []);
  
  return (
    <group>
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
            <cylinderGeometry args={[0.008, 0.008, length, 8]} />
            <meshBasicMaterial color="#a5b4fc" transparent opacity={0.5} />
          </mesh>
        );
      })}
    </group>
  );
}

// Corner accent dots
function CornerDots() {
  const corners = useMemo(() => [
    [0, 1.8, 0],
    [-1.56, -0.9, 0],
    [1.56, -0.9, 0],
  ] as [number, number, number][], []);
  
  return (
    <group>
      {corners.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#6366f1" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

// Main scene with gentle rotation
function TriangleScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Very slow, subtle rotation
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });
  
  return (
    <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.1}>
      <group ref={groupRef}>
        {/* Outer deterministic frame */}
        <DeterministicFrame />
        
        {/* Inner non-deterministic core */}
        <NonDeterministicCore />
        
        {/* Connection beams */}
        <ConnectionBeams />
        
        {/* Corner dots */}
        <CornerDots />
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
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#e0e7ff" />
        <TriangleScene />
      </Canvas>
    </div>
  );
}
