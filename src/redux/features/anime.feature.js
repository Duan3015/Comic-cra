import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAnime } from "../../service/animeService";

export const getAnimeById = createAsyncThunk(
  "anime/getAnimeById",
  async (id) => {
    const response = await getAnime(id);
    return response?.data;
  }
);
export const animeSlice = createSlice({
  name: "anime",
  initialState: {
    anime: "",
    loading: true,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAnimeById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAnimeById.fulfilled, (state, action) => {
        state.loading = false;
        state.anime = action.payload;
      });
  },
});

export default animeSlice.reducer;
