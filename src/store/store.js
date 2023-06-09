import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import languageSlice from './slices/languageSlice';
import productSlice from './slices/productSlice';
import userSlice from './slices/userSlice';

const store = configureStore(
  {
    reducer: {
      auth: authSlice,
      language: languageSlice,
      product: productSlice,
      user: userSlice,
    },
  },
  applyMiddleware(thunk)
);

export default store;
