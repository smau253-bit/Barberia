import "./catalogo.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Detallese from "../detalle_sesrvicio/detallese";

function Catalogo() {
  const navigate = useNavigate();
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const productos = [
    {
      id: 1,
      nombre: "COLONIA BLACK INTENSE",
      precio: "$450",
      descripcion:
        "Fragancia masculina con notas de madera, cuero y ámbar. Larga duración, 100 ml.",
      imagen: "/img/perfume1.jpg",
    },
    {
      id: 2,
      nombre: "EAU DE TOILETTE ELITE",
      precio: "$320",
      descripcion:
        "Aroma fresco y sofisticado con toques cítricos y almizclados. Presentación 75 ml.",
      imagen: "/img/perfume2.jpg",
    },
    {
      id: 3,
      nombre: "POMADA MATE",
      precio: "$180",
      descripcion:
        "Pomada profesional para un acabado natural y fijación de larga duración.",
      imagen: "/img/pomada1.jpg",
    },
    {
      id: 4,
      nombre: "CERA PREMIUM",
      precio: "$150",
      descripcion:
        "Ideal para peinados modernos con textura y brillo natural.",
      imagen: "/img/cera1.jpg",
    },
    {
      id: 5,
      nombre: "ACEITE PARA BARBA",
      precio: "$210",
      descripcion:
        "Hidrata, fortalece y aporta brillo a la barba con ingredientes naturales.",
      imagen: "/img/barba1.jpg",
    },
  ];

  const volverAlInicio = () => {
    navigate("/");
  };

  return (
    <>
      <header className="productos-header">
        <div className="productos-logo">
          <h2>ELITECUT</h2>
          <span>BARBERÍA</span>
        </div>

        <nav>
          <ul className="productos-menu">
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/catalogo" className="productos-activo">
                Productos
              </Link>
            </li>
          </ul>
        </nav>

        <div className="productos-opciones">
          <input
            type="text"
            placeholder="Buscar producto..."
            className="productos-input"
          />
          <button className="productos-salir">Cerrar sesión</button>
        </div>
      </header>

      <main className="productos-principal">
        <div className="productos-header-contenido">
          <button className="productos-volver" onClick={volverAlInicio}>
            ← Volver al inicio
          </button>
          <div>
            <h1>CATÁLOGO DE PRODUCTOS</h1>
            <p className="productos-total">{productos.length} resultados disponibles</p>
          </div>
        </div>

        <div className="productos-separador">
          <span>PERFUMES Y COLONIAS</span>
        </div>

        <section className="productos-grid">
          {productos.map((producto) => (
            <div className="producto-card" key={producto.id}>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="producto-imagen"
              />
              <div className="producto-info">
                <h2 className="producto-precio">{producto.precio}</h2>
                <h3 className="producto-nombre">{producto.nombre}</h3>
                <p className="producto-texto">{producto.descripcion}</p>
                <button
                  className="producto-boton"
                  onClick={() => setProductoSeleccionado(producto)}
                >
                  VER DETALLES
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>

      {productoSeleccionado && (
        <Detallese
          servicio={productoSeleccionado}
          cerrar={() => setProductoSeleccionado(null)}
        />
      )}
    </>
  );
}

export default Catalogo;