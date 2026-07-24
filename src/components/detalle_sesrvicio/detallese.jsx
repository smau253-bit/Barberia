import "./detallese.css";
import { FaTimes, FaClock, FaCircle, FaWhatsapp } from "react-icons/fa";

function Detallese({ servicio, cerrar }) {

  if (!servicio) return null;


  const enviarWhatsApp = () => {

    const numero = "525527620598"; // Cambia por el WhatsApp real de la barbería


    const mensaje = `
Hola, me gustaría agendar un servicio.

Servicio: ${servicio.nombre}

Precio: ${servicio.precio}

Descripción:
${servicio.descripcion}

Duración: ${servicio.duracion}

¿Me pueden proporcionar disponibilidad?
`;


    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;


    window.open(url, "_blank");

  };


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

            <h2>
              {servicio.nombre}
            </h2>

            <span>
              {servicio.precio}
            </span>

          </div>



          <p className="descripcion">
            {servicio.descripcion}
          </p>



          <div className="detalles">


            <div className="duracion">

              <FaClock />

              <span>
                Duración: {servicio.duracion}
              </span>

            </div>



            <div className="estado disponible">

              <FaCircle />

              <span>
                Disponible
              </span>

            </div>


          </div>



          <button
            className="btn-whatsapp"
            onClick={enviarWhatsApp}
          >

            <FaWhatsapp />

            Agendar por WhatsApp

          </button>



        </div>


      </div>


    </div>
  );
}


export default Detallese;