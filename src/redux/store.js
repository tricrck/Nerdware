import { configureStore } from '@reduxjs/toolkit';
import testimonialReducer from './slices/testimonialSlice';

export const store = configureStore({
  reducer: {
    testimonials: testimonialReducer,
    // Add more reducers here as needed
  },
});