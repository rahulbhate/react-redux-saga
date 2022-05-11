/****************************************************************************
GENERATOR FUNCTIONS USED FROM REDUX SAGA... function*
NOTE: CAN'T BE USED WITH ARROW FUNCTIONS. 
******************************************************/
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import fetchGetPostsServices from "../services/fetchPostsServices";

function* handleGetPosts() {
  try {
    const posts = yield call(fetchGetPostsServices);
    yield put({ type: "GET_POSTS_SUCCESS", posts: posts });
  } catch (error) {
    yield put({ type: "GET_POSTS_FAILED", message: error.message });
  }
}

export function* fetchPostsSaga() {
  yield takeLatest("GET_POSTS_REQUESTED", handleGetPosts);
}
