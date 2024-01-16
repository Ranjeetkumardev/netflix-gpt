import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constrant";
import { addTailerVideos } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTailer = (movieId) => {
  // fetch tailer video
  const dispatch = useDispatch();
  const getMoviesVideos = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS);
    const json = await data.json();

    const filterData = json?.results?.filter((video) => video.type === "Trailer");
    const tailer = filterData?.length ? filterData[0] : json.results[0];
    dispatch(addTailerVideos(tailer));
  };
  useEffect(() => {
    getMoviesVideos();
  }, []);
};

export default useMovieTailer;
