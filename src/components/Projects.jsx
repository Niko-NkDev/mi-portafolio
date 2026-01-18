import p1 from '../assets/images/proyecto1.png'
import p2 from '../assets/images/proyecto2.jpg'
import p3 from '../assets/images/proyecto3.png'
import p4 from '../assets/images/proyecto4.jpg'
import p5 from '../assets/images/proyecto5.png'
import p6 from '../assets/images/proyecto6.jpg'

export default function Projects() {
	return (
		<div className="projects">
			<h3 className="titulo-seccion">MIS PROYECTOS</h3>
			<div className="fila">
				<div className="proyecto">
					<div className="overlay"></div>
					<a
						href="https://drive.google.com/drive/folders/1xh_XriS2sJTD4MCNUvqrhKTIJr7J80zq?usp=sharing"
						target="_blank"
						rel="noreferrer"
					>
						<img src={p1} alt="Proyecto SENA" />
					</a>
					<div className="info">
						<h4>Trabajos SENA Ficha 2627085</h4>
						<p>Proyecto</p>
					</div>
				</div>
				<div className="proyecto">
					<div className="overlay"></div>
					<a href="https://github.com/Niko-NkDev/my-school-app-react" target="_blank" rel="noreferrer">
						<img src={p2} alt="My School App" />
					</a>
					<div className="info">
						<h4>Proyecto My School APP</h4>
						<p>Aplicación web desarrollada con React</p>
					</div>
				</div>
				<div className="proyecto">
					<div className="overlay"></div>
					<a href="https://github.com/Niko-NkDev/login-php-api" target="_blank" rel="noreferrer">
						<img src={p3} alt="Login PHP" />
					</a>
					<div className="info">
						<h4>Aplicacion con PHP</h4>
						<p>Login y registro de aplicación web con PHP</p>
					</div>
				</div>
			</div>
			<div className="fila">
				<div className="proyecto">
					<div className="overlay"></div>
					<a href="https://github.com/Niko-NkDev/project-java-springboot" target="_blank" rel="noreferrer">
						<img src={p4} alt="Spring Boot" />
					</a>
					<div className="info">
						<h4>Proyecto JAVA con SpringBoot</h4>
						<p>ApiRest de CRUD utilizando SpringBoot y MySQL</p>
					</div>
				</div>
				<div className="proyecto">
					<div className="overlay"></div>
					<a href="https://github.com/Niko-NkDev/webapp-java" target="_blank" rel="noreferrer">
						<img src={p5} alt="JAVA Servlets" />
					</a>
					<div className="info">
						<h4>JAVA Servlets</h4>
						<p>Desarrollo de pagina web con Servlets</p>
					</div>
				</div>
				<div className="proyecto">
					<div className="overlay"></div>
					<a href="https://github.com/Niko-NkDev/java_prueba_jdbc_mysql" target="_blank" rel="noreferrer">
						<img src={p6} alt="JAVA JDBC MySQL" />
					</a>
					<div className="info">
						<h4>JAVA JDBC MySQL</h4>
						<p>Desarrollo con JAVA JDBC</p>
					</div>
				</div>
			</div>
		</div>
	)
}
