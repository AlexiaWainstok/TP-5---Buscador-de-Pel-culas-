//componente que muestra toda la información de una película
//recibe la película y la función para volver
const MovieDetail = ({ movie, onBack }) => {

  return (
    <div className="detail">

      {/* botón para volver a la lista */}
      <button className="btn-back" onClick={onBack}>
        ← Volver
      </button>

      {/* título de la película */}
      <h2>{movie.Title}</h2>

      {/* muestra la imagen */}
      {/* si no tiene imagen usa una por defecto */}
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
        alt={movie.Title}
      />

      {/* información de la película */}
      <p><strong>Año:</strong> {movie.Year}</p>

      {/* si falta un dato muestra "No disponible" */}
      <p><strong>Género:</strong> {movie.Genre || "No disponible"}</p>

      <p><strong>Director:</strong> {movie.Director || "No disponible"}</p>

      <p><strong>Actores:</strong> {movie.Actors || "No disponible"}</p>

      <p><strong>Sinopsis:</strong> {movie.Plot || "No disponible"}</p>

      <p><strong>Duración:</strong> {movie.Runtime || "No disponible"}</p>

      <p><strong>Idioma:</strong> {movie.Language || "No disponible"}</p>

      <p><strong>País:</strong> {movie.Country || "No disponible"}</p>

      <p><strong>IMDb:</strong> {movie.imdbRating || "N/A"}</p>

    </div>
  );
};

export default MovieDetail;