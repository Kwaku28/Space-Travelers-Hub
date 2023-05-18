import { createSlice } from '@reduxjs/toolkit';
import FetchApi from './Api';

const initialState = {
  rockets: [],
  rocketStatus: true,
  error: null,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    toggleRocketStatus: (state, action) => {
      const rocket = state.rockets.find((element) => element.RocketId === action.payload);
      if (rocket) {
        rocket.rocketStatus = !rocket.rocketStatus;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FetchApi.fulfilled, (state, action) => {
      state.rockets = action.payload;
    });
    builder.addCase(FetchApi.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const { toggleRocketStatus } = rocketsSlice.actions;
export default rocketsSlice.reducer;
