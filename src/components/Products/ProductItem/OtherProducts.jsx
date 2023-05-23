import React from 'react';
import ProductWithPrice from './ProductWithPrice';

const OtherProducts = () => {
  return (
    <div className="mt-8">
      <h2 className="text-4xl mb-4 text-red-600">Khuyến mãi hot</h2>
      <div className="w-full p-5 rounded-xl inline-grid grid-cols-3 gap-8">
        <ProductWithPrice background={'bg-gray-custom'} />
        <ProductWithPrice background={'bg-gray-custom'} />
        <ProductWithPrice background={'bg-gray-custom'} />
        <ProductWithPrice background={'bg-gray-custom'} />
        <ProductWithPrice background={'bg-gray-custom'} />
        <ProductWithPrice background={'bg-gray-custom'} />
      </div>
    </div>
  );
};

export default OtherProducts;
