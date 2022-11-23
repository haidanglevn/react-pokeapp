import React from 'react';
import classes from  "./Header.module.css"

const Header = () => {
    return (
      <header>
        <div className={classes.logo}>
          <h1>PokeApp</h1>
        </div>
        <div className={classes.links}>
          <a href="/">Home</a>
          <a href="/">PokeList</a>
          <a href="/">About</a>
        </div>
      </header>
    );
};

export default Header;