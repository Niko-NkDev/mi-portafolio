import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

export default function FloatingStars({ count = 250, isActive = true }) {
  const points = useRef();

  const stars = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
      ],
      speed: 0.1 + Math.random() * 0.2,
      offset: Math.random() * Math.PI * 2,
    }));
  }, [count]);

  const positions = useMemo(
    () => new Float32Array(stars.flatMap((s) => s.position)),
    [stars]
  );

  useFrame((state, delta) => {
    if (!isActive) return;
    const time = state.clock.elapsedTime;
    const pos = points.current.geometry.attributes.position;

    stars.forEach((star, i) => {
      pos.array[i * 3 + 1] += delta * star.speed;

      pos.array[i * 3] += Math.sin(time + star.offset) * delta * 0.05;

      if (pos.array[i * 3 + 1] > 10) {
        pos.array[i * 3 + 1] = -10;
      }
    });

    pos.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#ffffff"
        size={0.025}
        transparent
        opacity={0.45}
        depthWrite={false}
      />
    </points>
  );
}
