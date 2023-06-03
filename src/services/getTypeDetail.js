import axiosInstance from "../axios";

export const getTypeDetail = async (pokemonType) => {
  try {
    const response = await axiosInstance.get(`/type/${pokemonType}`, {});
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
