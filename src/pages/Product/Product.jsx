import React from 'react';

import OtherProducts from 'components/Products/ProductItem/OtherProducts';
import HotSale from 'components/Products/ProductItem/HotSale';
import BannerWithBtn from 'components/Products/ProductItem/BannerWithBtn';
import productApi from '~/api/productApi';
import { useLocation, useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

const Product = ({ product, slider }) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const { data, isLoading } = useQuery(['productsList', pathname], () =>
    productApi.getType(product)
  );

  console.log(data);

  const navigate = useNavigate();

  return isLoading ? (
    <div className="container-wrapper flex w-full justify-center my-8">
      <CircularProgress color="primary" />
    </div>
  ) : (
    <div className="container-wrapper mb-6">
      <BannerWithBtn banner={slider}/>
      <HotSale product={data} />
      <OtherProducts product={data} />
      <div
        className="flex justify-center w-full"
        onClick={() =>
          navigate(`/product/type/${product}`, { state: { type: product } })
        }
      >
        <button className=" ct-button !px-6">{t('see_more')}</button>
      </div>
    </div>
  );
};

export default Product;
