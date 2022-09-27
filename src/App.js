import React from "react";
import "./App.css";
import About from "./components/About/About.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  );
};

export default App;
