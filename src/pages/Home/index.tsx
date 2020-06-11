import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import TodoContainer from "../../components/TodoContainer";
import { fetchTodos } from "../../services/todosService";
import { CircularProgress } from "@material-ui/core";

export default function Home() {
  const { todos, isLoading, error } = useSelector(
    (state: RootState) => state.todo
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (isLoading) return <CircularProgress />;

  if (error) console.log(error);

  return (
    <>
      {todos.map((todo) => (
        <TodoContainer key={todo.id} todo={todo} />
      ))}
    </>
  );
}
