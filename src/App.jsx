import './styles/global.css'
import './index.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import Contact from './components/Contact.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import Footer from './components/Footer.jsx'
import CustomCursor from "./components/CustomCursor.jsx";
const LazyServices = lazy(() => import('./components/Services.jsx'))
const LazyProjects = lazy(() => import('./components/Projects.jsx'))
const LazySkills = lazy(() => import('./components/Skills.jsx'))


function App() {
  const [skillsVisible, setSkillsVisible] = useState(false)
  const skillsRef = useRef(null)
  const [servicesVisible, setServicesVisible] = useState(false)
  const servicesRef = useRef(null)
  const [projectsVisible, setProjectsVisible] = useState(false)
  const projectsRef = useRef(null)

  useEffect(() => {
    const el = skillsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsVisible(true)
            obs.disconnect()
          }
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const el = servicesRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setServicesVisible(true)
            obs.disconnect()
          }
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const el = projectsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setProjectsVisible(true)
            obs.disconnect()
          }
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section id="inicio">
        <CustomCursor />
        <div className="contenido">
          <Header />
          <Hero />
        </div>
      </section>

      <section id="sobremi">
        <About />
      </section>

      <section id="servicios" ref={servicesRef}>
        {servicesVisible ? (
          <Suspense fallback={<div className="section-placeholder">Cargando servicios…</div>}>
            <LazyServices />
          </Suspense>
        ) : (
          <div className="section-placeholder" aria-hidden="true"></div>
        )}
      </section>

      <div className="contenedor-skills" id="skills" ref={skillsRef}>
        {skillsVisible ? (
          <Suspense fallback={<div className="skills-placeholder">Cargando habilidades…</div>}>
            <LazySkills />
          </Suspense>
        ) : (
          <div className="skills-placeholder" aria-hidden="true"></div>
        )}
      </div>

      <section id="portafolio" ref={projectsRef}>
        {projectsVisible ? (
          <Suspense fallback={<div className="section-placeholder">Cargando proyectos…</div>}>
            <LazyProjects />
          </Suspense>
        ) : (
          <div className="section-placeholder" aria-hidden="true"></div>
        )}
      </section>

      <section id="contacto">
        <ErrorBoundary>
          <Contact />
        </ErrorBoundary>
        <Footer />
      </section>
    </>
  )
}

export default App
