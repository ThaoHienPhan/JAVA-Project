import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from './axios';

const productApi = {
  getAll: createAsyncThunk('product/getAllProduct', async () => {
    const res = await axiosClient.get('/api/product/allproducts');
    return res;
  }),
  getAllProducts: async () => {
    return await axiosClient.get('/api/product/allproducts');
  },
  getProductsPage: async () => {
    const res = await axiosClient.get('/api/product');
    return res.data;
  },
  getType: async params => {
    const { data } = await axiosClient.get('/api/product/byType', {
      params: { type: params },
    });
    return data;
  },
  getDetail: async id => {
    const url = `/api/product/${id}`;
    const res = await axiosClient.get(url);
    return res.data;
  },
  searchProduct: async query => {
    const res = await axiosClient.get('/api/product/search', {
      params: { query: query },
    });
    return res.data;
  },
  updateProduct: async ({ id, data }) => {
    const res = await axiosClient.put(`/api/product/update/${id}`, data);
    return res.data;
  },
  addProduct: async ({ data }) => {
    const res = await axiosClient.post(`/api/product/add`, data);
    return res.data;
  },
  deleteProduct: async id => {
    return await axiosClient.delete(`/api/product/delete/${id}`);
  },
};

export default productApi;
