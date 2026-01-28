import foto from '../assets/images/fotoAbout.webp'
import CV from '../assets/images/CV-Javier_Nicolas_Garcia - Optimizada.pdf'
import SectionStars from './SectionStars.jsx'

export default function About() {

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = CV
    link.download = 'CV-Nicolas-Garcia.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <>
      <SectionStars containerSelector="#sobremi" className="about-canvas" count={400} />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 mb-4 mb-md-0 contenedor-foto">
            <img src={foto} alt="Foto de Nicolas" className="img-fluid" loading="lazy" decoding="async" />
          </div>
          <div className="col-12 col-md-7 sobremi">
            <p className="titulo-seccion">SOBRE MI</p>
            <h2>
              Hola, Soy <span>Nicolas Cortes</span>
            </h2>
            <h3>Desarrollador de Software Junior</h3>
            <p>
              Soy Desarrollador Full Stack Junior, con experiencia en tecnologías frontend como Angular y React, y en backend con Java (Spring Boot) y C# (ASP.NET Core). Cuento con conocimientos en bases de datos relacionales y no relacionales, trabajando con MySQL y MongoDB, lo que me permite desarrollar aplicaciones completas, escalables y bien estructuradas.
              <br />
              <br />
              Me apasiona crear interfaces de usuario intuitivas, funcionales y visualmente atractivas, enfocadas en mejorar la experiencia del usuario. Me caracterizo por ser una persona proactiva, con alta disposición al aprendizaje, capacidad de trabajo en equipo y buena comunicación, lo que me permite adaptarme fácilmente a nuevos retos y entornos de desarrollo.
              <br />
              <br />
              Estoy en constante aprendizaje, buscando fortalecer mis habilidades técnicas y aportar valor a los proyectos y al crecimiento del equipo, siempre con compromiso, responsabilidad y enfoque en la mejora continua.
            </p>
            <a href={CV} download onClick={handleDownloadCV}>
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
