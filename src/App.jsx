import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <SearchBar />
      </main>
    </>
  );
}

export default App;
