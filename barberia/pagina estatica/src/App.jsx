import { Routes, Route } from "react-router-dom";
import Inicio from "./components/inicio/inicio";
import Servicios from "./components/servicios/servicio";
import Catalogo from "./components/catalogo/catalogo";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/catalogo" element={<Catalogo />} />

    </Routes>
  );
}

export default App;