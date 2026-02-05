import Encabezado from "./Encabezado";
import Expresiones from "./Expresiones";
import Cards from "./Cards";
import Pie from "./pie";

function App() {
  return (
    <div>
      <Encabezado />

      {/* 👇 CARDS DEBAJO DEL HEADER */}
      <Cards />

      <Expresiones />
     

      <h1>5C DSM</h1>
      <h2>rgadielbg</h2>
      <Pie />
    </div>

    
  );
  
}

 
export default App;
