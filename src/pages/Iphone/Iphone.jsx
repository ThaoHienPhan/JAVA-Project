import React from 'react';

import Slider from 'assets/images/iphone_banner.jpg';
import OtherProducts from 'components/Products/ProductItem/OtherProducts';
import HotSale from 'components/Products/ProductItem/HotSale';
import BannerWithBtn from 'components/Products/ProductItem/BannerWithBtn';

const Iphone = () => {
  return (
    <div className="container-wrapper mb-6">
      <BannerWithBtn banner={Slider} />
      <HotSale />
      <OtherProducts />
    </div>
  );
};

export default Iphone;
