import React from 'react';
import Mac from 'assets/images/image 11.png';

const ProductItem = ({ item }) => {
  const imgUrl = 'http://localhost:8080/files/';
  return (
    <div className="flex flex-col flex-wrap items-center bg-[#ececec] p-5 rounded-lg">
      <img src={item ? `${imgUrl}${item.url}` : Mac} alt="" />
      <p className="mt-3 text-lg">{item.name || 'Mac'}</p>
    </div>
  );
};

export default ProductItem;
