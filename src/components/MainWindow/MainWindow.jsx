import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import ForecastNavigation from "./ForecastNavigation";
import "./MainWindow.css";

function MainWindow({ city }) {
  const [weather, setWeather] = useState(null);
  const [selectedDay, setSelectedDay] = useState(0);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;



  useEffect(() => {
    if (!city) return;

    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.error("Erreur lors de la récupération de la météo :", error));
  }, [city]);

  const getCurrentWeather = () => {
    if (!weather) return null;
    if (selectedDay === 0) {
      return {
        temp: weather.current.temp_c,
        condition: weather.current.condition,
        wind: weather.current.wind_kph
      };
    } else {
      const day = weather.forecast.forecastday[selectedDay];
      return {
        temp: day.day.avgtemp_c,
        condition: day.day.condition,
        wind: day.day.maxwind_kph
      };
    }
  };

  return (
    <section className="weather card">
      <div className="card-content">
        {weather ? (
          <>
            <span className="card-title">{weather.location.name}</span>
            <WeatherCard weatherData={getCurrentWeather()} />
          </>
        ) : (
          <p>Chargement...</p>
        )}
      </div>

      {weather && (
        <ForecastNavigation
          forecast={weather.forecast.forecastday}
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
        />
      )}
    </section>
  );
}

export default MainWindow;
