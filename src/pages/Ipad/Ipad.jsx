import React, { useEffect, useState } from 'react';

import Slider from 'assets/images/banner-ipad.webp';
import OtherProducts from 'components/Products/ProductItem/OtherProducts';
import HotSale from 'components/Products/ProductItem/HotSale';
import BannerWithBtn from 'components/Products/ProductItem/BannerWithBtn';
import productApi from '~/api/productApi';

const Ipad = () => {
  const [iPadList, setIPadList] = useState([]);

  console.log(iPadList);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await productApi.getType('IPAD');
      setIPadList(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container-wrapper mb-6">
      <div className="w-full">
        <BannerWithBtn banner={Slider} />
      </div>
      <HotSale product={iPadList} />
      <OtherProducts product={iPadList} />
    </div>
  );
};

export default Ipad;
