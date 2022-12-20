import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const login = createAsyncThunk('user/login', async (user) => {
  const response = await Axios.post('http://localhost:8080/login', user);
  return response.data;
});
const signup = createAsyncThunk('user/signup', async (user) => {
  const response = await Axios.post('http://localhost:8080/signup', user);
  return response.data;
});

const userReducer = createSlice({
  name: 'user',
  initialState: {
    user: {
      id: 1,
      username: 'testUser',
      email: 'test@email.com',
      role: 'STUDENT',
      firstName: 'First',
      lastName: 'Last',
      phone: '12345679',
      address: {
        street: 'Teststreet',
        city: 'Testcity',
        zip: '12345',
      },
      imageUrl: 'https://picsum.photos/200',
    },
    isLoggedIn: false,
    status: 'idle',
  },
  reducers: {
    setLoggedInStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },

  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.status = 'succeeded';
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.status = 'failed';
    },
    [login.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signup.fulfilled]: (state, action) => {
      state.status = 'succeeded';
    },
    [signup.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [signup.pending]: (state, action) => {
      state.status = 'loading';
    },
  },
});
export { login, signup };

export const { setLoggedInStatus } = userReducer.actions;
export default userReducer.reducer;
