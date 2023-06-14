import axiosClient from './axios';

const getMyCart = async () => {
  return await axiosClient.get('/api/cart/mycart');
};

const addToCart = async ({ productId, quantity }) => {
  return await axiosClient.post(`/api/cart/addToCart/${productId}`, null, {
    params: { quantity: quantity },
  });
};

const buyNow = async ({ productId, quantity, data }) => {
  return await axiosClient.post(`/api/order/muangay`, data, {
    params: { productId: productId, quantity: quantity },
  });
};

const updateCart = async ({ id, quantity }) => {
  return await axiosClient.put(`/api/cart/mycart/updateItems`, [
    {
      id,
      quantity,
    },
  ]);
};

const deleteItem = async id => {
  return await axiosClient.delete(`/api/cart/mycart/delete/${id}`);
};

const makeOrderFromCart = async ({ address, phoneNumber, receiveName }) => {
  return await axiosClient.post('/api/cart/mycart/makeorder', {
    address,
    phoneNumber,
    receiveName,
  });
};

export {
  addToCart,
  getMyCart,
  updateCart,
  makeOrderFromCart,
  deleteItem,
  buyNow,
};
