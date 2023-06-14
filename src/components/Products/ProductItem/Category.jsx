import React from 'react';
import Mac from 'assets/images/image 11.png';
import { useNavigate } from 'react-router-dom';

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col flex-wrap items-center bg-white p-5 rounded-lg cursor-pointer ct-shadow"
      onClick={() => navigate(`/${categories.name.toLowerCase()}`)}
    >
      {categories ? (
        <>
          <img src={categories ? categories.url : Mac} alt="" className="p-3" />
          <p className="mt-3 text-lg">{categories.name}</p>
        </>
      ) : null}
    </div>
  );
};

export default Category;
