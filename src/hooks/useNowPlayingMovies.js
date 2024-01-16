import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constrant";
import { addnowPlayinMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
      const dispatch = useDispatch();
      const getNowPlayingMovies = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          API_OPTIONS
        );
        const json = await data.json();
        dispatch(addnowPlayinMovies(json.results));
      };
      useEffect(() => {
        getNowPlayingMovies();
      }, []);
}

export default useNowPlayingMovies;