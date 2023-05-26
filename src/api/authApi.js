import { loginSuccess, loginFailure } from 'store/slices/authSlice';
import axiosClient from './axios';

export const login = (username, password) => {
  return async dispatch => {
    try {
      const response = await axiosClient.post('/auth/login', {
        username,
        password,
      });
      dispatch(loginSuccess(response.data));
      return response.data;
    } catch (error) {
      dispatch(loginFailure(error.message));
      throw error; // Ném lỗi để được xử lý bên ngoài
    }
  };
};
