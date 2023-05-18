import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  status: 'idle',
  error: null,
};

const URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      return isRejectedWithValue(error.response.data);
    }
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id === missionId) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id === missionId) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
