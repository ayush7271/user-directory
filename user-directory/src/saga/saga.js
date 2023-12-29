import { call, put, takeLatest } from "redux-saga/effects";
import Axios from "axios";
import {
  getUserDetailsFailure,
  getUserDetailsRequest,
  getUserDetailsSuccess,
} from "../slice/userListSlice";
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

function* saga() {
  yield takeLatest(getUserDetailsRequest, getUserDetailsRequestSaga);
}

export default saga;
