import { fork, take } from "redux-saga/effects";
import { fetchImagesSuccess } from "../store/imageSlice";

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
  yield console.log({ imageId });
}
