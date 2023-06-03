import axiosInstance from "../axios";

export const getPokemonDetail = async (pokemonName) => {
  try {
    const response = await axiosInstance.get(`/pokemon/${pokemonName}`);
    const { id } = response.data;
    const evolutionChainResponse = await axiosInstance.get(
      `/evolution-chain/${id}`
    );
    return {
      pokemonDetail: response.data,
      evolutionChain: evolutionChainResponse.data,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
