import axiosClient from './axios';

const getAllOrder = async () => {
  return await axiosClient.get('/api/order/allOrder');
};

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

const executeOrder = async id => {
  return await axiosClient.put(`/api/order/execute/${id}`, null);
};
export { getMyOrder, getOrderById, cancelOrder, getAllOrder, executeOrder };
