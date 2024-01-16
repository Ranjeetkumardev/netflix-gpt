import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";

const Browse = () => { 
  useNowPlayingMovies();
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </>
  );
};

export default Browse;
