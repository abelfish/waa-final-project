import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const login = createAsyncThunk('user/login', async (user) => {
  const response = await Axios.post(
    'http://localhost:8090/realms/project-realm/protocol/openid-connect/token',
    user,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic c3ByaW5nYm9vdC1hcGk6N2ZjWFZaUzcxSE84Wk1qbTZJazM0b2lxUjczQnBBb2M=`,
      },
    }
  ).then((response) => {
    localStorage.setItem('token', response.data.access_token);
    localStorage.setItem('refresh_token', response.data.refresh_token);
    localStorage.setItem('expires_in', response.data.expires_in);
    localStorage.setItem('isLoggedIn', true);
  });
  return response.data;
});

const signup = createAsyncThunk('user/signup', async (user) => {
  const response = await Axios.post('http://localhost:8080/signup', user);
  return response.data;
});

const UserReducer = createSlice({
  name: 'user',
  initialState: {
    user: {},
  },
  status: 'idle',

  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(login.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(signup.pending, (state, action) => {
        state.status = 'loading';
      });
  },
});
export { login, signup };
export const { setUser } = UserReducer.actions;

export default UserReducer.reducer;
