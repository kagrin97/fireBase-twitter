import { call, put, takeEvery } from "redux-saga/effects";

function* userInfo() {}

export function* watchUserInfo() {
  yield takeEvery("GET", userInfo);
}
