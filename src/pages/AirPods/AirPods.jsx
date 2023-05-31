import React, { useEffect, useState } from 'react';
import AirpodBanner from 'assets/images/AP_Banner.png';
import BannerWithBtn from 'components/Products/ProductItem/BannerWithBtn';
import HotSale from 'components/Products/ProductItem/HotSale';
import OtherProducts from 'components/Products/ProductItem/OtherProducts';
import productApi from '~/api/productApi';

const AirPods = () => {
  const [airPodsList, setAirPodsList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await productApi.getType('MACBOOK');
      setAirPodsList(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container-wrapper">
      <BannerWithBtn banner={AirpodBanner} />
      <HotSale product={airPodsList} />
      <OtherProducts product={airPodsList} />
    </div>
  );
};

export default AirPods;
