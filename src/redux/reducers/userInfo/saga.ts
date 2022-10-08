import { call, put, takeEvery } from "redux-saga/effects";
import {
  loadUserInfo,
  loadUserInfoFail,
  loadUserInfoSuccess,
} from "redux/reducers/userInfo/reducer";

import AuthApi from "api/authApi";

function* getUserInfo(action: any): any {
  try {
    const data = yield call(AuthApi.getUser);
    if (!data) {
      throw new Error("유저를 가져오지 못했습니다");
    }
    yield put(loadUserInfoSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(loadUserInfoFail());
  }
}

export function* watchUserInfo() {
  yield takeEvery("GET_USER_INFO", getUserInfo);
}
