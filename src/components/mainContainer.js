import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './videoTitle';
import VideoBackground from './videoBackground';
const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayinMovies);
    if (!movies) return;
    const mainmovie = movies[2];
   console.log(mainmovie)
    const { original_title, overview ,id} = mainmovie;
   
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}

export default MainContainer