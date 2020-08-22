import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import TodoContainer from "../../components/TodoContainer";
import { CircularProgress } from "@material-ui/core";
import { TodoCreators } from "../../store/todo";
export default function Home() {
  const { todos, isLoading, error } = useSelector(
    (state: RootState) => state.todo
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TodoCreators.fetchTodos());
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
