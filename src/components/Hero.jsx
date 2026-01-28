import Hero3D from "./Hero3D";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  return (
    <>
      <div className="hero-3d-bg">
        <Hero3D />
      </div>
      <div className="presentacion">
        <p className="bienvenida">Bienvenido a mi universo digital</p>
        <h1 className="hero-title">
          <AnimatedText 
            text="Soy Nicolas Cortes,"
            coloredParts={[
              { start: 4, end: 18, color: "#0590cc" }
            ]}
          />
          <span className="role-desktop"> Desarrollador Full Stack Junior</span>
          <span className="role-mobile">Desarrollador Full Stack Junior</span>
        </h1>
        <p className="descripcion">
          Soy un desarrollador de software profesional especializado en la
          creación, diseño, implementación y mantenimiento de aplicaciones y
          sistemas informáticos.
        </p>
        <a href="#portafolio">Ir a Portafolio</a>
      </div>
    </>
  );
}