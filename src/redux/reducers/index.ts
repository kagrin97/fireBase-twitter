import { all } from "redux-saga/effects";

import userInfoReducer from "redux/reducers/userInfo/reducer";
import { watchUserInfo } from "redux/reducers/userInfo/saga";

export const rootReducer = {
  userInfo: userInfoReducer,
};

export function* rootSaga() {
  yield all([watchUserInfo()]);
}
