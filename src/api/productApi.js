import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from './axios';

const productApi = {
  getAll: createAsyncThunk('product/getAllProduct', async () => {
    const res = await axiosClient.get('/api/product');
    return res;
  }),
  getAllProducts: async () => {
    const res = await axiosClient.get('/api/product');
    return res.data;
  },
  getType: async params => {
    const { data } = await axiosClient.get('/api/product/byType', {
      params: { type: params },
    });
    return data;
  },
  getDetail: id => {
    const url = `/api/product/${id}`;
    return axiosClient.get(url);
    // return res.data;
  },
};

export default productApi;
