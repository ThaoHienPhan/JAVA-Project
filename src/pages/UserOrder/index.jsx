import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { getMyOrder } from '~/api/orderApi';
import CollapseData from './CollapseData';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Collapse } from 'antd';

const UserOrder = () => {
  const userOrder = useQuery(['userOrder'], getMyOrder);
  const { t } = useTranslation();

  const [orders, setOrders] = useState([]);

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const items = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <p>{text}</p>,
    },
  ];

  useEffect(() => {
    const mappedData = userOrder.data?.map(item => ({
      key: item.id,
      label: (
        <div className="flex gap-5">
          <p className="w-1/2">{`${item.tenNguoiNhan} - ${item.soDienThoai}`}</p>
          <div className="w-1/2">{`${t('address')}: ${item.diaChi}`}</div>
        </div>
      ),
      children: <CollapseData itemId={item.id} cancel={item.cancel} />,
    }));
    setOrders(mappedData);
  }, [userOrder.data]);

  console.log(userOrder.data);

  const onChange = key => {
    console.log(key);
  };

  return userOrder.isLoading ? (
    <CircularProgress />
  ) : (
    <div className="container-wrapper my-8">
      <div>
        <Collapse items={orders} onChange={onChange} />;
      </div>
    </div>
  );
};

export default UserOrder;
