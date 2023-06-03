import React, { useEffect, useState } from "react";
import { getTypeDetail } from "../services/getTypeDetail";
import { useParams } from "react-router-dom";

const PokemonType = () => {
  const [pokemonType, setPokemonType] = useState();
  const param = useParams("type");

  useEffect(() => {
    const getPokemonTypeDetail = async () => {
      const data = await getTypeDetail(param.type);
      setPokemonType(data);
    };

    getPokemonTypeDetail();
  }, []);

  return <div>{console.log(pokemonType)}</div>;
};

export default PokemonType;
