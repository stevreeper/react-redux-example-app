import { all, takeLatest } from "redux-saga/effects";
import { TodoTypes, fetchTodos } from "./todo/";

export function* rootSaga() {
  yield all([takeLatest(TodoTypes.FETCH_TODOS, fetchTodos)]);
}
