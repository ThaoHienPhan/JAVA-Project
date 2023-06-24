import { Checkbox, Divider, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import productApi from '~/api/productApi';
import ProductWithPrice from '~/components/Products/ProductItem/ProductWithPrice';
import payment_method from '../../assets/images/payment_method.jpg';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autocomplete,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Popper,
  Select,
  TextField,
} from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addToCart, buyNow } from '~/api/cartApi';
import { toast } from 'react-toastify';
import toastConfig from '~/assets/toastConfig';
import provinces from '~/assets/province';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import moment from 'moment';

const imgUrl = 'http://localhost:8080/files';

const ProductDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { products } = useSelector(state => state.product);
  const [product, setProduct] = useState({});
  const pathname = useLocation();

  const schema = yup
    .object({
      firstname: yup.string().required(t('name_request')),
      lastname: yup.string().required(t('name_request')),
      addressLine1: yup.string().required(t('address_1_request')),
      addressLine2: yup.string().required(t('address_2_request')),
      city: yup.string().required(t('city_request')),
      phoneNumber: yup.string().min(10).max(10).required(t('phone_request')),
    })
    .required();

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
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
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setSelectedRom(0);
    setSelectedTab(0);
    setAppleCareChecked(false);
  }, [id]);

  const addCart = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries(['userCart']);
      toast.success(t('add_cart_success'));
    },
  });

  const buyRightNow = useMutation({
    mutationFn: buyNow,
    onSuccess: () => {
      queryClient.invalidateQueries(['userCart']);
      toast.success(t('success_common'));
      setIsModalOpen(false);
    },
  });

  const formSubmitHandler = data => {
    buyRightNow.mutate({
      productId: product.productId,
      quantity: quantity,
      data: {
        address: `${data.addressLine1} ${data.addressLine2} ${data.city}`,
        phoneNumber: data.phoneNumber,
        receiveName: `${data.firstname} ${data.lastname}`,
      },
    });
    reset();
  };
  const [momoPayment, setMomoPayment] = useState(false);
  const handleChecked = e => {
    if (e.target.id === 'momo' && e.target.checked) {
      setMomoPayment(true);
    } else {
      setMomoPayment(false);
    }
  };

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
              <div className="font-bold text-2xl text-[#F00101] flex">
                {product?.productLastPrice?.toLocaleString()}đ
                <span className="ml-3 line-through text-gray-400 text-sm">
                  {product?.price?.toLocaleString()}đ
                </span>
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
                  addCart.mutate({
                    productId: product?.productId,
                    quantity: 1,
                  });
                }}
              >
                {addCart.isLoading ? (
                  <div className=" w-36">
                    <CircularProgress
                      style={{ width: '18px', height: '18px' }}
                    />
                  </div>
                ) : (
                  t('add_cart')
                )}
              </button>
              <button
                className="p-3 bg-[#F8BF2D]/[.35] rounded-lg font-semibold"
                onClick={handleOpen}
              >
                {t('buy_now')}
              </button>
              <Modal
                title={t('buy_now')}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                width={1000}
                centered
              >
                <div className="flex w-full gap-16">
                  <div className="w-3/5">
                    <form
                      className="flex flex-col gap-3 "
                      onSubmit={handleSubmit(formSubmitHandler)}
                    >
                      <h4 className="text-xl font-semibold">
                        {t('request_info')}
                      </h4>
                      <div className="flex justify-between gap-5">
                        {['firstname', 'lastname'].map((data, i) => (
                          <React.Fragment key={i}>
                            <div className="w-1/2">
                              <TextField
                                label={t(data)}
                                className="w-full"
                                variant="outlined"
                                {...register(data)}
                              />
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                      <p className="text-red-500">{errors.lastname?.message}</p>

                      <TextField
                        label={t('address_line_1')}
                        fullWidth
                        variant="outlined"
                        // defaultValue={userInfo.addressLine1}
                        {...register('addressLine1')}
                      />
                      <p className="text-red-500">
                        {errors.addressLine1?.message}
                      </p>

                      <TextField
                        label={t('address_line_2')}
                        // defaultValue={userInfo.addressLine2}
                        fullWidth
                        variant="outlined"
                        {...register('addressLine2')}
                      />
                      <p className="text-red-500">
                        {errors.addressLine2?.message}
                      </p>

                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={provinces}
                        className="max-h-[200px] w-full"
                        getOptionLabel={province => province.name}
                        renderInput={params => (
                          <TextField
                            {...params}
                            label={t('city')}
                            {...register('city')}
                          />
                        )}
                        PopperComponent={props => (
                          <Popper
                            {...props}
                            className=" max-h-3 z-10"
                            placement="bottom"
                          />
                        )}
                      />
                      <p className="text-red-500">{errors.city?.message}</p>

                      <h4 className="font-semibold text-lg">
                        {t('contact_request')}
                      </h4>
                      <TextField
                        className="mb-2"
                        label={t('phone_number')}
                        fullWidth
                        variant="outlined"
                        {...register('phoneNumber')}
                      />
                      <p className="text-red-500">
                        {errors.phoneNumber?.message}
                      </p>

                      <button
                        type="submit"
                        className="w-100 bg-black text-white rounded-full py-3 px-4"
                      >
                        {t('order')}
                      </button>
                    </form>
                  </div>
                  <div className="w-2/5">
                    <div className="font-bold text-2xl">{t('summary')}</div>
                    <div className="mt-6">
                      <div className="flex justify-between">
                        <h2>{t('subtotal')}</h2>
                        <h2>
                          {(
                            product?.productLastPrice * quantity
                          ).toLocaleString()}
                          đ
                        </h2>
                      </div>
                      <div className="flex justify-between mt-3">
                        <h2 className="w-3/5">{t('delivery_handling')}</h2>
                        <h2>{t('free')}</h2>
                      </div>
                    </div>
                    <Divider />
                    <div className="mt-6">
                      <div className="flex justify-between">
                        <h2>{t('total_price')}</h2>
                        <h2>
                          {(
                            product?.productLastPrice * quantity
                          ).toLocaleString()}
                          đ
                        </h2>
                      </div>
                    </div>
                    <Divider />
                    <div className="flex justify-between mt-6">
                      <p>{t('payment_method')}</p>
                      <div className="flex flex-col gap-[10px] mb-3">
                        <div className="flex gap-[5px] items-center">
                          <input
                            type="radio"
                            id="cod"
                            name="checkout_method"
                            value="COD"
                            defaultChecked
                            onChange={handleChecked}
                          />
                          <label htmlFor="cod">Ship COD</label>
                        </div>{' '}
                        <div className="flex gap-[5px] items-center">
                          <input
                            type="radio"
                            id="momo"
                            name="checkout_method"
                            value="MOMO"
                            onChange={handleChecked}
                          />
                          <label htmlFor="momo">Momo</label>
                        </div>
                      </div>
                    </div>
                    {momoPayment && (
                      <div>
                        <img
                          className="rounded-md"
                          src={payment_method}
                          alt="payment_method"
                        />
                      </div>
                    )}
                    <Divider />
                    <div>
                      <div className="font-bold text-lg flex justify-between">
                        <h4>{t('arrives_day')}</h4>
                        <h4>{moment().add(3, 'days').format('DD/MM/YYYY')}</h4>
                      </div>
                      <div className="flex flex-col gap-5 mt-5">
                        <div>
                          <div className="flex gap-3 justify-between">
                            <div className=" w-1/3">
                              <img
                                src={`${imgUrl}/${product?.productUrl}`}
                                alt={''}
                                className="object-contain w-2/3"
                              />
                            </div>
                            <div className="w-2/3">
                              <h4 className="font-semibold">
                                {product?.productName}
                              </h4>
                              <div className="my-3">
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">
                                    {t('quantity')}
                                  </InputLabel>
                                  <Select
                                    size="small"
                                    value={quantity}
                                    label={t('quantity')}
                                    onChange={e => {
                                      setQuantity(e.target.value);
                                    }}
                                  >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                                      (quantity, i) => (
                                        <MenuItem key={i} value={quantity}>
                                          {quantity}
                                        </MenuItem>
                                      )
                                    )}
                                  </Select>
                                </FormControl>
                              </div>
                              <h2>
                                {product?.productLastPrice.toLocaleString()}đ
                              </h2>
                            </div>
                          </div>
                          <Divider />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
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
