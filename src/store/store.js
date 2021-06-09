import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import imagesReducer from "./imageSlice";
import imageStatsReducer from "./imageStatsSlice";
import rootSaga from "../sagas/rootSaga";
const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
const store = configureStore({
  reducer: { imageData: imagesReducer, imageStats: imageStatsReducer },
  middleware: middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
