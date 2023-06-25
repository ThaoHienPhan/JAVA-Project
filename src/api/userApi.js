import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from './axios';

const userApi = {
  getAll: createAsyncThunk('/api/user/allUser', async () => {
    const res = await axiosClient.get('/api/user/allUser');
    return res;
  }),

  getUserProfile: async () => {
    return await axiosClient.get('/api/user/myprofile');
  },

  switchRole: async ({ id, role }) => {
    return await axiosClient.put(`/api/user/update/role/${id}`, null, {
      params: { role: role },
    });
  },
};

export default userApi;
