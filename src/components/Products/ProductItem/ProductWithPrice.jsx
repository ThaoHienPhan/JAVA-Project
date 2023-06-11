import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductWithPrice = ({ item }) => {
  const baseUrl = 'http://localhost:8080/files';
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col justify-between flex-nowrap items-center bg-white p-5 rounded-2xl ct-shadow cursor-pointer h-[350px] w-56`}
      onClick={() => {
        navigate(`/product/detail/${item.id}`);
      }}
    >
      <div>
        <img src={`${baseUrl}/${item.url}`} alt="" width={200} height={184} />
        <h2 className="mt-3 text-md font-semibold">{item.name}</h2>
      </div>
      <div className="relative w-full text-left flex justify-center">
        <span className="text-base text-red-500">{`${item.lastPrice.toLocaleString()}₫`}</span>
        <span className="ml-3 line-through">{`${item.price.toLocaleString()}₫`}</span>
      </div>
    </div>
  );
};

export default ProductWithPrice;
