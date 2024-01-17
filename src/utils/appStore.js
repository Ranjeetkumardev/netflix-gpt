import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";
import PopularMoviesReducer from "./movieSlice";
import TopRatedMoviesReducer from "./movieSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    popularMovies: PopularMoviesReducer,
    topRatedMovies :TopRatedMoviesReducer
  },
});

export default appStore;
