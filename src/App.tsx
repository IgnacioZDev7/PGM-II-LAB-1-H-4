// Importamos los componentes que se mostrarán en la aplicación.
import ColorHarmonizer from "./components/ColorHarmonizer.tsx";
import RandomColorObject from "./components/RandomColorObject.tsx";
import ContrastChecker from "./components/ContrastChecker.tsx";

function App() {
  return (
    <div className="App">
      <h1>Clase de teoria del color con React</h1>

      {/* Objeto principal controlado por el deslizador */}
      <ColorHarmonizer />

      {/* Objeto secundario que cambia de color aleatoriamente */}
      <RandomColorObject />

      {/* Herramienta de contraste mantenida como referencia */}
      <ContrastChecker />
    </div>
  );
};

export default App;