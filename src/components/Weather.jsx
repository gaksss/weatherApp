import { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "0a8dbd018c854686a6f81717251903"; // Remplace avec ta clé API
  const CITY = "Saint-Etienne"; // Remplace avec la ville souhaitée
  const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=0a8dbd018c854686a6f81717251903&q=Saint-Etienne&days=5&aqi=no&alerts=no`;

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setWeather(data))
      .catch(error => console.error("Erreur : ", error));
  }, []);

  return (
    <div>
      {weather ? (
        <div>
          <h2>Météo à {weather.location.name}</h2>
          <p>Température : {weather.current.temp_c}°C</p>
          <p>Météo : {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="Icône météo" />
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default Weather;
