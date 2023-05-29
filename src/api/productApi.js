import axiosClient from './axios';

const productApi = {
  getAll() {
    const url = '/api/product';
    return axiosClient.get(url);
  },
  getType(params) {
    const url = '/api/product/byType';
    return axiosClient.get(url, { params: { type: params } });
  },
};

export default productApi;
