import React from 'react';
import AirpodBanner from 'assets/images/AP_Banner.png';
import BannerWithBtn from 'components/Products/ProductItem/BannerWithBtn';
import HotSale from 'components/Products/ProductItem/HotSale';
import OtherProducts from 'components/Products/ProductItem/OtherProducts';

const AirPods = () => {
  return (
    <div className="container-wrapper">
      <BannerWithBtn banner={AirpodBanner} />
      <HotSale />
      <OtherProducts />
    </div>
  );
};

export default AirPods;
