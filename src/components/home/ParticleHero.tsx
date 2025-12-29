import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const particleCount = 800;
  
  const [positions, connections] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const conn = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Create clusters for the three ecosystem pillars
      const cluster = i % 3;
      const baseX = (cluster - 1) * 3;
      
      pos[i * 3] = baseX + (Math.random() - 0.5) * 4;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2;
      
      conn[i * 3] = pos[i * 3];
      conn[i * 3 + 1] = pos[i * 3 + 1];
      conn[i * 3 + 2] = pos[i * 3 + 2];
    }
    
    return [pos, conn];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    
    const time = state.clock.getElapsedTime() * 0.15;
    ref.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    ref.current.rotation.y = time * 0.1;
    
    const positionArray = ref.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const originalY = connections[i3 + 1];
      positionArray[i3 + 1] = originalY + Math.sin(time * 2 + i * 0.1) * 0.05;
    }
    
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#a83246"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function ConnectionLines() {
  const ref = useRef<THREE.LineSegments>(null);
  
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions: number[] = [];
    const lineCount = 60;
    
    for (let i = 0; i < lineCount; i++) {
      const cluster1 = Math.floor(Math.random() * 3) - 1;
      const cluster2 = Math.floor(Math.random() * 3) - 1;
      
      const x1 = cluster1 * 3 + (Math.random() - 0.5) * 3;
      const y1 = (Math.random() - 0.5) * 3;
      const z1 = (Math.random() - 0.5) * 1.5;
      
      const x2 = cluster2 * 3 + (Math.random() - 0.5) * 3;
      const y2 = (Math.random() - 0.5) * 3;
      const z2 = (Math.random() - 0.5) * 1.5;
      
      positions.push(x1, y1, z1, x2, y2, z2);
    }
    
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime() * 0.15;
    ref.current.rotation.y = time * 0.1;
    ref.current.rotation.x = Math.sin(time * 0.3) * 0.1;
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#a83246" transparent opacity={0.1} />
    </lineSegments>
  );
}

export function ParticleHero() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
        <ConnectionLines />
      </Canvas>
    </div>
  );
}
