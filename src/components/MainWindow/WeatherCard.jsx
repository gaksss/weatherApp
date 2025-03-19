import React from "react";

function WeatherCard({ weatherData }) {
  if (!weatherData) return null;

  return (
    <div className="weather-card">
      <img src={weatherData.condition.icon} alt={weatherData.condition.text} />
      <p className="temperature">{weatherData.temp}°C</p>
      <p className="wind">Vent: {weatherData.wind} km/h</p>
    </div>
  );
}

export default WeatherCard;
