import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import TodoContainer from "../../components/TodoContainer";
import { TodoActions } from "../../store/todo/types";

export default function Home() {
  const todoState = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: TodoActions.SET_TODOS,
          payload: data,
        });
      });
  }, [dispatch]);

  return (
    <div>
      {todoState.todos.map((todo) => (
        <TodoContainer key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
