import { useState } from "react";
import axios from "axios";
import SearchBar from "./Componentes/SearchBar";
import MovieList from "./Componentes/MovieList";
import MovieDetail from "./Componentes/MovieDetail";
//import Loader from "./Componentes/Loader";
//import ErrorMessage from "./Componentes/ErrorMessage";
import "./App.css";

const API_KEY = "ba4b8e59";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(null);

  // 🔍 Buscar películas
  const searchMovies = async (query) => {
    try {
     // setLoading(true);
      //setError(null);
      setSelectedMovie(null);

      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );
         console.log(response.data);


      if (response.data.Response === "False") {
        setMovies([]);
      } else {
        setMovies(response.data.Search);
      }
    } catch (error) {
      //setError("Error al buscar películas");
    } finally {
      //setLoading(false);
    }
   
  };

  // 🎬 Traer detalle
  const getMovieDetail = async (id) => {
    try {
      //setLoading(true);
     // setError(null);

      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
      );

      setSelectedMovie(response.data);
    } catch (error) {
     // setError("Error al cargar detalle");
    } finally {
     // setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>🎬 Buscador de Películas</h1>

      <SearchBar onSearch={searchMovies} />

      {/* {loading && <Loader />} */}
      {/*   {error && <ErrorMessage message={error} />} */}

      {/*    {!loading && movies.length === 0 && !error && (
        <p>No hay resultados</p>
      )} */}


   <MovieList movies={movies} onSelect={getMovieDetail} />

      {selectedMovie && <MovieDetail movie={selectedMovie} />}
    </div>
  );
}

export default App;

