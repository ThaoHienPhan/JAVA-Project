import { CircularProgress } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Divider } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { cancelOrder, getOrderById } from '~/api/orderApi';

const imgUrl = 'http://localhost:8080/files';

const CollapseData = ({ itemId, cancel }) => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(
    ['orderDetails', itemId],
    () => getOrderById(itemId),
    {
      staleTime: 5000000,
      cacheTime: 5000000,
      refetchOnWindowFocus: false,
      retry: 0,
    }
  );

  const mutation = useMutation({
    mutationFn: cancelOrder(itemId),
    onSuccess: () => {
      queryClient.invalidateQueries(['userOrder']);
      queryClient.invalidateQueries(['orderDetails']);
    },
  });

  return isLoading ? (
    <div className="flex w-full justify-center items-center">
      <CircularProgress />{' '}
    </div>
  ) : (
    <div className="px-5 py-3">
      {data?.iteamsDTOList?.map((data, i) => (
        <div key={i}>
          <div key={i} className="flex gap-5">
            <img
              src={`${imgUrl}/${data.product.productUrl}`}
              width={150}
              height={150}
            />
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">
                  {data.product.productName}
                </h3>
                {!!cancel && (
                  <h3 className="text-red-500 font-semibold text-lg">
                    {t('cancelled')}
                  </h3>
                )}
              </div>
              <div className="flex justify-between pt-3">
                <h3>{`${t('quantity')}: ${data.quantity}`}</h3>
                <h3 className="text-red-500">
                  <span className="text-gray-500 line-through pr-2">
                    {(data.product.price * data.quantity).toLocaleString()}đ
                  </span>
                  {data.orderItemtotal.toLocaleString()}đ
                </h3>
              </div>
            </div>
          </div>
          <Divider />
        </div>
      ))}
      <div className="w-full text-right">
        <div className="">
          {t('total')}
          {': '}
          <span className="text-red-500">
            {data.orderTotal.toLocaleString()}đ
          </span>
        </div>
        <button
          className="mt-3 bg-red-500 p-3 rounded-sm text-white"
          onClick={() => {
            mutation.mutate();
          }}
        >
          {t('cancel_order')}
        </button>
      </div>
    </div>
  );
};

export default CollapseData;
