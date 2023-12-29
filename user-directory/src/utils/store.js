import saga from "../saga/saga.js";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(saga);
