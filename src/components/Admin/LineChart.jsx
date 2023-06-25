import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { getAllOrder } from '~/api/orderApi';

const LineChart = () => {
  const { t } = useTranslation();
  const [mergedDates, setMergedDates] = useState([]);
  const [mergedOrderCounts, setMergedOrderCounts] = useState([]);
  const [timeRange, setTimeRange] = useState('day');
  const allOrders = useQuery(['allOrders'], getAllOrder);

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

  return <Line options={options} data={data} height={null} />;
};

export default LineChart;
