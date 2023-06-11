import React from 'react';
import ProductItem from './ProductItem';

const HotSale = ({ product }) => {
  return (
    <div className="inline-grid grid-cols-4 gap-10 mt-8">
      {product?.slice(0, 4).map((prod, idx) => (
        <ProductItem key={`${prod.id}_${idx}`} item={prod} />
      ))}
    </div>
  );
};

export default HotSale;
