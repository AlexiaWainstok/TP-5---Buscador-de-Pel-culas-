//componente que muestra una película en forma de tarjeta
//recibe los datos de la película y la función para ver el detalle
const MovieCard = ({ movie, onSelect }) => {

  return (
    <div className="card">

      {/* imagen de la película */}
      {/* si no tiene imagen usa una por defecto */}
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
        alt={movie.Title}
      />

      {/* datos básicos */}
      <h3>{movie.Title}</h3>

      <p>{movie.Year}</p>

      <p>{movie.Type}</p>

      {/* botón para ver el detalle */}
      <button onClick={() => onSelect(movie.imdbID)}>

        {/* manda el id de la película */}
        Ver detalle

      </button>

    </div>
  );
};

export default MovieCard;