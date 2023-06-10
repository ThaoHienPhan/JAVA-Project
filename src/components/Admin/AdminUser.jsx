import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  aspectRatio: 3,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Total User Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Total User',
      data: labels.map(() => Math.round(Math.random() * 100)),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

AdminUser.propTypes = {};

function AdminUser(props) {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(userApi.getAll());
  }, []);
  console.log(users);
  return (
    <div className="flex flex-col items-center grow py-[30px] px-[20px]">
      <h1 className="text-3xl font-bold mb-4">User Statistics</h1>
      <div className="w-full flex justify-center">
        <Line options={options} data={data} height={null} />
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-3/4 mt-[30px]">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-r w-[50px]">STT</th>
              <th className="py-2 px-4 border-r">Username</th>
              <th className="py-2 px-4">Name</th>
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
