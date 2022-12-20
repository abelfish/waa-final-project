import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import axios from 'axios';

const getJobs = createAsyncThunk('jobs/get-jobs', async () => {
  const token = useSelector((state) => state.TokenReducer.token);
  const response = await axios.get('http://localhost:8080/persons', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

const addJob = createAsyncThunk('jobs/add-job', async (JobAd) => {
  const token = useSelector((state) => state.TokenReducer.token);
  const response = await axios.post('http://localhost:8080/jobAds', JobAd, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});
const deleteJob = createAsyncThunk('jobs/delete-job', async (jobId) => {
  const token = useSelector((state) => state.TokenReducer.token);
  const response = await axios.delete('http://localhost:8080/persons' + jobId, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});
const updateJob = createAsyncThunk('jobs/update-job', async (job) => {
  const token = useSelector((state) => state.TokenReducer.token);
  const response = await axios.put(
    'http://localhost:8080/jobs/' + job.id,
    job,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
});
const getJob = createAsyncThunk('jobs/get-job', async (jobId) => {
  const token = useSelector((state) => state.TokenReducer.token);
  const response = await axios.get('http://localhost:8080/jobs/' + jobId, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

const JobAdReducer = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    addStatus: null,
    getStatus: null,
    updateStatus: null,
    deleteStatus: null,
  },
  reducers: {},
  extraReducers: {
    [getJobs.pending]: (state, action) => {
      state.getStatus = 'loading';
    },
    [getJobs.fulfilled]: (state, action) => {
      state.getStatus = 'succeeded';
      state.jobs = action.payload;
    },
    [getJobs.rejected]: (state, action) => {
      state.getStatus = 'failed';
    },
    [addJob.fulfilled]: (state, action) => {
      state.jobs.push(action.payload);
      state.addStatus = 'succeeded';
    },
    [addJob.rejected]: (state, action) => {
      state.addStatus = 'failed';
    },
    [addJob.pending]: (state, action) => {
      state.addStatus = 'loading';
    },

    [deleteJob.fulfilled]: (state, action) => {
      state.jobs = state.jobs.filter((job) => job.id !== action.payload.id);
      state.deleteStatus = 'succeeded';
    },
    [deleteJob.rejected]: (state, action) => {
      state.deleteStatus = 'failed';
    },
    [deleteJob.pending]: (state, action) => {
      state.deleteStatus = 'loading';
    },
    [updateJob.pending]: (state, action) => {
      state.updateStatus = 'loading';
    },
    [updateJob.rejected]: (state, action) => {
      state.updateStatus = 'failed';
    },
    [updateJob.fulfilled]: (state, action) => {
      const { id, title, description } = action.payload;
      const existingJob = state.jobs.find((job) => job.id === id);
      if (existingJob) {
        existingJob.title = title;
        existingJob.description = description;
      }
    },
    [getJob.pending]: (state, action) => {
      state.getStatus = 'loading';
    },
    [getJob.rejected]: (state, action) => {
      state.getStatus = 'failed';
    },
    [getJob.fulfilled]: (state, action) => {
      state.getStatus = 'succeeded';
    },
  },
});

export default JobAdReducer.reducer;
export { getJobs, addJob, deleteJob, updateJob, getJob };
