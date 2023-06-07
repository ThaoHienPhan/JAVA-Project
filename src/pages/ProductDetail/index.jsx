import { Checkbox, Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import productApi from '~/api/productApi';
import ProductWithPrice from '~/components/Products/ProductItem/ProductWithPrice';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CircularProgress } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addToCart } from '~/api/cartApi';

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  480: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
  1196: {
    slidesPerView: 5,
    spaceBetween: 10,
  },
};

const ProductDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const queryClient = useQueryClient();

  const imgUrl = 'http://localhost:8080/files';
  const { products } = useSelector(state => state.product);

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedRom, setSelectedRom] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const [suggestList, setSuggestList] = useState([]);

  const [appleCareChecked, setAppleCareChecked] = useState(false);

  useEffect(() => {
    setSelectedRom(0);
    setSelectedTab(0);
    setAppleCareChecked(false);
  }, [id]);

  useEffect(() => {
    getProductDetail(id);
  }, [products, loading]);

  const getProductDetail = async id => {
    try {
      const res = await productApi.getDetail(id);
      setProduct(res.data);
      setSuggestList(
        products.filter(
          prod => prod.type === res.data.type && prod.id !== res.data.id
        )
      );
      setLoading(false);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const mutation = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries(['userCart']);
    },
  });

  return loading ? (
    <div className="w-full flex justify-center items-center my-8">
      <CircularProgress color="secondary" />
    </div>
  ) : (
    <>
      <div className="p-3 w-full border-b-2 shadow font-bold">
        <div className="ml-8">{product.name}</div>
      </div>
      <div className="container-wrapper my-6">
        <div className="flex justify-center gap-8">
          <div>
            <img src={`${imgUrl}/${product.url}`} />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="text-[#F00101] text-xl">{t('new_product')}</div>
              <div className="font-bold text-2xl">{product.name}</div>
            </div>
            <div>
              <div>{t('choose_color')}</div>
              <div className="flex gap-4 mt-3">
                <div className="rounded-full p-4 bg-[#ABC8ED]"></div>
                <div className="rounded-full p-4 bg-[#EAE5E5]"></div>
                <div className="rounded-full p-4 bg-[#E7E8CC]"></div>
                <div className="rounded-full p-4 bg-[#4D4C4C]"></div>
              </div>
            </div>
            <div>
              <div>{t('choose_memory')}</div>
              <div className="flex justify-between mt-3 gap-3">
                {['128GB', '256GB', '512GB'].map((data, i) => (
                  <div
                    key={i}
                    className={`py-4 px-8 rounded-md border-black border cursor-pointer ${
                      selectedRom === i ? 'bg-blue-300' : ''
                    }`}
                    onClick={() => setSelectedRom(i)}
                  >
                    {data}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div>{t('check_apple_care')}</div>
              <div className="flex gap-3">
                <Checkbox
                  checked={appleCareChecked}
                  onChange={() => setAppleCareChecked(!appleCareChecked)}
                />{' '}
                Apple Care+ (4,750,000)
              </div>
            </div>
            <Divider className="bg-[#363636]/[0.83] my-4" />
            <div className="font-bold">
              {t('total')}:{' '}
              {appleCareChecked
                ? (product.lastPrice + 4750000)?.toLocaleString()
                : product.lastPrice?.toLocaleString()}
            </div>
            <div className="flex gap-3">
              <button
                className="p-3 bg-[#F8BF2D]/[.35] rounded-lg font-semibold"
                onClick={() => {
                  mutation.mutate({
                    productId: product.id,
                    quantity: 1,
                  });
                }}
              >
                {mutation.isLoading ? (
                  <div className=" w-36">
                    <CircularProgress
                      style={{ width: '18px', height: '18px' }}
                    />
                  </div>
                ) : (
                  t('add_cart')
                )}
              </button>
              <button className="p-3 bg-[#F8BF2D]/[.35] rounded-lg font-semibold">
                {t('buy_now')}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-3">
          {['description', 'detail_information'].map((data, i) => (
            <div
              key={i}
              className="relative font-bold"
              onClick={() => setSelectedTab(i)}
            >
              <div
                className={
                  selectedTab === i
                    ? 'ct-describe-product-selected'
                    : 'ct-describe-product'
                }
              >
                {t(data)}
              </div>
            </div>
          ))}
        </div>
        {selectedTab === 0 && <div className="mt-4">{product.describe}</div>}
        <div className="flex justify-center items-center mt-8 flex-col">
          <h3 className="font-bold text-2xl">{t('suggestion')}</h3>
          <div className="overflow-hidden rounded-xl flex flex-nowrap w-full">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={5}
              navigation={true}
              breakpoints={breakpoints}
            >
              {suggestList.length &&
                suggestList.map((prod, i) => (
                  <SwiperSlide key={`${prod.id}_${i}`}>
                    <div className="p-3">
                      <ProductWithPrice setLoading={setLoading} item={prod} />
                    </div>
                  </SwiperSlide>
                ))}
              ...
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
