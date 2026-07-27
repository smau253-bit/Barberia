import { Link } from "react-router-dom";
import "./inicio.css";


function Inicio() {
  return (
    <div className="hero">

      <div className="overlay"></div>

      <header className="navbar">

        <div className="logo">
          <h2>SHENLY</h2>
          <span>BARBERÍA</span>
        </div>


        <div className="botones">

          <Link to="/login">
            <button className="btn-login">
              Iniciar sesión
            </button>
          </Link>


          <Link to="/registro">
            <button className="btn-register">
              Registrarse
            </button>
          </Link>

        </div>

      </header>



      <main className="contenido">

        <p className="subtitulo">
          DESDE 2010 • CIUDAD DE MÉXICO
        </p>


        <h1>
          SHENLY
          <br />
          <span>BARBER</span>
        </h1>


        <p className="info-des">
          Barbería premium donde cada corte es una obra de precisión.
          <br />
          Servicios de clase mundial, atención personalizada y la
          elegancia que mereces.
        </p>


        <div className="acciones">


          <Link to="/servicios">
            <button className="btn-servicios">
              VER SERVICIOS
            </button>
          </Link>


          <Link to="/registro">
            <button className="btn-crear">
              CREAR CUENTA
            </button>
          </Link>


        </div>


      </main>


    </div>
  );
}


export default Inicio;