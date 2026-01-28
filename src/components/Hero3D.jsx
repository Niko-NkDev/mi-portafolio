import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Sphere from "./Sphere";
import FloatingStars from "./FloatingStars.jsx";

export default function Hero3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, isMobile ? 7 : 6], fov: isMobile ? 50 : 45 }}
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
      <FloatingStars count={isMobile ? 300 : 500} />
      <Sphere scale={isMobile ? 0.7 : 1} />
    </Canvas>
  );
}
