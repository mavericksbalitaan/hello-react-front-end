import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import messageReducer from './messageSlice';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

export default store;
