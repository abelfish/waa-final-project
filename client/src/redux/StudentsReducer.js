import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = localStorage.getItem('token');

const getStudents = createAsyncThunk('students/get-students', async () => {
  const response = await axios.get('http://localhost:8080/students', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});
const addStudent = createAsyncThunk('students/add-student', async (student) => {
  const response = await axios.post('http://localhost:8080/students', student, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

const StudentsReducer = createSlice({
  name: 'students',
  initialState: {
    students: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStudents.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getStudents.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.students = state.students.concat(action.payload);
    });
    builder.addCase(getStudents.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    builder.addCase(addStudent.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(addStudent.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.students = state.students.concat(action.payload);
    });
    builder.addCase(addStudent.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default StudentsReducer.reducer;
export { getStudents, addStudent };
