import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "./imageSlice";

export default configureStore({
  reducer: { imageData: imagesReducer },
});
