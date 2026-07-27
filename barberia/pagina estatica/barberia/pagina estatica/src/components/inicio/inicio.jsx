import { Link } from "react-router-dom";
import "./inicio.css";

function Inicio() {
  return (
    <div className="inicio-hero">
      <div className="inicio-overlay"></div>

      <header className="inicio-header">
        <div className="inicio-logo">
          <h2>SHENLY</h2>
          <span>BARBERÍA</span>
        </div>

        <nav>
          <ul className="inicio-menu">
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/catalogo">Productos</Link>
            </li>
          </ul>
        </nav>

        <div className="inicio-opciones">
          <Link to="/login">
            <button className="inicio-login">Iniciar sesión</button>
          </Link>
          <Link to="/registro">
            <button className="inicio-registro">Registrarse</button>
          </Link>
        </div>
      </header>

      <main className="inicio-contenido">
        <p className="inicio-subtitulo">DESDE 2010 • CIUDAD DE MÉXICO</p>
        
        <h1>
          SHENLY
          <br />
          <span>BARBER</span>
        </h1>

        <p className="inicio-descripcion">
          Barbería premium donde cada corte es una obra de precisión.
          <br />
          Servicios de clase mundial, atención personalizada y la
          elegancia que mereces.
        </p>

        <div className="inicio-acciones">
          <Link to="/servicios">
            <button className="inicio-servicios">VER SERVICIOS</button>
          </Link>
          <Link to="/registro">
            <button className="inicio-crear">CREAR CUENTA</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Inicio;