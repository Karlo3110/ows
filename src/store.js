import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import pokemonDetailSlice from "./features/pokemonDetailSlice";
import pokemonListSlice from "./features/pokemonListSlice";

const rootReducer = combineReducers({
  pokemonList: pokemonListSlice,
  pokemonDetail: pokemonDetailSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
