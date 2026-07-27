import "./servicio.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Detallese from "../detalle_sesrvicio/detallese";

function Servicio() {
  const navigate = useNavigate();
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

  const volverAlInicio = () => {
    navigate("/");
  };

  return (
    <>
      <header className="servicios-header">
        <div className="servicios-logo">
          <h2>ELITECUT</h2>
          <span>BARBERÍA</span>
        </div>

        <nav>
          <ul className="servicios-menu">
            <li>
              <Link to="/servicios" className="servicios-activo">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/catalogo">Productos</Link>
            </li>
          </ul>
        </nav>

        <div className="servicios-opciones">
          <input
            type="text"
            placeholder="Buscar servicio..."
            className="servicios-input"
          />
          <button className="servicios-salir">Cerrar sesión</button>
        </div>
      </header>

      <main className="servicios-principal">
        <div className="servicios-header-contenido">
          <button className="servicios-volver" onClick={volverAlInicio}>
            ← Volver al inicio
          </button>
          <div>
            <h1>CATÁLOGO DE SERVICIOS</h1>
            <p className="servicios-total">{servicios.length} resultados disponibles</p>
          </div>
        </div>

        <div className="servicios-separador">
          <span>CORTES Y ESTILOS</span>
        </div>

        <section className="servicios-grid">
          {servicios.map((servicio) => (
            <div className="servicio-card" key={servicio.id}>
              <img
                src={servicio.imagen}
                alt={servicio.nombre}
                className="servicio-imagen"
              />
              <div className="servicio-info">
                <h2 className="servicio-precio">{servicio.precio}</h2>
                <h3 className="servicio-nombre">{servicio.nombre}</h3>
                <p className="servicio-texto">{servicio.descripcion}</p>
                <button
                  className="servicio-boton"
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