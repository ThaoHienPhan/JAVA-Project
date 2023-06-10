import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from './axios';

const userApi = {
  getAll: createAsyncThunk('/api/user/allUser', async () => {
    const res = await axiosClient.get('/api/user/allUser');
    return res;
  }),
};

export default userApi;
