import "./App.css";
import Layout from "./pages/Layout";
import { Routes, Route , useParams} from "react-router-dom";
import Home from "./components/Home";
import PokeList from "./components/PokeList";
import About from "./components/About";
import PokeSingle from "./components/PokeSingle";

import React, { Component } from "react";

// Just a work-around to use Hook with class component (higher-order component)
const RouterWrapper = () => {
  const params = useParams();
  return <PokeSingle params={params}/>
}



class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/pokelist" element={<PokeList />}/>
            <Route path="/pokelist/:pokesingle" element={<RouterWrapper/>} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
