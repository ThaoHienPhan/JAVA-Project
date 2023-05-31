import React, { useEffect, useState } from 'react';

import Slider from 'assets/images/Mac slider.png';
import OtherProducts from 'components/Products/ProductItem/OtherProducts';
import HotSale from 'components/Products/ProductItem/HotSale';
import BannerWithBtn from 'components/Products/ProductItem/BannerWithBtn';
import productApi from '~/api/productApi';

const Mac = () => {
  const [macBookList, setMacBookList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await productApi.getType('MACBOOK');
      setMacBookList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-wrapper mb-6">
      <BannerWithBtn banner={Slider} />
      <HotSale product={macBookList} />
      <OtherProducts product={macBookList} />
    </div>
  );
};

export default Mac;
