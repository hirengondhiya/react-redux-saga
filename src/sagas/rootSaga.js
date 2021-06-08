import { takeEvery } from "redux-saga/effects";
import {
  fetchImages,
  fetchImagesSuccess,
  fetchImagesFailure,
} from "../store/imageSlice";

function* rootSaga() {
  yield takeEvery(fetchImages.type, handleImagesLoad);
}

function* handleImagesLoad() {
  yield console.log("Hello world from worker.");
}

export default rootSaga;
