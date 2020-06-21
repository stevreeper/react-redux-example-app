import { all, takeLatest } from "redux-saga/effects";
import { TodoActions } from "../todo/types";
import { fetchTodos } from "./todos";

export function* rootSaga() {
  yield all([takeLatest(TodoActions.FETCH_TODOS, fetchTodos)]);
}
