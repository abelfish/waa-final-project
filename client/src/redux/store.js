import { configureStore } from '@reduxjs/toolkit';
import JobAdReducer from './JobAdReducer';
import StudentsReducer from './StudentsReducer';
import userReducer from './UserReducer';

const Store = configureStore({
  reducer: {
    
    JobAdReducer: JobAdReducer,
    UserReducer: userReducer,
  },
});

export default Store;
