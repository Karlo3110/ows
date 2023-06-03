import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import { getBackgroundColor } from "../assets/js/pokemonColors";
import "./index.css";
import { getPokemonList } from "../services/getPokemon";
import { getPokemonTypesList } from "../services/getPokemonTypesList";
import { getPokemonIdFromUrl } from "../services/getPokemonIdFromUrl";
import ParticleEffect from "../components/particleEffect";

const PokemonList = () => {
  const tiltRefs = useRef([]);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonList();
      setPokemonList(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchPokemonTypes = async () => {
      if (pokemonList.length > 0) {
        const updatedList = await getPokemonTypesList(pokemonList);
        setPokemonList(updatedList);
      }
    };

    fetchPokemonTypes();
  }, [pokemonList]);

  useEffect(() => {
    pokemonList.forEach((pokemon, index) => {
      if (tiltRefs.current[index]) {
        VanillaTilt.init(tiltRefs.current[index], {
          max: 10,
          speed: 200,
          glare: true,
          "max-glare": 0.6,
          scale: 1.1,
          reverse: true,
          perspective: 1000,
          gyroscope: true,
        });
      }
    });
  }, [pokemonList]);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200">
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <ParticleEffect />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {pokemonList !== null && pokemonList.length > 0 ? (
            pokemonList.map((pokemon, index) => (
              <Link
                to={`/pokedex/${pokemon.name}`}
                key={pokemon.name}
                ref={(el) => (tiltRefs.current[index] = el)}
                className="text-decoration-none m-3"
              >
                <div
                  className="pokemon-card card relative rounded-md shadow-lg overflow-hidden"
                  style={{
                    border: `4px solid white`,
                    background: getBackgroundColor(pokemon.type),
                  }}
                >
                  <div className="pokemon-image border-t-2 border-x-2 border-black">
                    <img
                      className="w-full h-full object-contain"
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonIdFromUrl(
                        pokemon.url
                      )}.png`}
                      alt={pokemon.name}
                    />
                  </div>
                  <div className="pokemon-details p-1 bg-white border-2 border-black">
                    <h2 className="text-xl font-bold text-center uppercase text-black text-decoration-none m-1">
                      {pokemon.name}
                    </h2>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
