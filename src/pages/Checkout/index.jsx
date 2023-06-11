import { yupResolver } from '@hookform/resolvers/yup';
import {
  TextField,
  Autocomplete,
  CircularProgress,
  Popper,
} from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Divider } from 'antd';
import moment from 'moment';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { getMyCart, makeOrderFromCart } from '~/api/cartApi';
import provinces from '~/assets/province';

const imgUrl = 'http://localhost:8080/files';

const CheckOut = () => {
  const { t } = useTranslation();

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

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(['userCart'], getMyCart, { retry: 1 });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler = data => {
    mutation.mutate({
      address: `${data.addressLine1} ${data.addressLine2} ${data.city}`,
      phoneNumber: data.phoneNumber,
      receiveName: `${data.firstname} ${data.lastname}`,
    });
    reset();
  };

  const mutation = useMutation({
    mutationFn: makeOrderFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries(['userOrder']);
      queryClient.invalidateQueries(['userCart']);
      navigate('/order/my');
    },
  });

  if (isLoading) {
    return (
      <div className="container-wrapper flex items-center justify-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="container-wrapper max-w-5xl">
      <div className="flex justify-center my-8 gap-8">
        <div className="w-3/5">
          <form
            className="flex flex-col gap-3 "
            onSubmit={handleSubmit(formSubmitHandler)}
          >
            <h4 className="text-xl font-semibold">{t('request_info')}</h4>
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
            <p className="text-red-500">{errors.addressLine1?.message}</p>

            <TextField
              label={t('address_line_2')}
              // defaultValue={userInfo.addressLine2}
              fullWidth
              variant="outlined"
              {...register('addressLine2')}
            />
            <p className="text-red-500">{errors.addressLine2?.message}</p>

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

            <h4 className="font-semibold text-lg">{t('contact_request')}</h4>
            <TextField
              className="mb-2"
              label={t('phone_number')}
              fullWidth
              variant="outlined"
              {...register('phoneNumber')}
            />
            <p className="text-red-500">{errors.phoneNumber?.message}</p>

            <button
              type="submit"
              className="w-100 bg-black text-white rounded-full py-3 px-4"
            >
              {t('order')}
            </button>
          </form>
        </div>
        <div className="w-2/5">
          <div className="">
            <div className="font-bold text-2xl">{t('summary')}</div>
            <div className="mt-6">
              <div className="flex justify-between">
                <h2>{t('subtotal')}</h2>
                <h2>{data?.total.toLocaleString()}đ</h2>
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
                <h2>{data?.total.toLocaleString()}đ</h2>
              </div>
            </div>
            <Divider />
            <div>
              <div className="font-bold text-lg flex justify-between">
                <h4>{t('arrives_day')}</h4>
                <h4>{moment().add(3, 'days').format('DD/MM/YYYY')}</h4>
              </div>
              <div className="flex flex-col gap-5 mt-5">
                {data.cartItemList.map((data, i) => (
                  <div key={`${data.productName}_${i}`}>
                    <div className="flex gap-3 justify-between">
                      <div className=" w-1/2">
                        <img
                          src={`${imgUrl}/${data.product.productUrl}`}
                          alt={''}
                          className="object-contain"
                        />
                      </div>
                      <div className="w-1/2">
                        <h4 className="font-semibold">
                          {data.product.productName}
                        </h4>
                        <p>{`${t('quantity')} ${data.quantity}`}</p>
                        <p>{data.total?.toLocaleString()}đ</p>
                      </div>
                    </div>
                    <Divider />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
