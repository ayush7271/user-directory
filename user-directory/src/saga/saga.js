import { call, put, takeLatest } from "redux-saga/effects";
import Axios from "axios";
import {
  getUserDetailsFailure,
  getUserDetailsRequest,
  getUserDetailsSuccess,
} from "../slice/userListSlice";
import {
  getUserPostSliceFailure,
  getUserPostSliceRequest,
  getUserPostSliceSuccess,
} from "../slice/getUserPostSlice";
import {
  getCurrentTimeSliceFailure,
  getCurrentTimeSliceRequest,
  getCurrentTimeSliceSuccess,
} from "../slice/getCurrentTimeSlice";
import {
  getCountriesSliceFailure,
  getCountriesSliceRequest,
  getCountriesSliceSuccess,
} from "../slice/getCountriesSlice";
const callAPI = async ({ url, method, data, headers }) => {
  return await Axios({
    url,
    method,
    data,
    headers,
  });
};

export function* getUserDetailsRequestSaga() {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = yield call(() =>
      callAPI({
        url: `https://jsonplaceholder.typicode.com/users`,
        headers: headers,
      })
    );
    yield put(getUserDetailsSuccess({ data: response.data }));
  } catch (e) {
    yield put(getUserDetailsFailure());
  }
}

export function* getUserPostSliceRequestSaga() {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = yield call(() =>
      callAPI({
        url: `https://jsonplaceholder.typicode.com/posts`,
        headers: headers,
      })
    );
    yield put(getUserPostSliceSuccess({ data: response.data }));
  } catch (e) {
    yield put(getUserPostSliceFailure());
  }
}

export function* getCurrentTimeSliceRequestSaga() {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = yield call(() =>
      callAPI({
        url: `https://jsonplaceholder.typicode.com/users`,
        headers: headers,
      })
    );
    yield put(getCurrentTimeSliceSuccess({ data: response.data }));
  } catch (e) {
    yield put(getCurrentTimeSliceFailure());
  }
}

export function* getCountriesSliceRequestSaga() {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = yield call(() =>
      callAPI({
        url: `https://jsonplaceholder.typicode.com/posts`,
        headers: headers,
      })
    );
    yield put(getCountriesSliceSuccess({ data: response.data }));
  } catch (e) {
    yield put(getCountriesSliceFailure());
  }
}

function* saga() {
  yield takeLatest(getUserDetailsRequest, getUserDetailsRequestSaga);
  yield takeLatest(getUserPostSliceRequest, getUserPostSliceRequestSaga);
  yield takeLatest(getCurrentTimeSliceRequest, getCurrentTimeSliceRequestSaga);
  yield takeLatest(getCountriesSliceRequest, getCountriesSliceRequestSaga);
}

export default saga;
