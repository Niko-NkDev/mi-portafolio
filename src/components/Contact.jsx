import { useState } from "react";
import SectionStars from "./SectionStars.jsx";

export default function Contact() {
  const [isLaunching, setIsLaunching] = useState(false);

  const scrollToTop = () => {
    setIsLaunching(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsLaunching(false), 1200);
  };

  

  return (
    <div className="contacto">
      <SectionStars containerSelector="#contacto" className="contacto-canvas" count={480} />
      <div className="contacto-content">
        <div className="contacto-icons">
          <a href="mailto:jncg20@gmail.com" className="icon-envelope" title="Enviar Email" aria-label="Enviar correo">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            href="#inicio"
            onClick={() => {
              setIsLaunching(true);
              setTimeout(() => setIsLaunching(false), 1200);
            }}
            className={`icon-top ${isLaunching ? 'rocket-launch' : ''}`}
            title="Ir al inicio"
            aria-label="Ir al inicio"
          >
            <i className="fa-brands fa-space-awesome"></i>
          </a>
        </div>
      </div>
    </div>
  )
}