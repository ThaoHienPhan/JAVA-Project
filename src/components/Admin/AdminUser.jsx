import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userApi from '~/api/userApi';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useQuery } from '@tanstack/react-query';
import { getAllOrder } from '~/api/orderApi';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

AdminUser.propTypes = {};

function AdminUser() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { users } = useSelector(state => state.user);
  const allOrders = useQuery(['allOrders'], getAllOrder);

  useEffect(() => {
    dispatch(userApi.getAll());
  }, [!users]);

  const options = {
    responsive: true,
    aspectRatio: 3,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: t('order_by_day'),
      },
    },
  };

  const [mergedDates, setMergedDates] = useState([]);
  const [mergedOrderCounts, setMergedOrderCounts] = useState([]);

  useEffect(() => {
    const orderCounts = {};
    allOrders.data &&
      allOrders.data.forEach(item => {
        const date = moment(item.timestamp).format('DD/MM/YYYY');
        if (orderCounts[date]) {
          orderCounts[date]++;
        } else {
          orderCounts[date] = 1;
        }
      });

    const dates = Object.keys(orderCounts);
    const counts = Object.values(orderCounts);

    const mergedDates = [];
    const mergedOrderCounts = [];

    dates.forEach((date, index) => {
      const existingIndex = mergedDates.findIndex(mergedDate =>
        moment(mergedDate, 'DD/MM/YYYY').isSame(
          moment(date, 'DD/MM/YYYY'),
          'day'
        )
      );
      if (existingIndex === -1) {
        mergedDates.push(date);
        mergedOrderCounts.push(counts[index]);
      } else {
        mergedOrderCounts[existingIndex] += counts[index];
      }
    });

    setMergedDates(mergedDates);
    setMergedOrderCounts(mergedOrderCounts);
  }, [allOrders.data]);

  const data = {
    labels: mergedDates,
    datasets: [
      {
        label: t('orders'),
        data: mergedOrderCounts,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div className="flex flex-col items-center grow py-[30px] px-[20px]">
      <h1 className="text-3xl font-bold mb-4">{t('user_staticstics')}</h1>
      <div className="w-full flex justify-center">
        <Line options={options} data={data} height={null} />
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-3/4 mt-[30px]">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-r w-[50px]">STT</th>
              <th className="py-2 px-4 border-r">{t('username')}</th>
              <th className="py-2 px-4">{t('name')}</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={index % 2 === 0 ? 'bg-gray-100' : ''}
              >
                <td className="py-2 px-4 border-r text-center">{index + 1}</td>
                <td className="py-2 px-4 border-r">{user.username}</td>
                <td className="py-2 px-4">{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUser;
