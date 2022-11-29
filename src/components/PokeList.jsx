import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";

import classes from "./PokeList.module.css";

const PokeList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((res) => {
        const fetches = res.data.results.map((p) => {
          return axios.get(p.url).then((res) => res.data);
        });
        Promise.all(fetches).then((res) => {
          // TODO: get only image and name, don't save extra shit
          setData(res);
          setIsLoading(false);
        });
      });
  }, []);

  return (
    <div className={classes.pokelist}>
      {data.map((card) => (
        <Card
          key={card.name}
          name={card.name}
          img={card.sprites.other.dream_world.front_default}
        />
      ))}
    </div>
  );
};

export default PokeList;
