import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Divider } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { executeOrder, getOrderById } from '~/api/orderApi';
import LoadingComponent from '~/components/Loading';

const DetailModal = ({ currentId, setIsModalOpen, executed }) => {
  const imgUrl = 'http://localhost:8080/files';
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(['orderDetail', currentId], () =>
    getOrderById(currentId)
  );

  console.log(executed);

  const execute = useMutation({
    mutationFn: executeOrder,
    onSuccess: () => {
      setIsModalOpen(false);
      queryClient.invalidateQueries(['allOrders']);
      toast.success('success_common');
    },
  });

  const handleExecute = () => {
    execute.mutate(currentId);
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="w-full pt-3">
      <div className="flex flex-col gap-8">
        {data.iteamsDTOList.map((item, i) => (
          <div className="flex gap-3" key={i}>
            <img src={`${imgUrl}/${item.product.productUrl}`} width={100} />
            <div className="text-lg w-full">
              <h2 className="font-semibold">{item.product.productName}</h2>
              <div className="flex justify-between w-full mt-2">
                <div>{`${t('quantity')}: ${item.quantity}`}</div>
                <div className="text-red-500">
                  {item.product.productLastPrice.toLocaleString()}đ
                </div>
              </div>
            </div>
          </div>
        ))}
        <Divider className="m-0" />
        <div className="text-end text-xl font-semibold">
          {t('total')}:{' '}
          <span className="text-red-500">
            {data.orderTotal.toLocaleString()}đ
          </span>
        </div>
        <div className="flex justify-end gap-3 text-white">
          <button
            className="ct-modal-btn bg-red-500"
            onClick={() => setIsModalOpen(false)}
          >
            {t('cancel_common')}
          </button>
          {!executed && (
            <>
              <button className="ct-modal-btn bg-blue-500">
                {t('reject_order')}
              </button>
              <button
                className="ct-modal-btn bg-green-500"
                onClick={handleExecute}
              >
                {t('execute_order')}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
