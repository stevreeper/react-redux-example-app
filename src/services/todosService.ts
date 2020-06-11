import { Dispatch } from "redux";
import {
  fetchTodosBegin,
  fetchTodosSuccess,
  onTodoFailure,
} from "../store/todo/actions";
import api from "./api";

export function fetchTodos() {
  return (dispatch: Dispatch) => {
    dispatch(fetchTodosBegin());
    return api
      .get("todos")
      .then((response) => {
        dispatch(fetchTodosSuccess(response.data));
        return response.data;
      })
      .catch((e) => dispatch(onTodoFailure(e)));
  };
}
