import MovieCard from "../MovieCard";

//componente que muestra todas las películas
const MovieList = ({ peliculas, onSelect }) => {

  return (
    <div className="grid">

      {/* recorre el array de películas */}
      {/* por cada película crea una tarjeta */}
      {peliculas.map((movie) => (

        <MovieCard

          //clave única para identificar cada película
          key={movie.imdbID}

          //manda los datos de la película
          movie={movie}

          //manda la función para ver el detalle
          onSelect={onSelect}
        />

      ))}

    </div>
  );
};

export default MovieList;