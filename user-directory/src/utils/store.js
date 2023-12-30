import saga from "../saga/saga.js";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import getCountriesSlice from "../slice/getCountriesSlice.js";
import getCurrentTimeSlice from "../slice/getCurrentTimeSlice.js";
import getUserPostSlice from "../slice/getUserPostSlice.js";
import userListSlice from "../slice/userListSlice.js";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    country: getCountriesSlice,
    currentTime: getCurrentTimeSlice,
    userPost: getUserPostSlice,
    userSlice: userListSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(saga);
