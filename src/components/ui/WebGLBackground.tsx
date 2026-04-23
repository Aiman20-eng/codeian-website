"use client";

import { useRef, useMemo, Component, ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-expect-error: Maath types are not fully resolved for subpaths
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";
import { sanitizeBuffer } from "@/lib/safe-three";

/**
 * Error Boundary for Three.js to prevent app-wide crashes
 */
class ThreeErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Three.js Rendering Error:", error);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

function ParticleField(props: object) {
  const ref = useRef<THREE.Points>(null);
  
  // 1. Use useMemo to prevent unnecessary regeneration
  // 2. Wrap in a try-catch to catch generation errors
  // 3. Sanitize the resulting buffer to ensure NO NaN values reach Three.js
  const sphere = useMemo(() => {
    try {
      const positions = random.inSphere(new Float32Array(5000), { radius: 1.5 });
      return sanitizeBuffer(positions);
    } catch (e) {
      console.error("Error generating particles:", e);
      return new Float32Array(0); // Return empty if failed
    }
  }, []);

  useFrame((state, delta) => {
    if (ref.current && !isNaN(delta)) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  // Prevent rendering if buffer is empty or invalid
  if (!sphere || sphere.length === 0) return null;

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#22d3ee"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function WebGLBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <ThreeErrorBoundary>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleField />
        </Canvas>
      </ThreeErrorBoundary>
    </div>
  );
}
