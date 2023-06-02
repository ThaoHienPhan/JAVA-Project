import React from 'react';
import Mac from 'assets/images/image 11.png';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ item }) => {
  const imgUrl = 'http://localhost:8080/files';
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col flex-wrap items-center bg-white p-5 rounded-lg cursor-pointer ct-shadow"
      onClick={() => navigate(`/product/detail/${item.id}`)}
    >
      {item ? (
        <>
          <img
            src={item ? `${imgUrl}/${item.url}` : Mac}
            alt=""
            className="p-3"
          />
          <p className="mt-3 text-lg">{item.name || 'Mac'}</p>
        </>
      ) : null}
    </div>
  );
};

export default ProductItem;
