import { useState } from "react";

//componente del buscador
//recibe la función para buscar películas
const SearchBar = ({ onSearch }) => {

  //guarda lo que escribe el usuario
  const [input, setInput] = useState("");

  //esta función se ejecuta cuando toca buscar
  const handleSubmit = (e) => {

    //evita que la página se recargue
    e.preventDefault();

    //si el input no está vacío
    if (input.trim() !== "") {

      //manda el texto al componente App
      onSearch(input);
    }
  };

  return (

    //cuando se envía el formulario ejecuta handleSubmit
    <form onSubmit={handleSubmit}>

      {/* input donde escribe el usuario */}
      <input
        type="text"

        //texto que aparece dentro del input
        placeholder="Buscar películas o series..."

        //muestra el valor guardado en input
        value={input}

        //actualiza el estado mientras escribe
        onChange={(e) => setInput(e.target.value)}
      />

      {/* botón para buscar */}
      <button type="submit">
        Buscar
      </button>

    </form>
  );
};

export default SearchBar;