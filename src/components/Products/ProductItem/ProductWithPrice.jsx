import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ProductWithPrice = ({ item }) => {
  const baseUrl = 'http://localhost:8080/files';
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div
      className={`product__price flex flex-col justify-between flex-nowrap items-center bg-white p-5 rounded-2xl ct-shadow cursor-pointer h-[350px] w-56 transform hover:scale-105 transition-all duration-300`}
      onClick={() => {
        navigate(`/product/detail/${item.id}`);
      }}
    >
      {item.discount > 0 && (
        <div className="product__price--discount">
          <p className="product__price--discount-detail">{`${t('sale_price')} ${
            item.discount
          }%`}</p>
        </div>
      )}
      <div>
        <img src={`${baseUrl}/${item.url}`} alt="" width={200} height={184} />
        <h2 className="mt-3 text-md font-semibold">{item.name}</h2>
      </div>
      <div className="relative w-full text-left flex justify-between">
        <span className="font-semibold text-red-600">{`${item.lastPrice.toLocaleString()}₫`}</span>
        {item.discount > 0 && (
          <span className="ml-3 line-through">{`${item.price.toLocaleString()}₫`}</span>
        )}
      </div>
    </div>
  );
};

export default ProductWithPrice;
