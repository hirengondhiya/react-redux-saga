import { call, fork, put, take } from "redux-saga/effects";
import { fetchImagesSuccess } from "../store/imageSlice";
import {
  fetchImageStats,
  fetchImageStatsFailure,
  fetchImageStatsSuccess,
} from "../store/imageStatsSlice";
import { getImageStats } from "../api";

export function* watchStatsRequest() {
  const {
    payload: { images },
  } = yield take(fetchImagesSuccess.type);

  for (let index = 0; index < images.length; index++) {
    const image = images[index];
    yield fork(handleStatRequests, image.id);
  }
}

function* handleStatRequests(imageId) {
  let error;
  for (let index = 0; index < 3; index++) {
    try {
      yield put(fetchImageStats({ imageId }));
      const res = yield call(getImageStats, imageId);
      yield put(
        fetchImageStatsSuccess({
          imageId,
          downloads: res.downloads.total,
        })
      );
      return;
    } catch (err) {
      error = err;
    }
  }
  yield put(
    fetchImageStatsFailure({ imageId, errorMessage: error.toString() })
  );
}
