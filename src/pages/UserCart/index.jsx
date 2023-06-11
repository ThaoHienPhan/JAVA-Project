import { Close, DeleteOutline } from '@mui/icons-material';
import {
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Divider } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { getMyCart, updateCart } from '~/api/cartApi';

const UserCart = () => {
  const imgUrl = 'http://localhost:8080/files';
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(['userCart'], getMyCart, { retry: 1 });

  const mutation = useMutation({
    mutationFn: updateCart,
    onSuccess: () => {
      queryClient.invalidateQueries(['userCart']);
    },
  });

  const [appleCard, setAppleCard] = useState(true);

  return !localStorage.getItem('accessToken') ? (
    <div className="container-wrapper flex w-full justify-center text-2xl mt-8">
      {t('login_to_access')}
    </div>
  ) : (
    data && (
      <>
        <div className="container-wrapper min-h-0 mt-8">
          <h2 className="font-bold text-xl">{t('user_cart')}</h2>
          <p className="mt-3">{t('cart_ads')}</p>
        </div>
        <div className="container-wrapper my-8 flex gap-8 justify-between">
          <div className="w-2/3">
            <div
              className={`text-center bg-[#f2f2f2] p-4 relative hidden mb-8 ${
                appleCard && 'lg:block'
              }`}
            >
              {t('apple_card_ads')}{' '}
              <span className="text-blue-400 hover:underline cursor-pointer">
                {t('learn_more')}
              </span>
              <span
                className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setAppleCard(false)}
              >
                <Close />
              </span>
            </div>

            {localStorage.getItem('accessToken') && isLoading && (
              <div className="flex w-full justify-center">
                <CircularProgress />
              </div>
            )}
            {data?.cartItemList?.map((item, i) => (
              <div key={i}>
                {i !== 0 && <Divider />}
                <div className="flex gap-5">
                  <img
                    src={`${imgUrl}/${item.product.productUrl}`}
                    height={200}
                    width={200}
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between w-full h-fit items-center">
                        <h3 className="font-bold w-5/6">
                          {item.product.productName}
                        </h3>
                        <h3 className="font-bold w-1/5 text-end text-red-500">
                          {item.total?.toLocaleString()}đ
                        </h3>
                      </div>
                      <div className="mt-6 flex justify-between w-full h-fit items-center">
                        <Box className="w-1/5">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              {t('quantity')}
                            </InputLabel>
                            <Select
                              size="small"
                              value={item.quantity}
                              label={t('quantity')}
                              onChange={e => {
                                mutation.mutate({
                                  id: item?.id,
                                  quantity: e.target.value,
                                });
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
                        </Box>
                      </div>
                    </div>
                    <button className="text-start">
                      <DeleteOutline onClick={() => console.log(item)} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/3">
            <div className="font-bold text-2xl">{t('summary')}</div>
            <div className="mt-6">
              <div className="flex justify-between">
                <h2>{t('subtotal')}</h2>
                <h2>{data?.total.toLocaleString()}đ</h2>
              </div>
              <div className="flex justify-between mt-3">
                <h2 className="w-3/5">{t('delivery_handling')}</h2>
                <h2>Free</h2>
              </div>
            </div>
            <Divider />
            <div className="mt-6">
              <div className="flex justify-between">
                <h2>{t('total_price')}</h2>
                <h2>{data?.total.toLocaleString()}đ</h2>
              </div>
            </div>
            <Divider />
            <button
              className="rounded-full border-2 border-solid bg-black text-white w-full px-3 py-2 text-lg border-black"
              onClick={() => {
                data.cartItemList?.length > 0
                  ? navigate('/checkout')
                  : console.warn('Chua co gi');
              }}
            >
              {t('checkout')}
            </button>
          </div>
        </div>
      </>
    )
  );
};

export default UserCart;
