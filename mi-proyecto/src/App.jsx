import { useState } from "react";
import { OMDBSearchByPage, OMDBGetByImdbID } from "./services/omb-wrapper"; 
//importo OMD, que me va a llamar a la API,
// me va a devolver los datos de las películas,
// la lista como el detalle de cada película
import SearchBar from "./Componentes/SearchBar";
import MovieList from "./Componentes/MovieList";
import MovieDetail from "./Componentes/MovieDetail";
import "./App.css";

function App() {
  //CREAO UNA VARIABLE DE ESTADO PARA DESPUES GUARDAR LAS PELICULAS 
  //EMPIEZA VACIA YA QUE NO TIENE NINGUNA PELICULA 
  const [movies, setMovies] = useState([]);
  //LO MISMO PERO PARA LA PELICULA SELLECIONADA 
  //EMPIEZA EN NULL YA QUE NO HAY NINGUNA PELICULA SELECCIONADA
  const [selectedMovie, setSelectedMovie] = useState(null);

//Buscar películas
//funcion q va a traer el listado de peliculas
 const searchMovies = async (query) => {
  try {
 
    // limpia la pelicula seleccionada para volver a la lista 
    //Lo pongo en null para dejar de mostrar la película y volver a la lista.
    setSelectedMovie(null);
    
    //llama a la API, devolviendo la pelicula encontrada 
    const result = await OMDBSearchByPage(query);
    
    //si no se encuentra la lista de películas, pueden suceder dos cosas: 
    //limpia la lista 
    //actualiza la lista con los resultados encontrados,mostrando MovieList
    if (!result.respuesta) {
      setMovies([]);
    } else {
      setMovies(result.datos);
    }

//falta poner adentro del catch se el error y el loading en finally 
  } catch (error) {
    
  } finally {
   
  }
};

//Obtener detalle de película
//cuando el usuario selecciona una película del listado, 
// se llama a esta función, pasando el ID de la película seleccionada
const getMovieDetail = async (id) => {
  try {
//llama a la función de detalle de la API, pasando el ID de la película, y espera la respuesta
    const result = await OMDBGetByImdbID(id);

    //si encuentra la película, actualiza el estado de selectedMovie, 
    // mostrando los detalles de la pelicula
   
    if (result.respuesta) {
      setSelectedMovie(result.datos);
    }

  } catch (error) {
   
  } finally {
   
  }
};
//en pantalla se muestra el título, el buscador y según si hay una película, el detalle o la lista
//Acá uso props para pasar datos y funciones a los componentes
return (
    <div className="app">
      <h1>Buscador de Películas</h1>
      <SearchBar onSearch={searchMovies} />
    {selectedMovie ? (
      <MovieDetail movie={selectedMovie} />
         ) : (
      <MovieList movies={movies} onSelect={getMovieDetail} />
      )}

    </div>
  );
}

export default App;

