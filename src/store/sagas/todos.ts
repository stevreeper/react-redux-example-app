import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { fetchTodosSuccess, onTodoFailure } from "../todo/actions";

export function* fetchTodos() {
  try {
    const todos = yield call(async () => {
      const response = await api.get("todos");

      return response.data;
    });
    yield put(fetchTodosSuccess(todos));
  } catch (e) {
    yield put(onTodoFailure(e));
  }
}
