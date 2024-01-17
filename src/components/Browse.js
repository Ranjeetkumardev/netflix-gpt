import useNowPlayingMovies  from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from './mainContainer';
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies()
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </>
  );
};

export default Browse;
