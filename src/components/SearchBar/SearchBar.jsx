import React from "react";
import "./searchbar.css";

function SearchBar() {
  return (
    <div className="search-container">
      <input type="text" placeholder="Rechercher une ville..." />
      <button>Rechercher</button>
    </div>
  );
}

export default SearchBar;
