import { all } from "@redux-saga/core/effects";
import { watchImagesLoad } from "./imagesSaga";
import { watchStatsRequest } from "./imageStatsSaga";

function* rootSaga() {
  yield all([watchImagesLoad(), watchStatsRequest()]);
}

export default rootSaga;
