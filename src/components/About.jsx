import foto from '../assets/images/fotoAbout.png'
import CV from '../assets/images/CV-Javier_Nicolas_Garcia - Optimizada.pdf'

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
		<div className="container">
			<div className="row align-items-center">
				<div className="col-12 col-md-5 mb-4 mb-md-0 contenedor-foto">
					<img src={foto} alt="Foto de Nicolas" />
				</div>
				<div className="col-12 col-md-7 sobremi">
					<p className="titulo-seccion">SOBRE MI</p>
					<h2>
						Hola, Soy <span>Nicolas Cortes</span>
					</h2>
					<h3>Desarrollador de Software Junior</h3>
					<p>
						Soy Desarrollador Full Stack Junior, con experiencia en tecnologías frontend como Angular y React, y en backend con Java (Spring Boot) y C# (ASP.NET Core). Cuento con conocimientos en bases de datos relacionales y no relacionales, trabajando con MySQL y MongoDB, lo que me permite desarrollar aplicaciones completas, escalables y bien estructuradas.
						<br/>
						<br/>
						Me apasiona crear interfaces de usuario intuitivas, funcionales y visualmente atractivas, enfocadas en mejorar la experiencia del usuario. Me caracterizo por ser una persona proactiva, con alta disposición al aprendizaje, capacidad de trabajo en equipo y buena comunicación, lo que me permite adaptarme fácilmente a nuevos retos y entornos de desarrollo.
						<br/>
						<br/>
						Estoy en constante aprendizaje, buscando fortalecer mis habilidades técnicas y aportar valor a los proyectos y al crecimiento del equipo, siempre con compromiso, responsabilidad y enfoque en la mejora continua.
					</p>
					<button
						onClick={handleDownloadCV}
						style={{
							textDecoration: 'none',
							display: 'inline-block',
							color: '#ffffff',
							borderRadius: '30px',
							border: '2px solid #ffffff',
							padding: '10px 20px',
							marginTop: '30px',
							transition: '.5s',
							backgroundColor: 'rgba(255, 255, 255, 0.1)',
							cursor: 'pointer',
							fontSize: '14px',
							fontWeight: 'bold',
							textTransform: 'uppercase',
							backdropFilter: 'blur(10px)'
						}}
						onMouseEnter={(e) => {
							e.target.style.backgroundColor = '#ffffff'
							e.target.style.color = '#667eea'
						}}
						onMouseLeave={(e) => {
							e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
							e.target.style.color = '#ffffff'
						}}
					>
						Descargar CV
					</button>
				</div>
			</div>
		</div>
	)
}
