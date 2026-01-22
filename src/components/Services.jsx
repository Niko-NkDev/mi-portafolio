export default function Services() {
  return (
    <div className="services">
      <h3 className="titulo-seccion">MIS SERVICIOS</h3>
      <div className="fila">
        <div className="servicio">
          <span className="icono">
            <i className="fa-brands fa-html5"></i>
          </span>
          <h4>Desarrollo Frontend</h4>
          <hr />
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JS</li>
            <li>Responsive Design</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="servicio">
          <span className="icono">
            <i className="fa-brands fa-java"></i>
          </span>
          <h4>Desarrollo Backend</h4>
          <hr />
          <ul>
            <li>JavaScript - Node.js</li>
            <li>Java - Spring Boot</li>
            <li>C#</li>
            <li>ASP.NET Core</li>
            <li>APIs RESTful</li>
            <li>Clean Architecture</li>
          </ul>
        </div>
        <div className="servicio">
          <span className="icono">
            <i className="fa-brands fa-react"></i>
          </span>
          <h4>Desarrollo de aplicaciones SPA</h4>
          <hr />
          <ul>
            <li>Angular</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
        </div>
      </div>
      <div className="fila">
        <div className="servicio">
          <span className="icono">
            <i className="fa-brands fa-git-alt"></i>
          </span>
          <h4>Control de Versiones y Colaboración</h4>
          <hr />
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Azure DevOps</li>
          </ul>
        </div>
        <div className="servicio">
          <span className="icono">
            <i className="fa-solid fa-database"></i>
          </span>
          <h4>Diseño y Gestión de Bases de Datos</h4>
          <hr />
          <ul>
            <li>SQLServer</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Microsoft Azure Storage</li>
          </ul>
        </div>
        <div className="servicio">
          <span className="icono">
            <i className="fa-solid fa-users"></i>
          </span>
          <h4>Metodologia de Desarrollo</h4>
          <hr />
          <ul>
            <li>Scrum</li>
            <li>Trabajo en equipo</li>
            <li>Comunicación efectiva</li>
            <li>Ceremonias</li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}