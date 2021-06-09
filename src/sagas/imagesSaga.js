import { takeEvery, select, call, put } from "redux-saga/effects";
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

const key = "5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02";
async function getImages(page) {
  const res = await fetch(
    `https://api.unsplash.com/photos/?client_id=${key}&per_page=28&page=${page}`
  );
  const data = await res.json();
  if (res.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
}

function getPage(state) {
  return state.imageData.nextPage;
}
