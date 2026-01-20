import Hero3D from "./Hero3D"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-3d-bg">
        <Hero3D />
      </div>
      <div className="presentacion">
        <p className="bienvenida">Bienvenidos</p>
        <h2>
          Soy <span>Nicolas Cortes</span>, Desarrollador Web
        </h2>
        <p className="descripcion">
          Soy un desarrollador de software profesional especializado en la creación, diseño,
          implementación y mantenimiento de aplicaciones y sistemas informáticos.
        </p>
        <a href="#portafolio">Ir a Portafolio</a>
      </div>
    </section>
  )
}
