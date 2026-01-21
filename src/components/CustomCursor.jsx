import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: pos.y,
          left: pos.x,
          width: "34px",
          height: "34px",
          border: "2px solid #6c63ff",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />

      <div
        style={{
          position: "fixed",
          top: pos.y,
          left: pos.x,
          width: "12px",
          height: "12px",
          backgroundColor: "#6c63ff",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
}
