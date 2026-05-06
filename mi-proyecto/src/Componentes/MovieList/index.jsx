import MovieCard from "../MovieCard";

//componente que muestra la lista de películas
//recibe un array de películas y una función para seleccionar
const MovieList = ({ movies, onSelect }) => {
  return (
    <div className="grid">
      
      {/* recorre las películas y crea una tarjeta por cada una */}
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID} //clave única
          movie={movie} //datos de la película
          onSelect={onSelect} //función para click
        />
      ))}

    </div>
  );
};

export default MovieList;