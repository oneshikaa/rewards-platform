import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunks for API calls
export const earnPoints = createAsyncThunk(
  'rewards/earnPoints',
  async (amount) => {
    // In real app, this would be an API call
    return { points: amount };
  }
);

export const spendPoints = createAsyncThunk(
  'rewards/spendPoints',
  async (amount) => {
    // In real app, this would be an API call
    return { points: amount };
  }
);

const initialState = {
  points: 0,
  transactions: [],
  rewards: [
    { id: 1, name: 'Free Coffee', cost: 100, image: '/coffee.png' },
    { id: 2, name: 'Movie Ticket', cost: 500, image: '/movie.png' },
    { id: 3, name: '$50 Gift Card', cost: 1000, image: '/gift-card.png' },
  ],
  loading: false,
  error: null,
  recentAnimation: null,
};

const rewardsSlice = createSlice({
  name: 'rewards',
  initialState,
  reducers: {
    setRecentAnimation: (state, action) => {
      state.recentAnimation = action.payload;
    },
    clearRecentAnimation: (state) => {
      state.recentAnimation = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(earnPoints.pending, (state) => {
        state.loading = true;
      })
      .addCase(earnPoints.fulfilled, (state, action) => {
        state.loading = false;
        state.points += action.payload.points;
        state.transactions.push({
          id: Date.now(),
          type: 'earn',
          points: action.payload.points,
          date: new Date().toISOString(),
        });
        state.recentAnimation = {
          type: 'earn',
          points: action.payload.points,
        };
      })
      .addCase(spendPoints.fulfilled, (state, action) => {
        state.points -= action.payload.points;
        state.transactions.push({
          id: Date.now(),
          type: 'spend',
          points: action.payload.points,
          date: new Date().toISOString(),
        });
      });
  },
});

export const { setRecentAnimation, clearRecentAnimation } = rewardsSlice.actions;
export default rewardsSlice.reducer;