import Encabezado from "./Encabezado";
import Expresiones from "./Expresiones";
import Cards from "./Cards";

function App() {
  return (
    <div>
      <Encabezado />

      {/* 👇 CARDS DEBAJO DEL HEADER */}
      <Cards />

      <Expresiones />

      <h1>5C DSM</h1>
      <h2>Yaneth Garrido Hernandez</h2>
    </div>
  );
}


export default App;
