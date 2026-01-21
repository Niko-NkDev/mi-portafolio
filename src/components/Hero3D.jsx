import { Canvas } from "@react-three/fiber";
import Sphere from "./Sphere";
import FloatingStars from "./FloatingStars.jsx";

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ position: "absolute", inset: 0 }}

    >
      <ambientLight intensity={0.3} />

      <directionalLight
        position={[4, 4, 4]}
        intensity={1.3}
      />

      <pointLight
        position={[-5, 0, 5]}
        intensity={1}
        color="#6c63ff"
      />
      <FloatingStars count={500} />
      <Sphere />
    </Canvas>
  );
}
