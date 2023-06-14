import { Checkbox, Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import productApi from '~/api/productApi';
import ProductWithPrice from '~/components/Products/ProductItem/ProductWithPrice';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CircularProgress } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addToCart } from '~/api/cartApi';
import { toast } from 'react-toastify';
import toastConfig from '~/assets/toastConfig';

const imgUrl = 'http://localhost:8080/files';

const ProductDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { products } = useSelector(state => state.product);
  const [product, setProduct] = useState({});
  const pathname = useLocation();

  const productData = useQuery(
    ['productDetail', products, pathname],
    () => productApi.getDetail(id),
    { staleTime: 0 }
  );

  const suggestProducts = useQuery(
    ['suggestList', product],
    () => productApi.getType(product?.type),
    { enabled: !!product, retry: 0, staleTime: 0 }
  );

  useEffect(() => {
    setProduct(productData.data);
  }, [productData]);

  const [selectedRom, setSelectedRom] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);

  const [breakpoints, setBreakPoints] = useState({
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1196: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  });

  useEffect(() => {
    setBreakPoints({
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
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1196: {
        slidesPerView:
          suggestProducts.data?.length < 5 ? suggestProducts.data?.length : 5,
        spaceBetween: 10,
      },
    });
  }, [suggestProducts.data]);

  const [appleCareChecked, setAppleCareChecked] = useState(false);

  useEffect(() => {
    setSelectedRom(0);
    setSelectedTab(0);
    setAppleCareChecked(false);
  }, [id]);

  const mutation = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries(['userCart']);
      toast.success(t('add_cart_success'));
    },
  });

  return productData.isLoading ? (
    <div className="w-full flex justify-center items-center my-8">
      <CircularProgress color="secondary" />
    </div>
  ) : (
    <>
      <div className="p-3 w-full border-b-2 shadow font-bold">
        <div className="ml-8">{product?.productName}</div>
      </div>
      <div className="container-wrapper my-6">
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="w-full md:w-2/5">
            <img
              src={`${imgUrl}/${product?.productUrl}`}
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-col gap-4 w-full md:w-2/5">
            <div>
              <div className="text-[#F00101] text-xl">{t('new_product')}</div>
              <div className="font-bold text-2xl">
                {product?.productLastPrice?.toLocaleString()}đ
              </div>
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
              <div className="grid grid-cols-2 md:flex justify-between mt-3 gap-3">
                {['128GB', '256GB', '512GB'].map((data, i) => (
                  <div
                    key={i}
                    className={`py-4 px-8 rounded-md border-black border-2 cursor-pointer border-solid text-center ${
                      selectedRom === i ? 'bg-blue-300' : ''
                    }`}
                    onClick={() => setSelectedRom(i)}
                  >
                    {data}
                  </div>
                ))}
              </div>
            </div>
            <Divider className="bg-[#363636]/[0.83] my-4" />
            <div className="font-bold">
              {t('total')}:{' '}
              {appleCareChecked
                ? (product?.productLastPrice + 4750000)?.toLocaleString()
                : product?.productLastPrice?.toLocaleString()}
              đ
            </div>
            <div className="flex gap-3">
              <button
                className="p-3 bg-[#F8BF2D]/[.35] rounded-lg font-semibold"
                onClick={() => {
                  mutation.mutate({
                    productId: product?.productId,
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
        {selectedTab === 0 && (
          <div className="mt-4">{product?.productDescribe}</div>
        )}
        <div className="flex justify-center items-center mt-8 flex-col">
          <h3 className="font-bold text-2xl">{t('suggestion')}</h3>
          <div className="overflow-hidden rounded-xl flex flex-nowrap w-full">
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={suggestProducts.data?.length}
              navigation={true}
              breakpoints={breakpoints}
            >
              {suggestProducts.isLoading ? (
                <CircularProgress />
              ) : (
                suggestProducts.data?.map((prod, i) => (
                  <SwiperSlide key={`${prod.id}_${i}`}>
                    <div className="">
                      <ProductWithPrice item={prod} />
                    </div>
                  </SwiperSlide>
                ))
              )}
              ...
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
