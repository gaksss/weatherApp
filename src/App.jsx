import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import MainWindow from "./components/MainWindow/MainWindow";

function App() {
  const [currentCity, setCurrentCity] = useState(null);

  // 📍 Géolocalisation au chargement
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentCity(`${latitude},${longitude}`);
        },
        (error) => {
          console.error("Erreur de géolocalisation :", error);
          setCurrentCity("Paris"); // Ville par défaut si refus
        }
      );
    } else {
      setCurrentCity("Paris");
    }
  }, []);

  const handleCitySearch = (city) => {
    setCurrentCity(city);
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <SearchBar onCitySearch={handleCitySearch} />
        {/* On passe currentCity à MainWindow */}
        {currentCity ? <MainWindow city={currentCity} /> : <p>Chargement de la localisation...</p>}
      </main>
    </>
  );
}

export default App;
