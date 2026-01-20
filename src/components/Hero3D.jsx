import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function Sphere() {
  const mesh = useRef();

  useFrame(({ mouse }) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = mouse.x * 0.4;
    mesh.current.rotation.x = mouse.y * 0.4;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={mesh}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshStandardMaterial color="#6c63ff" roughness={0.4} />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Sphere />
    </Canvas>
  );
}
