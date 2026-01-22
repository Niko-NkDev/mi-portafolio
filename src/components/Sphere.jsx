import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";

export default function Sphere() {
  const material = useRef();

  useFrame(({ mouse }) => {
    if (!material.current) return;

    // Intensidad según mouse
    const intensity = Math.abs(mouse.x) + Math.abs(mouse.y);
    material.current.distort = 0.4 + intensity * 0.1;
    material.current.speed = 1.5 + intensity * 1;
  });

  return (
    <Float speed={1.2} floatIntensity={0.5} rotationIntensity={0.4}>
      <mesh>
        <sphereGeometry args={[1.8, 128, 128]} />
        <MeshDistortMaterial
          ref={material}
          color="#6c63ff"
          distort={0.4}
          speed={1}
          roughness={0.1}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
}
