import { useState } from "react";
import { OMDBSearchByPage, OMDBGetByImdbID } from "./services/omb-wrapper"; 
import SearchBar from "./Componentes/SearchBar";
import MovieList from "./Componentes/MovieList";
import MovieDetail from "./Componentes/MovieDetail";
//import Loader from "./Componentes/Loader";
//import ErrorMessage from "./Componentes/ErrorMessage";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(null);

  // 🔍 Buscar películas
 const searchMovies = async (query) => {
  try {
    // setLoading(true);
    // setError(null);
    setSelectedMovie(null);

    const result = await OMDBSearchByPage(query);

    if (!result.respuesta) {
      setMovies([]);
    } else {
      setMovies(result.datos);
    }

  } catch (error) {
    // setError("Error al buscar películas");
  } finally {
    // setLoading(false);
  }
};

  // 🎬 Traer detalle
const getMovieDetail = async (id) => {
  try {
    // setLoading(true);
    // setError(null);

    const result = await OMDBGetByImdbID(id);

    if (result.respuesta) {
      setSelectedMovie(result.datos);
    }

  } catch (error) {
    // setError("Error al cargar detalle");
  } finally {
    // setLoading(false);
  }
};

  return (
    <div className="app">
      <h1>Buscador de Películas</h1>

      <SearchBar onSearch={searchMovies} />

      {/* {loading && <Loader />} */}
      {/*   {error && <ErrorMessage message={error} />} */}

      {/*    {!loading && movies.length === 0 && !error && (
        <p>No hay resultados</p>
      )} */}


   {/*<MovieList movies={movies} onSelect={getMovieDetail} /> */}

      {/*{selectedMovie && <MovieDetail movie={selectedMovie} />}*/}

    {selectedMovie ? (
      <MovieDetail movie={selectedMovie} />
         ) : (
      <MovieList movies={movies} onSelect={getMovieDetail} />
      )}

    </div>
  );
}

export default App;

