export default function Contact() {
  return (
    <div className="contacto">
      <h3 className="titulo-seccion">Contactame ahora</h3>
      <div className="contenedor-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="fila mitad">
            <input type="text" placeholder="Nombre Completo" className="input-mitad" />
            <input type="text" placeholder="Direccion de Email" className="input-mitad" />
          </div>
          <div className="fila">
            <input type="text" placeholder="Tema..." className="input-full" />
          </div>
          <div className="fila">
            <textarea cols="30" rows="10" placeholder="Escribe tu mensaje" className="input-full"></textarea>
          </div>
          <a href="mailto:jncg20@gmail.com">
            <input value="Enviar Correo" className="btn-enviar" readOnly />
          </a>
        </form>
      </div>
    </div>
  )
}