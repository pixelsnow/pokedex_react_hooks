import React from "react";

import Nav from "./Nav";

import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <h2>Pokedex</h2>
      </Link>

      <Nav />
    </header>
  );
};

export default Header;
