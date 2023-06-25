import { CircularProgress } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Divider } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { cancelOrder, getOrderById } from '~/api/orderApi';

const imgUrl = 'http://localhost:8080/files';

const CollapseData = ({ itemId, cancel, execute }) => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(
    ['orderDetails', itemId],
    () => getOrderById(itemId),
    {
      enabled: !!itemId,
      retry: 0,
    }
  );

  const mutation = useMutation({
    mutationFn: cancelOrder,
    onSuccess: () => {
      queryClient.invalidateQueries(['userOrder']);
      queryClient.invalidateQueries(['orderDetails']);
      toast.success(t('order_cancel_success'));
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
              src={`${imgUrl}/${data?.product.productUrl}`}
              width={150}
              height={150}
            />
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">
                  {data?.product.productName}
                </h3>
              </div>
              <div className="flex justify-between pt-3">
                <h3>{`${t('quantity')}: ${data?.quantity}`}</h3>
                <h3 className="text-red-500">
                  <span className="text-gray-500 line-through pr-2">
                    {(data?.product.price * data?.quantity).toLocaleString()}đ
                  </span>
                  {data?.orderItemtotal.toLocaleString()}đ
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
            {data?.orderTotal.toLocaleString()}đ
          </span>
        </div>
        {cancel && (
          <h3 className="text-red-500 font-semibold text-lg mt-3">
            {t('cancelled')}
          </h3>
        )}
        {execute && (
          <h3 className="text-green-500 font-semibold text-lg mt-3">
            {t('user_executed')}
          </h3>
        )}
        {!cancel && !execute && (
          <button
            className="mt-3 bg-red-500 p-3 rounded-sm text-white"
            onClick={() => {
              mutation.mutate(itemId);
            }}
          >
            {t('cancel_order')}
          </button>
        )}
      </div>
    </div>
  );
};

export default CollapseData;
