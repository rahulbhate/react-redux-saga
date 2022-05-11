import {
  call,
  put,
  takeEvery,
  takeLatest,
  delay,
  take,
  cancel,
} from "redux-saga/effects";

const getUserName = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await res.json();
  return result[0].name;
};
function* fetchUser() {
  try {
    const userName = yield call(getUserName);
    yield delay(5000);
    yield put({ type: "UPDATE_NAME_SUCCESS", payload: userName });
  } catch (e) {
    yield put({ type: "UPDATE_NAME_FAILED", message: e.message });
  }
}

export function* userSaga() {
  yield takeLatest("UPDATE_NAME", fetchUser);
  //yield take("UPDATE_NAME");
  //yield cancel("UPDATE_NAME");
}
