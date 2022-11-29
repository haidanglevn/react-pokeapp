import { func } from "prop-types";
import React from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  /* console.log("from card :", props.type);
  
  function renderType() {
    cardType = props.type.map((type) => {
      <div>{type}</div>;
    });
    return cardType;
  }
  console.log("cardtype: ",cardType) */

  return (
    <div className={classes.card}>
      <p>{props.name}</p>
      <img src={props.url} alt="" />
      <Link to={`${props.name}`}>See more</Link>
    </div>
  );
};

export default Card;
