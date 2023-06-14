import { CircularProgress } from '@mui/material';
import React from 'react';

const LoadingComponent = () => {
  return (
    <div className="container-wrapper flex items-center justify-center w-full">
      <CircularProgress />
    </div>
  );
};

export default LoadingComponent;
