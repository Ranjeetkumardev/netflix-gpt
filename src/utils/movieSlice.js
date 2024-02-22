import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null, 
    topRatedMovies: null,
    tailerVideo: null,
  },
  reducers: {
    addnowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTailerVideos: (state, action) => {
      state.tailerVideo = action.payload;
    },
  },
});

export const {
  addnowPlayingMovies,
  addTailerVideos,
  addPopularMovies,
  addTopRatedMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;