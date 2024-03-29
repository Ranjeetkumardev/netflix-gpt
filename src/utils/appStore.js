import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";
import PopularMoviesReducer from "./movieSlice";
import TopRatedMoviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    popularMovies: PopularMoviesReducer,
    topRatedMovies: TopRatedMoviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
