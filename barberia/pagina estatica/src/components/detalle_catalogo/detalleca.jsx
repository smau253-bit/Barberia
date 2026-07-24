import "./detallese.css";
import { FaTimes, FaClock, FaCircle, FaWhatsapp } from "react-icons/fa";

function Detalleca({ servicio, cerrar }) {


  if (!servicio) return null;

  return (
    <div className="modal">
      <div className="modal-contenedor">

        <button className="exit" onClick={cerrar}>
          <FaTimes />
        </button>

        <div className="modal-imagen">
          <img
            src={servicio.imagen}
            alt={servicio.nombre}
          />
        </div>

        <div className="modal-info">

          <div className="titulo-precio">
            <h2>{servicio.nombre}</h2>
            <span>{servicio.precio}</span>
          </div>

          <p className="descripcion">
            {servicio.descripcion}
          </p>

          <div className="detalles">

            <div className="duracion">
              <FaClock />
              <span>Duración: {servicio.duracion}</span>
            </div>

            <div className="estado disponible">
              <FaCircle />
              <span>Disponible</span>
            </div>

          </div>
    

        </div>

      </div>
    </div>
  );
}

export default Detalleca;