import { useState } from 'react'
import logoHeader from '../assets/images/logoHeader.webp'

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
        <a href="#inicio" onClick={() => handleSelect('inicio')} aria-label="Ir al inicio">
          <img src={logoHeader} width="45" className="logonk" alt="Logo Nicolas Cortes" decoding="async" />
        </a>

        <nav id="nav" className={menuOpen ? 'responsive' : ''} role="navigation" aria-label="Navegación principal">
          <ul id="links">
            <li>
              <a
                href="#inicio"
                className={active === 'inicio' ? 'seleccionado' : ''}
                onClick={() => handleSelect('inicio')}
                aria-current={active === 'inicio' ? 'page' : undefined}
              >
                INICIO
              </a>
            </li>
            <li>
              <a
                href="#sobremi"
                className={active === 'sobremi' ? 'seleccionado' : ''}
                onClick={() => handleSelect('sobremi')}
                aria-current={active === 'sobremi' ? 'page' : undefined}
              >
                SOBRE MI
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className={active === 'servicios' ? 'seleccionado' : ''}
                onClick={() => handleSelect('servicios')}
                aria-current={active === 'servicios' ? 'page' : undefined}
              >
                SERVICIOS
              </a>
            </li>
            <li>
              <a
                href="#portafolio"
                className={active === 'portafolio' ? 'seleccionado' : ''}
                onClick={() => handleSelect('portafolio')}
                aria-current={active === 'portafolio' ? 'page' : undefined}
              >
                PORTAFOLIO
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className={active === 'contacto' ? 'seleccionado' : ''}
                onClick={() => handleSelect('contacto')}
                aria-current={active === 'contacto' ? 'page' : undefined}
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
          <a href="https://github.com/Niko-NkDev" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Nicolas">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://wa.me/3147258925" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de Nicolas">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://www.facebook.com/nicolas.cortesgarcia.1/" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Nicolas">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/nico.nkd/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Nicolas">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/nicolas-cortes29/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Nicolas">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  )
}