import "./Cards.css";

function Cards() {
  return (
    <section className="cards">

      <div className="card">
        <h3>Yaneth</h3>
        <p>Desarrolladora Web</p>
      </div>

      <div className="card">
        <h3>Gadi</h3>
        <p>Diseñador Web</p>
      </div>

      <div className="card">
        <h3>Mario</h3>
        <p>Líder de Proyecto</p>
      </div>

      {/* Botones abajo */}
      <div className="card-botones">
        <button className="btn izquierda">Anterior</button>
        <button className="btn derecha">Siguiente</button>
      </div>

    </section>
  );
}

export default Cards;

