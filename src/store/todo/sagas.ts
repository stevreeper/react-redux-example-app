import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators } from "./reducer";

export function* fetchTodos() {
  try {
    const todos = yield call(async () => {
      const response = await api.get("todos");

      return response.data;
    });
    yield put(Creators.fetchTodosSuccess(todos));
  } catch (e) {
    yield put(Creators.fetchTodosFailure(e));
  }
}
