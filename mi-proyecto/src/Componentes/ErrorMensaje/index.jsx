//componente que muestra errores
//recibe el mensaje y la función para cerrar
export default function ErrorMessage({ message, onClose }) {

  //si no hay mensaje no muestra nada
  if (!message) return null;

  return (

    //contenedor del error
    <div className="error-container">

      {/* parte superior del error */}
      <div className="error-header">

        {/* título */}
        <span>[!] SYSTEM_FAILURE</span>

        {/* botón para cerrar */}
        <button
          onClick={onClose}
          className="error-close"
        >
          X
        </button>

      </div>

      {/* cuerpo del error */}
      <div className="error-body">

        {/* mensaje del error */}
        <p>{message}</p>

      </div>

    </div>
  );
}