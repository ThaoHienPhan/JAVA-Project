import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Modal, Table } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getAllOrder } from '~/api/orderApi';
import LoadingComponent from '~/components/Loading';
import DetailModal from './DetailModal';

const AdminOrders = () => {
  const allOrders = useQuery(['allOrders'], getAllOrder);
  const { t } = useTranslation();
  const imgUrl = 'http://localhost:8080/files';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState();
  const [executed, setExecuted] = useState();
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setColumns([
      {
        title: t('user'),
        dataIndex: 'userUserName',
        key: 'userUserName',
      },
      {
        title: t('receiver_name'),
        dataIndex: 'tenNguoiNhan',
        key: 'receiverName',
      },
      {
        title: t('phone_number'),
        dataIndex: 'soDienThoai',
        key: 'phoneNumber',
      },
      {
        title: t('address'),
        dataIndex: 'diaChi',
        key: 'address',
      },
      {
        title: t('order_time'),
        dataIndex: 'timestamp',
        key: 'timestamp',
        render: text => <p>{moment(text).format('DD/MM/YYYY')}</p>,
      },
      {
        title: 'Actions',
        key: 'id',
        render: (text, record) => (
          <>
            <button
              className="bg-blue-400 p-2 px-3 rounded-md text-white"
              onClick={() => showModal(record.id, record.execute)}
            >
              {t('detail')}
            </button>
          </>
        ),
      },
    ]);
  }, [allOrders.data]);

  const showModal = (id, execute) => {
    setCurrentId(id);
    setExecuted(execute);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log(allOrders.data);

  if (allOrders.isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="px-16 my-8 bg-[#fff9f9] w-full">
      <h2 className="text-xl font-semibold">Live order</h2>
      <div className="mt-8 flex justify-between items-center w-full gap-32">
        <div className="bg-white border-2 w-1/2 py-2 px-10">
          <div className="gap-5 rounded-md flex justify-between">
            <div className="h-full max-h-32 w-2/5">
              <img
                src={`${imgUrl}/shopping_bag.png`}
                alt="shopping-bag"
                className="h-full"
              />
            </div>
            <div className="font-bold text-xl w-3/5 flex flex-col justify-center">
              <div className="text-2xl">{allOrders.data.length}</div>
              <div className="text-gray-500">{t('orders')}</div>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 w-1/2 py-2 px-10">
          <div className="gap-5 rounded-md flex justify-between">
            <div className="h-full max-h-32 w-2/5">
              <img
                src={`${imgUrl}/pending.png`}
                alt="pending"
                className="h-full"
              />
            </div>
            <div className="font-bold text-xl w-3/5 flex flex-col justify-center">
              <div className="text-2xl">
                {allOrders.data.filter(data => data.execute === false).length}
              </div>
              <div className="text-gray-500">{t('pending')}</div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="mt-8 text-xl font-semibold">Orders</h2>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={allOrders.data.filter(
          item => item.tenNguoiNhan !== null && !!item.tenNguoiNhan.trim()
        )}
        pagination={{ hideOnSinglePage: true, pageSize: 5 }}
      />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        className="!w-3/5"
        centered
        footer={null}
      >
        <DetailModal
          currentId={currentId}
          setIsModalOpen={setIsModalOpen}
          executed={executed}
        />
      </Modal>
    </div>
  );
};

export default AdminOrders;