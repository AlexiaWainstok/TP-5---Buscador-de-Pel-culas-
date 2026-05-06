//componente que muestra una película en forma de tarjeta
//recibe la película y una función para cuando se hace click
      {/* 👇 BOTÓN ACÁ */}
      <button className="btn-back" onClick={() => window.history.back()}>
        ← Volver
      </button>
const MovieCard = ({ movie, onSelect }) => {
  return (
    //al hacer click, llama a la función y pasa el id de la película
    <div className="card" onClick={() => onSelect(movie.imdbID)}>
      
      {/* muestra la imagen o una por defecto si no hay */}
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
        alt={movie.Title}
      />

      {/* muestra datos básicos */}
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <p>{movie.Type}</p>
    </div>
  );
};

export default MovieCard;