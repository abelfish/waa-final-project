import { createSlice } from '@reduxjs/toolkit';

const TokenReducer = createSlice({
  name: 'token',
  initialState: {
    token: null,
    refreshToken: null,
    isLoggedIn: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    setLoggedInStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setToken, setRefreshToken, setLoggedInStatus } =
  TokenReducer.actions;
export default TokenReducer.reducer;
