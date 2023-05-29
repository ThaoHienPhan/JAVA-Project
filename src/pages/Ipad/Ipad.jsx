import React, { useEffect } from 'react';

import Slider from 'assets/images/banner-ipad.webp';
import OtherProducts from 'components/Products/ProductItem/OtherProducts';
import HotSale from 'components/Products/ProductItem/HotSale';
import BannerWithBtn from 'components/Products/ProductItem/BannerWithBtn';
import productApi from '~/api/productApi';

const Ipad = () => {
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await productApi.getType('IPAD');
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container-wrapper mb-6">
      <div className="w-full">
        <BannerWithBtn banner={Slider} />
      </div>
      <HotSale />
      <OtherProducts />
    </div>
  );
};

export default Ipad;
