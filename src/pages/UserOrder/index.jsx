import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { getMyOrder } from '~/api/orderApi';
import CollapseData from './CollapseData';
import { useTranslation } from 'react-i18next';
import { Collapse } from 'antd';
import { useSelector } from 'react-redux';
import LoadingComponent from '~/components/Loading';

const UserOrder = () => {
  const userOrder = useQuery(['userOrder'], getMyOrder);
  const { t } = useTranslation();
  const { language } = useSelector(state => state.language);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const mappedData = userOrder.data?.map(item => ({
      key: item.id,
      label: (
        <div className="flex gap-5">
          <p className="w-1/2">{`${item.tenNguoiNhan} - ${item.soDienThoai}`}</p>
          <div className="w-1/2">{`${t('address')}: ${item.diaChi}`}</div>
        </div>
      ),
      children: (
        <CollapseData
          itemId={item.id}
          cancel={item.cancel}
          execute={item.execute}
        />
      ),
    }));
    setOrders(mappedData);
  }, [userOrder.data, language]);

  const onChange = key => {
    console.log(key);
  };

  if (!localStorage.getItem('accessToken')) {
    return (
      <div className="container-wrapper text-center text-2xl mt-8">
        {t('login_to_access')}
      </div>
    );
  }

  if (userOrder.isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="container-wrapper my-8">
      <div>
        <div className="my-3">{t('orders')}</div>
        <Collapse items={orders} onChange={onChange} />
      </div>
    </div>
  );
};

export default UserOrder;
