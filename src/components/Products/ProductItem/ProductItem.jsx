import React from 'react';
import { Typography } from '@mui/material';
import Mac from '~/assets/images/image 11.png';

const ProductItem = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center bg-[#ececec] p-5 rounded-lg">
      <img src={Mac} alt="" />
      <p className="mt-3 text-lg">Mac</p>
    </div>
  );
};

export default ProductItem;
