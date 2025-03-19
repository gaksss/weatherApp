import React, { useState, useEffect } from "react";
import "./MainWindow.css";

function MainWindow({ city }) {
  const [weather, setWeather] = useState(null);
  const [selectedDay, setSelectedDay] = useState(0); // 0 = aujourd'hui
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.error("Erreur : ", error));
  }, [city]);

  const handleDayClick = (index, e) => {
    e.preventDefault();
    setSelectedDay(index);
  };

  const getCurrentWeather = () => {
    if (!weather) return null;
    if (selectedDay === 0) {
      return {
        temp: weather.current.temp_c,
        condition: weather.current.condition,
        wind: weather.current.wind_kph,
      };
    } else {
      const day = weather.forecast.forecastday[selectedDay];
      return {
        temp: day.day.avgtemp_c,
        condition: day.day.condition,
        wind: day.day.maxwind_kph,
        minTemp: day.day.mintemp_c, // Température minimale
        maxTemp: day.day.maxtemp_c, // Température maximale
      };
    }
  };

  return (
    <section className="weather card">
      <div className="card-content">
        {weather ? (
          <>
            <span className="card-title">{weather.location.name}</span>
            {getCurrentWeather() && (
              <>
                <img
                  src={getCurrentWeather().condition.icon}
                  alt={getCurrentWeather().condition.text}
                />
                <p className="temperature">
                  {getCurrentWeather().temp}°C
                </p>
                <p className="wind">Vent: {getCurrentWeather().wind} km/h</p>
                <p className="temp-min-max">
                  Température min: {getCurrentWeather().minTemp}°C / Température
                  max: {getCurrentWeather().maxTemp}°C
                </p>
              </>
            )}
          </>
        ) : (
          <p>Chargement...</p>
        )}
      </div>

      <div className="card-action">
        {weather &&
          weather.forecast.forecastday.map((day, index) => (
            <a
              key={day.date}
              href="#"
              onClick={(e) => handleDayClick(index, e)}
              className={selectedDay === index ? "active" : ""}
            >
              {new Date(day.date).toLocaleDateString("fr-FR", {
                weekday: "long",
              })}
              <img
                src={day.day.condition.icon}
                alt={day.day.condition.text}
              />
              <div className="temp-min-max">
                {day.day.mintemp_c}°C / {day.day.maxtemp_c}°C
              </div>
            </a>
          ))}
      </div>
    </section>
  );
}

export default MainWindow;
