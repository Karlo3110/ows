import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import PokemonDetail from "../pages/pokemonDetail";
import PokemonList from "../pages/pokemonList";
import PokemonType from "../pages/pokemonType";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pokedex" element={<PokemonList />} />
        <Route path="/pokedex/:id" element={<PokemonDetail />} />
        <Route path="/types/:type" element={<PokemonType />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
