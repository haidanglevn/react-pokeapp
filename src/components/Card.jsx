import React from "react";
import { Link } from "react-router-dom";

import classes from "./Card.module.css";

const Card = ({name, url}) => {

  return (
    <div className={classes.card}>
      <p>{name}</p>
      <img src={url} alt="" />
      <Link to={`${name}`}>See more</Link>
    </div>
  );
};

export default Card;
