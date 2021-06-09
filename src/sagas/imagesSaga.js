import { takeEvery, select, call, put } from "redux-saga/effects";
import { getImages } from "../api";
import {
  fetchImages,
  fetchImagesSuccess,
  fetchImagesFailure,
} from "../store/imageSlice";

export function* watchImagesLoad() {
  yield takeEvery(fetchImages.type, handleImagesLoad);
}

function* handleImagesLoad() {
  const page = yield select(getPage);
  try {
    const images = yield call(getImages, page);
    yield put(fetchImagesSuccess({ images }));
  } catch (error) {
    yield put(fetchImagesFailure({ errorMessage: error.toString() }));
  }
}

function getPage(state) {
  return state.imageData.nextPage;
}
