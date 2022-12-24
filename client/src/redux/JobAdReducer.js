import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
    jobAds: [
      {
        id: 1,
        title: 'Frontend Developer',
        company: 'Google',
        location: 'New York',
        salary: '100k',
        imageUrl: 'https://picsum.photos/200',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
        tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
        user: {
          id: 2,
        },
      },
      {
        id: 2,
        title: 'Backend Developer',
        company: 'Facebook',
        location: 'New York',
        salary: '100k',
        imageUrl: 'https://picsum.photos/300',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
        tags: ['React', 'Node', 'Express', 'MongoDB'],
        user: {
          id: 1,
        },
      },
      {
        id: 3,
        title: 'Fullstack Developer',
        company: 'Amazon',
        location: 'Washington D.C.',
        salary: '100k',
        imageUrl: 'https://picsum.photos/400',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
        tags: ['MongoDB', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
        user: {
          id: 2,
        },
      },
      {
        id: 4,
        title: 'Frontend Developer',
        company: 'Google',
        location: 'San Francisco',
        salary: '100k',
        imageUrl: 'https://picsum.photos/320',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
        tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
        user: {
          id: 2,
        },
      },
      {
        id: 5,
        title: 'Backend Developer',
        company: 'Facebook',
        location: 'Seattle',
        salary: '100k',
        imageUrl: 'https://picsum.photos/670',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
        tags: ['React', 'Node', 'Express', 'MongoDB'],
        user: {
          id: 2,
        },
      },
      {
        id: 6,
        title: 'Fullstack Developer',
        company: 'Amazon',
        location: 'Portland',
        salary: '100k',
        imageUrl: 'https://picsum.photos/980',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
        tags: [
          'React',
          'Node',
          'Express',
          'MongoDB',
          'JavaScript',
          'HTML',
          'CSS',
          'Tailwind',
        ],
        user: {
          id: 2,
        },
      },
      {
        id: 7,
        title: 'Backend Developer',
        company: 'Facebook',
        location: 'Chicago',
        salary: '100k',
        imageUrl: 'https://picsum.photos/200',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
        tags: ['React', 'Node', 'Express', 'MongoDB'],
        user: {
          id: 2,
        },
      },
      {
        id: 8,
        title: 'Fullstack Developer',
        company: 'Amazon',
        location: 'Seattle',
        salary: '100k',
        imageUrl: 'https://picsum.photos/200',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
        tags: [
          'React',
          'Node',
          'Express',
          'MongoDB',
          'JavaScript',
          'HTML',
          'CSS',
          'Tailwind',
        ],
        user: {
          id: 2,
        },
      },
    ],
    addStatus: null,
    getStatus: null,
    updateStatus: null,
    deleteStatus: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getJobs.pending, (state, action) => {
        state.getStatus = 'loading';
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        state.getStatus = 'succeeded';
        state.jobs = action.payload;
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.getStatus = 'failed';
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload);
        state.addStatus = 'succeeded';
      })
      .addCase(addJob.rejected, (state, action) => {
        state.addStatus = 'failed';
      })
      .addCase(addJob.pending, (state, action) => {
        state.addStatus = 'loading';
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.filter((job) => job.id !== action.payload.id);
        state.deleteStatus = 'succeeded';
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.deleteStatus = 'failed';
      })
      .addCase(deleteJob.pending, (state, action) => {
        state.deleteStatus = 'loading';
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.map((job) => {
          if (job.id === action.payload.id) {
            return action.payload;
          }
          return job;
        });
        state.updateStatus = 'succeeded';
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.updateStatus = 'failed';
      })
      .addCase(updateJob.pending, (state, action) => {
        state.updateStatus = 'loading';
      })
      .addCase(getJob.fulfilled, (state, action) => {
        state.job = action.payload;
        state.getStatus = 'succeeded';
      })
      .addCase(getJob.rejected, (state, action) => {
        state.getStatus = 'failed';
      })
      .addCase(getJob.pending, (state, action) => {
        state.getStatus = 'loading';
      });
  },
});

export default JobAdReducer.reducer;
export { getJobs, addJob, deleteJob, updateJob, getJob };
