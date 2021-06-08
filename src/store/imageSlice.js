import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  loading: false,
  errorMessage: "",
};

export const imageSlice = createSlice({
  name: "images",
  initialState: initialState,
  reducers: {
    fetchImages: (state) => {
      state.loading = true;
    },
    fetchImagesSuccess: (state, action) => {
      state.loading = false;
      state.errorMessage = "";
      state.images.push(action.payload.images);
    },
    fetchImagesFailure: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload.errorMessage;
    },
  },
});

export const { fetchImages, fetchImagesSuccess, fetchImagesFailure } =
  imageSlice.actions;

export default imageSlice.reducer;
