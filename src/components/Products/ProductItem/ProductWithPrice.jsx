import React from 'react';
import { Typography } from '@mui/material';
import Mac from 'assets/images/image 11.png';

const ProductWithPrice = ({ background = '' }) => {
  return (
    <div
      className={`flex flex-col flex-wrap justify-center items-center ${background} p-5 rounded-lg drop-shadow-md`}
    >
      <img src={Mac} alt="" width={200} />
      <Typography>Mac</Typography>
      <div className="flex w-full justify-evenly">
        <button className="rounded-lg bg-[#c4c4c4]/[.68] py-1 px-2 text-sm">
          8GB
        </button>
        <button className="rounded-lg bg-[#FF8787] py-1 px-2 text-sm">
          16GB
        </button>
      </div>
      <div className="mt-3 relative w-full text-center">
        <span className="text-base text-red-500">33,500,000₫</span>
      </div>
    </div>
  );
};

export default ProductWithPrice;
