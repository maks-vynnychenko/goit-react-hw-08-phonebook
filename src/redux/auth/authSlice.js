import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
} from 'redux/auth/operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
  },
  extraReducers: builder => {
    builder.addCase(registerUser.fulfilled, (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(loginUser.fulfilled, (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(logoutUser.fulfilled, state => {
      state.user = { name: null, email: null };
      state.token = '';
      state.isLoggedIn = false;
    });

    builder.addCase(refreshUser.fulfilled, (state, actions) => {
      state.user = actions.payload;
      state.isLoggedIn = true;
    });
  },
});

export default authSlice.reducer;
