import React from "react";
import "./MainWindow.css";

function MainWindow() {
  return (
    <section className="weather card">
      <div className="card-content">
        <span className="card-title">Saint-Etienne</span>

        <img src="soleil.png" alt="soleil" />
        <p className="temperature">12°C</p>
        <p className="wind">Vent: 10 km/h</p>
      </div>
      <div className="card-action">
        <a href="#">Thursday</a>
        <a href="#">Friday</a>
        <a href="#">Saturday</a>
        <a href="#">Sunday</a>
        <a href="#">Monday</a>
      </div>
    </section>
  );
}

export default MainWindow;
