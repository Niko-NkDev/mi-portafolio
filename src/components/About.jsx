import foto from '../assets/images/foto1.jpg'

export default function About() {
	return (
		<div className="container">
			<div className="row align-items-center">
				<div className="col-12 col-md-5 mb-4 mb-md-0 contenedor-foto">
					<img src={foto} alt="Foto de Nicolas" />
				</div>
				<div className="col-12 col-md-7 sobremi text-center">
					<p className="titulo-seccion">SOBRE MI</p>
					<h2>
						Hola, Soy <span>Nicolas Cortes</span>
					</h2>
					<h3>Desarrollador de Software Junior</h3>
					<p>
						Como desarrollador FullStack Junior con experiencia en tecnologías como Angular, React; conocimientos en
						Java con Spring Boot, C# (ASP.NET Core) motores de base de datos relacionales y no relacionales tales como MySQL y MongoDB,
						soy un apasionado en crear interfaces de usuario interactivas y atractivas que mejoren la experiencia del
						usuario.
						<br />Estoy constantemente aprendiendo y buscando oportunidades para mejorar mis habilidades técnicas y
						contribuir al éxito del equipo.
					</p>
					<a
						href="https://drive.google.com/drive/folders/1ud7Wt9DZkRaMqFE0l5xwbI118N4V4Q9x?usp=sharing"
						target="_blank"
						rel="noreferrer"
					>
						Descargar CV
					</a>
				</div>
			</div>
		</div>
	)
}
