import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from './axios';

const userApi = {
  getAll: createAsyncThunk('/api/user', async () => {
    const res = await axiosClient.get('/api/user');
    return res;
  }),
};

export default userApi;
