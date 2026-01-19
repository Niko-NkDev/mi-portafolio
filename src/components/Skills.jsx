export default function Skills() {
  return (
    <div className="skills">
      <h3 style={{color: '#fff'}}>HABILIDADES</h3>
      <div className="skill">
        <div className="info">
          <p>
            <span className="lista"></span>HTML &amp; CSS
          </p>
          <span className="porcentaje">85%</span>
        </div>
        <div className="barra">
          <div id="html" className="barra-progreso1"></div>
        </div>
      </div>

      <div className="skill">
        <div className="info">
          <p>
            <span className="lista"></span>Javascript
          </p>
          <span className="porcentaje">70%</span>
        </div>
        <div className="barra">
          <div id="js" className="barra-progreso2"></div>
        </div>
      </div>

      <div className="skill">
        <div className="info">
          <p>
            <span className="lista"></span>Base de Datos
          </p>
          <span className="porcentaje">65%</span>
        </div>
        <div className="barra">
          <div id="bd" className="barra-progreso3"></div>
        </div>
      </div>

      <div className="skill">
        <div className="info">
          <p>
            <span className="lista"></span>JAVA
          </p>
          <span className="porcentaje">30%</span>
        </div>
        <div className="barra">
          <div id="ps" className="barra-progreso4"></div>
        </div>
      </div>
    </div>
  )
}