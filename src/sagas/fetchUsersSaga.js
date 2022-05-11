/****************************************************************************
GENERATOR FUNCTIONS USED FROM REDUX SAGA... function*
NOTE: CAN'T BE USED WITH ARROW FUNCTIONS. 
******************************************************/
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import fetchGetUsersServices from "../services/fetchUsersServices";

function* handleGetUsers() {
  try {
    const users = yield call(fetchGetUsersServices);
    yield put({ type: "GET_USERS_SUCCESS", users: users });
  } catch (error) {
    yield put({ type: "GET_USERS_FAILED", message: error.message });
  }
}

export function* fetchUsersSaga() {
  yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
}
