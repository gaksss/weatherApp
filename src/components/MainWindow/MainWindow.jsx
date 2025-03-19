import React, { useState, useEffect } from "react";
import "./MainWindow.css";

function MainWindow() {
  const [weather, setWeather] = useState(null);
  const API_KEY = "0a8dbd018c854686a6f81717251903"; // Remplace avec ta clé API
  const CITY = "Montreal";
  const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${CITY}&days=5&aqi=no&alerts=no`;

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setWeather(data))
      .catch(error => console.error("Erreur : ", error));
  }, []);

  return (
    <section className="weather card">
      <div className="card-content">
        {weather ? (
          <>
            <span className="card-title">{weather.location.name}</span>
            <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
            <p className="temperature">{weather.current.temp_c}°C</p>
            <p className="wind">Vent: {weather.current.wind_kph} km/h</p>
          </>
        ) : (
          <p>Chargement...</p>
        )}
      </div>

      {/* <div className="card-action">
        {weather &&
          weather.forecast.forecastday.map((day) => (
            <a key={day.date} href="#">
              {new Date(day.date).toLocaleDateString("fr-FR", { weekday: "long" })}
              <img src={day.day.condition.icon} alt={day.day.condition.text} />
            </a>
          ))}
      </div> */}
    </section>
  );
}

export default MainWindow;
