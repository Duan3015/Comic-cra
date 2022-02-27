import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "./features/anime.feature";

export const store = configureStore({
  reducer: {
    anime: animeReducer,
  },
});
