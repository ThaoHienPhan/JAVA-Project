import React, { useEffect, useState } from 'react';

import Slider from 'assets/images/iphone_banner.jpg';
import OtherProducts from 'components/Products/ProductItem/OtherProducts';
import HotSale from 'components/Products/ProductItem/HotSale';
import BannerWithBtn from 'components/Products/ProductItem/BannerWithBtn';
import productApi from 'api/productApi';

const Iphone = () => {
  const [iPhoneList, setIPhoneList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await productApi.getType('IPHONE');
      setIPhoneList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-wrapper mb-6">
      <BannerWithBtn banner={Slider} />
      <HotSale product={iPhoneList} />
      <OtherProducts product={iPhoneList} />
    </div>
  );
};

export default Iphone;
