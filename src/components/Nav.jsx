import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
  return (
    <nav>
      <div>
        <NavLink to="/home">Home</NavLink>
      </div>
      <div>
        <NavLink to="/pokelist">PokeList</NavLink>
      </div>
      <div>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
