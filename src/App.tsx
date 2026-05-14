import ColorHarmonizer from "./components/ColorHarmonizer.tsx";
import RandomColorObject from "./components/RandomColorObject.tsx";
import ContrastChecker from "./components/ContrastChecker.tsx";

function App() {
  return (
    <div className="App">
      <h1>Clase de teoria del color con React</h1>
      <ColorHarmonizer />
      <RandomColorObject />
      <ContrastChecker />
    </div>
  );
};

export default App;