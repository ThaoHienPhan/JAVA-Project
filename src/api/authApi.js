import { toast } from 'react-toastify';
import axiosClient from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { t } from 'i18next';

const authUrl = {
  loginUrl: '/auth/login',
  registerUrl: '/api/user/register',
};

export const login = createAsyncThunk(
  authUrl.loginUrl,
  async ({ username, password }) => {
    try {
      const response = await axiosClient.post(authUrl.loginUrl, {
        username,
        password,
      });
      localStorage.setItem('accessToken', response.accessToken);
      return response;
    } catch (error) {
      console.log(error.response.data.error);
      throw new Error(error.response.data.error);
    }
  }
);

export const register = createAsyncThunk(
  authUrl.registerUrl,
  async ({ username, password }) => {
    try {
      const res = await axiosClient.post(authUrl.registerUrl, {
        username,
        password,
      });
      toast.success(t('success_common'));
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }
);
