// productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import userApi from '~/api/userApi';

// Khởi tạo slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    getAllUser: (state, action) => {
      state.users = action.payload;
    },
    // Các reducers khác nếu cần
  },
  extraReducers: builder => {
    // Xử lý action async
    builder
      .addCase(userApi.getAll.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userApi.getAll.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(userApi.getAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export các action và reducer
export const { getAllUser } = userSlice.actions;
export default userSlice.reducer;
