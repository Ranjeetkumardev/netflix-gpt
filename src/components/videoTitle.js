import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white  bg-gradient-to-r from-black">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4 h-1/4 overflow-hidden "> {overview}</p>
      <div className="my-5">
        <button className="mx-2 bg-white text-black  p-3  px-5 text-xl rounded-lg hover:bg-opacity-70">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-3  px-5 text-xl bg-opacity-80 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle
