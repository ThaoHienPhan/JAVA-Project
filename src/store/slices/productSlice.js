// productSlice.js

import { createSlice } from '@reduxjs/toolkit';
import productApi from '~/api/productApi';

// Khởi tạo slice
const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    getAllProd: (state, action) => {
      state.products = action.payload;
    },
    // Các reducers khác nếu cần
  },
  extraReducers: builder => {
    // Xử lý action async
    builder
      .addCase(productApi.getAll.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productApi.getAll.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(productApi.getAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export các action và reducer
export const { getAllProd } = productSlice.actions;
export default productSlice.reducer;
