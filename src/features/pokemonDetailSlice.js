import { createSlice } from "@reduxjs/toolkit";

const pokemonDetailSlice = createSlice({
  name: "pokemonDetail",
  initialState: {},
  reducers: {
    fetchPokemonDetailSuccess: (state, action) => {
      return action.payload;
    },
  },
});

export const { fetchPokemonDetailSuccess } = pokemonDetailSlice.actions;

export default pokemonDetailSlice.reducer;
