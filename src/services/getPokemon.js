import axiosInstance from "../axios";

export const getPokemonList = async () => {
  try {
    const response = await axiosInstance.get("/pokemon/", {
      params: {
        limit: 20,
        offset: 0,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
