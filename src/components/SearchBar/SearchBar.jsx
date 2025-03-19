import React, { useState } from "react";
import "./searchbar.css";

function SearchBar({ onCitySearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onCitySearch(city); // 📌 Met à jour la ville sélectionnée
      setCity("");
    }
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Rechercher une ville..."
      />
      <button type="submit">Rechercher</button>
    </form>
  );
}

export default SearchBar;
