import { useState } from "react";

//componente buscador
//recibe la función para hacer la búsqueda
const SearchBar = ({ onSearch }) => {

  //estado para guardar lo que escribe el usuario
  const [input, setInput] = useState("");

  //se ejecuta cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); //evita que recargue la página

    //si el input no está vacío, llama a la función de búsqueda
    if (input.trim() !== "") {
      onSearch(input);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
      {/* input donde el usuario escribe */}
      <input
        type="text"
        placeholder="Buscar películas o series..."
        value={input}
        onChange={(e) => setInput(e.target.value)} //actualiza el estado
      />

      {/* botón para buscar */}
      <button type="submit">Buscar</button>

    </form>
  );
};

export default SearchBar;