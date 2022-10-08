import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

import { rootReducer, rootSaga } from "redux/reducers";

const persistConfig: any = {
  key: "root",
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, rootReducer.userInfo);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [logger, sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
