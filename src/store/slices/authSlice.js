import { createSlice } from '@reduxjs/toolkit';
import { login } from '~/api/authApi';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: !!localStorage.getItem('accessToken'),
    user: null,
    error: null,
  },
  reducers: {
    logout: state => {
      state.loggedIn = false;
      state.user = null;
      state.error = null;
      localStorage.removeItem('accessToken');
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true;
        state.loggedIn = false;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedIn = true;
        state.user = action.payload;
        localStorage.setItem('accessToken', action.payload?.accessToken);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.loggedIn = false;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
