import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import imagesReducer from "./imageSlice";
import rootSaga from "../sagas/rootSaga";
const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
const store = configureStore({
  reducer: { imageData: imagesReducer },
  middleware: middleware,
});

sagaMiddleware.run(rootSaga);

store.dispatch({ type: "HELLO", payload: "Hello Sagas!" });
export default store;
