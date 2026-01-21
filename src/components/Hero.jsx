import Hero3D from "./Hero3D";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  return (
    <section id="inicio">
      <div className="hero-3d-bg">
        <Hero3D />
      </div>

      <div className="contenido">
        <div className="presentacion">
          <p className="bienvenida">Bienvenido a mi universo digital</p>
          <h2>
            <AnimatedText 
              text="Soy Nicolas Cortes, Desarrollador Web"
              coloredParts={[
                { start: 4, end: 18, color: "#0590cc" }
              ]}
            />
          </h2>
          <p className="descripcion">
            Soy un desarrollador de software profesional especializado en la
            creación, diseño, implementación y mantenimiento de aplicaciones y
            sistemas informáticos.
          </p>
          <a href="#portafolio">Ir a Portafolio</a>
        </div>
      </div>
    </section>
  );
}