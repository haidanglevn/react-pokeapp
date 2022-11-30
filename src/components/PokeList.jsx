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
      .get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
      .then((res) => {
        const fetches = res.data.results.map((p) => {
          return axios.get(p.url).then((res) => res.data);
        });

        Promise.all(fetches).then((res) => {
          setData(res); setIsLoading(false);
        });
      });
  }, []);

  return (
    <div>
      <div className={classes.pokelist}>
        <h1>PokeList here</h1>
        <div className={classes.cardContainer}>
          {data.map((card) => (
            <Card
              name={card.name}
              key={card.name}
              url={card.sprites.other["official-artwork"].front_default}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokeList;
