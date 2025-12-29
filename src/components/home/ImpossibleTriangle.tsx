import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function TriangleMesh() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const beamGeometry = useMemo(() => {
    // Create a beam with square cross-section
    const shape = new THREE.Shape();
    const size = 0.15;
    shape.moveTo(-size, -size);
    shape.lineTo(size, -size);
    shape.lineTo(size, size);
    shape.lineTo(-size, size);
    shape.lineTo(-size, -size);
    return shape;
  }, []);

  // Create the three beams of the triangle
  const beams = useMemo(() => {
    const scale = 1.5;
    const points = [
      { start: [0, 1, 0], end: [-0.866, -0.5, 0] },
      { start: [-0.866, -0.5, 0], end: [0.866, -0.5, 0] },
      { start: [0.866, -0.5, 0], end: [0, 1, 0] },
    ].map(beam => ({
      start: beam.start.map(v => v * scale) as [number, number, number],
      end: beam.end.map(v => v * scale) as [number, number, number],
    }));

    return points.map((beam, index) => {
      const direction = new THREE.Vector3(
        beam.end[0] - beam.start[0],
        beam.end[1] - beam.start[1],
        beam.end[2] - beam.start[2]
      );
      const length = direction.length();
      direction.normalize();

      const path = new THREE.LineCurve3(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, length)
      );

      const extrudeSettings = {
        steps: 2,
        bevelEnabled: false,
        extrudePath: path,
      };

      const geometry = new THREE.ExtrudeGeometry(beamGeometry, extrudeSettings);

      // Calculate rotation to align with beam direction
      const quaternion = new THREE.Quaternion();
      quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), direction);

      return {
        geometry,
        position: beam.start as [number, number, number],
        quaternion,
        colorIndex: index,
      };
    });
  }, [beamGeometry]);

  const colors = [
    new THREE.Color("#ef4444"), // Red
    new THREE.Color("#dc2626"), // Darker red
    new THREE.Color("#f87171"), // Lighter red
  ];

  return (
    <group ref={groupRef}>
      {beams.map((beam, index) => (
        <mesh
          key={index}
          geometry={beam.geometry}
          position={beam.position}
          quaternion={beam.quaternion}
        >
          <meshStandardMaterial
            color={colors[beam.colorIndex]}
            metalness={0.3}
            roughness={0.4}
            emissive={colors[beam.colorIndex]}
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}
      
      {/* Corner joints to create the impossible effect */}
      {[
        [0, 1.5, 0],
        [-1.3, -0.75, 0],
        [1.3, -0.75, 0],
      ].map((pos, index) => (
        <mesh key={`joint-${index}`} position={pos as [number, number, number]}>
          <boxGeometry args={[0.35, 0.35, 0.35]} />
          <meshStandardMaterial
            color={colors[index]}
            metalness={0.3}
            roughness={0.4}
            emissive={colors[index]}
            emissiveIntensity={0.15}
          />
        </mesh>
      ))}
    </group>
  );
}

export function ImpossibleTriangle() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#ef4444" />
        
        <Float
          speed={2}
          rotationIntensity={0.3}
          floatIntensity={0.5}
        >
          <TriangleMesh />
        </Float>
      </Canvas>
    </div>
  );
}
