import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  messages: [],
  error: '',
};

// Generated pending, fulfilled and rejected action types
export const fetchMessages = createAsyncThunk('message/fetchMessages', () => axios.get('api/v1/messages').then((response) => response.data));

const messageSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.loading = false;
      state.messages = action.payload;
      state.error = '';
    });
    builder.addCase(fetchMessages.rejected, (state, action) => {
      state.loading = false;
      state.messages = [];
      state.error = action.error.message;
    });
  },
  /* eslint-enable no-param-reassign */
});

export default messageSlice.reducer;
