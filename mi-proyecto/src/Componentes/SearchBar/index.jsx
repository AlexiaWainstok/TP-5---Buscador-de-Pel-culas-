import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      onSearch(input);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar películas o series..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;