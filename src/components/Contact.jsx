import { Canvas } from "@react-three/fiber";
import FloatingStars from "./FloatingStars.jsx";
import { useState } from "react";

export default function Contact() {
  const [isLaunching, setIsLaunching] = useState(false);

  const scrollToTop = () => {
    setIsLaunching(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsLaunching(false), 2000);
  };

  return (
    <div className="contacto">
      <Canvas className="contacto-canvas">
        <FloatingStars count={500} />
      </Canvas>
      <div className="contacto-content">
        <div className="contacto-icons">
          <a href="mailto:jncg20@gmail.com" className="icon-envelope" title="Enviar Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <button 
            onClick={scrollToTop} 
            className={`icon-top ${isLaunching ? 'rocket-launch' : ''}`} 
            title="Ir al inicio"
            disabled={isLaunching}
          >
            <i className="fa-brands fa-space-awesome"></i>
          </button>
        </div>
      </div>
    </div>
  )
}