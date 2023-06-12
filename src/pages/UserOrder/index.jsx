import { CircularProgress, Collapse } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment/moment';
import React, { useState } from 'react';
import { getMyOrder } from '~/api/orderApi';
import CollapseData from './CollapseData';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const UserOrder = () => {
  const userOrder = useQuery(['userOrder'], getMyOrder);
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState([]);

  const handleExpandClick = index => {
    setExpanded(prevExpanded => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  console.log(userOrder.data);
  return userOrder.isLoading ? (
    <CircularProgress />
  ) : (
    <div className="container-wrapper my-8">
      <div>
        {!!userOrder.data &&
          userOrder.data.map((item, index) => (
            <div key={item.id} className="shadow-lg">
              <div
                onClick={() => handleExpandClick(index)}
                className="w-full flex cursor-pointer p-5 justify-between items-center shadow-sm font-semibold"
              >
                <div className="w-1/4">
                  {`${index + 1}. ${item.tenNguoiNhan}`}
                </div>
                <div className="w-1/4">
                  {`${t('order_time')}: ${moment(item.timestamp).format(
                    'DD/MM/YYYY'
                  )}`}
                </div>
                <div className="w-1/4">{`${t('phone_number')}: ${
                  item.soDienThoai
                }`}</div>
                <div>{expanded[index] ? <ExpandLess /> : <ExpandMore />}</div>
              </div>
              <Collapse in={expanded[index]}>
                <CollapseData
                  itemId={item.id}
                  cancel={item.cancel}
                  expanded={expanded}
                />
              </Collapse>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserOrder;
