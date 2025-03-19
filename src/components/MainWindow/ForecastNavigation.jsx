import React from "react";

function ForecastNavigation({ forecast, selectedDay, onSelectDay }) {
  return (
    <div className="card-action">
      {forecast.map((day, index) => (
        <a 
          key={day.date} 
          href="#"
          onClick={(e) => { e.preventDefault(); onSelectDay(index); }}
          className={selectedDay === index ? 'active' : ''}
        >
          {new Date(day.date).toLocaleDateString("fr-FR", { weekday: "long" })}
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
        </a>
      ))}
    </div>
  );
}

export default ForecastNavigation;
