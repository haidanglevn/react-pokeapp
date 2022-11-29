import React from 'react';
import { NavLink } from "react-router-dom";

import Nav from './Nav';

import classes from  "./Header.module.css"

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