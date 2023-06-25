import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import productApi from '~/api/productApi';
import ProductWithPrice from '~/components/Products/ProductItem/ProductWithPrice';

const ProductType = () => {
  const { type } = useParams();
  const navigate = useNavigate();
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
        sortedProducts = newData?.sort((a, b) => b?.price - a?.price);
        break;
      case 'low_to_high':
        sortedProducts = newData?.sort((a, b) => a?.price - b?.price);
        break;
      case 'hot_deals':
        sortedProducts = newData?.sort((a, b) => b?.discount - a?.discount);
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

  const options = [
    {
      value: 'ACCESSORIES',
      label: 'Accessories',
    },
    {
      value: 'AIRPODS',
      label: 'Airpods',
    },
    {
      value: 'IPAD',
      label: 'Ipad',
    },
    {
      value: 'IPHONE',
      label: 'Iphone',
    },
    {
      value: 'MACBOOK',
      label: 'Macbook',
    },
    {
      value: 'WATCH',
      label: 'Watch',
    },
  ];
  const handleChange = value => {
    navigate(`/product/type/${value}`);
  };

  return (
    <div className="container-wrapper my-8">
      <h3 className="font-bold text-xl">{t('sort_by')}</h3>
      <div className="flex justify-between items-center mt-3 flex-col md:flex-row gap-3 md:gap-0">
        <div className="flex gap-2 md:gap-5 md:flex-nowrap">
          {['high_to_low', 'low_to_high', 'hot_deals'].map((data, i) => (
            <button
              key={i}
              className={`ct-sort-btn ${
                sortType === data && '!bg-red-400'
              } text-sm sm:text-base md:text-lg hover:bg-gray-200`}
              onClick={() => handleSort(data)}
            >
              {t(data)}
            </button>
          ))}
        </div>
        <div className="w-full md:w-1/3">
          <Select
            defaultValue={type}
            onChange={handleChange}
            options={options}
            className="w-full"
          />
        </div>
      </div>
      <div className="mt-8 grid place-items-center grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-12 xl:gap-10 2xl:gap-4">
        {sortedData?.map((data, i) => (
          <ProductWithPrice key={i} item={data} />
        ))}
      </div>
    </div>
  );
};

export default ProductType;
