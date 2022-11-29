import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokeSingle = () => {
  const params = useParams();
  console.log(params);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`).then(
      (data) => {
        setData(data.data);
        setIsLoading(false);
      }
    );
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{data.name}</h2>
      <img
        src={data.sprites?.other.dream_world.front_default}
        alt={data.name}
      />
    </div>
  );
};

export default PokeSingle;
