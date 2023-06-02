import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from './axios';

const productApi = {
  getAll: createAsyncThunk('product/getAllProduct', async () => {
    const res = await axiosClient.get('/api/product');
    return res.data;
  }),
  getType(params) {
    const url = '/api/product/byType';
    return axiosClient.get(url, { params: { type: params } });
  },
  getDetail: id => {
    const url = `/api/product/${id}`;
    return axiosClient.get(url);
    // return res.data;
  },
};

export default productApi;
