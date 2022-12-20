import { configureStore } from '@reduxjs/toolkit';
import TokenReducer from './TokenReducer';
import JobAdReducer from './JobAdReducer';
import userReducer from './userReducer';

const Store = configureStore({
  reducer: {
    TokenReducer: TokenReducer,
    JobAdReducer: JobAdReducer,
    UserReducer: userReducer,
  },
});

export default Store;
