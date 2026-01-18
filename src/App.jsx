import './App.css'
import './styles/global.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <section id="inicio">
        <div className="contenido">
          <Header />
          <Hero />
        </div>
      </section>

      <section id="sobremi">
        <About />
      </section>

      <section id="servicios">
        <Services />
      </section>

      <div className="contenedor-skills" id="skills">
        <Skills />
      </div>

      <section id="portafolio">
        <Projects />
      </section>

      <section id="contacto">
        <Contact />
      </section>

      <Footer />
    </>
  )
}

export default App
