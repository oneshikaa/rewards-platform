import { configureStore } from '@reduxjs/toolkit';
import rewardsReducer from './slices/rewardsSlice';

export const store = configureStore({
  reducer: {
    rewards: rewardsReducer,
  },
});