import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const imageStatsSlice = createSlice({
  name: "imageStats",
  initialState: initialState,
  reducers: {
    fetchStats: (state, action) => {
      state[action.payload.imageId] = {
        loading: true,
        errorMessage: "",
        downloads: null,
      };
    },
    fetchImageStatsSuccess: (state, action) => {
      state[action.payload.imageId] = {
        loading: false,
        errorMessage: "",
        downloads: action.payload.downloads,
      };
    },
    fetchImageStatsFailure: (state, action) => {
      state[action.payload.imageId] = {
        loading: false,
        errorMessage: action.payload.errorMessage,
        downloads: null,
      };
    },
  },
});

export const {
  fetchImageStats,
  fetchImageStatsSuccess,
  fetchImageStatsFailure,
} = imageStatsSlice.actions;

export default imageStatsSlice.reducer;
