export default function Services() {
  return (
    <div className="services">
      <h3 className="titulo-seccion">MIS SERVICIOS</h3>
      <div className="fila">
        <div className="servicio">
          <span className="icono">
            <i className="fa-brands fa-html5"></i>
          </span>
          <h4>Diseño Web</h4>
          <hr />
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JS</li>
          </ul>
          <p>
            Diseño y desarrollo de interfaces de usuario (UI) atractivas y responsivas utilizando HTML, CSS y
            JavaScript. Este servicio está dirigido a proyectos que necesitan una presencia web visualmente atractiva y
            funcional en diferentes dispositivos y tamaños de pantalla.
          </p>
        </div>
        <div className="servicio">
          <span className="icono">
            <i className="fa-brands fa-java"></i>
          </span>
          <h4>Desarrollo de APIs RESTful</h4>
          <hr />
          <ul>
            <li>JAVA</li>
            <li>SpringBoot</li>
            <li>SQL</li>
          </ul>
          <p>
            Diseño y desarrollo de APIs RESTful utilizando Spring Boot, con enfoque en operaciones CRUD (Crear, Leer,
            Actualizar, Eliminar). Este servicio está dirigido a empresas y proyectos que necesitan una API para
            gestionar datos de manera eficiente y segura.
          </p>
        </div>
        <div className="servicio">
          <span className="icono">
            <i className="fa-brands fa-react"></i>
          </span>
          <h4>Desarrollo de aplicaciones SPA</h4>
          <hr />
          <ul>
            <li>TypeScript</li>
            <li>React</li>
            <li>JavaScript</li>
          </ul>
          <p>
            Construcción y mantenimiento de aplicaciones SPA (Single Page Applications) con React.js.
            <br />
            Implementación de componentes reutilizables y optimización de la performance del frontend.
          </p>
        </div>
      </div>
      <div className="fila">
        <div className="servicio">
          <span className="icono">
            <i className="fa-brands fa-github"></i>
          </span>
          <h4>Control de Versiones y Colaboración</h4>
          <hr />
          <ul>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
          <p>
            Servicios de control de versiones y colaboración utilizando Git y GitHub. Este servicio está dirigido a
            equipos de desarrollo y proyectos individuales que necesitan una gestión eficiente del código fuente y
            colaboración en equipo.
          </p>
        </div>
        <div className="servicio">
          <span className="icono">
            <i className="fa-solid fa-database"></i>
          </span>
          <h4>Diseño y Gestión de Bases de Datos</h4>
          <hr />
          <ul>
            <li>SQL</li>
            <li>NoSQL</li>
          </ul>
          <p>
            Diseño e implementación de bases de datos relacionales con MySQL.
            <br />
            Diseño e implementación de bases de datos NoSQL con MongoDB.
          </p>
        </div>
        <div className="servicio">
          <span className="icono">
            <i className="fa-solid fa-users"></i>
          </span>
          <h4>Metodologia de Desarrollo</h4>
          <hr />
          <ul>
            <li></li>
            <li>Scrum</li>
            <li></li>
          </ul>
          <p>
            Metodología ágil utilizada para la gestión y desarrollo de proyectos de software. Se centra en la entrega
            incremental y iterativa de productos, promoviendo la flexibilidad y la adaptación a los cambios. En Scrum,
            el trabajo se divide en ciclos cortos llamados sprints, que suelen durar entre una y cuatro semanas.
          </p>
        </div>
      </div>
    </div>
  )
}