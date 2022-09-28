import React from "react";
import "./App.css";
import About from "./components/About/About.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
};

export default App;
