import axiosInstance from "../axios";

export const getPokemonTypesList = async (pokemonList) => {
  try {
    const typeDataPromises = pokemonList.map(async (pokemon) => {
      const response = await axiosInstance.get(`/pokemon/${pokemon.name}`);
      return response.data.types[0].type.name;
    });
    const typeData = await Promise.all(typeDataPromises);
    const updatedPokemonList = pokemonList.map((pokemon, index) => ({
      ...pokemon,
      type: typeData[index],
    }));
    return updatedPokemonList;
  } catch (error) {
    console.log(error);
    return [];
  }
};
