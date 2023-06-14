import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import productApi from '~/api/productApi';
import ProductWithPrice from '~/components/Products/ProductItem/ProductWithPrice';

const ProductType = () => {
  const { type } = useParams();
  const { t } = useTranslation();
  const { data, isLoading } = useQuery(['productsList', type], () =>
    productApi.getType(type)
  );
  const [sortedData, setSortedData] = useState([]);
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const handleSort = sortType => {
    setSortType(sortType);
    const newData = [...data];
    let sortedProducts = [];

    switch (sortType) {
      case 'high_to_low':
        sortedProducts = newData.sort((a, b) => b.price - a.price);
        break;
      case 'low_to_high':
        sortedProducts = newData.sort((a, b) => a.price - b.price);
        break;
      case 'hot_deals':
        sortedProducts = newData.sort((a, b) => b.discount - a.discount);
        break;
      default:
        break;
    }

    setSortedData(sortedProducts);
  };

  if (isLoading) {
    return (
      <div className="ontainer-wrapper my-8">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="container-wrapper my-8">
      <h3 className="font-bold text-xl">Sắp xếp theo</h3>
      <div className="flex gap-5 mt-3">
        {['high_to_low', 'low_to_high', 'hot_deals'].map((data, i) => (
          <button
            key={i}
            className={`ct-sort-btn ${sortType === data && '!bg-red-400'}`}
            onClick={() => handleSort(data)}
          >
            {t(data)}
          </button>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {sortedData?.map((data, i) => (
          <ProductWithPrice key={i} item={data} />
        ))}
      </div>
    </div>
  );
};

export default ProductType;
