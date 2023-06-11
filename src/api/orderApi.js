import axiosClient from './axios';

const getMyOrder = async () => {
  return await axiosClient.get('/api/order/myorder');
};

const getOrderById = async id => {
  const res = await axiosClient.get(`/api/order/myorder/${id}`);
  return res;
};

const cancelOrder = async id => {
  return await axiosClient.put(`/api/order/myorder/cancel/${id}`, null);
};
export { getMyOrder, getOrderById, cancelOrder };
