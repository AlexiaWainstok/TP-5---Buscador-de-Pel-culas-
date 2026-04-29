import MovieCard from "../MovieCard";

const MovieList = ({ movies, onSelect }) => {
  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default MovieList;