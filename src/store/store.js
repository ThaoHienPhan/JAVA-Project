import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import languageSlice from './slices/languageSlice';
import productSlice from './slices/productSlice';

const store = configureStore(
  {
    reducer: {
      auth: authSlice,
      language: languageSlice,
      product: productSlice,
    },
  },
  applyMiddleware(thunk)
);

export default store;
