import axiosClient from './axios';

const getMyCart = async () => {
  return await axiosClient.get('/api/cart/mycart');
};

const addToCart = async ({ productId, quantity }) => {
  return await axiosClient.post(`/api/cart/addToCart/${productId}`, null, {
    params: { quantity: quantity },
  });
};

const updateCart = async ({ productId, quantity }) => {
  return await axiosClient.put(`/api/cart/mycart/update/${productId}`, null, {
    params: { quantity: quantity },
  });
};

export { addToCart, getMyCart, updateCart };
