import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PokeSingle = () => {
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
        setIsLoading(true);
      });
  }, []);

  console.log("test: ", data.types);

  return (
    <div>
      <div>{data.name}</div>
      <img src={data.sprites?.other["official-artwork"].front_default} alt="" />
      <div>
        {data.types.map((poke) => {
          return <h2>{poke.type.name}</h2>;
        })}
      </div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default PokeSingle;
