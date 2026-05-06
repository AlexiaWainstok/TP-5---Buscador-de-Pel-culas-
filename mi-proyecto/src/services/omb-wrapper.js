import axios from "axios";

//clave de la API de OMDB
const APIKEY = "ba4b8e59"; 

//busca películas por texto y por página
const OMDBSearchByPage = async (searchText, page = 1) => { 

//objeto que voy a devolver
let returnObject = {
  respuesta : false, //si la búsqueda fue exitosa
  cantidadTotal : 0, //cantidad total de resultados
  datos : [] //lista de películas
};

try {
    //armo la URL con la API
    const url = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`;
    
    //llamo a la API con axios
    const response = await axios.get(url);

    //si la API responde bien
    if (response.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.cantidadTotal = parseInt(response.data.totalResults);
      returnObject.datos = response.data.Search; //guardo las películas
    }

  } catch (error) {
    console.log(error); //error en la consulta
  }

//devuelvo el resultado
return returnObject;
};


//busca TODAS las películas (todas las páginas)
const OMDBSearchComplete = async (searchText) => { 

let returnObject = {
  respuesta : false,
  cantidadTotal : 0,
  datos : []
};

  try {
  
    //busco la primera página
    const firstPage = await OMDBSearchByPage(searchText, 1);

    //si no hay resultados, devuelvo vacío
    if (!firstPage.respuesta) return returnObject;

    //guardo los datos iniciales
    returnObject.respuesta = true;
    returnObject.cantidadTotal = firstPage.cantidadTotal;
    returnObject.datos = [...firstPage.datos];

    //calculo cuántas páginas hay
    const totalPages = Math.ceil(firstPage.cantidadTotal / 10);

    //recorro las demás páginas
    for (let i = 2; i <= totalPages; i++) {
      const pageData = await OMDBSearchByPage(searchText, i);
      
      //agrego más películas al array
      returnObject.datos.push(...pageData.datos);
    }

  } catch (error) {
    console.log(error);
  }

return returnObject;
};


//busca el detalle de una película por su ID
const OMDBGetByImdbID = async (imdbID) => { 

let returnObject = {
  respuesta : false,
  cantidadTotal : 0,
  datos : {} //objeto con la película
};

  try {
    //URL con el ID de la película
    const url = `http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`;
    
    //llamada a la API
    const response = await axios.get(url);

    //si la respuesta es correcta
    if (response.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.datos = response.data; //guardo el detalle
      returnObject.cantidadTotal = 1;
    }

  } catch (error) {
    console.log(error);
  }

//devuelvo el resultado
return returnObject;
};

//exporto las funciones para usarlas en App
export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};