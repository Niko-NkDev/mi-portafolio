import p1 from '../assets/images/appClima.png'
import p2 from '../assets/images/calculadoraApp.png'
import p3 from '../assets/images/proyecto3.png'
import p4 from '../assets/images/proyecto4.jpg'
import p5 from '../assets/images/imcApp.png'
import p6 from '../assets/images/proyecto6.jpg'
import { useState, useEffect } from 'react'

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: "App Clima",
      // description: "Proyecto",
      image: p1,
      link: "https://weather-app-eight-omega-59.vercel.app/"
    },
    {
      id: 2,
      title: "App Calculadora",
      image: p2,
      link: "https://github.com/Niko-NkDev/my-school-app-react"
    },
    {
      id: 3,
      title: "Aplicacion con PHP",
      image: p3,
      link: "https://github.com/Niko-NkDev/login-php-api"
    },
    {
      id: 4,
      title: "Proyecto JAVA con SpringBoot",
      image: p4,
      link: "https://github.com/Niko-NkDev/project-java-springboot"
    },
    {
      id: 5,
      title: "App IMC",
      image: p5,
      link: "https://github.com/Niko-NkDev/webapp-java"
    },
    {
      id: 6,
      title: "JAVA JDBC MySQL",
      image: p6,
      link: "https://github.com/Niko-NkDev/java_prueba_jdbc_mysql"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % projects.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [projects.length])

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % projects.length)
  }

  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + projects.length) % projects.length)
  }

  const getPosition = (index) => {
    if (index === activeIndex) return 'active'
    if (index === (activeIndex - 1 + projects.length) % projects.length) return 'prev'
    if (index === (activeIndex + 1) % projects.length) return 'next'
    return 'hidden'
  }

  return (
    <div className="projects-container">
      <h2 className="projects-title">MIS PROYECTOS</h2>

      <div className="carousel-wrapper">
        <div className="carousel-container">
          <div className="carousel-content">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`carousel-slide ${getPosition(index)}`}
              >
                <div className="project-card">
                  <div className="project-image-wrapper">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <img src={project.image} alt={project.title} />
                      <div className="overlay-info">
                        <span className="view-btn">Ver Proyecto</span>
                      </div>
                    </a>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-btn prev-btn"
            onClick={handlePrev}
            aria-label="Proyecto anterior"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            className="carousel-btn next-btn"
            onClick={handleNext}
            aria-label="Siguiente proyecto"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}