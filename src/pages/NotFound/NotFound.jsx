import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container-wrapper flex flex-col items-center">
      <img
        src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
        alt="not-found"
      />
      <button className="p-4 bg-blue-400 rounded-lg my-4 text-xl text-white">
        <Link to="/" className="m-4">
          Go Home
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
