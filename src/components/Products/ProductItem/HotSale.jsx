import React from 'react';
import ProductItem from './ProductItem';

const HotSale = () => {
  return (
    <div className="inline-grid grid-cols-4 gap-10 mt-8">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default HotSale;
