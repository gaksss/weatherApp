import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import MainWindow from "./components/MainWindow/MainWindow";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <SearchBar />
        <MainWindow/>
      </main>
    </>
  );
}

export default App;
