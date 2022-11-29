import React from "react";
import { Link } from "react-router-dom";

import classes from "./Card.module.css";

const Card = ({ img, name }) => {
  return (
    <div className={classes.card}>
      <div className={classes["img-container"]}>
        <img src={img} alt={name} />
      </div>
      <div className={classes.info}>
        <h3>{name}</h3>
        <Link to={name}>See more</Link>
      </div>
    </div>
  );
};

export default Card;
