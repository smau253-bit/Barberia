import "./servicio.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Detallese from "../detalle_sesrvicio/detallese";

function Servicio() {
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const servicios = [
    {
      id: 1,
      nombre: "CORTE CLÁSICO",
      precio: "$80",
      tiempo: "45 min",
      descripcion:
        "Corte de cabello tradicional con acabado profesional y estilo personalizado a tu gusto.",
      imagen: "/img/corte1.jpg",
    },
    {
      id: 2,
      nombre: "CORTE + BARBA",
      precio: "$120",
      tiempo: "75 min",
      descripcion:
        "La combinación perfecta de corte de cabello y arreglo completo de barba.",
      imagen: "/img/corte2.jpg",
    },
    {
      id: 3,
      nombre: "AFEITADO TRADICIONAL",
      precio: "$100",
      tiempo: "60 min",
      descripcion:
        "Afeitado clásico con navaja, toalla caliente y productos de primera calidad.",
      imagen: "/img/corte3.jpg",
    },
    {
      id: 4,
      nombre: "ARREGLO DE BARBA",
      precio: "$70",
      tiempo: "30 min",
      descripcion:
        "Definición y perfilado preciso de barba para un aspecto elegante y cuidado.",
      imagen: "/img/corte4.jpg",
    },
    {
      id: 5,
      nombre: "CORTE INFANTIL",
      precio: "$60",
      tiempo: "35 min",
      descripcion:
        "Corte especializado para niños con un ambiente cómodo y divertido.",
      imagen: "/img/corte5.jpg",
    },
    {
      id: 6,
      nombre: "PAQUETE PREMIUM",
      precio: "$180",
      tiempo: "90 min",
      descripcion:
        "Incluye corte, barba, lavado capilar y peinado profesional.",
      imagen: "/img/corte6.jpg",
    },
  ];

  return (
    <>
      <header className="navbar">

        <div className="logo">
          <h2>ELITECUT</h2>
          <span>BARBERÍA</span>
        </div>

        <nav>
          <ul className="menu">
            <li>
              <Link to="/servicios" className="activo">
                Servicios
              </Link>
            </li>

            <li>
              <Link to="/catalogo">
                Productos
              </Link>
            </li>
          </ul>
        </nav>

        <div className="acciones-nav">

          <input
            type="text"
            placeholder="Buscar servicio..."
            className="buscador"
          />

          <button className="cerrar">
            Cerrar sesión
          </button>

        </div>

      </header>

      <main className="contenedor">

        <h1>CATÁLOGO DE SERVICIOS</h1>

        <div className="linea"></div>

        <p className="cantidad">
          {servicios.length} resultados disponibles
        </p>

        <section className="tarjetas">

          {servicios.map((servicio) => (

            <div className="tarjeta" key={servicio.id}>

              <img
                src={servicio.imagen}
                alt={servicio.nombre}
              />

              <div className="contenido">

                <h2 className="precio">
                  {servicio.precio}
                </h2>

                <div className="titulo">

                  <h3>{servicio.nombre}</h3>

                  <span>{servicio.tiempo}</span>

                </div>

                <p>
                  {servicio.descripcion}
                </p>

                <button
                  className="btn-servicio"
                  onClick={() => setServicioSeleccionado(servicio)}
                >
                  VER DETALLES
                </button>

              </div>

            </div>

          ))}

        </section>

      </main>
      {servicioSeleccionado && (
  <Detallese
    servicio={servicioSeleccionado}
    cerrar={() => setServicioSeleccionado(null)}
  />
)}
    </>
  );
}

export default Servicio;