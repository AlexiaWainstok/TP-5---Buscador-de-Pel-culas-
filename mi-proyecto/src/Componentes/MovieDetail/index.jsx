//componente que muestra el detalle completo de una película
//recibe una película por props
const MovieDetail = ({ movie }) => {
  return (
    <div className="detail">
      
   
      <h2>{movie.Title}</h2>

   
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
        alt={movie.Title}
      />

      {/* muestra información (si no hay, muestra "No disponible") */}
      <p><strong>Año:</strong> {movie.Year}</p>
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