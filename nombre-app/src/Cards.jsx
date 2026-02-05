import "./Cards.css";
import magoImage from "./assets/mago.png";

function Cards() {
  return (
    <section className="cards">

      <div className="card">
        <h3>Sergio Sendel</h3>
        <img src={magoImage} alt="Mago" />
        <p>Desarrolladora Web</p>
      </div>

      <div className="card">
        <h3>Yanet</h3>
        <p>Diseñador Web</p>
      </div>

      <div className="card">
        <h3>Mago</h3>
        <p>Líder de Proyecto</p>
      </div>

    

    </section>
  );
}

export default Cards;

