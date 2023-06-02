import React from 'react';
import { useParams } from 'react-router-dom';

const ProductType = () => {
  const { type } = useParams();
  console.log(type);
  return <div>ProductType</div>;
};

export default ProductType;
