import { useState, useEffect } from "react";
import { OMDBSearchByPage, OMDBGetByImdbID } from "./services/omb-wrapper"; 
//importo OMD, que me va a llamar a la API,
// me va a devolver la lista de la pelicula buscada con sus detalles 
//Importo los componentes que voy a usar en la app
import SearchBar from "./Componentes/SearchBar";
import MovieList from "./Componentes/MovieList";
import MovieDetail from "./Componentes/MovieDetail";
import Loader from "./Componentes/Loader";
import ErrorMensaje from "./Componentes/ErrorMensaje";
import "./App.css";

function App() {

  //guarda la lista de películas
  //empieza vacío porque todavía no hay películas
  const [movies, setMovies] = useState([]);
   //guarda la película seleccionada
  //empieza en null porque no hay ninguna seleccionada
  const [selectedMovie, setSelectedMovie] = useState(null);
  //guarda si la app está cargando datos
  //empieza en false porque al inicio no está cargando nada
  const [loading, setLoading] = useState(false);
  //guarda mensajes de error
  //empieza vacío porque no hay errores
  const [error, setError] = useState("");

  useEffect(() => {
  searchMovies("Cars");
  }, []);

  //Buscar películas(va a traer el listado de peliculas)
  const searchMovies = async (query) => {
    try {
      // Indicamos que el sistema está trabajando
      setLoading(true);
      setError(null);
      
      // limpia la pelicula seleccionada para volver a la lista 
      //Lo pongo en null para dejar de mostrar la película y volver a la lista.
      setSelectedMovie(null);
      
      //llama a la API, devolviendo la pelicula encontrada 
      const result = await OMDBSearchByPage(query);
      
      //si no se encuentra la lista de películas, pueden suceder dos cosas: 
      //lista vacia y muestra el error o actualiza la lista con los resultados 
      if (!result.respuesta) {
        setMovies([]);
        setError("No se encontraron resultados para la búsqueda.");
      } else {
        //guarda las peliculas que encontro en el estado de movies, para mostrar la lista
        setMovies(result.datos);
      }

    } catch (error) {
      // si falla la conexion o hay algun error
      setError("SYSTEM_FAILURE: Error de conexión con el servidor.");
    } finally {
      // Se apaga el indicador de carga siempre
      setLoading(false);
    }
  };

  //Obtener detalle de película(trae el detalle de la película seleccionada)
  const getMovieDetail = async (id) => {
    try {
      setLoading(true);
      setError(null);

      //busca el detalle de la pelicula por su ID
      const result = await OMDBGetByImdbID(id);

      //si encuentra la película, actualiza el estado de selectedMovie y muestra los detalles
      // sino muestra un mensaje de error
      if (result.respuesta) {
        setSelectedMovie(result.datos);
      } else {
        setError("No se pudo obtener el detalle de la película.");
      }

    } catch (error) {
      setError("SYSTEM_FAILURE: Error al recuperar datos de detalle.");
    } finally {
      setLoading(false);
    }
  };

  //en pantalla se muestra el título, el buscador y según si hay una película, el detalle o la lista
  //Acá uso props para pasar datos y funciones a los componentes
return (
    <div className="app">

      {/* buscador */}
      <SearchBar onSearch={searchMovies} />

      {/* muestra el loader si está cargando */}
      {loading && <Loader />}

      {/* muestra error si existe */}
      {error && <ErrorMensaje mensaje={error} onClose={() => {setError("");searchMovies("Cars");
  }} />}

      {/* si no hay resultados */}
      {!loading && !error && movies.length === 0 && (
        <p>No se encontraron resultados</p>
      )}

      {!loading && !error && (
        selectedMovie && (
           <MovieDetail
            movie={selectedMovie}
            onBack={() => setSelectedMovie(null)}/>
         )
       )}

      {!loading && !error && !selectedMovie && (
       <MovieList
        peliculas={movies}
        onSelect={getMovieDetail} />
      )}
    </div>
  );
}

export default App;