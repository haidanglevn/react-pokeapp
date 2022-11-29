import React from 'react';
import classes from  "./Header.module.css"
import Nav from './Nav';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
      <header>
        <NavLink to="/home" className={classes.logo}> 
          <img src="" alt="" />
        </NavLink>
       
        <Nav/>
      </header>
    );
};

export default Header;