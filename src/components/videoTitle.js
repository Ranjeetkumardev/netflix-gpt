import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className="w-screen aspect-video pt-[22%] md:pt-[15%] px-5 md:px-24 absolute text-white  bg-gradient-to-r from-black">
      <h1 className="text-xl font-bold ">{title}</h1>
      <p className=" hidden md:inline-block overflow-hidden py-6 text-lg w-1/4 h-1/4 ">
        {overview}
      </p>
      <div className="my-4 md:my-5 -ml-4">
        <button className="mx-2 bg-white text-black  p-3 py-2 md:px-5 text-xl rounded-lg hover:bg-opacity-70">
          ▶ Play
        </button>
        <button className=" hidden md:inline-block mx-2 bg-gray-500 text-white p-3  px-5 text-xl bg-opacity-80 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle
