import React, { useEffect, useState } from 'react';

import OtherProducts from 'components/Products/ProductItem/OtherProducts';
import HotSale from 'components/Products/ProductItem/HotSale';
import BannerWithBtn from 'components/Products/ProductItem/BannerWithBtn';
import productApi from 'api/productApi';
import { useLocation, useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const Product = ({ product, slider }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    getProducts();
  }, [pathname]);

  const getProducts = async () => {
    try {
      const res = await productApi.getType(product);
      setProductList(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  return loading ? (
    <div className="flex w-full justify-center my-8">
      <CircularProgress color="primary" />
    </div>
  ) : (
    <div className="container-wrapper mb-6">
      <BannerWithBtn banner={slider} />
      <HotSale product={productList} />
      <OtherProducts product={productList} />
      <div
        className="flex justify-center w-full"
        onClick={() => navigate(`/product/type/${product}`)}
      >
        <button className=" ct-button !px-6">Xem thêm</button>
      </div>
    </div>
  );
};

export default Product;
