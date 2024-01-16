import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayinMovies: null,
    tailerVideo : null
  },
  reducers: {
    addnowPlayinMovies: (state, action) => {
      state.nowPlayinMovies = action.payload;
    },
    addTailerVideos: (state, action) => {
      state.tailerVideo = action.payload;
    },
  },
});

export const { addnowPlayinMovies, addTailerVideos } = moviesSlice.actions;

export default moviesSlice.reducer;