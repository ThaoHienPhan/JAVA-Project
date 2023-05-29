import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';

const store = configureStore(
  {
    reducer: {
      auth: authSlice,
    },
  },
  applyMiddleware(thunk)
);

export default store;
