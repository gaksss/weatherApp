import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import MainWindow from "./components/MainWindow/MainWindow";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <SearchBar />
        <MainWindow/>
      {/* <Weather /> */}
      </main>
    </>
  );
}

export default App;
