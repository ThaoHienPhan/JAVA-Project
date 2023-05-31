import axiosClient from './axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const login = (username, password) => {
//   return async dispatch => {
//     try {
//       const response = await axiosClient.post('/auth/login', {
//         username,
//         password,
//       });
//       dispatch(loginSuccess(response));
//       return response;
//     } catch (error) {
//       dispatch(loginFailure(error.response.data.error));
//       throw error; // Ném lỗi để được xử lý bên ngoài
//     }
//   };
// };

export const login = createAsyncThunk(
  '/auth/login',
  async ({ username, password }) => {
    try {
      const response = await axiosClient.post('/auth/login', {
        username,
        password,
      });
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
