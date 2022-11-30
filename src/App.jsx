import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { Component } from "react";

import Layout from "./pages/Layout";
import Home from "./components/Home";
import PokeList from "./components/PokeList";
import About from "./components/About";
import PokeSingle from "./components/PokeSingle";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/pokelist" element={<PokeList />} />
          <Route path="/pokelist/:pokesingle" element={<PokeSingle />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
