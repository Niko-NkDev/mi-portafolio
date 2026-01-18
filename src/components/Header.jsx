import { useState } from 'react'
import logo from '../assets/images/logo1.jpg'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  const handleSelect = (id) => {
    setActive(id)
    setMenuOpen(false)
  }

  return (
    <header>
      <div className="contenido-header">
        <a href="#inicio" onClick={() => handleSelect('inicio')}>
          <img src={logo} width="45" className="logonk" />
        </a>

        <nav id="nav" className={menuOpen ? 'open' : ''}>
          <ul id="links">
            <li>
              <a
                href="#inicio"
                className={active === 'inicio' ? 'seleccionado' : ''}
                onClick={() => handleSelect('inicio')}
              >
                INICIO
              </a>
            </li>
            <li>
              <a
                href="#sobremi"
                className={active === 'sobremi' ? 'seleccionado' : ''}
                onClick={() => handleSelect('sobremi')}
              >
                SOBRE MI
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className={active === 'servicios' ? 'seleccionado' : ''}
                onClick={() => handleSelect('servicios')}
              >
                SERVICIOS
              </a>
            </li>
            <li>
              <a
                href="#portafolio"
                className={active === 'portafolio' ? 'seleccionado' : ''}
                onClick={() => handleSelect('portafolio')}
              >
                PORTAFOLIO
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className={active === 'contacto' ? 'seleccionado' : ''}
                onClick={() => handleSelect('contacto')}
              >
                CONTACTO
              </a>
            </li>
          </ul>
        </nav>

        <button id="icono-nav" aria-label="Abrir menú" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars"></i>
        </button>

        <div className="redes">
          <a href="https://github.com/Niko-NkDev" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.facebook.com/nicolas.cortesgarcia.1/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/nico.nkd/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/nicolas-cortes29/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  )
}