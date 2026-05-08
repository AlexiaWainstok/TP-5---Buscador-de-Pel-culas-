//componente que muestra errores
//recibe el mensaje y la función para cerrar
export default function ErrorMessage({ mensaje, onClose }) {

  //si no hay mensaje no muestra nada
  if (!mensaje) return null;

  return (

    //contenedor del error
    <div className="error-container">

      {/* parte superior del error */}
      <div className="error-header">

    
        {/* botón para cerrar */}
      <button onClick={onClose} className="main-button"> Volver
      </button>

      </div>

      {/* cuerpo del error */}
      <div className="error-body">

        {/* mensaje del error */}
        <p>{mensaje}</p>

      </div>

    </div>
  );
}