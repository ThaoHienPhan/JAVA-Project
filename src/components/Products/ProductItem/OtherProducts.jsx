import React, { useEffect, useState } from 'react';
import ProductWithPrice from './ProductWithPrice';
import { useTranslation } from 'react-i18next';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const OtherProducts = ({ product }) => {
  const { t } = useTranslation();
  const [breakpoints, setBreakPoints] = useState({
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    960: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  });

  useEffect(() => {
    setBreakPoints({
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1196: {
        slidesPerView: product?.length < 4 ? product?.length : 4,
        spaceBetween: 20,
      },
      1296: {
        slidesPerView: product?.length < 5 ? product?.length : 5,
        spaceBetween: 20,
      },
    });
  }, [product]);
  return (
    <div className="mt-8">
      <h2 className="text-4xl mb-4 text-red-600">{t('hot_sales')}</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={product?.slice(0, 5).length}
        navigation={true}
        breakpoints={breakpoints}
      >
        {product?.slice(0, 5)?.map((prod, i) => (
          <SwiperSlide key={`${prod.id}_${i}`}>
            <ProductWithPrice item={prod} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OtherProducts;
