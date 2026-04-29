const MovieCard = ({ movie, onSelect }) => {
  return (
    <div className="card" onClick={() => onSelect(movie.imdbID)}>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
        alt={movie.Title}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <p>{movie.Type}</p>
    </div>
  );
};

export default MovieCard;